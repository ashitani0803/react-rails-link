import React from "react"
import { Switch, Route } from "react-router"
import { LinkNew, LinkEdit, LinkList, TagNew } from "./templates"

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LinkList}></Route>
            <Route exact path={"/links"} component={LinkList} />
            <Route exact path={"/links/new"} component={LinkNew} />
            <Route exact path={"/links/:id/edit"} component={LinkEdit} />
            <Route exact path={"/tags/new"} component={TagNew} />
        </Switch>
    )
}

export default Router
