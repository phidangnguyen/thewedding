// 1. JQuery to Loading
$(window).on("load", function () {
    $('#loading').delay(1000).fadeOut();
});

$(document).ready(function () {
    // 2. Toggle navbar menu
    var navbarToggler = $(".navbar-toggler-menu");
    navbarToggler.click(function () {
        $(this).toggleClass("change");
        $(this).css({
            'outline': 'none',
            'border-radius': '4px'
        });
    });

    //Set when click item menu  "FIXED TOP"
    var itemMenuFixedTop = $(".navbar-nav.fixedtop .nav-item-menu a.nav-link");
    var navbarTogglerFixed = $(".navbar-toggler-menu.fixedtop");

    itemMenuFixedTop.on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1300, function () {
                window.location.hash = hash;
            });
            $('#collapsibleNavbar-1').collapse('hide');
            navbarTogglerFixed.toggleClass("change");
        }
    });
    //Set when click item menu  "CLONE"
    var itemMenuClone = $(".navbar-nav.clone .nav-item-menu a.nav-link");
    var navbarTogglerClone = $(".navbar-toggler-menu.clone");

    itemMenuClone.on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1300, function () {
                window.location.hash = hash;
            });
            $('#collapsibleNavbar-2').collapse('hide');
            navbarTogglerClone.toggleClass("change");
        }
    });


    // 3. jQuery to collapse the navbar on scroll---
    var newNav = $('.main-menu.clone');
    function offNav() {
        newNav.hide();
    }
    offNav();
    $(window).on('scroll', function (e) {
        e.preventDefault();
        if ($(this).scrollTop() > 350) {
            newNav.slideDown('slow');
            newNav.css('display', 'block');
        } else {
            newNav.slideUp('slow');
        }
    });



    // 4. Jquery set gallery slider-----------------------------------------------------

    var owl = $('#gallery .owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 2,
        // autoplay: true,
        // autoplayTimeout: 2000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    //---------------------------------------------------------------------------
    //5. Jquery set Form atten
    var formName = $('#form-name');
    var formEmail = $('#form-email');
    var formNumber = $('#form-number');
    var formSelect = $('form-select');
    var submit = $('#submit');

    // set Name
    formName.focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).attr('placeholder', 'Name')
    });

    // Set Form Email
    formEmail.focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).attr('placeholder', 'Email')
    });

    //Set form munber
    formNumber.focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).attr('placeholder', 'Number of guests')
    });


});

