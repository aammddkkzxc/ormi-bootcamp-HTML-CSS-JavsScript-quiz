console.log('hello!');

// 함수 선언문
function sum(x, y){
    return x + y;
}

// 함수 표현식
let sumXY = function(x, y){
    return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));