import type {
  Formation as PayloadFormation,
  Soin,
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
  order: PayloadFormation["order"];
  active: PayloadFormation["active"];
};
