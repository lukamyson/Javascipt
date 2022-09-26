const headerText = document.querySelector('.header__content')
headerText.addEventListener('mouseover', () => {
    let rand = Math.floor(Math.random() * (430 - 100)) + 100;
    let randL = Math.floor(Math.random() * (900 - 350)) + 350;
    headerText.style.marginTop = `${rand}px`
    headerText.style.marginLeft = `${randL}px`


})