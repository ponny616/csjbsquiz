var drawing = false;

Template.quiz2.events({
	'click #erase': function(e){
		context = draw.getContext("2d");
		context.beginPath();
		context.lineWidth = 2;
		context.fillStyle = getRandomColor();
		context.fillRect(0,0,draw.width,draw.height);
	}
})

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

Template.quiz2.rendered = function(){
	draw.addEventListener('mousedown', function(e){ 
		drawing = true;
		context = draw.getContext("2d");
		context.moveTo(e.pageX - draw.offsetLeft,e.pageY - draw.offsetTop);

	})

	draw.addEventListener('mouseup', function(e){ 
		drawing = false;
	})

	draw.addEventListener('mousemove', function(e){
		if (drawing){
		    xnow = e.pageX - draw.offsetLeft;
		    ynow = e.pageY - draw.offsetTop;
		    context = draw.getContext("2d");
		    context.lineTo(xnow,ynow);
		    context.strokeStyle = Color;
		    context.stroke();
		    $("#pos").html("position = ("+xnow+","+ynow+")");
	  	} 
	})

	Color = $('#selectColor option:selected').val();
	$('#selectColor').change(function () {
    	Color = $('#selectColor option:selected').val();
    })
}

