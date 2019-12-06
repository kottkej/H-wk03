//Variables
    var charNum = document.getElementById("charNum");
    var symBox = document.getElementById("symfull");
    var numBox = document.getElementById("nbrs");
    var submit = document.getElementById("submit");
    var yourPW = document.getElementById("yourPW");
    var uppercase = document.getElementById("uppercase");
    var lowercase = document.getElementById("lowercase");
    var bothupperlower = document.getElementById("bothupperlower");

//set possible password values
    let upperchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerchar ="abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    //testing only     let symshort = "!#$%&";
    let bothupperlowerchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let symfull = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~;";

//prep sumbit eventlistener 

submit.addEventListener("click",function(e){
    e.preventDefault()
    var characters = "";
    (uppercase.checked) ? characters += upperchar : '';
    (lowercase.checked) ? characters += lowerchar : '';
    (bothupperlower.checked) ? characters += bothupperlowerchar : '';
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += symfull : '';

    // Test if user selected between8 and 128 characters
    if (parseInt(charNum.value) < 8 || parseInt(charNum.value) > 128 ) {
        alert ("You must select between 8 and 128 characters")
     }
    
    else {
    // Calls the function
        yourPW = generate(charNum,characters);
    }
    }
    )

//generate random password
function generate(length, characters) {

    //set password length
    let complexity = document.getElementById("charNum").value;  
    
    //set password contents
    let password = "";

    //create loop to choose password characters
    for(let i = 0; i < complexity; i++){
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }

    //for testing purposes
    console.log(password);
    //add password to display area 
    document.getElementById("display").value = password;
}

//Copy to the clipboard
function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("display");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }