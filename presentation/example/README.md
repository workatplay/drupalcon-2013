DrupalCon Portland 2013: Presentation Example Files
==============

Files containing the code used for the presenation "Automated Testing with Jasmine, PhantomJS and Jenkins".

Jasmine Specs and Reporter
-------------

Files and Folders to take note of:
- calculator (folder)

    > contains javascript files for the object and interaction with the form
    
- specs (folder)

    > contains different versions of the spec javascript file as it evolved in presentation
    
- specrunner-basic.html

    > the jasmine spec html runner file for our tests

To run tests:
- open specrunner-basic.html in your browser

PhantomJS integration
-------------

Files and Folders to take note of:
- run-jasmine-basic.js

    > the PhantomJs script to run basic jasmine tests

To run tests:

    phantomjs run-jasmine-basic.js specrunner-basic.html

PhantomJs + Jenkins integration
-------------

Files and Folders to take note of:
- lib/jamsmine-reporters/jasmine.phantomjs-reporter.js

    > the new jasmine reporter that is used by the phantomjs script
    
- run-jasmine-xml.js

    > the altered PhantomJs script that outputs xml to files instead
    
- specrunner-xml.html

    > the new jasmine spec html runner file that uses the new reporters
    
- results (folder)

    > and example folder to where results for the phantomJs script can be stored, along with an example XML file with results for our spec

To run tests:

    phantomjs run-jasmine-xml.js specrunner-xml.html results