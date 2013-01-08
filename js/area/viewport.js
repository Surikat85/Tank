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
        var body = document.body,
            place = document.createElement("DIV");

        body.innerHTML = "";
        width = Math.max(document.documentElement.clientWidth,
                         document.body.scrollWidth,
                         document.documentElement.scrollWidth,
                         document.body.offsetWidth,
                         document.documentElement.offsetWidth);
        height = Math.max(document.documentElement.clientHeight,
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight,
                          document.body.offsetHeight,
                          document.documentElement.offsetHeight);
        
        // console.log(width%25);
        // console.log(height%25);
        
        place.setAttribute("id", "area");
        place.setAttribute("style",
                // " position: absolute;"+
                " width: " + (width - 30) + "px;" +
                " height: " + (height - 30) + "px;" 
                // " top: 15px;" +
                // " left: 15px; "
                );

        document.body.appendChild(place);        
        
        
        
        
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