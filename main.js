var openMenu = $('.header-right > a');
var closeMenu = $('.close');

openMenu.click(function() {
    $('.hamburger-menu').addClass('active');
})

closeMenu.click(function() {
    $('.hamburger-menu').removeClass('active');
})