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
    
    function turnLeft() {
        tank.setPosition({angle: tank.getPosition().angle - 1});
    }

    function turnRight() {
        tank.setPosition({angle: tank.getPosition().angle + 1});
    }
    
    function moveForward() {
        //TODO improve
        var ds = 1,
            alpha = tank.getPosition().angle,
            dx = ds * Math.sin(alpha),
            dy = ds * Math.cos(alpha);
              
        tank.setPosition({angle: alpha, top: tank.getPosition().top - dx, left: tank.getPosition().left - dy});
    }
    
    function moveBackward(){
        //TODO improve
        var ds = 1,
            alpha = tank.getPosition().angle,
            dx = ds * Math.sin(alpha),
            dy = ds * Math.cos(alpha);
              
        tank.setPosition({angle: alpha, top: tank.getPosition().top + dy, left: tank.getPosition().left + dx});
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