import { Schema } from "../../types"

export const blogpost: Schema = {
  name: "Blog Post",
  fields: [
    {
      id: "Title",
      displayName: "Title",
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

export default blogpost