export function logOut() {
    localStorage.setItem("currentUser", "")
    location.reload();
}