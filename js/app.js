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

//filter category food
let foodList = document.querySelectorAll('.food-item');
let foodCate = document.querySelector('.food-category');
let cateItems = document.querySelectorAll('.category__item');
Array.from(cateItems).forEach(el => {
    el.onclick = (e) => {
        let currCateItem = foodCate.querySelector('.active');
        currCateItem.classList.remove('active');
        e.target.classList.add('active');
        let currentFilter = e.target.getAttribute('data-food-type');
        Array.from(foodList).forEach(fo => {
            if(currentFilter == 'all') {
                fo.style.display = 'block';
            }
            else if(fo.getAttribute('data-food-type') == currentFilter) 
                fo.style.display = 'block';
            else fo.style.display = 'none';
        })
    }
})


