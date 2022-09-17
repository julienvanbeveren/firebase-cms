import { Content } from "../../types"
import blogpost from "../schema/blogpost"

const content: Content[] = [
  {
    name: "Blog Posts",
    firebasePath: "/blogposts",
    schema: blogpost
  }
]

export default content