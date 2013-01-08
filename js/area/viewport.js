/*globals console*/
function Viewport () {
    "use strict";
    // main properties of the tank object
    var title = 'Viewport',
        description = 'The main viewport',
        height = 0,
        width = 0;

    // main methods of the tank object
    function init() {
        var body = document.body;
        body.innerHTML = "";
        
        
        
        
        
        
    }
    init();
    
    
    function getTitle() {
        return title;
    }

    function getDescription() {
        return description;
    }
    
    function getHeight() {
        return height;
    }
    
    function getWidth() {
        return width;
    }
    
    function toString() {
        return 'width: ' + getWidth() + " height: " + getHeight;
    }

    return {
        getTitle: getTitle,
        getDescription: getDescription,
        getHeight: getHeight,
        getWidth: getWidth,
        toString: toString
    };
}