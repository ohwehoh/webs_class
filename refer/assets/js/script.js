document.querySelectorAll(".subTitle > ul > li").forEach((el)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();
        // document.querySelectorAll(".subTitle > ul > li").forEach((el)=>{
        //     el.classList.remove("active");
        // });
        el.classList.toggle("active");
    });
});