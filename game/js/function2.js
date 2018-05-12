vertical: false,



$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  




  var score = 0;
        var gameover = false;
        
        $(function(){
           $('#start').click(startGame); 
        });
        
        function startGame(){
            //make game board
            score=0;
            $('.score').text(score);
            // start gameplay
            gameover = false;
            setTimeout(function(){
                return gameend();
            },20000);
        }
        
        function gameend(){
            gameover = true;
            $('.message').html('GAME OVER');
        }
        
        