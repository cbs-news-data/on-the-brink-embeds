/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here

	var $carousel = $('.main-carousel').flickity();



	$.get('stations-carousel-data.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var stations_carousel = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;


	    	for(i = 0; i < stations_carousel.length; i++) { 
	    		// console.log(schechter_carousel[i].title)

	    		var $cellElems = $('<div class="carousel-cell"><a href="'+stations_carousel[i].link+'" target="_blank"><div class="story"><img src="'+stations_carousel[i].photo+'"><div class="title">'+stations_carousel[i].title+'</div></div></a></div>')
	    		$carousel.flickity( 'append', $cellElems);

			}

	});

	/* force a redraw */
	$carousel.flickity('resize');




}); //end document.ready block