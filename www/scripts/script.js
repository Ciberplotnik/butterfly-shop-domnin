$(document).ready(function() {

  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function () {

    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
      return;
    }
    // $('.js-accordion-icon').addClass('toggle_icon-plus');
    $(this).children('.js-accordion-icon').toggleClass('toggle_icon-plus toggle_icon-minus')

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevAccordionBtn = this;
  })


  $('.js-tabs-link-city').on('click', function (event) {
    event.preventDefault();

    const index = $(this).index('.js-tabs-link-city');

    $('.js-tabs-link-city').removeClass('active');
    $(this).addClass('active');

    $('.js-contacts-card').removeClass('active');
    $('.js-contacts-card').eq(index).addClass('active');
  })

  $('.js-portfolio-tag-link').on('click', function (event) {
    event.preventDefault();

    let dataFilter = $(this).data('filter');

    if (dataFilter === 'all') {
      $('.js-portfolio-list > li').show();
      return;
    }

    $('.js-portfolio-list > li').each(function () {
      let dataType = $(this).data('type');

      if (dataFilter === dataType) {
        $(this).show();
        return;
      }
      $(this).hide();
    })

  })

  $('.burger').on('click', function (event) {
    event.preventDefault();

    $('.js-main-nav').slideToggle();


  })



























  // const tabActiveClass = 'active';
  // const $tabsLinkCity = $('.js-tabs-link-city');
  // const $tabsContent = $('.js-contacts-card');

  // $tabsLink.on('click', function(event) {
  //   event.preventDefault();

  //   const index = $(this).index('.js-tabs-link');
  //   console.log(index);

  //   $tabsLink.removeClass(tabActiveClass);
  //   $(this).addClass(tabActiveClass);

  //   $tabsContent.removeClass(tabActiveClass);
  //   $tabsContent.eq(index).addClass(tabActiveClass);
  // });






























































 });

