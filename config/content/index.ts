import { Content } from "../../types"
import author from "../schema/author"
import blogpost from "../schema/blogpost"

const content: Content[] = [
  {
    name: "Blog Posts",
    firebasePath: "/blogposts",
    schema: blogpost
  },
  {
    name: "Authors",
    firebasePath: "/users",
    schema: author
  }
]

export default content