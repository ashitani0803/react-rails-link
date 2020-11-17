import React from "react"
import { Switch, Route } from "react-router"
import { LinkNew } from "./templates"

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/links/new"} component={LinkNew} />
        </Switch>
    )
}

export default Router
