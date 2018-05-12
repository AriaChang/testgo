$("#list-1").sortable({
    connectWith: "#list-1"
})
    .disableSelection();


$( "#list-1" ).data( "ui-sortable" ).floating = true;


$( "#show" ).click(function() {
    //$( "div" ).first().show( "fast", function() {
    document.getElementById('myimg').src = "photo/kiwi.png";
    document.getElementById('myimg').width = "200px"
    document.getElementById('myimg').height = "200px"
  });
  
  $( "#hide" ).click(function() {
    //$( "div" ).first().show( "fast", function() {
    document.getElementById('myimg').src = "photo/color-01.png"
    document.getElementById('myimg').width = "#"
   
  });
  
  $( "#show1" ).click(function() {
    //$( "div" ).first().show( "fast", function() {
    document.getElementById('myimg1').src = "photo/answer4-01.png"; alert(img)
  
  });
  
  $( "#hide1" ).click(function() {
    //$( "div" ).first().show( "fast", function() {
    document.getElementById('myimg1').src = "photo/color-01.png"
    document.getElementById('myimg1').width = "#"
    document.getElementById('myimg1').border = "0"
  });

