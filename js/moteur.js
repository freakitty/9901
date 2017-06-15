/*global $, jQuery */

/* ========================================= VIDEO =========================================== */

var vid = document.getElementById('bgvid');
if (vid) {
    vid.addEventListener('ended', function () {
        'use strict';
        $(this).css({'display': 'none'});
        $('#skip').css({'display': 'none'});
    });
}

$(function () {
    'use strict';
    
    $('#skip').on('click', function () {
        $(this).css({'display': 'none'});
        $('#bgvid').css({'display': 'none'});
    });

/* ==================================== BURGER ================================= */
    
    function animateHamburger() {
        $('#hamburger-button').toggleClass('open');
    }
    function slideMenu() {
        $('.navbar').toggleClass('open');
    }
    $('#hamburger-button').click(function () {
        animateHamburger();
        slideMenu();
    });
    
/* ================================= PARALAX ================================ */

    $(window).scroll(function () {
        $('#title-h3').css({'top': function (index, value) {return 150 - $(window).scrollTop() * 0.2; }});
        $('#about-bio').css({'top': function (index, value) {return 300 - $(window).scrollTop() * 0.4; }});
        $('#about-bio2').css({'top': function (index, value) {return 750 - $(window).scrollTop() * 0.5; }});
        $('#span-bio').css({'top': function (index, value) {return 750 - $(window).scrollTop() * 0.5; }});
        $('#team-h3').css({'top': function (index, value) {return 1100 - $(window).scrollTop() * 0.4; }});
        $('#h3-span').css({'top': function (index, value) {return 1080 - $(window).scrollTop() * 0.4; }});
        $('#team').css({'top': function (index, value) {return 1250 - $(window).scrollTop() * 0.3; }});
    });
    
/* ========================================= ASIDE =========================================== */
    
    var	$parent = $("main"),
        $aside = $("#aside"),
        $asideTarget = $aside.find(".aside--details"),
        $asideClose = $aside.find(".close"),
        $galleryParent = $(".gallery"),
        $gallery = $galleryParent.find(".items"),
        slideClass = "show-detail";

    function showAside() {
        if (!$("html").hasClass(slideClass)) {
            $("html").toggleClass(slideClass);
        }
    }

    function loadGalleryData(target) {
        var $this = $(target),
            itemHtml = $this.find(".details").html();
        $asideTarget.html(itemHtml);
        showAside();
    }
	
    function killAside() {
        if ($("html").hasClass(slideClass)) {
            $("html").removeClass(slideClass);
        }
    }

    $gallery.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$("html").hasClass(slideClass)) {
            $gallery.removeClass("active");
            $(this).addClass("active");
            $(this).attr("true");
            loadGalleryData($(this));
        } else {
            killAside();
            $(this).attr("false");
        }
    });

    $asideClose.on("click", function (e) {
        e.preventDefault();
        killAside();
    });

    $parent.on("click", function (e) {
        if ($("html").hasClass(slideClass)) {
            killAside();
        }
    });
  
});

