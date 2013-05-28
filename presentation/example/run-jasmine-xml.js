var htmlrunner,
    resultdir,
    page,
    fs;

var system = require('system');

/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3001, //< Default Max Timeout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 100); //< repeat check every 100ms
};


if (system.args.length !== 3) {
    console.log('Usage: run-jasmine-xml.js specrunner-xml.html RESULT_DIR');
    phantom.exit(1);
}


htmlrunner = system.args[1];
resultdir = system.args[2];
page = require("webpage").create();
fs = require("fs");


// Echo the output of the tests to the Standard Output
page.onConsoleMessage = function(msg, source, linenumber) {
    console.log(msg);
};

page.open(htmlrunner, function(status) {
    if (status === "success") {
        waitFor(function() { // wait for this to be true
            return page.evaluate(function() {
                return typeof(jasmine.phantomjsXMLReporterPassed) !== "undefined";
            });
        }, function() { // once done...
            // Retrieve the result of the tests
            var f = null, i, len;
                suitesResults = page.evaluate(function(){
                return jasmine.phantomjsXMLReporterResults;
            });
            
            // Save the result of the tests in files
            for ( i = 0, len = suitesResults.length; i < len; ++i ) {
                try {
                    f = fs.open(resultdir + '/' + suitesResults[i]["xmlfilename"], "w");
                    f.write(suitesResults[i]["xmlbody"]);
                    f.close();
                } catch (e) {
                    console.log(e);
                    console.log("phantomjs> Unable to save result of Suite '"+ suitesResults[i]["xmlfilename"] +"'");
                }
            }
            
            // Return the correct exit status. '0' only if all the tests passed
            phantom.exit(page.evaluate(function(){
                return jasmine.phantomjsXMLReporterPassed ? 0 : 1; //< exit(0) is success, exit(1) is failure
            }));
        });
    } else {
        console.log("phantomjs> Could not load '" + htmlrunner + "'.");
        phantom.exit(1);
    }
});