import { auth, createUserWithEmailAndPassword, sendEmailVerification } from './firebase-utils.js';

const email = document.getElementById("email");
const password = document.getElementById("password");
const result = document.getElementById("result");

document.getElementById("create").addEventListener("click", (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;

            sendEmailVerification(user)
                .then(() => {
                    alert(`Enviamos um e-mail de verificação para ${email.value}. Verifique seu e-mail caso queira usar recursos pagos.`);
                })
                .catch((error) => {
                    alert("Erro ao enviar e-mail de verificação: " + error.message);
                });
        })
        .catch((error) => {
            switch(error.code) {
                case "auth/invalid-email":
                    result.textContent = "E-mail inválido.";
                    break;
                case "auth/missing-password":
                    result.textContent = "Insira a senha.";
                    break;
                case "auth/email-already-in-use":
                    result.textContent = "Este e-mail já está sendo usado.";
                    break;
                case "auth/weak-password":
                    result.textContent = "A senha é fraca demais.";
                    break;
                default:
                    result.textContent = "Erro: " + error.code;
                    break;
            }
        });
});