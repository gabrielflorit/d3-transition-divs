window.pym = require('pym.js');

function log(s) {
	console.log(JSON.stringify(s, null, 4));
}

(function() {
	'use strict';
	// global variables


	// graphic functions
	var init = function() {
		if (window.console && console.log) console.log('-- init globe graphic --');

	};

	var data = require('./data.js');

	var d3 = require('d3');
	var _ = require('lodash');
	var shuffled;

	var colors = [
		'red',
		'blue',
		'yellow',
		'green',
		'orange'
	];

	log(data);

	document.querySelector('button.shuffle').addEventListener('click', function(e) {

		shuffled = _.shuffle(data);
		log(shuffled[0]);
		draw(shuffled);

	});

	function draw(_data) {

		// DATA JOIN
		var divs = d3.select('.transition-divs').selectAll('div').data(_data);

		// UPDATE
		divs.attr({
				'class': function(d) {
					return 'transition-div ' + d.name;
				}
			})
			.style({
				'background-color': function(a, b) {
					// a = datum
					// b = index of the datum
					return a.before.team;
				}
			});

		// ENTER
		divs.enter().append('div')
			.attr({
				'class': function(d) {
					return 'transition-div ' + d.name;
				}
			})
			.style({
				'background-color': function(a, b) {
					// a = datum
					// b = index of the datum
					return a.before.team;
				}
			})
			.html(function(d) {
				return '<span>' + d.name + '</span>';
			});
	}

	draw(data);















// // DATA JOINS
// 		rects = config.chart.selectAll('rect')
// 			.data(config.data, d => `${d.name}${d.date}`);

// 		// UPDATE
// 		rects.transition()
// 			.duration(config.duration)
// 			.attr(config.attributes)
// 			.style(config.style);

// 		// ENTER
// 		rects.enter().append('rect')
// 			.attr(config.attributes)
// 			.style(config.style);










































	// This fires when the parent of iframe resizes
	window.onPymParentResize = function(width) {
		
	};
	
	init();
})();