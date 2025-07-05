import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from './firebase-utils.js';

const email = document.getElementById("email");
const password = document.getElementById("password");
const forgot_password = document.getElementById("forgot_password");
const result = document.getElementById("result");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            window.location.href = "../plans";
        })
        .catch((error) => {
            switch(error.code) {
            case "auth/invalid-email":
                result.textContent = "E-mail inválido.";
                break;
            case "auth/user-not-found":
                result.textContent = `O usuário ${email.value} não existe.`;
                break;
            case "auth/missing-password":
                result.textContent = "Insira a senha."
            case "auth/invalid-credential":
                result.textContent = "Nome de usuário ou senha incorreto.";
                break;
            case "auth/too-many-requests":
                result.textContent = "Muitas tentativas. Tente novamente mais tarde.";
                break;
            default:
                result.textContent = "Erro: " + error.code;
                break;
        }
        });
});

password.addEventListener("focus", () => {
    forgot_password.style.display = "block";
});

forgot_password.addEventListener("click", async () => {
    if (!validateEmail(email.value)) {
        result.textContent = "E-mail inválido.";
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email.value);
        alert(`E-mail de redefinição enviado para ${email.value}.`);
    } catch (error) {
        if (error.code == "auth/invalid-email") {
            result.textContent = "E-mail inválido.";
        } else {
            result.textContent = "Erro ao tentar enviar e-mail: " + error.code;
        }
    }
});