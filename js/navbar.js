 $(document).ready(function () {
    $('.mnu-btn').click(function () {
        $('.nav-links li').not('.mnu-btn').toggleClass('mobile-view hidden-mobile-view');
    });
});