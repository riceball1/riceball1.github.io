"use strict";

// change saying for .support-msg

function describeMe() {
	// var supportMsg = $('.support-msg');
	var describe = $('.describe-me');
	var adjectives = ['I\'m a minimalist', 'I\'m a female in tech', 'I love the outdoors', 'I believe in myself', 'I love to learn', 'I think about the future'];
	var randomNum = Math.floor(Math.random() * 5);
	describe.html(adjectives[randomNum]);
}

setInterval(describeMe, 5000);
//# sourceMappingURL=scripts-dist.js.map
