const mention = document.querySelector(".mention"); //안내문
const email = document.querySelector(".email"); //이메일
const nickName = document.querySelector(".nickname"); //아이디
const passWord = document.querySelector(".password"); //입력 비밀번호
const confirmVal = document.querySelector(".confirm"); //확인 비밀번호
const createBtn = document.querySelector(".createBtn"); //계정 생성 버튼

const getValue = () => { //계정 객체 생성 
    const info1 = {Email: email.value};
    const info2 = {ID: nickName.value};
    const info3 = {PW: passWord.value};
    const info4 = {CheckPW: false};
    
    const account = {
        ...info1, 
        ...info2,
        ...info3,
        ...info4
    };
    console.log(account);

    if (passWord.value === confirmVal.value) {
            account.CheckPW = true;
            alert("Successfully created!");
    }else {
            alert("Check your PW");
    };
};

createBtn.addEventListener("click", getValue);