import { Schema } from "./schema";

export interface Content {
  name: string,
  firebasePath: string,
  schema: Schema
}