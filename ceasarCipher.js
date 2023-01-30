function ceaserCifer(string, shift) {
    let re = /[a-z]/
    let  plaintext = string.toLowerCase();


    if(plaintext.length < 1){ alert("please enter some plaintext"); return; }    
    ciphertext = "";

   

    for(i=0; i<plaintext.length; i++){ 

        if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + shift)%26 + 97); 
        else ciphertext += plaintext.charAt(i); 
    } 
    return ciphertext
}
module.exports  = ceaserCifer
 