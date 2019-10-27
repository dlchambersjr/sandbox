$("li").hover(hoverOn, colorOff);

function hoverOn() {
  let currentStar = $(this).attr('id');
  let stars = $('.rating');

  console.log(stars);

  $('rating').removeClass("hover");

  $.each(stars, function (index, value) {
    if (index <= stars[currentStar - 1].attributes[0].nodeValue - 1) {
      $(this).addClass("hover");
    } l
  });
};

function colorOff() {
  $('li').removeClass("hover");
  console.log('current class', $(this).attr("class"));
};

$("li").on('click', function () {
  console.log('clicked: ', $(this).attr('id'));

  let currentStar = $(this).attr('id');
  let stars = $('.rating');
  let nextStar = parseInt(currentStar) + 1
  console.log('next star: ', nextStar)
  console.log('current class', $(this).attr("class"));

  $(this).hasClass("clicked") ? console.log('TRUE') : console.log('FALSE')

  if (($(this).hasClass("clicked")) && ($(`#${nextStar}`) === 2)) {
    console.log("FIRST STAR IS ON")
  }

  $('li').removeClass("clicked");

  $.each(stars, function (index, value) {
    if (index <= stars[currentStar - 1].attributes[0].nodeValue - 1) {
      $(this).addClass("clicked");
    }
  });
});
