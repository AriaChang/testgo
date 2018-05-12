
//default values that I make use of //
//track the game//
var score=0;
var gameover= false;











 $(function(){
           $('#start').click(startGame); 
        });

function startGame(){
//make game board//

	//I'm going to start and end the game, can replay the game//
	//start the game set 0//
	makeGameBoard();
	score=0;
	
	
	//make sure I got the 0 even html take out 0//
	$('score').text(score);
	starfruits();
	//false=stop//
	//true=continue//	
	var gameover= false;
	//start gameplay//
	
	//time for gameplay//
	//run specific amount of time//
	//milliseconds 毫秒//
	//milliseconds = seconds//
	//    1        =  0.001//
	//  5000       =    5 //
	setTimeout(function(){
		//when ever 5 second it up, game will over//
		return gameend();  //blow down set up gameovoer timer//
	},20000);
	
}



function starfruits(){
	//給個代名:jumpUP//  //randomfruit//  //everybasket has fruit inside//
	var jumpUP =$('.basket'+randomBasket()+'>.fruit');
	//console.log通過它来輸出一个變量或者輸出一个字符串//
	console.log(jumpUP);
	
}
//randomlizer//
function randomBasket(){
	console.log($('basket').length);
	//參數// //random number0-1, not includind 1//
	var basket=Math.floor(Math.random()*$('basket'))
}

//set up gameovoer timer//

function gameend(){
var gameover= true;
$('.message').html('GAME OVER');	
}


function makeGameBoard(){
	
	//depend on how much fruit you want to change number//
	var fruits=8;
	var html='';
	
	//create loop//
    //0 < 8 friuts we have; friuts is going to increase by one everytime we repeat through the loop//
	for(var fruit=0;fruit<fruits;fruit++){
		//increase + = ''blank value//
		  // var html='put increasing here'//
		  //different ID value for each basket and we can set that through the value of fruit and I'm placing that in as a class so that we can identify which basket it's user is on next//
		html+='<div class="basket basket'+fruit+'"><div class="fruit"></div>';
		html+='<div class="water"></div></div>';
	}
	
	        //html('');//
	$('.game').html(html);
	
}