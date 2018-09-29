

$(function($)
{
	$('.returnButton').hide();
	
	//Stylling image, which is placed before span
	$('span').prev('figure').css('margin-right', '40px');	
		$('.respMenu').click(function()
		{
			showMenu();
		});
		
		$('.returnMenuButton').click(function()
		{
			hideMenu();
		});
		
		$('.respSideMenu li').click(function()
		{
			
			hideMenu();
		});
		
    scrolling($);
}
);

function showMenu()
{
	$('.respSideMenu').animate(
	{
		left: 0
	},
	500);
}

function hideMenu()
{
	$('.respSideMenu').animate(
	{
		left: '-2000px'
	},
	500);
}

function scrolling($)
{
	//scroll reset
	$.scrollTo(0);
	//scrolling itself
	$('.link1').click(function() { $.scrollTo($('.instrSec1'), 500); });
	$('.link2').click(function() { $.scrollTo($('.instrSec2 h2'), 500); });
	$('.link3').click(function() { $.scrollTo($('.instrSec3 h2'), 500); });
	$('.link4').click(function() { $.scrollTo($('.instrSec4 h2'), 500); });
	$('.link5').click(function() { $.scrollTo($('.instrSec5 h2'), 500); });
	$('.link6').click(function() { $.scrollTo($('.instrSec6 h2'), 500); });
	$('.link7').click(function() { $.scrollTo($('.instrSec7 h2'), 500); });
	$('.link8').click(function() { $.scrollTo($('.instrSec8 h2'), 500); });
		
	$('.returnButton').click(function() { $.scrollTo($('body'), 1000); });
}

//Showing and hiding scrollbutton
$(window).scroll(function()
{
	if ($(this).scrollTop()>300) $('.returnButton').fadeIn();
	else $('.returnButton').fadeOut();			
}

);