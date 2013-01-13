/*globals console, init, Tank, Model, Viewport */
function Main (global) {
    "use strict";
    
    //
    //
    // properties
    //
    //

    var DEV_MODE = true,
        mainArea = {};
    
    function devMode () {
        return DEV_MODE;
    }
    
    function launch (){
        // var area = document.getElementById("area"),
        var area = new Viewport(),
            player = new Tank(new Model(1)); 
        document.body.onresize = function(){
            area.init();
        };
        area.addUnit(player);
        
        document.onmousedown = function(evt) {
            evt.preventDefault();
            evt.stopPropagation();

            if(evt.buttons === 1) {
                player.turnLeft();
                return;
            }
            if(evt.buttons === 2) {
                player.turnRight();
                return;
            }
        };
        // document.onmouseup = function(evt) {
            // if(evt.buttons === 2) {
                
            // }
        // };
        
        document.body.onkeydown = function(evt) {
            // TODO add multi thread support. For now, button press function will stop other actions implementation
            if(evt && evt.keyCode) {
                var keyCode = evt.keyCode;
                if(keyCode === 38) {
                    player.moveForward();
                    return;
                }
                
                if(keyCode === 40) {
                    player.moveBackward();
                    return;
                }

                if(keyCode === 39) {
                    player.turnRight();
                    return;
                }

                if(keyCode === 37) {
                    player.turnLeft();
                    return;
                }
            }
        };
        
        // document.body.onkeyup = function(evt) {
            // if(evt && evt.keyCode) {
                // var keyCode = evt.keyCode;
            // }
        // };
       
    }
    
    function setArea(area, height, width){
        if(!area || !height || !width){
            console.error("area init fatal error !!!");
            return;
        }
        mainArea.area = area;
        mainArea.height = height;
        mainArea.width = width; 
    }
    
    function getArea(){
        return mainArea;
    }
    
    //
    //
    // public interface
    //
    //
    
    return {
        launch: launch,
        setArea: setArea,
        getArea: getArea,
        devMode: devMode
    };
}

