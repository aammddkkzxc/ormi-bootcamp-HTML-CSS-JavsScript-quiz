const me = {
    name : '한재현',
    address : '제주도 제주시 인다 1길',
    phoneNum : '010-8000-0000',
    canWalk : function(){
        console.log('재현이가 걷는다.');
    },
    teaching : function(student){
        student.levelUp();
    }
}
const ormi = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}