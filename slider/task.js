const imgArr = Array.from(document.querySelectorAll('.slider__image'))

let i = 0

right.onclick = () => {
    imgArr[i].closest('.slider__item').className = ('slider__item')
    i++

    if (imgArr[i] == undefined) {
        i = 0
    }
    imgArr[i].closest('.slider__item').classList.add('slider__item_active')
};

left.onclick = () => {

    imgArr[i].closest('.slider__item').className = ('slider__item')

    if (i == 0) {
        i = imgArr.length - 1
    }
    i--
    imgArr[i].closest('.slider__item').classList.add('slider__item_active')
};
