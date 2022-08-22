const textarea = document.getElementById("story");
const word =document.getElementById("word");
const char =document.getElementById("char");

textarea.addEventListener('input', function(){
    let text = this.value;
    const charLength = text.length;
    text = text.trim(); // remove space from both the end of string
    let word = text.split(" "); // split text from spaces and convert into an array
    
    // function to remove empty element from array
    function cleanArray(word){
        return word != "";
    }
    // display total words
    document.getElementById("word").innerHTML = word.filter(cleanArray).length;
    // display total characters
    document.getElementById("char").innerHTML = charLength;
});