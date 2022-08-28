let str = `
010-1234-5678.
hiwoong@gmail.com
https://www.omdbapi.com/?apiket=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닭도록
`
//생성자 방식
// const regexp = new RegExp('the','gi')

// 리터럴 방식
const regexp = /the/gi
console.log(str.match(regexp))

const regexp1 = /fox/gi
console.log(regexp1.test(str)) //True

str = str.replace(regexp1,'AAA') //문자를 대체
console.log(str)

console.log(str.match(/\.$/gim))

console.log(
    str.match(/d$/gm)
)

console.log(
    str.match(/^t/gim)
)

console.log(
    str.match(/h..p/g)
)
console.log(
    str.match(/fox|dog/g) //둘중에 먼저 찾아지는것이 반환
)
console.log(
    str.match(/https?/g) // s 가 있을수도있고 없을수도있는 문자반환
)

console.log(
    str.match(/d{2}/g)  // dd , dd 2개 반환
)
console.log(
    str.match(/d{2,}/g) // dddd 반환
)
console.log(
    str.match(/\b\w{2,3}\b/g)
)
console.log(
    str.match(/[fox]/g) // f , o , x 전부찾아서 배열로 출력
)
console.log(
    str.match(/[0-9]{1,}/g) // 연속되는 모든 숫자 배열로 출력
)
console.log(
    str.match(/[가-힣]{1,}/g) // 연속되는 모든 한글 배열로 출력
)
console.log(
    str.match(/\w/g) // 동해물_백두산
)

console.log(
    str.match(/\bf\w{1,}\b/g) // f로 시작하는 모든 일치하는 fox , frozen
)
console.log(
    str.match(/\d/g)  // 모든 숫자만 검색
)
console.log(
    str.match(/\d{1,}/g)  // ex 010 1234 5678
)

console.log(
    str.match(/\s/g) //모든 공백부분이 출력
)
const h = `  the hello  world  !

`
console.log(
    h.replace(/\s/g, '') // 모든 공백문자를 찾아서 붙여줌
)

const str1 = `
010-1234-5678
spchlcjfdnd@gmail.com
https://www.omdbapi.com/?apiket=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str1.match(/.{1,}(?=@)/g)  // hiwoong
)
console.log(
    str1.match(/(?<=@).{1,}/g) // gmail.com
)