document.getElementById('input').addEventListener('input', function() {
    document.getElementById('qrcode').innerHTML = ""; // Use the correct string ID
    Hi(); // Trigger the Hi() function
});

function Hi() {
    var inputElement = document.getElementById('input');
    var inputValue = inputElement.value;

    // Ensure the 'qrcode' element exists before proceeding
    if (document.getElementById('qrcode')) {
        new QRCode(document.getElementById('qrcode'), inputValue); // Generate QR Code
    }
}




// function Hi(){
//     var inputElement= document.getElementById('input')
//     var inputValue=inputElement.value;
    
//     new QRCode(qrcode, inputValue );
// }


// document.getElementById('input').addEventListener('input', function(){
    
    
//         document.getElementById(qrcode).innerHTML = "";
//         Hi();
    
// })







// var nestedArr=[[1,2,3],[4,5,6],[7,8,9]]

// for(var i=0;i<nestedArr.length; i++)
// {
//     for(var j=0;j<arr[i].length; j++)
//         {

//             product*=arr[i][j];
//             console.log(product);
//         }
// }



// myArray =[1,2,3,4,5];
// saveArr=0;
// for(var i=0;i<myArray.length;i++)
// {
//     saveArr+=myArray[i];
    
// };


// console.log(saveArr);





// myArray =[];

// for(var i=1;i<=5;i+=2)
// {
//     myArray.push(i);
// };

// console.log(myArray);




// function lookup(val){
//     var result ="";
   
// var object = {
//     "name":"ram",
//     "age":18
// };

// result = object[val];
// return result;

// // var b= object.age;
// // console.log(b);

// // object['color']="green";

// // console.log(object.color);



// }
// console.log(lookup("name"));


    

// var input = document.getElementById('input');

// var a = Number(input.value);
// var b;
// var c;
// function add(b){
//     c=a+b
//     console.log(c)
//     return c;
// }
// add(5);