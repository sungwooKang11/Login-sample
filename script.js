const email = document.querySelector(".email");
const nickName = document.querySelector(".nickname");
const passWord = document.querySelector(".password");
const confirmVal = document.querySelector(".confirm");
const createBtn = document.querySelector(".createBtn");



const getValue = () => {
    const info1 = {Email: email.value};
    const info2 = {id: nickName.value};
    const info3 = {pw: passWord.value};
    const info4 = {check: confirmVal.value};

    const account = {
        ...info1, 
        ...info2,
        ...info3,
        ...info4
    };
    console.log(account);
};

createBtn.addEventListener("click", getValue);