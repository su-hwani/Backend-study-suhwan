import axios from 'axios';


// 비동기방식
function fetchPost() {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result) // -> pending
}

fetchPost();

// 동기방식
async function fetchPost2() {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result.data) // -> 실제 데이터 // result != result.data
  
}

fetchPost2();