"use strict";

// change saying for .support-msg

function describeMe() {
	// var supportMsg = $('.support-msg');
	var describe = $('.describe-me');
	var adjectives = ['a minimalist', 'a female in tech', 'an avid hiker', 'a life-long learner', 'a foodie and traveler', 'a web developer'];
		var randomNum = Math.floor(Math.random() * 6);
		describe.html(adjectives[randomNum]);
}

setInterval(describeMe, 4000);





