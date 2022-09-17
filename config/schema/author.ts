import { Schema } from "../../types"

export const author: Schema = {
  name: "Author",
  fields: [
    {
      id: "Name",
      displayName: "Name",
      type: "Single Line",
      validation: {
        validateFunc: (input) => {
          return input.length < 40
        },
        required: true,
        unique: true
      }
    }
  ]
}

export default author