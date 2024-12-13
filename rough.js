var dropdown = document.getElementById('dropdown');
const oss1 = document.getElementById('OSS1');
const oss2 = document.getElementById('OSS2');
const oss3 = document.getElementById('OSS3');
var input =document.getElementById('input');


function OSS(){
    // console.log("hi")
    if(dropdown.value == oss1.value )
    {
        input.innerHTML= myVariable + myVariableOssTwo +  "}";

  
  console.log(myVariable);  // Output the string
  
        
    }
    else if(dropdown.value == oss2.value )
        {
            input.innerHTML= myVariableOssTwo + "}";
    
      
      console.log(myVariableOssTwo);  // Output the string
      
            
        }
        else if(dropdown.value == oss3.value )
          {
              input.innerHTML= myVariableOssTwo + "}";
      
        
        console.log(myVariableOssTwo);  // Output the string
        
              
          }
    else
    {
        console.log("No")
    }


}



// JSON object
const ossOne = {
    
}
        

    // Convert JSON to string
    const jsonString = JSON.stringify(ossOne,null,4);
    let myVariable = jsonString;






    // JSON object
const ossTwo = {

    "deliveryWindow": {
      "deliveryDay": 0,
      "hourSlot": 1,
      "minutes": 0,
      "serviceType": "NEXT_HOUR"
    },
    "numOfTRs": 1,
    "trObjectAttribute": "NORMAL",
    "transportRequestType": "EXECUTION",
    "alcoholDelivery": "NO_ALCOHOL",
    "clientAccountId": "COMP",
    "destinationAddressId": "RWBMQ373YV7OEMAVILVEG12Z637WC8N8ZA2DZ8N8CW736ZNPXTQ2EIA2OXLG5557",
    "originAddressId": "",
    "validatecall": true
  };
  
  // Convert JSON to string
  const jsonStringOssTwo = JSON.stringify(ossTwo,null,4);
  let myVariableOssTwo = jsonStringOssTwo;

//   console.log(myVariableOssTwo);
  
  