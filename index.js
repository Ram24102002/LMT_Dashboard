
function callToast() {
  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastTrigger.addEventListener('click', () => {
  toastBootstrap.show()
})
}}




function sendEmail(){
  sendEmail.send({
    Host : "smtp.google.com",
    username : "lucifersprimeacc@gmail.com",
    password : "lucifer@password",
    To : "ramachandran24102002@gmail.com",
    From : document.getElementById("alieas").value,
    subject : "New Button Request",
    Body : document.getElementById("textarea")
  }).then(
    message => alert(message)
  );
}




// AI use policy alert


function SecurityAlert(){
    
    alert('Amazon Third-Party Generative AI use Policy prohibits sharing confidential information unless you obtain required approvals.')
    
}




// QR GENERATOR

document.getElementById('QR-input').addEventListener('input', function() {
  document.getElementById('qrcode').innerHTML = ""; // Use the correct string ID
  Hi(); // Trigger the Hi() function
});

function Hi() {
  var inputElement = document.getElementById('QR-input');
  var inputValue = inputElement.value;

  // Ensure the 'qrcode' element exists before proceeding
  if (document.getElementById('qrcode')) {
      new QRCode(document.getElementById('qrcode'), inputValue); // Generate QR Code
  }
}







