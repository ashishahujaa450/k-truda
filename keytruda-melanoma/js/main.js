

$(document).ready(function ($) {
if (!$.cookie('keyTrudaTerms')) {
$('#safety-popup').addClass('popup-show');
$('body').addClass('modal-open');
}
// $('.close, .overlay.keyTruda_overlay').on('click', function() {
//     $('.modal').removeClass('popup-show');
//     $.cookie('keyTrudaTerms', 'keyTrudaTerms', {
//         expires: 1
//     });


// });

$('.close').on('click', function () {
$.cookie('keyTrudaTerms', 'keyTrudaTerms', { expires: 20 * 365 });
$('#safety-popup').removeClass('popup-show');
$('body').removeClass('modal-open'); 
});

$('body.modal-open').on('click', function (e) {
 var popupsel = $('#safety-popup .modal-content');
 if (!popupsel.is(e.target) && popupsel.has(e.target).length === 0) {
 	$.cookie('keyTrudaTerms', 'keyTrudaTerms', { expires: 20 * 365 });
	$('#safety-popup').removeClass('popup-show');
	$('body').removeClass('modal-open'); 
 }
});


function animateElements() {
$('.progressbar').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10); 
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
radius: 10,
lineCap: 'round',
thickness: 8, 
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#4CA44D' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + " %");
}).stop();
}
});
}



function animateElements1() { 
$('.progressbar1').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle1').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle1').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#55a4b4' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}




function animateElements3() {
$('.progressbar3').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle3').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle3').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
borderRadius: 10,
lineCap: 'round',
thickness: 8, 
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#4CA44D' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + " %");
}).stop();
}
});
}
function animateElements4() {
$('.progressbar4').each(function () {
var elementPos = $(this).offset().top; 
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle4').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle4').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
borderRadius: 10,
lineCap: 'round',
thickness: 8, 
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#55a4b4' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + " %");
}).stop();
}
});
}
function animateElements5() {
$('.progressbar5').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle5').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle5').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#4CA44D' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}
function animateElements6() {
$('.progressbar6').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle6').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle6').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#fff' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}

function animateElements7() {
$('.progressbar7').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle7').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle7').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#4CA44D' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}
function animateElements8() {
$('.progressbar8').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle8').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle8').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#fff' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}

function animateElements9() {
$('.progressbar9').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle9').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle9').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#4CA44D' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}

function animateElements10() {
$('.progressbar10').each(function () {
var elementPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
var percent = $(this).find('.circle10').attr('data-percent');
var percentage = parseInt(percent, 10) / parseInt(100, 10);
var animate = $(this).data('animate');
if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
$(this).data('animate', true);
$(this).find('.circle10').circleProgress({
startAngle: -Math.PI / 2,
value: percent / 100,
size: 140, 
thickness: 8, 
lineCap: 'round',
borderRadius: 10,
emptyFill: "rgba(0,0,0,0)",
fill: {
color: '#55a4b4' 
}
}).on('circle-animation-progress', function (event, progress, stepValue) {
$(this).find('div').text((stepValue*100).toFixed(0) + "%");
}).stop();
}
});
}

animateElements();
$(window).scroll(animateElements);
animateElements1();
$(window).scroll(animateElements1);
animateElements3();
$(window).scroll(animateElements3); 
animateElements4();
$(window).scroll(animateElements4);
animateElements5();
$(window).scroll(animateElements5);
animateElements6();
$(window).scroll(animateElements6);
animateElements7();
$(window).scroll(animateElements7);
animateElements8();
$(window).scroll(animateElements8);
animateElements9();
$(window).scroll(animateElements9);
animateElements10();
$(window).scroll(animateElements10);




}); //end document ready function







$('.slider-single').slick({
slidesToShow: 3,
slidesToScroll: 1,
arrows: true,
fade: false,
dots: true,
adaptiveHeight: true,
infinite: false,
arrows: true,
useTransform: true,
speed: 400,
cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
responsive: [{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
}
}, {
breakpoint: 769,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
}
}, {
breakpoint: 767,
settings: {
slidesToShow: 1,
centerMode: true,
centerPadding: '70px',        
slidesToScroll: 1,
}
}]
});

$('.slider-nav')
.on('init', function(event, slick) {
$('.slider-nav .slick-slide.slick-current').addClass('is-active');
})
.slick({
slidesToShow: 1,
slidesToScroll: 1,
dots: false,
arrows: false,
focusOnSelect: false,
infinite: false,

responsive: [{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}, {
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}, {
breakpoint: 767,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}]
});

$('.slider-single').on('afterChange', function(event, slick, currentSlide, nextSlide) {
$('.slider-nav').slick('slickGoTo', currentSlide);
var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
$('.slider-nav .slick-slide.is-active').removeClass('is-active');
$(currrentNavSlideElem).addClass('is-active');

});

$('.slider-nav').on('click', '.slick-slide', function(event) {
event.preventDefault();
var goToSingleSlide = $(this).data('slick-index');

$('.slider-single').slick('slickGoTo', goToSingleSlide);
});



/* navigation js */
function openNav() {
document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
document.getElementById("mySidenav").style.right = "-100%";
}

$('#mySidenav a').click(function(){

$('.mobile-links').removeClass('active');
$(this).addClass('active');
})

// custom js starts here

$(window).scroll(function() {
if ($(this).scrollTop() >= 700) {        // If page is scrolled more than 50px
$('.top-redirect-arrow').fadeIn(200);    // Fade in the arrow
$('header > .top-header').addClass('header-shrink')
} else if($(this).scrollTop() == 0){
$('header > .top-header').removeClass('header-shrink')
}

else {
$('.top-redirect-arrow').fadeOut(200);   // Else fade out the arrow
$('header > .top-header').removeClass('test')
}
});

var topArrow = document.querySelector('#redirectArrow');

topArrow.addEventListener('click', function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});

//calling listnere 
// window.addEventListener('scroll', lineDrawer);

// function lineDrawer(e){
//     console.dir(e.)
// }

//

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//        if(st >= 950){
//            console.log('start line draw')
//        }
//    } else {
//       // upscroll code
//       console.log('upscroll')
//    }
//    lastScrollTop = st;
// });



//finding position of line

window.currentPosofLine="";

$(document).ready(function(){

function checkVisability() {
var row = $('.pulsating-circle');

row.each(function(){

if ($(this).inView("both")) {
$(this).addClass("line-active-hai");

var testlen = $(".line-active-hai");

if(testlen.length > 1){

if(Math.floor(parseInt(document.getElementById("myBar").style.height)-8) >= jQuery('.line-active-hai').last().offset().top){
jQuery('.line-active-hai').first().removeClass('pulse-circle-now');
jQuery('.line-active-hai').first().removeClass('line-active-hai');
}

if(Math.floor(parseInt(document.getElementById("myBar").style.height)-8) <= jQuery('.line-active-hai').last().offset().top){
jQuery('.line-active-hai').last().removeClass('pulse-circle-now');
jQuery('.line-active-hai').last().removeClass('line-active-hai');
}     

}

window.currentPosofLine = $(this).offset();

// console.log($(this).parents('.line-common-section').attr('class'));

} else {
$(this).removeClass("visible");
$(this).removeClass("pulse-circle-now");
$(this).removeClass("line-active-hai");
}
});
}

checkVisability();

$(window).scroll(function() {
checkVisability();
});

});


// drawing line mechanism

window.onscroll = function() {myFunction()};
window.onresize = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


var scrolled = (winScroll / height) * 100;
var pos=jQuery('#lineStarter').offset();

// document.getElementById("myBar").style.height = window.currentPosofLine.top + 8 + 'px';
// document.getElementById("myBar").style.height = window.currentPosofLine.top + 8 + 'px';

var std=jQuery('.scroller-fixed-height').offset();
window.currentPosofLine=std;

document.getElementById("myBar").style.height = window.currentPosofLine.top + 'px';



if($('.line-active-hai').length > 0){

var lineLenght = Math.floor(parseInt(document.getElementById("myBar").style.height)-8);
var puslePos = Math.floor($('.line-active-hai').offset().top);

// if(document.getElementById("myBar").style.height == $('.line-active-hai').offset().top){
// $('.line-active-hai').addClass('pulse-circle-now');
// }

if(lineLenght >= puslePos){
$('.line-active-hai').addClass('pulse-circle-now');
} else {
$('.pulsating-circle').removeClass('pulse-circle-now');

}



}   




}

jQuery(document).ready(function(){

var pos=jQuery('#lineStarter').offset();

// jQuery('.progress-container').css('top',(pos.top+19)+'px');
// jQuery('.progress-container').css('left',(pos.left+6)+'px');

jQuery('#linedraw-wrapper').css('left',(pos.left+6)+'px');
jQuery('.progress-container').css('height', jQuery(document).height() + 'px');


var endpos=jQuery('#line-ends').offset();
var actualposition=endpos.top-pos.top + 10;
// jQuery('.progress-container').css('height',actualposition+'px');
jQuery('#linedraw-wrapper').css('height',  (actualposition) + 'px');
jQuery('#linedraw-wrapper').css('transform',  'translateY(' + (pos.top) + 'px)');
jQuery('.progress-container').css('transform',  'translateY(-' + pos.top +'px)');

});

jQuery(window).resize(function(){

var pos=jQuery('#lineStarter').offset();

// jQuery('.progress-container').css('top',(pos.top+19)+'px');
// jQuery('.progress-container').css('left',(pos.left+6)+'px');

jQuery('#linedraw-wrapper').css('left',(pos.left+6)+'px');
jQuery('.progress-container').css('height', jQuery(document).height() + 'px');


var endpos=jQuery('#line-ends').offset();
var actualposition=endpos.top-pos.top + 10;
// jQuery('.progress-container').css('height',actualposition+'px');
jQuery('#linedraw-wrapper').css('height',  (actualposition) + 'px');
jQuery('#linedraw-wrapper').css('transform',  'translateY(' + (pos.top) + 'px)');
jQuery('.progress-container').css('transform',  'translateY(-' + pos.top +'px)');

});

/* line drawer according to page */

$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();

var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();

return elementBottom > viewportTop && elementTop < viewportBottom;
};




/* hand chart scroller mechansim */
jQuery('body').on("touchmove", function(e) {
if( e.target.tagName=='TD'  || e.target.tagName=='TR' || e.target.tagName=='TABLE' ){
$('.hand-icon-table').addClass('hand-icon-remove');
} else {
$('.hand-icon-table').removeClass('hand-icon-remove');
}   
});

jQuery('body').on("touchmove", function(e) {
var SelectedClassname=e.target.className

if(SelectedClassname.indexOf('chart') > -1 || e.target.tagName=='TD'  || e.target.tagName=='TR' || e.target.tagName=='TABLE' || e.target.tagName=='LI' )
{

$('.hand-icon-chart').addClass('hand-icon-remove');
}
else
{
$('.hand-icon-chart').removeClass('hand-icon-remove');
}

});

jQuery('body').on("touchmove", function(e) {
var SelectedClassname=e.target.className;


if(SelectedClassname.indexOf('rounded-circle') > -1 || SelectedClassname.indexOf('slick-slide') > -1 || SelectedClassname.indexOf('scaler') > -1)
{

$('.custom-user-slider').addClass('hand-remover');
}
else
{
$('.custom-user-slider').removeClass('hand-remover');
}

});




/* nav scroller for mobile starts here */

var windowWidth=jQuery(window).width();
if(windowWidth<769)
{
NavCrousal();
}

jQuery(window).resize(function(){
var windowWidth=jQuery(window).width();

if(windowWidth<769)
{
NavCrousal();
}
else
{
if($('.nav-carousel-mobile').hasClass('slick-initialized'))
{
$('.nav-carousel-mobile').slick('unslick');
}
}

});

function NavCrousal()
{

if($('.nav-carousel-mobile').hasClass('slick-initialized'))
{
$('.nav-carousel-mobile').slick('unslick');
}

jQuery('.nav-carousel-mobile').slick({
slidesToShow: 2,
slidesToScroll: 1,
variableWidth: true,
infinite: false,


});

jQuery('.nav-carousel-mobile').on('swipe', function(event, slick, direction) {      
setTimeout(function(){      

jQuery('#pnAdvancerLeft').css('opacity', '1');      
jQuery('#pnAdvancerRight').css('opacity', '1');       
if(jQuery('.nav-carousel-mobile .slick-prev').hasClass('slick-disabled')){      
jQuery('#pnAdvancerLeft').css('opacity', '0');      
}       
if(jQuery('.nav-carousel-mobile .slick-next').hasClass('slick-disabled')){      
jQuery('#pnAdvancerRight').css('opacity', '0');     
}       
},200);     

});
jQuery('#pnAdvancerLeft').css('opacity', '0');


jQuery('#pnAdvancerRight').click(function(){
jQuery('.nav-carousel-mobile .slick-next').click();
setTimeout(function(){
jQuery('#pnAdvancerLeft').css('opacity', '1');

if(jQuery('.nav-carousel-mobile .slick-next').hasClass('slick-disabled')){
jQuery('#pnAdvancerRight').css('opacity', '0');

}
},200);
});

jQuery('#pnAdvancerLeft').click(function(){
setTimeout(function(){
jQuery('.nav-carousel-mobile .slick-prev').click();
jQuery('#pnAdvancerRight').css('opacity', '1');

if(jQuery('.nav-carousel-mobile .slick-prev').hasClass('slick-disabled')){
jQuery('#pnAdvancerLeft').css('opacity', '0');
}
},200);
});


}


$('.xs_visi_under_banner_txt').prepend('<div class="banner_box"><div class="banner-message"><h1 class="brand-color banner-heading font-weight-bold">KEYTRUDA<sup>&reg;</sup>: New indication in adjuvant treatment of stage III melanoma</h1><p class="text-lighter"><sup>Pr</sup>KEYTRUDA<sup>&reg;</sup> (pembrolizumab) is indicated for the adjuvant treatment of patients with stage III melanoma with lymph node involvement who have undergone complete resection.<sup>1</sup></p><div class="skip_keynote_mob"><p><a href="#down-keynote">Skip to KEYNOTE-054 study<img src="img/down_arow.png" alt="down_arow"></a></p></div></div></div>'); 



$('.xs_visi_under_banner_txt-fr').prepend('<div class="banner_box"><div class="banner-message"><h1 class="brand-color banner-heading font-weight-bold">KEYTRUDA<sup>&reg;</sup>: nouvelle indication comme traitement adjuvant chez les patients atteints d’un mélanome de stade III</h1><p class="text-lighter"><sup>Pr</sup>KEYTRUDA<sup>&reg;</sup> (pembrolizumab) est indiqué comme traitement adjuvant chez les patients atteints d’un mélanome de stade III avec atteinte des ganglions lymphatiques et qui ont subi une résection complète<sup>1</sup>.</p><div class="skip_keynote_mob"><a href="#down-keynote"><strong>Passer à ’étude KEYNOTE-054</strong></a><a href="#down-keynote"></a><a href="#donw-keynote"><img src="../img/down_arow.png" alt="down_arow"></a></div></div></div>'); 

