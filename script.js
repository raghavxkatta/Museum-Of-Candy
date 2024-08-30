/* using $ sign to access jQuery */
$(function(){
$(document).scroll(function(){/* as you scroll */
var nav= $("#mainNavbar");
nav.toggleClass("scrolled",$(this).scrollTop()>nav.height())/* /* once we scroll past the original navbar height the "scrolled" class would be toggled/* */
})
})