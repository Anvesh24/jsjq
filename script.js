$(document).ready(function(){
	
    numBox;
	createGrid();

});

var numBox = prompt('number of boxes?','Enter a number from 1-40');






var createGrid = function(numBox){
	var gridSize = 960/numBox;

	for (i=0;i<numBox;i++){
		for(j=0;j<numBox;j++){
			$('.container').append('<div class="square"></div>');
		}	

	}
	$('.square').css('height',gridSize);
	$('.square').css('width',gridSize);
};