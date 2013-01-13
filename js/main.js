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

