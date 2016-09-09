/* learning jQuery slideshow function through 
* lynda.com jQuery Essential Training w/ Joe Marini
*
* Created app on August 2016 by Dana Ng ngdana1@gmail.com 
*/



// document.ready function not needed threw issue in chrome browswer


	$(function() {
		//create the image rotator
		var rotate = setInterval("rotateImages()", 4000);

		
	});


// function to rotateImages
	function rotateImages() {
		var curPhoto = $('#hero div.current');
		// next() grabs sibling 
		var nxtPhoto = curPhoto.next();
		// if there is not next then goes back to the beginning
		if(nxtPhoto.length === 0) {
			nxtPhoto = $('#hero div:first');
		}
		// //with fading
		// curPhoto.removeClass('current').addClass('previous');
		// nxtPhoto.css({opacity: 0.0}).addClass('current')
		// 	.animate({opacity: 1.0}, 1000,
		// 		function() {
		// 			curPhoto.removeClass('previous');
		// 		});

		// without fading
		curPhoto.removeClass('current').addClass('previous');
		nxtPhoto.addClass('current')
			.animate(function() {
					curPhoto.removeClass('previous');
				});
	}


	



