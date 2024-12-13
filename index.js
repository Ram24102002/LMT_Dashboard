
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










