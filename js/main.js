/*globals init, Model, Viewport */
function Main (global) {
    "use strict";
    
    //
    //
    // properties
    //
    //

    var DEV_MODE = true;
    
    function devMode () {
        return DEV_MODE;
    }
    
    function launch (){
        // var area = document.getElementById("area"),
        var area = new Viewport();
        document.onresize = function(){
            //TODO: complete the task
            area.init();
        }
    };
    
    //
    //
    // public interface
    //
    //
    
    return {
        launch: launch,
        devMode: devMode
    }
}


// .example {
    // -webkit-transform: rotate(45deg); /* Chrome & Safari */
    // -moz-transform: rotate(45deg); /* Firefox */
    // -ms-transform: rotate(45deg); /* IE 9+ */
    // -o-transform: rotate(45deg); /* Opera */
    // transform: rotate(45deg); /* CSS3 */
    // filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand'); /* IE 7-8 */
// }


