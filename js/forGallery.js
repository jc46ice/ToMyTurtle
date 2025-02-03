
jQuery(document).ready(function ($) {
    var lightbox = $('.gallery a').simpleLightbox({ history: false });
    inPageItems = [];
    $('nav ul li a').each(function (i, item) {
        var elem = $(this);
        item = {
            refElement: $(elem.attr('href')),
            parent: elem.parent()
        }
        inPageItems.push(item);
    });
    $('nav ul li a, a.logo').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html,body').animate({ scrollTop: ($(target).offset().top - 50) }, 'slow');
        var getwindowwidth = $(window).width();
        if (getwindowwidth < 1200) {
            $('nav').removeClass('active');
            $('nav').css('opacity', '0');
            $('a.hidemenu').css('visibility', 'hidden');
            $('a.hidemenu').css('opacity', '0');
        }
    });
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        $.each(inPageItems, function (i, item) {
            if (top > item.refElement.offset().top - 52) {
                if (!item.parent.hasClass('active')) {
                    $('nav ul li').removeClass('active');
                    item.parent.addClass('active');
                }
            } else {
                item.parent.removeClass('active');
            }
        });
    });
});

// optimised version of above lines


// jQuery(document).ready(function ($) {
//     // Initialize lightbox if simpleLightbox exists
//     if ($.fn.simpleLightbox) {
//         $('.gallery a').simpleLightbox({ history: false });
//     }

//     let inPageItems = [];
//     $('nav ul li a').each(function () {
//         let elem = $(this);
//         inPageItems.push({
//             refElement: $(elem.attr('href')),
//             parent: elem.parent()
//         });
//     });

//     // Smooth scrolling for navigation links
//     $('nav ul li a, a.logo').on('click', function (event) {
//         event.preventDefault();
//         let target = $(this).attr('href');

//         $('html, body').animate({ scrollTop: $(target).offset().top - 50 }, 'slow');

//         if ($(window).width() < 1200) {
//             $('nav').removeClass('active');
//             $('a.hidemenu').removeClass('visible'); // Assume .visible is handled via CSS
//         }
//     });

//     // Throttle function to optimize scroll event
//     function throttle(func, limit) {
//         let lastFunc, lastRan;
//         return function () {
//             const context = this, args = arguments;
//             if (!lastRan) {
//                 func.apply(context, args);
//                 lastRan = Date.now();
//             } else {
//                 clearTimeout(lastFunc);
//                 lastFunc = setTimeout(() => {
//                     if (Date.now() - lastRan >= limit) {
//                         func.apply(context, args);
//                         lastRan = Date.now();
//                     }
//                 }, limit - (Date.now() - lastRan));
//             }
//         };
//     }

//     // Scroll event with throttling
//     $(window).on('scroll', throttle(function () {
//         let top = $(document).scrollTop();

//         $.each(inPageItems, function (_, item) {
//             if (top > item.refElement.offset().top - 52) {
//                 $('nav ul li').removeClass('active');
//                 item.parent.addClass('active');
//             } else {
//                 item.parent.removeClass('active');
//             }
//         });
//     }, 100)); // Runs at most every 100ms
// });