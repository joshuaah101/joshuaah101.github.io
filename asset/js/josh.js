 var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      ++index;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index >= slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

$("document").ready(function(){
  var scrolled = 0;
  $(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > scrolled){
       // downscroll code
       
   } else {
      // upscroll code
      $(".goUp").show(1000).on("click" ,function(){
      scrolled = scrolled - 300;
        $(".goUp").animate({
          scrollTop:  scrolled
     });
       console.log("Scroll up");
   });

   }
   scrolled = st;
});


});