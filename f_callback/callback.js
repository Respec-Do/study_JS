// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log(name);
// };

// 위 두 함수가 같다. => arrow 표현이 더 빠르게 칠수있음.

// 두 정수의 덧셈 결과 출력

// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// };

// add(1, 5, (result) => {
//     console.log(result);
// });
//두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }
//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

//성과 이름을 전달받아서 풀네임을 만든뒤 "000님" 출력
// const fullName = (first_name, second_name) =>
//     console.log(first_name + second_name + "님");
// fullName("도", "강현");

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false
// 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제완료, false일 경우 결제 취소 출력
function getCountAndStatus(price, total, callback) {
    if (callback) {
        return callback(total / price);
    }
    return total / price;
}
