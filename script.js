const usher = document.querySelector(".usher"); //안내문
const email = document.querySelector(".email"); //이메일
const nickName = document.querySelector(".nickname"); //아이디
const passWord = document.querySelector(".password"); //입력 비밀번호
const confirmVal = document.querySelector(".confirm"); //확인 비밀번호
const createBtn = document.querySelector(".createBtn"); //계정 생성 버튼
const spareBtn = document.querySelector(".question"); 

// let confirmedResult = false; //비밀번호 확인결과값

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

    // const obj = {
    //     "pw" : passWord.value, 
    //     "cfp" : confirmVal.value,
    //     "tf":confirmedResult
    // }

    // function confirmPW() { //비밀번호 확인 처리
    if (passWord.value === confirmVal.value) {
            account.CheckPW = true;
            alert("Successfully created!");
            email.classList.add("hidden");
            confirmVal.classList.add("hidden");
            usher.innerText = "Please Login your account!";
            createBtn.innerText = "Log in";
            spareBtn.innerText = "Don't you have an account?";
    }else {
            alert("Check your PW");
    };
    console.log(account);
};

createBtn.addEventListener("click", getValue);