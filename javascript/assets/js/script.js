//  결과보기 버튼을 클릭하면 경고창을 띄어주세요.
document.querySelectorAll(".result").forEach((el)=>{
    el.querySelector("h4").addEventListener("click", ()=>{
        el.querySelector("div").classList.toggle("active");
    })
});