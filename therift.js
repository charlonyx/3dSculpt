/*FILE NAME: therift.js
WRITTEN BY: Rosanne Hu & Remi Kobayashi
DATE: November 13, 2015
PURPOSE: JS file for the rift*/

var width = 5;
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function onOff(){
    $(".settings-button").toggleClass('hidden');
    /*if(hasClass(document.getElementById('settings'), "off")){
        document.getElementById('settings').className = "button";
        document.getElementById('settings-buttons').css.style.display = hide;
    }else {
        document.getElementById('settings').className = "button off";
        document.getElementById('settings-buttons').css.style.display = show;
    }*/
}

/*function hover(x,y){
    if((x>0 && x<25) && (y>0 && x<15){
        $('button').click(onOff);
    }
    if((timeUp-timedown)>3)
        click
    }
}*/

function getWidth(){
    return width
}


/*function settings(setting){
    //
    if(position==){
        $('button').click(settings);
    }

}*/


//up
//down
//left
//right
//$('button').click(rh)
//undo
//$('button').click(ph)
//changeMaterial
//$()
//$('button').click()
//$('reset').click(Reset)
//$('button').click(settings);


/*function randomElt(array) {
    return array[Math.floor(array.length*Math.random())];
}*/
