$('.burger').click(function(event) {
  $('.burger, .nav').toggleClass('active');
  $('body').toggleClass('.lock');
});


$('.more__one').click(function(event) {
  $('.more__one, .active__one').toggleClass('active');
  
});

$('.close__one').click(function(event) {
  $('.close__one, .active__one').removeClass('active');
});

$('.more__two').click(function(event) {
  $('.more__two, .active__two').toggleClass('active');
  
});

$('.close__two').click(function(event) {
  $('.close__two, .active__two').removeClass('active');
});

$('.more__three').click(function(event) {
  $('.more__three, .active__three').toggleClass('active');
  
});

$('.close__three').click(function(event) {
  $('.close__three, .active__three').removeClass('active');
});

$('.more__four').click(function(event) {
  $('.more__four, .active__four').toggleClass('active');
  
});

$('.close__four').click(function(event) {
  $('.close__four, .active__four').removeClass('active');
});

$('.more__five').click(function(event) {
  $('.more__five, .active__five').toggleClass('active');
  
});

$('.close__five').click(function(event) {
  $('.close__five, .active__five').removeClass('active');
});

$('.more__six').click(function(event) {
  $('.more__six, .active__six').toggleClass('active');
  
});

$('.close__six').click(function(event) {
  $('.close__six, .active__six').removeClass('active');
});

$('.wrap-more').click(function(event) {
  $('.wrap-more, .design-four, .design-five, .design-six').toggleClass('active');
  
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    lockClass:	'swiper-pagination-lock'
  },
})