let arr = Array.from(document.querySelectorAll('div.modal__close_times'))

let modal_main = document.querySelector('#modal_main')
let modal_success = document.querySelector('#modal_success')
let show_success = document.querySelector('.show-success')
let close_times = document.querySelectorAll('div.modal__close_times')

modal_main.classList.add('modal_active')

show_success.onclick = () => {
    modal_main.className = 'modal'
    modal_success.classList.add('modal_active')
}

close_times.forEach((element) => {
    element.onclick = () => {
        element.parentElement.parentElement.className = 'modal'
    }
})
