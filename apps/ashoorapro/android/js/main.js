/*---------  Slider -------*/

$(function() {

    $('.slider').cycle({
       fx:     'fade',
       speed:   1200,
       timeout: 4000,
       
     pager: '#nav',
           cleartypeNoBg: true,
             slideResize: 0,
     
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
    });
     
});

$(function() {

    $('.slides_container').cycle({
       fx:     'fade',
       speed:   1200,
       timeout: 4000,
       speedIn: 1400,
       speedOut: 500,
     next:   '#next2', 
       prev:   '#prev2' 
        
    });
     
});

$(function() {

    $('.testi').cycle({
       fx:     'fade',
       speed:   600,
       timeout: 4000,
        pager: '#nav2',
           cleartypeNoBg: true,
             slideResize: 0,
     
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
        
    });
     
});

/*---------  Features Hover -------*/

$(document).ready(function(){
$(".featu").hover(
function() {
$("img.ft2", this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "50");
$("img.ft1", this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "50");
},
function() {
$("img.ft2", this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "50");
$("img.ft1", this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "50");
});

});

/*---------  Screenshots Hover -------*/

$(document).ready(function(){
$("img.b").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});

var elems = document.querySelectorAll('h1, h2, p');

for(i = 0; i <= elems.length; i++)
{
    if( typeof elems[i] !== 'undefined' ){
        elems[i].innerHTML = persianParser(elems[i].innerHTML).parse();
    }
}



// $(document).ready(function(){
//   $("#more").click(function(){
//     $("ul.hiden").show();
// 	$("#less").css('display','block');
// 	$(this).hide();
	
//   });
  
//   $("#less").click(function(){
//     $("ul.hiden").hide();
// 	$(this).hide();
// 	$("#more").show();
//   });
  
// });

// $(document).ready(function(){
// $('.banner').revolution(
// {
//   delay:9000,
//   startwidth:960,
//   startheight:400,

//               onHoverStop:"on",           // Stop Banner Timet at Hover on Slide on/off

//               thumbWidth:100,             // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
//               thumbHeight:50,
//               thumbAmount:3,

//               hideThumbs:0,
//               navigationType:"bullet",        // bullet, thumb, none
//               navigationArrows:"solo",        // nexttobullets, solo (old name verticalcentered), none

//               navigationStyle:"round",        // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


//               navigationHAlign:"center",        // Vertical Align top,center,bottom
//               navigationVAlign:"bottom",          // Horizontal Align left,center,right
//               navigationHOffset:30,
//               navigationVOffset:-40,

//               soloArrowLeftHalign:"left",
//               soloArrowLeftValign:"center",
//               soloArrowLeftHOffset:20,
//               soloArrowLeftVOffset:0,

//               soloArrowRightHalign:"right",
//               soloArrowRightValign:"center",
//               soloArrowRightHOffset:20,
//               soloArrowRightVOffset:0,

//               touchenabled:"on",            // Enable Swipe Function : on/off


//               stopAtSlide:-1,             // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
//               stopAfterLoops:-1,            // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

//               hideCaptionAtLimit:0,         // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
//               hideAllCaptionAtLilmit:0,       // Hide all The Captions if Width of Browser is less then this value
//               hideSliderAtLimit:0,          // Hide the whole slider, and stop also functions if Width of Browser is less than this value


//               fullWidth:"on",

//               shadow:1                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

//             });
// });
