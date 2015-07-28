// analytics.org/scripts/main.js
;(function () {
    'use strict';
    /* global Okra, document */

    var site = Okra.inlet(
        '_parent', 
        'https://okra-demo-app.omardo.com'
    );


    var visits = 'visits_' + document.referrer;
    
    // TODO: Convert to `trackPage` function call.
    site.get('title', function (title) {
        document.getElementById('response').value = title;
    });
}());

