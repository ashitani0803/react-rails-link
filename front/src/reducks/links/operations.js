import { push } from "connected-react-router"
// import { createLinkAction } from "./actions"
import axios from "axios"
import { changeTabAction } from "./actions"

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
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const updateLink = (title, url, status, selectedTags, linkId) => {
    return async (dispatch) => {
        await axios
            .patch(`http://localhost:3000/links/${linkId}`, {
                id: linkId,
                link: {
                    title: title,
                    url: url,
                    status: status,
                    tag_ids: selectedTags,
                },
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const changeTab = (tabClass, tabName, tabIndex) => {
    const tabInfo = {
        tabInfo: { tabClass: tabClass, tabName: tabName, tabIndex: tabIndex },
    }

    return async (dispatch) => {
        dispatch(changeTabAction(tabInfo))
    }
}
