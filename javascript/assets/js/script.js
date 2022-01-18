//  결과보기 버튼을 클릭하면 경고창을 띄어주세요.
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.querySelector(".result div").classList.toggle("re");
    })
});
// document.querySelectorAll(".result").forEach(function(el){
//     el.addEventListener("click",function(){
//         alert("adf");
//         alert("왜안돼?");
//         el.classList.toggle("click");
//     });
// });
// document.querySelector(".result").addEventListener("click", ()=>{});