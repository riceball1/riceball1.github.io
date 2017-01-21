"use strict";

// change saying for .support-msg

function describeMe() {
	// var supportMsg = $('.support-msg');
	var describe = $('.describe-me');
	var adjectives = ['a minimalist', 'a female in tech', 'an avid hiker', 'confident', 'a life-long learner', 'excited about the future', 'a web developer'];
	var randomNum = Math.floor(Math.random() * 5);
	describe.html(adjectives[randomNum]);
}

setInterval(describeMe, 8000);
//# sourceMappingURL=scripts-dist.js.map
