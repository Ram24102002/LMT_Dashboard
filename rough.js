// ==UserScript==
// @name         Avoid Unauthorized RTM Script-1
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button that redirects to another page
// @author       You
// @match        https://coral.amazon.com/RabbitTestManager/Gamma/explorer
// @grant        none
// ==/UserScript==

// (function() {
    'use strict';

    // Create the button
    
    // var redirectButton = document.createElement('button');

    redirectButton.position ='fixed' ;
    redirectButton.innerHTML ='screenshot' ;
    redirectButton.style.color = 'yellow';
    redirectButton.style.backgroundColor = 'red';
    redirectButton.style.padding = '6px';
    redirectButton.style.borderRadius = '5px';
    redirectButton.style.float = 'right';
    redirectButton.style.cursor = 'pointer';
    
    document.body.appendChild(redirectButton)
    
    console.log('hello')



   function screenshot(){
        var content=document.getElementById('content');
        html2canvas(content).then(
            function (canvas){
                document.getElementById('image').appendChild(canvas);
            }
            
        )
        

    }


function onclick(){
    window.
}





(function() {
    'use strict';

    // Create a button to trigger the screenshot
    const screenshotButton = document.createElement('button');
    screenshotButton.textContent = 'Take Screenshot';
    screenshotButton.style.position = 'fixed';
    screenshotButton.style.bottom = '10px';
    screenshotButton.style.right = '30px';
    screenshotButton.style.zIndex = 9999;
    screenshotButton.style.height = '50px';
    screenshotButton.style.width = '150px';
    document.body.appendChild(screenshotButton);

    // Include the html2canvas library via CDN
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js";
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.head.appendChild(script);

    // Once the script is loaded, attach an event listener to your button
    script.onload = function() {
        screenshotButton.addEventListener('click', function() {
            var content=document.getElementById('content');
        html2canvas(content).then(
            function (canvas){
                document.getElementById('image').appendChild(canvas);
            }
            
        )

            

               

                // Convert the new canvas to a data URL (base64 image)
                const screenshotUrl = canvas.toDataURL('image/png');

                // Create a link element to download the screenshot
                const link = document.createElement('a');
                link.href = screenshotUrl;
                link.download = 'screenshot.png'; // Name of the downloaded file
                document.body.appendChild(link);
                link.click(); // Trigger the download
                document.body.removeChild(link); // Clean up the DOM
            });
        };
    })();
    









console.log('hi')
