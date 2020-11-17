export const FETCH_TAGS = "FETCH_TAGS"
export const fetchTagsAction = (tags) => {
    return { type: "FETCH_TAGS", payload: tags }
}
