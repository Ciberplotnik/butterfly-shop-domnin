$(document).ready(function() {

  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function () {
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevAccordionBtn = this;
  })

  let aaa = $('.accordion_content');

  console.log(aaa);

  function onAnyChange(){
    if ($('.js-accordion-btn').next().css('display') != 'none'){
    $(this).children('accordion_icon').css({
      'background-image': 'url(../images/accordion-icon-minus.svg)',
    })
    }
  }






































































 });

