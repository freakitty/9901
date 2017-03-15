/*global $, jQuery */

var vid = document.getElementById('bgvid');
if (vid) {
    vid.addEventListener('ended', function () {
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

/****** 
BURGER 
*****/
    
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
/************
PARALAX
***********/
    
    $(function () {
        $(window).scroll(function () {
            $('#about-bio').css({'top': function (index, value) {return 150 - $(window).scrollTop() * 0.4}});
            $('#about-bio2').css({'top': function (index, value) {return 400 - $(window).scrollTop() * 0.3}});
            $('#span-bio').css({'top': function (index, value) {return 400 - $(window).scrollTop() * 0.3}});
            $('#team-h3').css({'top': function (index, value) {return 830 - $(window).scrollTop() * 0.5}});
            $('#h3-span').css({'top': function (index, value) {return 820 - $(window).scrollTop() * 0.5}});
            $('#team').css({'top': function (index, value) {return 870 - $(window).scrollTop() * 0.4}});
            $('h4').css({'top': function (index, value) {return 1700 - $(window).scrollTop() * 0.2}});
    
        });
   
    });
    /* =================================================================== ASIDE ====================================================================== */
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