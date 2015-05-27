# anayltics.work
Just a mock analytics site implemented as a proof-of-concept for Okrajs.


##Usage
Include the following `iframe` in your page:

    <iframe src="//www.anayltics.work/analytics-gadget.html" />
    

The analytics requires the application to define the following interface:

    Okra.define('get', 'title', function () {
        return document.title;
    }).allow('www.anayltics.work');


