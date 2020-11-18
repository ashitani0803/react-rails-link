import React from "react"
import { Switch, Route } from "react-router"
import { LinkNew, LinkEdit } from "./templates"

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/links/new"} component={LinkNew} />
            <Route exact path={"/links/:id/edit"} component={LinkEdit} />
        </Switch>
    )
}

export default Router
