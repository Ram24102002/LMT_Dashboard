var timestampOutput = document.getElementById('timestamp-output');
var timestamp5Output = document.getElementById('timestamp-5-output');
var timestamp10Output = document.getElementById('timestamp-10-output');
const body = document.body;





function timestampCreator(){



    var time = Math.round(Date.now()/1000)
    five=time+300;
    ten= time+600;

console.log("Timestamp = " ,time);
console.log("Timestamp + 5 min = " ,ten);
console.log("Timestamp + 10 min = " ,ten);

 
timestampOutput.value=time;
timestamp5Output.value=five;
timestamp10Output.value=ten;

    
}

// time--------------------->>>>>>>>>>>>>>>>
timestampOutput.addEventListener("click", function(){
    timestampOutput.select();
        navigator.clipboard.writeText(timestampOutput.value);
        notify();
 })

// five--------------------->>>>>>>>>>>>>>>>
 timestamp5Output.addEventListener("click", function(){
    timestamp5Output.select();
        navigator.clipboard.writeText(timestamp5Output.value);
    notify();
 })

// ten--------------------->>>>>>>>>>>>>>>>
// Ensure the element exists before adding event listener


if (timestamp10Output) {
    timestamp10Output.addEventListener("click", function() {
        timestamp10Output.select();
        navigator.clipboard.writeText(timestamp10Output.value);
        notify();
    });
}

function closeWindow() {
    window.open(window.location, '_self').close();
}






function notify() {
    console.log('notify() function called'); // Debugging log

    // Create the notification div
    const notification = document.createElement('div');
    notification.id = 'notify';
    notification.innerHTML = 'Timestamp Copied... 👍'; // Change this to whatever message you want

    // Styling the notification
    notification.style.color = 'white';
    notification.style.backgroundColor = 'gray';
    notification.style.padding = '6px';
    notification.style.borderRadius = '5px';
    notification.style.border = 'none';
    notification.style.position = 'fixed';  // Use fixed position to ensure it's visible
    notification.style.bottom = '10px';
    notification.style.right = '10px';
    notification.style.zIndex = '1000';  // Make sure it's on top of other elements
    notification.style.cursor = 'pointer';
    notification.style.display= 'flex';
    notification.style.justifyContent='center';
    notification.style.alignItems='center';

    // Append to body
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
