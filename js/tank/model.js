/*globals console*/
function Model (type) {
    "use strict";
    
    // checks
    if(!type){
        console.error(" model type is undefined ");
        return;
    }
    // console.log(global);
    // properties of the model object
    
    // inner methods
    function draw (){
        //TODO:(for che85) remove this to the definite type object implementation:
        // add basic canvas and then make extended object
        var HEIGHT = 320,
            WIDTH = 128,
            canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d");

        if(ctx){
            ctx.lineWidth = 1;
            
    		// frame
    		ctx.moveTo(31, 295);
    		ctx.lineTo(99, 295);
    		ctx.lineTo(98, 95);
    		ctx.lineTo(31, 95);
    		ctx.lineTo(31, 295);
    		
    		// frame: back
    		ctx.moveTo(35, 288);
    		ctx.lineTo(96, 288);
    		ctx.lineTo(96, 276);
    		ctx.lineTo(35, 276);
    		ctx.lineTo(35, 288);
    		
    		ctx.moveTo(37, 286);
    		ctx.lineTo(65, 286);
    		ctx.lineTo(65, 278);
    		ctx.lineTo(37, 278);
    		ctx.lineTo(37, 286);
    		
    		ctx.moveTo(94, 286);
    		ctx.lineTo(67, 286);
    		ctx.lineTo(67, 278);
    		ctx.lineTo(94, 278);
    		ctx.lineTo(94, 286);
    		
    		ctx.moveTo(35, 272);
    		ctx.lineTo(35, 254);
    		ctx.lineTo(96, 254);
    		ctx.lineTo(96, 272);
    		ctx.lineTo(35, 272);
    		
    		// left top bumper ltb
    		ctx.moveTo(10, 89);
    		ctx.lineTo(35, 89);
    		ctx.lineTo(35, 117);
    		ctx.bezierCurveTo(35, 124, 33, 125, 28, 126);
    		ctx.lineTo(10, 126);
    		ctx.lineTo(10, 89);
    		
    		// right top bumper
    		ctx.moveTo(95, 89);
    		ctx.lineTo(119, 89);
    		ctx.lineTo(119, 132);
    		ctx.lineTo(102, 132);
    		ctx.bezierCurveTo(100, 118, 99, 125, 95, 117);
    		ctx.lineTo(95, 89);
    		
    		// left flank
    		ctx.moveTo(31, 126);
    		ctx.lineTo(31, 298);
    		ctx.lineTo(10, 298);
    		ctx.lineTo(10, 126);
    		
    		// right flank
    		ctx.moveTo(99, 132);
    		ctx.lineTo(98, 298);
    		ctx.lineTo(119, 298);
    		ctx.lineTo(119, 132);

            ctx.stroke();
        }
    }
    
    // configure
    function init() {
        draw();
    }
    init();
    
    // public methods
    function toString() {
        // Now we can safely rely on the getTitle() accessor as well.
        return 'Model # ' + type; 
    }

    return {
        /* add public methods here */
        toString: toString

    };
}