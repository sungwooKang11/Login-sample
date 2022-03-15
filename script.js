const email = document.querySelector(".email");
const nickName = document.querySelector(".nickname");
const passWord = document.querySelector(".password");
const confirmVal = document.querySelector(".confirm");
const createBtn = document.querySelector(".createBtn");

const confirmedPW = "";

const getValue = () => {
    const info1 = {Email: email.value};
    const info2 = {id: nickName.value};
    const info3 = {pw: passWord.value};
    const info4 = {check: confirmedPW};

    const account = {
        ...info1, 
        ...info2,
        ...info3,
        ...info4
    };
    console.log(account);
};

const confirmPW = () => {
    if (passWord === confirmVal) {
        confirmedPW = "true";
    }else {
        confirmedPW = "false";
    }
}

createBtn.addEventListener("click", getValue);