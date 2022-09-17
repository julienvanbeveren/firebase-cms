export interface Schema {
  name: string,
  fields: Field[]
}

type Field = StringField

interface DefaultField {
  id: string,
  displayName: string,
  description?: string,
  validation?: Validation
}

interface Validation {
  required?: boolean,
  unique?: boolean,
  validateFunc?: (input: string) => boolean
}

interface StringField extends DefaultField {
  type: "Single Line" | "Multi Line" | "Markdown" | "Slug"
}