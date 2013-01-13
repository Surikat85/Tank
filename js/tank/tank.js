/*globals console*/
function Tank (model) {
    "use strict";
    // main checks
    if(!model){
        console.err(" Model is null ");
        return;
    }
    
    // main properties of the tank object
    var tank;
    
    // main methods of the tank object
    function init() {
        tank = model;
    }
    init();
    
    function turnLeft(){
        var canvas = tank.getCanvas();
    }

    function turnRight(){
        tank.setAngle(tank.getPosition.angle + 15);
    }
    
    function moveForward(){
        tank.setAngle(tank.getPosition.angle - 15);
    }
    
    function moveBackward(){
        
    }
    
    // returns objects canvas     
    function getFrame(){
        if(!tank.getCanvas()){
            console.error("no canvas found !!! ");
        }
        return tank.getCanvas();
    }

    function toString() {
        // TODO: improve 
        return 'Model: ' + tank;
    }
    
    return {
        turnLeft: turnLeft,
        turnRight: turnRight,
        moveForward: moveForward,
        moveBackward: moveBackward,
        getFrame: getFrame,
        toString: toString
    };
}