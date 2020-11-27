import {
    compose,
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from "redux"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { LinksReducers } from "../links/reducers"
import { TagsReducers } from "../tags/reducers"
import persistState from "redux-localstorage"

export default function createStore(history) {
    return compose(persistState())(reduxCreateStore)(
        combineReducers({
            router: connectRouter(history),
            links: LinksReducers,
            tags: TagsReducers,
        }),
        applyMiddleware(routerMiddleware(history), thunk)
    )
}
