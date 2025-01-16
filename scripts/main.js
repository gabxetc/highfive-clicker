console.log("Loaded");

// Variables

var clicks = 0;

//end
function add(){
    clicks++;
    document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
}

function subtract(){
     clicks--
     document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
}



