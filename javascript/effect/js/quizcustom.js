//highlight
const highlight = function(){
    hljs.highlightAll();
}

const modal = function(){
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector(".window_wrap").classList.add("show");
        document.querySelector(".window_wrap").classList.remove("hide");
    });
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".window_wrap").classList.add("hide");
    })
}

//tabmenu
const tabMenu = function () {
    const tabBtn = document.querySelectorAll(".menu-bar span");
    const tabCont = document.querySelectorAll(".main > div");

    tabBtn.forEach((btn, btni) => {
        btn.addEventListener("click", () => {
            //내가 클릭한건 active추가
            tabBtn.forEach(btn => {
                btn.classList.remove("active");
            }); //모든 클래스 active 삭제
            btn.classList.add("active"); //클릭한 tabBtn에만 클래스 active 푸가

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach(cont => {
                cont.style.display = "none";
            });

            //내가 클릭한 콘텐츠 박스를 보이게
            // tabCont.forEach((cont, conti) => {
            //     if(conti == btni){
            //         cont.style.display = "block";
            //     }
            // });
            tabCont[btni].style.display = "block";
        });
    });
}