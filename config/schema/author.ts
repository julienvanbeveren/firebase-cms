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
    },
    {
      id: "Age",
      displayName: "Age",
      type: "Number",
      validation: {
        validateFunc: (input) => {
          return input < 100 && input > 0
        },
        required: true,
      }
    }
  ]
}

export default author