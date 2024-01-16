let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있게 되었습니다.
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true