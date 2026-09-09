# 📋 Relatório de Auditoria Arquitetural — RECOMEÇO
**Tema:** Sistema de Contas, Autenticação e Persistência de Dados de Usuário  
**Data:** 2026-09-09  
**Status:** Análise Concluída — Aguardando Aprovação para Execução  

---

## 1. Contexto Geral

O **RECOMEÇO** é uma aplicação web espiritual católica desenvolvida em Next.js 16 (App Router), React 19, Tailwind CSS v4 e Lucide Icons, atualmente em produção na Vercel (`https://recomeco-three.vercel.app`).

A proposta de valor do projeto exige um equilíbrio muito cuidadoso:
1. **Acolhimento imediato sem barreiras:** o visitante precisa conseguir entrar, rezar, ler a liturgia, fazer a oração da manhã e utilizar o Modo Batalha de emergência espiritual sem que nenhum modal de cadastro bloqueie sua experiência.
2. **Perseverança e continuidade:** fiéis que decidem acompanhar a Trilha Mariana de 7 dias, registrar suas orações diárias, manter seu streak e vitórias espirituais precisam de uma conta real para acessar os mesmos dados no celular, no tablet ou no computador, sem correr o risco de perder tudo ao limpar o histórico do navegador.
3. **Identidade Mariana e Acolhedora no Perfil:** o perfil nunca deve parecer um painel administrativo ou corporativo genérico. Ele deve manter o tom de intimidade com Deus, devoção filial à Virgem Maria e foco em perseverança e conversão.

---

## 2. Diagnóstico Atual (Causa Raiz)

A auditoria completa da base de código revelou a seguinte situação técnica:

### 2.1. Onde e como os dados são armazenados atualmente
- **Mecanismo:** Todo o estado do usuário reside exclusivamente no navegador do cliente através de `localStorage` sob a chave `"recomeco_user_stats_v1"`, gerenciado pelo hook customizado `useUserStats` em `src/lib/hooks/useUserStats.ts`.
- **Estado Inicial Mockado:** O estado padrão (`defaultStats`) possui valores estáticos pré-preenchidos (`streakDays: 4`, `completedPrayersCount: 12`, `victoriesInBattle: 5`, `completedTrailDays: [1, 2]`).
- **Limitações:**
  - Se o usuário acessar o site por outro dispositivo (ex: abriu no celular após usar no computador), seu progresso não existe.
  - Se limpar os cookies/dados do navegador ou navegar em aba anônima, os dados desaparecem.
  - Não há identificação de quem é o usuário, e-mail, foto, nome de batismo ou preferências espirituais.

### 2.2. Existência de Banco de Dados
- **Status:** **NÃO EXISTE BANCO DE DADOS.**
- Não há Prisma, PostgreSQL, SQLite, Drizzle, MongoDB ou qualquer outro ORM/Driver instalado no `package.json`.
- Todas as leituras litúrgicas, orações, meditações e dados da trilha são constantes TypeScript estáticas (`src/lib/data/*.ts`).

### 2.3. Existência de Autenticação
- **Status:** **NÃO EXISTE SISTEMA DE AUTENTICAÇÃO.**
- A tela de perfil (`ProfileView.tsx`) renderiza um cabeçalho fixo com o nome `"Peregrino de Maria"` e a jaculatória `"Totus Tuus ego sum et omnia mea tua sunt"`.
- Não há fluxo de cadastro, login, logout, recuperação de senha, gerenciamento de sessão, cookies httpOnly ou tokens JWT.

---

## 3. Impacto das Limitações Atuais

| Área | Situação Atual | Impacto |
| :--- | :--- | :--- |
| **Persistência Multi-dispositivo** | Local (LocalStorage) | Impossível continuar a trilha ou manter a sequência diária alternando entre smartphone e desktop. |
| **Segurança e Privacidade** | Sem autenticação | Qualquer pessoa com acesso ao mesmo navegador visualiza os dados do usuário; impossibilidade de recuperação em caso de troca de aparelho. |
| **Monetização / Plus** | Booleano em memória (`isPlusSubscriber`) | Não é possível associar uma assinatura a um titular de conta real. |
| **Métricas Espirituais** | Valores mockados de fábrica | Dificulta a sensação de conquista real do usuário, pois já inicia com dados pré-populados artificiais. |

---

## 4. Respostas Objetivas aos 7 Itens da Auditoria

### Item 1 — Como os dados são armazenados atualmente
Exclusivamente no navegador via `window.localStorage` sob a chave `recomeco_user_stats_v1`. O hook `useUserStats` lê o dado após a hidratação e grava diretamente a cada ação (rezar, vitória em tentação, avançar na trilha).

### Item 2 — Se já existe banco de dados
Não. O projeto não possui banco de dados relacional ou não-relacional configurado.

### Item 3 — Se já existe autenticação
Não. Não há nenhuma camada de autenticação, rota de login, middleware de sessão ou provedor de identidade.

### Item 4 — Qual solução é recomendada e por quê
**Recomendação Técnica: Supabase Auth + Supabase PostgreSQL com `@supabase/ssr`**

**Justificativas Técnicas:**
1. **Compatibilidade Total com Next.js 16 (App Router) e Vercel:** O Supabase disponibiliza a biblioteca oficial `@supabase/ssr`, que lida com cookies httpOnly, Server Actions, Server Components e sincronização de token via Next.js Middleware de forma transparente.
2. **Autenticação Completa Out-of-the-Box:** Suporte nativo e pronto para:
   - Cadastro com e-mail e senha com validação;
   - Confirmação de e-mail e recuperação de senha segura (magic link ou token de redefinição);
   - Sessão persistente entre abas e dispositivos;
   - Exclusão de conta (LGPD / GDPR compliant);
   - Possibilidade imediata de ativar login com Google futuramente com 1 clique no painel.
3. **PostgreSQL com Row Level Security (RLS):** Segurança máxima no banco de dados. Cada usuário só consegue ler e atualizar o seu próprio perfil e as suas próprias estatísticas espirituais.
4. **Camada Gratuita Generosa:** O plano gratuito do Supabase comporta até 50.000 usuários ativos mensais e 500 MB de banco de dados, atendendo perfeitamente o crescimento do projeto sem custos.
5. **Arquitetura Híbrida (Visitante → Autenticado):**
   - **Visitante:** Utiliza normalmente o app; o estado continua salvo em `localStorage`.
   - **Conversão Silenciosa:** Ao decidir criar conta ou entrar, os dados locais do visitante podem ser automaticamente enviados e consolidados na conta recém-criada, sem perda do progresso feito como visitante.

### Item 5 — Quais arquivos serão modificados e criados

#### A) Arquivos Existentes a Modificar
- `src/lib/types/index.ts`:
  - Adicionar interfaces `UserProfile`, `UserAccount`, `AuthFormState`, `SessionState`.
- `src/lib/hooks/useUserStats.ts`:
  - Adaptar para operar em modo dual (visitante via `localStorage` e autenticado sincronizado com o Supabase).
  - Limpar os mocks de fábrica para que novos usuários iniciem com contadores limpos e fidedignos.
- `src/components/profile/ProfileView.tsx`:
  - Adaptar para exibir cartão de identificação real do fiel (nome, e-mail, data de início da caminhada mariana).
  - Se for visitante: exibir cartão acolhedor convidando a salvar sua caminhada com botões **"Criar minha conta"** e **"Entrar"**.
  - Se estiver autenticado: exibir opções de **"Editar Perfil"**, **"Segurança & Senha"**, **"Sair da Conta"** e **"Excluir Conta"**.
- `src/components/layout/Header.tsx`:
  - Adicionar indicador de perfil/login sutil ao lado do fogo da perseverança e do botão de socorro.
- `src/components/RecomecoApp.tsx`:
  - Envolver com o `AuthProvider` e orquestrar os modais de autenticação sem interromper a navegação das outras abas.

#### B) Novos Arquivos a Criar
- `src/lib/supabase/client.ts`: Inicialização do cliente Supabase para o navegador (`createBrowserClient`).
- `src/lib/supabase/server.ts`: Cliente seguro para Server Components e Server Actions (`createServerClient`).
- `src/lib/supabase/middleware.ts`: Middleware para atualização de cookies de sessão.
- `src/middleware.ts`: Integração com o pipeline de requisições do Next.js.
- `src/lib/context/AuthContext.tsx`: Provedor React com dados da sessão, usuário ativo, funções de `signIn`, `signUp`, `signOut`, `resetPassword`, `updateProfile` e `deleteAccount`.
- `src/components/auth/AuthModal.tsx`: Modal acolhedor com abas ("Entrar", "Criar Conta", "Recuperar Senha").
- `src/components/auth/EditProfileModal.tsx`: Modal mariano para edição de nome de exibição e devoção particular.
- `src/components/auth/DeleteAccountModal.tsx`: Modal com confirmação respeitosa para exclusão definitiva.
- `supabase/schema.sql`: Script SQL contendo a criação das tabelas, triggers de sincronização automática com `auth.users` e políticas de segurança RLS.

### Item 6 — Quais variáveis de ambiente serão necessárias
Para o desenvolvimento local (`.env.local`) e no painel de produção da Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://[SEU-PROJETO].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
```

*Nenhuma chave privada de serviço (`SERVICE_ROLE_KEY`) precisará ser exposta no frontend.*

### Item 7 — Código atual que precisará ser preservado ou adaptado

#### Código a ser 100% PRESERVADO:
- Todo o acervo de conteúdo católico em `src/lib/data/`:
  - `liturgy.ts` (Liturgia Diária, salmos, evangelho, homilias);
  - `prayers.ts` (Orações tradicionais, marianas, manhã e noite);
  - `marianCentral.ts` (Os 8 temas formativos de Nossa Senhora);
  - `marianTrail.ts` (A Trilha de 7 dias com Maria);
  - `rosary.ts` (Mistérios e meditações do Santo Rosário);
  - `battleData.ts` (Roteiro do Modo Batalha e jaculatórias).
- As telas `HomeView`, `WordView`, `PrayersView`, `RecomecoView` e `BattleModeModal`.
- A identidade visual mariana (paleta Azul Marinho `#0d1527`, Azul Mariano `#1e3a8a`, Dourado `#d4af37`, Creme `#fcfbf7` e tipografia sóbria).

#### Código a ser ADAPTADO:
- `useUserStats.ts`:
  - Manter a mesma interface de retorno (`stats`, `togglePrayerCompletion`, `completeTrailDay`, etc.) para não quebrar nenhum componente existente.
  - Internamente, desacoplar a obrigatoriedade de `localStorage`: se houver sessão autenticada, sincronizar com o banco de dados; se não houver, manter em `localStorage`.
- `ProfileView.tsx`:
  - O design visual dos cards de estatísticas (chama de perseverança, orações rezadas, vitórias em combate) será preservado, mas conectado aos dados reais do usuário logado ou do visitante atual.

---

## 5. Estrutura de Banco de Dados Sugerida (DDL PostgreSQL + RLS)

```sql
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  patron_saint text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.user_spiritual_stats (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  streak_days integer default 0 not null,
  completed_prayers_count integer default 0 not null,
  victories_in_battle integer default 0 not null,
  completed_trail_days integer[] default '{}' not null,
  completed_today_prayers text[] default '{}' not null,
  challenge_completed_today boolean default false not null,
  is_plus_subscriber boolean default false not null,
  last_activity_date date default current_date not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;
alter table public.user_spiritual_stats enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can view own spiritual stats" on public.user_spiritual_stats
  for select using (auth.uid() = user_id);

create policy "Users can update own spiritual stats" on public.user_spiritual_stats
  for update using (auth.uid() = user_id);

create policy "Users can insert own spiritual stats" on public.user_spiritual_stats
  for insert with check (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', 'Peregrino de Maria'));

  insert into public.user_spiritual_stats (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

---

## 6. Proposta de Código Tipado para os Novos Modelos

Estrutura limpa de tipos a ser integrada em `src/lib/types/index.ts` (sem comentários no código):

```typescript
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  patronSaint?: string;
  createdAt: string;
  isAnonymous: boolean;
}

export interface UserStats {
  streakDays: number;
  completedPrayersCount: number;
  victoriesInBattle: number;
  completedTrailDays: number[];
  completedTodayPrayers: string[];
  challengeCompletedToday: boolean;
  isPlusSubscriber: boolean;
  lastActivityDate?: string;
}

export type AuthMode = "login" | "register" | "forgot_password";
```

---

## 7. Próximos Passos Recomendados para Execução

1. **Criação do Projeto Supabase:** O usuário obtém a `URL` e a `ANON_KEY` gratuitas no painel do Supabase.
2. **Execução do Script SQL:** Rodar o DDL no SQL Editor do Supabase para provisionar as tabelas e o trigger automático de novos fiéis.
3. **Instalação das Dependências:** Executar via pnpm:
   ```bash
   pnpm add @supabase/supabase-js @supabase/ssr
   ```
4. **Implementação dos Clientes e Contexto:** Criar utilitários Supabase e `AuthContext`.
5. **Implementação da UI de Autenticação e Perfil:** Adicionar os modais acolhedores, suporte a visitantes e edição de perfil.
6. **Deploy na Vercel:** Configurar as duas variáveis de ambiente no dashboard da Vercel e publicar a nova versão.
