const imgArr = Array.from(document.querySelectorAll('.slider__item'))
const left = document.querySelector('.slider__arrow_prev')
const right = document.querySelector('.slider__arrow_next')

right.onclick = () => {

    const active = document.querySelector('.slider__item_active')
    
    let index = imgArr.findIndex(i => i == active)

    index < imgArr.length - 1 ? ( index += 1 ) : ( index = 0 )

    active.className = 'slider__item',
    imgArr[index].classList.add('slider__item_active')
}

left.onclick = () => {

    const active = document.querySelector('.slider__item_active')
    
    let index = imgArr.findIndex(i => i == active)

    index > 0 ? ( index -= 1 ) : ( index = imgArr.length - 1 )

    active.className = 'slider__item',
    imgArr[index].classList.add('slider__item_active')
}