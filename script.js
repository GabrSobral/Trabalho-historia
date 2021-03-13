
let ScreenWidth = Number(screen.width)
let currentWidth = 0
let maxWidth = 2 * ScreenWidth 

function nextPage(){
  if(currentWidth >= maxWidth){
    currentWidth = 0
    window.scrollTo(0,0)
    return
  }
  currentWidth = currentWidth + ScreenWidth
  window.scrollTo(currentWidth,0)
}

function previousPage(){
  if(currentWidth <= 0) {
    return
  }
  currentWidth = currentWidth - ScreenWidth
  window.scrollTo(currentWidth,0)
}

document.addEventListener('keydown', (e)=> {
  if(e.key == "ArrowRight") {
    nextPage()
  } else if(e.key == "ArrowLeft"){
    previousPage()
  }
})