let slide_index=0
slideshow(slide_index)
function controller(x) {
    slide_index+=x
    slideshow(slide_index)
}
function slideshow(slide_num) {
    let slides=document.getElementsByClassName("slide")
    let Dots=document.getElementsByClassName("btn")
    if (slide_num==slides.length) {
        slide_index=0
        slide_num=0
    }
    if (slide_num<0) {
        slide_index=slides.length-1
        slide_num=slides.length-1
    }
    for(let y of slides){
        y.style.display="none"
    }
    for(let z of Dots){
        z.style.background="unset"
    }
    Dots[slide_num].style.background="black"
    slides[slide_num].style.display="block"
}
function dots_controller(dot_index) {
    Dots=document.getElementsByClassName("btn")
    slide_index=dot_index
    slide_num=dot_index
    slideshow(slide_index)
}