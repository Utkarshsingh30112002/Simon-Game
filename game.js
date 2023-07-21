$(document).keydown(nextSequence);
    var rem=[];
    var b=true;
    var colours= ["red", "blue", "green", "yellow"];
var interedCol;
var level=0;
function nextSequence(){
    if(b){
        b=false;
        rem=[];
        level=0;
    }
    interedCol=[];
    var i=Math.floor(Math.random()*4);
    var randomChosenColour=colours[i];
    rem.push(randomChosenColour);
    react(randomChosenColour);
    $("#level-title").text("level "+level);
    level++;
    
}


function react(pressedCol){
$("."+pressedCol).addClass("pressed");
setTimeout(function(){$("."+pressedCol).removeClass("pressed");},300);
var audio=new Audio("sounds/"+pressedCol+".mp3");
audio.play();
}

    
    $(".btn").click(function(){
        react(this.id);
        interedCol.push(this.id);
        if(interedCol[interedCol.length-1]!=rem[interedCol.length-1]){
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").addClass("game-over");
        setTimeout(function(){$("h1").removeClass("game-over");},200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        b=true;
    }
        else if(interedCol.length==rem.length){
            setTimeout(nextSequence,800);
            }
        });
        


