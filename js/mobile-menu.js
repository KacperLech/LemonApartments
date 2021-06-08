$(".js-hamburger").click(function() {
    $(".js-mobile-menu").addClass("is-active");
})

$(document).mouseup(function(e) {
    if (!$(".js-mobile-menu").is(e.target) && $(".js-mobile-menu").has(e.target).length === 0) {
        $(".js-mobile-menu").removeClass('is-active');
    }
    return false;
})