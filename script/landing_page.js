import { auth } from './firebase-utils.js';

document.getElementById("mainbtn").addEventListener("click", () => {
    const currentUser = auth.currentUser;
    window.location.href = currentUser != null ? "avatar" : "login";
});