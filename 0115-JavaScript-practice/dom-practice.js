<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="../reset.css">
                    <style>
                    </style>
</head>

<body>
<!-- submit 의 기본 동작을 중지 -->
<h1>나의 todo list</h1>
<p>1. 오늘 저녁에는 부대찌게를 끓여 먹겠다.<button type="button">삭제</button></p>
<p>2. 후식으로 슈팅스타를 먹겠다.<button type="button">삭제</button></p>
<p>3. 자기 전에 반드시 내일 아침 메뉴를 생각해두겠다.<button type="button">삭제</button></p>
<script>
    const txts = document.querySelectorAll('p');
    txts.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        alert(event.target.childNodes[0].data);
    });
});

    const btns = document.querySelectorAll('button');
    btns.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        const reselt = confirm('삭제하시겠습니까?');
        event.stopPropagation();
        if(reselt){
            event.target.parentElement.remove();
        }
    });
})
</script>
</body>

</html>
</body>
</html>