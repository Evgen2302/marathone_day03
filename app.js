const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let actyveSlideIndex = 0

sidebar.style.top = `-${(slidesCount -1) * 100}vh`

upBtn.addEventListener('click', () =>{changeSlider('up')})

downBtn.addEventListener('click', () =>{changeSlider('down')})

function changeSlider(direction) {
    if (direction === 'up'){
        actyveSlideIndex++
        if (actyveSlideIndex === slidesCount)
        {
            actyveSlideIndex = 0
        }
    } else if (direction === 'down') {
        actyveSlideIndex--
        if (actyveSlideIndex < 0) {
            actyveSlideIndex = slidesCount -1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${actyveSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${actyveSlideIndex * height}px)`
}