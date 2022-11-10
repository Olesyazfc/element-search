let linksArr = Array.from(document.querySelectorAll('.menu__link'))

for(let i = 0; i < linksArr.length; i++) {
    const link = links_arr[i]

    link.onclick = () => {
        const parent = link.closest('.menu__item')
        if (parent.querySelector('.menu_sub') ) {
            parent.querySelector('.menu_sub').classList.add('menu_active')
        };
    
        if (parent.closest('.menu_main') && parent.querySelector('ul')) {
            return false
        }
    }
}