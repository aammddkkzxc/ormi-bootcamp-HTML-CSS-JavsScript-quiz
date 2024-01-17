const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_let = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('분야가 입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('시간이 입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(timeValue_let > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_let), 10);
        loading.style.display = 'none';
        result.style.display = 'flex';
    }, 1800);

}

function openModal() {
    modal.style.display = 'flex';
}
function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}


shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);