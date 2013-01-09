/*globals console, integerDivision*/
function Viewport () {
    "use strict";
    
    //
    //
    // properties
    //
    //
    
    var title = 'Viewport',
        description = 'The main viewport',
        height = 0,
        width = 0,
        TOP_SHIFT = 30,
        LEFT_SHIFT = 30,
        CELL = 25; 
    
    //
    //
    // main methods of the tank object
    //
    //

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
    
    //supplementary method for easing area design
    function setGrid(){
        var grid = document.createElement("TABLE"),
            rows = integerDivision(height, CELL),
            columns = integerDivision(width, CELL),
            r=0,
            c=0;
        grid.setAttribute("style", "position: absolute;" + 
                "top: " + TOP_SHIFT/2 + "px;" + 
                "left: " + LEFT_SHIFT/2 + "px;" + 
                "z-index: 20;" 
        );
        grid.setAttribute("border", "1");
        console.log(rows);
        for (r=0; r < rows; r++) {
            var tr = document.createElement("TR");
            for (c=0; c < columns; c++) {
                var td = document.createElement("TD");
                td.setAttribute("width", CELL);
                td.setAttribute("height", CELL);
                tr.appendChild(td);
            }
            grid.appendChild(tr);
        }
        document.body.appendChild(grid);
    }
    
    // 
    //
    // configuring
    //
    //
    
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
        
        place.setAttribute("id", "area");
        place.setAttribute("style",
                " width: " + (width - LEFT_SHIFT) + "px;" +
                " height: " + (height - TOP_SHIFT) + "px;" + 
                " z-index: 10;" 
        );
        document.body.appendChild(place);        
    }
    init();
    setGrid();

    return {
        getTitle: getTitle,
        getDescription: getDescription,
        getHeight: getHeight,
        getWidth: getWidth,
        toString: toString
    };
}