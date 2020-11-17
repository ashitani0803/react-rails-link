import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from "redux"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { LinksReducers } from "../links/reducers"
import { TagsReducers } from "../tags/reducers"

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            links: LinksReducers,
            tags: TagsReducers,
        }),
        applyMiddleware(routerMiddleware(history), thunk)
    )
}
