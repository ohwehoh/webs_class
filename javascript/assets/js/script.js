//결과보기
//제목을 클릭했을 때 ~~~~~ 실행하라!
// document.querySelector(".result01t h4").addEventListener("click", function(){
//     //alert("클릭했음");
//     document.querySelector(".result01").style.display = "block";
// });

// document.querySelector(".result02t h4").addEventListener("click", function(){
//     document.querySelector(".result02").style.display = "block";
// });
// document.querySelector(".result03t h4").addEventListener("click", function(){
//     document.querySelector(".result03").style.display = "block";
// });
// document.querySelector(".result04t h4").addEventListener("click", function(){
//     document.querySelector(".result04").style.display = "block";
// });
// document.querySelector(".result05t h4").addEventListener("click", function(){
//     document.querySelector(".result05").style.display = "block";
// });
// document.querySelector(".result06t h4").addEventListener("click", function(){
//     document.querySelector(".result06").style.display = "block";
// });
// document.querySelector(".result07t h4").addEventListener("click", function(){
//     document.querySelector(".result07").style.display = "block";
// });
// document.querySelector(".result08t h4").addEventListener("click", function(){
//     document.querySelector(".result08").style.display = "block";
// });
// document.querySelector(".result09t h4").addEventListener("click", function(){
//     document.querySelector(".result09").style.display = "block";
// });
// document.querySelector(".result10t h4").addEventListener("click", function(){
//     document.querySelector(".result10").style.display = "block";
// });
// document.querySelector(".result11t h4").addEventListener("click", function(){
//     document.querySelector(".result11").style.display = "block";
// });
// document.querySelector(".result12t h4").addEventListener("click", function(){
//     document.querySelector(".result12").style.display = "block";
// });


// document.querySelector(".result13t h4").addEventListener("click", function(){
//     document.querySelector(".result13").style.display = "block";
// });
// document.querySelector(".result14t h4").addEventListener("click", function(){
//     document.querySelector(".result14").style.display = "block";
// });
// document.querySelector(".result15t h4").addEventListener("click", function(){
//     document.querySelector(".result15").style.display = "block";
// });
// document.querySelector(".result16t h4").addEventListener("click", function(){
//     document.querySelector(".result16").style.display = "block";
// });

//for문을 이용해서 1~12까지 출력!!!
for(let i=1; i<= 15; i++){
    document.querySelector(".result"+i+"t h4").addEventListener("click", function(){
        document.querySelector(".result"+i).style.display = "block";
    });
}

//forEach을 이용해서 1~12까지 출력!!!
let num = [];
for(i = 0; i < 12; i++){
    num[i] = i+1;
}
num.forEach(function(el){
    document.write(el)
});