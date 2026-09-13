export type TabType = "home" | "word" | "prayers" | "recomeco" | "profile" | "plus";

export interface LiturgyReading {
  title: string;
  reference: string;
  content: string;
}

export interface LiturgyDay {
  id?: string;
  dayOfWeek?: number;
  dayName?: string;
  shortName?: string;
  sundayReference?: string;
  date: string;
  liturgicalColor: string;
  celebrationTitle: string;
  firstReading: LiturgyReading;
  psalm: {
    reference: string;
    title?: string;
    versesReference?: string;
    response: string;
    verses: string[];
  };
  secondReading?: LiturgyReading;
  gospel: LiturgyReading;
  homily: {
    title: string;
    content: string;
    practicalApplication: string;
  };
  marianReflection: {
    title: string;
    content: string;
  };
}

export interface DailyMarianCard {
  quote: string;
  reflection: string;
  practicalAction: string;
}

export interface DailyMessage {
  source: string;
  reference: string;
  quote: string;
  reflection: string;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  virtue: string;
  scriptureReference: string;
}

export interface SaintOfDay {
  name: string;
  feastDate: string;
  title: string;
  biography: string;
  marianConnectionTitle: string;
  marianConnection: string;
  patronage: string;
}

export type PrayerCategory = "morning" | "night" | "traditional" | "marian";

export interface Prayer {
  id: string;
  title: string;
  subtitle: string;
  category: PrayerCategory;
  latinTitle?: string;
  text: string;
  explanation: string;
  suggestedMoment: string;
}

export interface MarianCentralTopic {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullContent: string;
  biblicalAnchor: string;
  applicationToYouth: string;
  aspiration: string;
}

export interface MarianTrailDay {
  day: number;
  themeTitle: string;
  themeSubtitle: string;
  scriptureReference: string;
  scriptureText: string;
  marianReflection: string;
  guidedPrayer: string;
  concreteAction: string;
}

export interface LiturgicalSolemnity {
  id: string;
  title: string;
  date: string;
  dayBadge: string;
  liturgicalGrade: string;
  isTransferred?: boolean;
  transferDetails?: string;
  spiritualMeaning: string;
  whatChurchCelebrates: string;
  howToLiveToday: string;
  prayer: string;
}

export interface MarianFeast extends LiturgicalSolemnity {
  whoIsMary?: string;
}


export type RosaryMysteryType = "gozosos" | "luminosos" | "dolorosos" | "gloriosos";

export interface MysteryDecade {
  number: number;
  title: string;
  scriptureText: string;
  fruitOfMystery: string;
  meditation: string;
}

export interface RosaryMysteryGroup {
  type: RosaryMysteryType;
  title: string;
  daysOfWeek: string;
  description: string;
  decades: MysteryDecade[];
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

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  patronSaint?: string;
  createdAt: string;
  updatedAt?: string;
  isAnonymous?: boolean;
}

export type AuthMode = "login" | "register" | "forgot_password";

export type BibleTestament = "AT" | "NT";

export type BibleCategory =
  | "pentateuco"
  | "historicos"
  | "sapienciais"
  | "profeticos"
  | "evangelhos"
  | "atos"
  | "cartas_paulinas"
  | "cartas_catolicas"
  | "apocalipse";

export interface BibleBook {
  id: string;
  name: string;
  shortName: string;
  abbreviation: string;
  testament: BibleTestament;
  category: BibleCategory;
  categoryLabel: string;
  totalChapters: number;
  isDeuterocanonical?: boolean;
  description: string;
}

export interface BibleVerse {
  number: number;
  text: string;
}

export interface BibleChapter {
  bookId: string;
  bookName: string;
  chapter: number;
  verses: BibleVerse[];
}

export interface BibleFavoriteVerse {
  id: string;
  bookId: string;
  bookName: string;
  chapter: number;
  verseNumber: number;
  text: string;
  savedAt: string;
}
