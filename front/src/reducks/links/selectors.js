import { createSelector } from "reselect"

const linksSelector = (state) => state.links
export const getTabInfo = createSelector(
    [linksSelector],
    (state) => state.tabInfo
)
