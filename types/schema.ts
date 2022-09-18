export interface Schema {
  name: string,
  fields: Field[]
}

type Field = StringField | NumberField

interface DefaultField {
  id: string,
  displayName: string,
  description?: string,
  validation?: Validation,
  interface?: {
    visible: boolean,
    width: number,
  }
}

interface Validation {
  required?: boolean,
  unique?: boolean,
}

interface StringField extends DefaultField {
  type: "Single Line" | "Multi Line" | "Markdown" | "Slug",
  validation: StringValidation
}

interface NumberField extends DefaultField {
  type: "Number",
  validation: NumberValidation
}

interface NumberValidation extends Validation {
  validateFunc?: (input: number) => boolean
}

interface StringValidation extends Validation {
  validateFunc?: (input: string) => boolean
}