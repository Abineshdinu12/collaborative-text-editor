import { v4 as uuidv4 } from "uuid"

const initialCode = ``

const initialFile = {
    id: uuidv4(),
    name: "welcome.txt",
    content: initialCode,
}

export default initialFile