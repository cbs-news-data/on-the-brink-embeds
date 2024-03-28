/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here

	var $carousel = $('.main-carousel').flickity();



	$.get('schechter-carousel-data.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var schechter_carousel = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;


	    	for(i = 0; i < schechter_carousel.length; i++) { 
	    		// console.log(schechter_carousel[i].title)

	    		var $cellElems = $('<div class="carousel-cell"><a href="'+schechter_carousel[i].link+'"><div class="story"><img src="'+schechter_carousel[i].photo+'"><div class="title">'+schechter_carousel[i].title+'</div></div></a></div>')
	    		$carousel.flickity( 'append', $cellElems);

			}

	});

	/* force a redraw */
	$carousel.flickity('resize');




}); //end document.ready block
