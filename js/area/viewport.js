/*globals global, console, integerDivision*/
function Viewport () {
    "use strict";
    
    //
    //
    // properties
    //
    //
    
    var title = 'Viewport',
        description = 'The main viewport',
        place,
        height = 0,
        width = 0,
        TOP_SHIFT = 30,
        LEFT_SHIFT = 30,
        CELL = 25; 
    
    //
    //
    // main methods
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
    
    function getPlace() {
        return place;
    }
    
    function addUnit(unit, position){
        if(!unit){
            console.error("no unit found !!! ");
            return;
        }
        
        if(!unit.getFrame()){
            console.error("no canvas found !!! ");
        }
        
        if(!position){
            position = {top: 0, left: 0};
        }
        
        var p = getPlace();
        p.appendChild(unit.getFrame());
        
    }
    
    //supplementary method for easing area design
    function setGrid(){
        var grid = document.createElement("CANVAS"),
            gridHeight = getHeight() - TOP_SHIFT,
            gridWidth = getWidth() - TOP_SHIFT,
            ctx,
            rowPosition = CELL,
            columnPosition = CELL;

        grid.setAttribute("id", "grid");
        grid.setAttribute("height", gridHeight);
        grid.setAttribute("width", gridWidth);
        grid.setAttribute("style",
                " z-index: 20;" +
                " position: absolute;" + 
                " top: 18px;" +
                " left: 18px;"
        );

        document.body.appendChild(grid);
        ctx = grid.getContext("2d");

        if(ctx){
            ctx.lineWidth = 0.1;
            //drawing columns
            while (columnPosition < gridWidth) {
                ctx.moveTo(columnPosition, 0);
                ctx.lineTo(columnPosition, gridHeight);
                columnPosition = columnPosition + CELL;
            }
            // drawing rows
            while (rowPosition < gridHeight) {
                ctx.moveTo(0, rowPosition);
                ctx.lineTo(gridWidth, rowPosition);
                rowPosition = rowPosition + CELL;
            }
            ctx.stroke();
        }
    }

    function toString() {
        return 'width: ' + getWidth() + " height: " + getHeight;
    }
    
    // 
    //
    // configuring
    //
    //
    
    function init() {
        var body = document.body;
        body.innerHTML = "";

        place = document.createElement("DIV");
        
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
        
        global.setArea(place, getHeight(), getWidth());
        
        if(global.devMode()){
            setGrid();            
        }
    }
    init();

    return {
        getTitle: getTitle,
        getDescription: getDescription,
        getHeight: getHeight,
        getWidth: getWidth,
        addUnit: addUnit,
        init: init,
        toString: toString
    };
}