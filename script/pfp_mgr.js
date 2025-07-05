import { users, addDoc } from "./firebase-utils.js"

const image_input = document.getElementById("image_input");
const pfp = document.getElementById("pfp");
const finish = document.getElementById("finish");
const result = document.getElementById("result");
const nickname = document.getElementById("nickname");

function validateName(name) {
    return /^\\p{L}*$/.test(name);
}

pfp.addEventListener("click", () => {
    image_input.click();
})

image_input.addEventListener("change", (e) => {
    const file = image_input.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            pfp.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
})

finish.addEventListener("click", async () => {
    if (!validateName(nickname.value)) {
        return
    }

    try {
        await addDoc(users, {
            profile_picture: pfp.src,
            nickname: nickname.value
        });
    } catch (error) {
        result.value = "Erro: " + error.code;
    }
})