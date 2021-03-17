let ScreenWidth = window.innerWidth
let NumberOfSlides = document.body.scrollWidth / ScreenWidth
let currentWidth = 0
let maxWidth = (NumberOfSlides - 1) * ScreenWidth 

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

window.visualViewport.addEventListener('resize', () => {
  currentWidth = 0
  ScreenWidth = window.innerWidth
  maxWidth = (NumberOfSlides - 1) * ScreenWidth
})

document.addEventListener('keydown', (e) => {
  if(e.key == "ArrowRight") {
    nextPage()
  } else if(e.key == "ArrowLeft"){
    previousPage()
  }
})

window.addEventListener('load', () => {
  window.scrollTo(0,0)
})

