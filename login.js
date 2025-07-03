import { auth } from './auth.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

document.getElementById("login").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            alert("Login realizado!");
        })
        .catch((error) => {
            alert("Erro: " + error.message);
        });
});
