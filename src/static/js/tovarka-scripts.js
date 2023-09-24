

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

        var creamReview = new Splide( slider, {
            type      : 'loop',
            rewind    : true,
            fixedHeight: true,
            arrows    : false,
          } );
          
          creamReview.mount();
    }

    creamReviewsSlider ? initCreamReviewsSlider(creamReviewsSlider) : '';

     /* Builder Characteristics slider init */

     const builderCharacterSlider = document.getElementById("builder-character-slider");
     const initBuilderCharacterSlider = function(slider) {
 
         var builderCharacter = new Splide( slider, {
            type   : 'loop',
           } );
           
           builderCharacter.mount();
     }
 
     builderCharacterSlider ? initBuilderCharacterSlider(builderCharacterSlider) : '';

     /* Builder Review slider init */

    const builderReviewsSlider = document.getElementById("builder-reviews-slider");
    const initBuilderReviewsSlider = function(slider) {

        var builderReview = new Splide( slider, {
            type      : 'loop',
            rewind    : true,
            fixedHeight: true,
          } );
          
          builderReview.mount();
    }

    builderReviewsSlider ? initBuilderReviewsSlider(builderReviewsSlider) : '';

    /* Militaris Characteristics slider init */

    const militarisCharacterSlider = document.getElementById("militaris-character-slider");
    const initMilitarisCharacterSlider = function(slider) {

        var militarisCharacter = new Splide( slider);
          
          militarisCharacter.mount();
    }

    militarisCharacterSlider ? initMilitarisCharacterSlider(militarisCharacterSlider) : '';


     /* Militaris Review slider init */

     const militarisReviewsSlider = document.getElementById("militaris-reviews-slider");
     const initMilitarisReviewsSlider = function(slider) {
 
         var militarisReview = new Splide( slider);
           
           militarisReview.mount();
     }
 
     militarisReviewsSlider ? initMilitarisReviewsSlider(militarisReviewsSlider) : '';

     
    const tabs = new Tabby('[data-tabs]');

} );

