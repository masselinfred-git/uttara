import type {
  Accueil,
  APropo,
  CoordonneesSite,
  Document as PayloadDocument,
  Formation as PayloadFormation,
  Soin,
  Temoignage,
} from "@/payload-types";

export type PublicSoin = {
  id: Soin["id"];
  title: Soin["title"];
  eyebrow: string;
  description: Soin["description"];
  details?: Soin["details"];
  durations: NonNullable<Soin["durations"]>;
  image: string;
  order: Soin["order"];
  active: Soin["active"];
};

export type PublicFormation = {
  id: PayloadFormation["id"] | string;
  title: PayloadFormation["title"];
  shortTitle: string;
  eyebrow: string;
  description: PayloadFormation["description"];
  duration: string;
  hours?: string;
  price: string;
  objectives: string[];
  individual: boolean;
  maxParticipants?: number;
  accommodation?: string;
  documents: PublicDocument[];
  order: PayloadFormation["order"];
  active: PayloadFormation["active"];
};

export type PublicTestimonial = {
  id: Temoignage["id"] | string;
  name: Temoignage["name"];
  text: Temoignage["text"];
  context?: string;
  order: Temoignage["order"];
  active: Temoignage["active"];
};

export type PublicSiteCoordinates = {
  [Key in
    | "businessName"
    | "address"
    | "postalCode"
    | "city"
    | "phone"
    | "email"
    | "instagram"
    | "facebook"
    | "shopUrl"
    | "appointmentText"
    | "fundingText"]: NonNullable<CoordonneesSite[Key]>;
};

export type PublicHomeContent = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    text: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  care: {
    eyebrow: string;
    label: string;
    title: string;
    text: string;
  };
  immersive: {
    line1: string;
    line2: string;
    accent: string;
  };
  training: {
    eyebrow: string;
    label: string;
    title: string;
    text: string;
    items: NonNullable<Accueil["trainingItems"]>;
  };
  schedule: {
    eyebrow: string;
    title: string;
    text: string;
  };
  shop: {
    eyebrow: string;
    title: string;
    text: string;
    buttonLabel: string;
  };
};

export type PublicAboutContent = {
  displayName: NonNullable<APropo["displayName"]>;
  role: NonNullable<APropo["role"]>;
  primaryText: NonNullable<APropo["primaryText"]>;
  secondaryText: NonNullable<APropo["secondaryText"]>;
  photo: string;
};

export type PublicDocument = {
  id: PayloadDocument["id"];
  title: PayloadDocument["title"];
  description?: string;
  category: PayloadDocument["category"];
  version?: string;
  documentDate?: string;
  url: string;
  filename: string;
  mimeType?: string;
  fileType: "PDF" | "DOCX" | "XLSX" | "CSV" | "Fichier";
};
