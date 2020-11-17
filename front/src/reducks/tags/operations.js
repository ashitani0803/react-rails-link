import { push } from "connected-react-router"
import { fetchTagsAction } from "./actions"
import axios from "axios"

const url = "http://localhost:3000"

export const fetchTags = () => {
    return async (dispatch) => {
        axios
            .get("http://localhost:3000/tags")
            .then((res) => {
                console.log(res.data)
                dispatch(fetchTagsAction(res.data.tags))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
