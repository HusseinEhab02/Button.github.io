const btnel=document.querySelector(".btn")
btnel.addEventListener("mouseover" , (event)=>{
    const x =(event.pageX - btnel.offsetLeft)
    const y =(event.pageY - btnel.offsetTop)
    btnel.style.setProperty("--xpos" , x +"px")
    btnel.style.setProperty("--ypos" , y +"px")
})
//mouseover is detecting mouse hover
//offsetTopY is the distance form verticals position
//offsetTopX is the distance form horizontal position

