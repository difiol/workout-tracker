import { UUID } from "crypto";

export interface Exercise {
  id: UUID;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
}
