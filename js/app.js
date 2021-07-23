// var header = document.getElementById('header');
//  function changeBackground() {
//      console.log(header);
//      header.style.background = 'red';
//      console.log(header);
//  }

//  changeBackground();

// on scroll animation
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}
let elToShow = document.querySelectorAll('.play-on-scroll');
let isInViewport = (el) => {
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loopElZoom = ()=> {
    elToShow.forEach(item => {
        if(isInViewport(item)) item.classList.add('start');
        else item.classList.remove('start');
    })

    scroll(loopElZoom)
}

loopElZoom();

