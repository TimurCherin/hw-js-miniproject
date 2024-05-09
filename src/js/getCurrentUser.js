export function getCurrentUser() {
    if (localStorage.getItem("currentUser")) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        return currentUser.name
    } else {
        return ""
    }
}