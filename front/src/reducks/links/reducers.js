import * as Actions from "./actions"
import initialState from "../store/initialState"

export const LinksReducers = (state = initialState.links, action) => {
    switch (action.type) {
        case Actions.CHANGE_TAB:
            return {
                ...state,
                tabInfo: action.payload,
            }
        default:
            return state
    }
}
