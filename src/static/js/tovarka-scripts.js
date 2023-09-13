

document.addEventListener( 'DOMContentLoaded', function () {

    /* Characteristics slider init */

    const main = new Splide( '#character-slider', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
    } );

    const thumbnails = new Splide( '#character-thumb-slider', {
        fixedWidth  : 94,
        fixedHeight : 94,
        gap         : 4,
        rewind      : true,
        pagination  : false,
        cover       : true,
        isNavigation: true,
    } );

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();

    /* Reviews slider init */

    const reviews = new Splide( '#reviews-slider', {
        type      : 'loop',
        rewind    : true,
        fixedHeight: true,
        pagination: false,
        arrows    : false,
    } );

    const avatars = new Splide( '#reviews-slider-avatars', {
        fixedWidth  : 50,
        fixedHeight : 50,
        gap         : 16,
        rewind      : true,
        pagination  : false,
        cover       : true,
        isNavigation: true,
    } );

    reviews.sync( avatars );
    reviews.mount();
    avatars.mount();

    const tabs = new Tabby('[data-tabs]');

} );

