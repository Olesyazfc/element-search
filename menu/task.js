let linksArr = Array.from(document.querySelectorAll('.menu__link'))

for(let i = 0; i < linksArr.length; i++) {
    const link = linksArr[i]

    link.onclick = () => {
        const parent = link.closest('.menu__item')
        if (parent.querySelector('.menu_sub') ) {
            parent.querySelector('.menu_sub').classList.toggle('menu_active')
        };
    
        if (parent.closest('.menu_main') && parent.querySelector('ul')) {
            return false
        }
    }
}