


var score = '';
var gameover = false;

$(function(){
	
$( "#draggable1,#draggable2,#draggable3,#draggable4,#draggable5,#draggable6" ).draggable({ revert: "invalid" });
accept: "#draggable" 

	
	
	
	
	
   $('#start').click(startGame);
    
});



function startGame(){
    //make game board
    score='';
    $('.score').text(score);
    // start gameplay
    gameover = false;
    setTimeout(function(){
        return gameend();
    },10000);
}

function gameend(){
    gameover = true;
    
    $('.message').html('GAME OVER') .css("fontSize", 100)
    alert("GAME OVER");
}











$("#list-1").sortable({
    connectWith: "#list-2"
})
    .disableSelection();

$("#list-2").sortable({
    connectWith: "#list-1"
})
    .disableSelection();

$( "#list-2" ).data( "ui-sortable" ).floating = true;

 

 
     
