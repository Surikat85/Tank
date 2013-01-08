/*globals console*/
function Tank (model) {
    "use strict";
    // main checks
    if(!model){
        console.err(" Model is null ");
        return;
    }
    
    // main properties of the tank object
    var title = 'Astronomy Cast',
        description = 'A fact-based journey through the galaxy.',
        link = 'http://www.astronomycast.com';
    
    
    // main methods of the tank object
    function init() {
        //TODO;
    }
    init();
    
    
    function getTitle() {
        return title;
    }

    function getDescription() {
        return description;
    }

    function getLink() {
        return link;
    }

    function toString() {
        // Now we can safely rely on the getTitle() accessor as well.
        return 'Title: ' + getTitle();
    }

    function download() {
        // Some highly resilient implementation ...
    }   

    function reliesOnDownload() {
       // Relies on our own implementation of the download() method
       download(); 
    }
    
    return {
        getTitle: getTitle,
        getDescription: getDescription,
        getLink: getLink,
        toString: toString,
        download: download
    };
}