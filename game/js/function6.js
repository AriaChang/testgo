


$(function() { 

var movieword = ""; 
$("#draggable").draggable(); 
$("#draggable1").draggable(); 
$("#draggable2").draggable(); 
$("#draggable3").draggable(); 
$("#draggable4").draggable(); 
$("#draggable5").draggable(); 

$("#droppable").droppable({ 
accept: "#draggable", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable").text().replace(/\s/g,''); 

} 
}); 
$("#droppable1").droppable({ 
accept: "#draggable1", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable1").text().replace(/\s/g,''); 

} 
}); 

$("#droppable2").droppable({ 
accept: "#draggable2", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable2").text().replace(/\s/g,''); 

} 
}); 

$("#droppable3").droppable({ 
accept: "#draggable3", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable3").text().replace(/\s/g,''); 
} 
}); 

$("#droppable4").droppable({ 
accept: "#draggable4", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable4").text().replace(/\s/g,''); 
} 
});  

$("#droppable5").droppable({ 
accept: "#draggable5", 
activeClass: "active", 
hoverClass: "hover", 
drop: function(event, ui) { 
$(this).addClass("ui-widget-content") 
.find("p").html("Dropped"); 
movieword += $("#draggable5").text().replace(/\s/g,''); 
} 
});  
});
