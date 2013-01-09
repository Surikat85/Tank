/*globals console*/

// extends base class
function extend(Child, Parent){
    "use strict";
    if(!Child || !Parent){
        console.err("Invalid arguments");
        return;
    }
    var F = function() {
        console.log("f");
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

// integer division
function integerDivision(x, y){
    "use strict";
    return (x-x%y)/y;
}