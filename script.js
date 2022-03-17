const email = document.querySelector(".email"); //이메일
const nickName = document.querySelector(".nickname"); //아이디
const passWord = document.querySelector(".password"); //입력 비밀번호
const confirmVal = document.querySelector(".confirm"); //확인 비밀번호
const createBtn = document.querySelector(".createBtn"); //계정 생성 버튼

// let confirmedResult = false; //비밀번호 확인결과값

const getValue = () => { //계정 객체 생성
    const info1 = {Email: email.value};
    const info2 = {id: nickName.value};
    const info3 = {pw: passWord.value};
    const info4 = {check: false};
    
    const account = {
        ...info1, 
        ...info2,
        ...info3,
        ...info4
    };

    // const obj = {
    //     "pw" : passWord.value, 
    //     "cfp" : confirmVal.value,
    //     "tf":confirmedResult
    // }

    // function confirmPW() { //비밀번호 확인 처리
    if (passWord.value === confirmVal.value) {
            account.check = true;
            alert("Good");
    }else {
            alert("Check your PW");
    };
    console.log(account);
    // createBtn.addEventListener("click", confirmPW);
};


createBtn.addEventListener("click", getValue);