const email = document.querySelector(".email");
const nickName = document.querySelector(".nickname");
const passWord = document.querySelector(".password");
const confirm = document.querySelector(".confirm");
const createBtn = document.querySelector(".createBtn");

const getValue = () => {
    console.log(email.value);
}

createBtn.addEventListener("click", getValue);