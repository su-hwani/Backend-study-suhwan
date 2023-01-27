// index.js

// API 만들기
function createTokenOfPhone(myphone, count){
    if (myphone.length != 10 && myphone.length != 11){
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!')
        return 
    }
    if (count === undefined){
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!')
        return
    } else if(count > 10){
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!") 
        return
    } else if(count <= 0){
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
    }
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count,'0');
    console.log(result)

    console.log(myphone + ' 번호로 인증번호 ' + result + ' 를 전송합니다!!!')
}

// API 실행하기
createTokenOfPhone("01012345678", 6)