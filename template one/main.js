
let bar=document.querySelector(".bar");
let secondSpan=document.querySelector(".sec-span");
let links=document.querySelector(".links ");
let arrow=document.querySelector(".fa-caret-up");

bar.addEventListener("click",function(){
    if (secondSpan.style.width=="100%") {
        links.style.cssText="display:none"
        arrow.style.cssText="display:none"
        secondSpan.style.width="60%"
    } else{
       links.style.cssText="display:block"
       arrow.style.cssText="display:block"
        secondSpan.style.width="100%"
    }
})

