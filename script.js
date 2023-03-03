const tl = gsap.timeline();
function init() {
  tl.from('.intro > p', 1.8, {
    opacity: 0,
    y: -100,
    ease: 'power4.out',
    delay: 1,
    stagger: {
      amount: 0.3,
    },
    autoAlpha: 0,
  });

  tl.from(
    '.hr',
    1.8,
    {
      width: 0,
      ease: 'power4.out',
      delay: 0,
      stagger: {
        amount: 0.3,
      },
      autoAlpha: 0,
    },
    '-=1.5'
  );
  tl.from(
    '.reveal h1',
    1.8,
    {
      y: 200,
      ease: 'power4.out',
      stagger: {
        amount: 0.8,
      },
      autoAlpha: 0,
    },
    '-=2'
  );
  tl.from(
    'h2, p.text',
    1.8,
    {
      y: 500,
      ease: 'power4.out',
      opacity: 0,
      stagger: {
        amount: 0.8,
      },
      autoAlpha: 0,
    },
    '-=2'
  );
  tl.from(
    '.nav-item',
    1.8,
    {
      opacity: 0,
      y: 100,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
      autoAlpha: 0,
    },
    '-=2'
  );
}
window.addEventListener('load', function (event) {
  init();
});
jQuery(function ($) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function () {
    if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});
