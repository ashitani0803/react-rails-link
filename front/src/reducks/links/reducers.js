import * as Actions from "./actions"
import initialState from "../store/initialState"

export const LinksReducers = (state = initialState.links, action) => {
    switch (action.type) {
        case Actions.CREATE_LINK:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
