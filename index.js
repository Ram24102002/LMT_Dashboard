



function callToast() {
    const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}}






// AI use policy alert


function SecurityAlert(){
    
    alert('Amazon Third-Party Generative AI use Policy prohibits sharing confidential information unless you obtain required approvals.')
    
}











