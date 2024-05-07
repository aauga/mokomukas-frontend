import { Lesson } from "../../types/lesson";

export type AvailableLessons = {
  available?: Lesson[];
  started?: Lesson[];
  finished?: Lesson[];
};
