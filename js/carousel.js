function carousel_one() {
    new Splide( '.splide', {
        type   : 'loop',
        padding: {
            right: '5rem',
            left : '5rem',
        },
    } ).mount();
}
console.log(carousel_one())