function getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        return currentUser.name
    } else {
        return ""
    }
}