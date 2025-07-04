import { auth, signInWithEmailAndPassword } from './auth.js';

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
