import React from "react"
import axios from "axios"

export const createTag = (tagName) => {
    return async (dispatch) => {
        await axios
            .post("http://localhost:3000/tags", {
                tag: {
                    name: tagName,
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

export const updateTag = (tagName, tagId) => {
    return async (dispatch) => {
        await axios
            .patch(`http://localhost:3000/tags/${tagId}`, {
                tag: {
                    name: tagName,
                },
                id: tagId,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const destroyTag = (tagId) => {
    return async (dispatch) => {
        await axios
            .delete(`http://localhost:3000/tags/${tagId}`, {
                id: tagId,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
