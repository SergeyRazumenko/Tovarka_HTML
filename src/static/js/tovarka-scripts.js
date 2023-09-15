

document.addEventListener( 'DOMContentLoaded', function () {

    /* Characteristics slider init */
    const characterSlider = document.getElementById("character-slider");
    const characterThumbSlider = document.getElementById("character-thumb-slider");

    const initCharacterSlider = function(slider, sliderThumbs) {
        const main = new Splide( slider, {
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : false,
        } )
        const thumbnails = new Splide( sliderThumbs, {
            fixedWidth  : 94,
            fixedHeight : 94,
            gap         : 4,
            rewind      : true,
            pagination  : false,
            cover       : true,
            isNavigation: true,
        } )

        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();
    }

    characterSlider && characterThumbSlider ? initCharacterSlider(characterSlider, characterThumbSlider) : '';
 

    /* Reviews slider init */

    const reviewsSlider = document.getElementById("reviews-slider");
    const reviewsSliderAvatars = document.getElementById("reviews-slider-avatars");
    
    const initReviewsSlider = function(slider, sliderThumbs) {
        const reviews = new Splide( slider, {
            type      : 'loop',
            rewind    : true,
            fixedHeight: true,
            pagination: false,
            arrows    : false,
        } );
    
        const avatars = new Splide( sliderThumbs, {
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
    };

    reviewsSlider && reviewsSliderAvatars ? initReviewsSlider(reviewsSlider, reviewsSliderAvatars) : '';


    /* Cream Characteristics slider init */

    const creamCharacterSlider = document.getElementById("cream-character-slider");
    const initCreamCharacterSlider = function(slider) {

        var creamCharacter = new Splide( slider, {
            type   : 'loop',
            padding: '20px',
            arrows    : false,
          } );
          
          creamCharacter.mount();
    }

    creamCharacterSlider ? initCreamCharacterSlider(creamCharacterSlider) : '';

    /* Cream Review slider init */

    const creamReviewsSlider = document.getElementById("cream-reviews-slider");
    const initCreamReviewsSlider = function(slider) {

        var creamCharacter = new Splide( slider, {
            type      : 'loop',
            rewind    : true,
            fixedHeight: true,
            arrows    : false,
          } );
          
          creamCharacter.mount();
    }

    creamReviewsSlider ? initCreamReviewsSlider(creamReviewsSlider) : '';

    const tabs = new Tabby('[data-tabs]');

} );

