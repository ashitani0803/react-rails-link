export const CHANGE_TAB = "CHANGE_TAB"
export const changeTabAction = (tab) => {
    return {
        type: "CHANGE_TAB",
        payload: {
            tabClass: tab.tabInfo.tabClass,
            tabName: tab.tabInfo.tabName,
            tabIndex: tab.tabInfo.tabIndex,
        },
    }
}
