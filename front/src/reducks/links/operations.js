import { push } from "connected-react-router"
// import { createLinkAction } from "./actions"
import axios from "axios"

export const createLink = (title, url, status, selectedTags) => {
    return async (dispatch) => {
        await axios
            .post("http://localhost:3000/links", {
                link: {
                    title: title,
                    url: url,
                    status: status,
                    tag_ids: selectedTags,
                },
            })
            .then((res) => {
                dispatch(push("/links"))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
