//var button = document.getElementsByTagName("button")[0];
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
// querying elements by using id in html 
var ul = document.querySelector("ul")
button.addEventListener("click", function(){
    if (input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        //see parent child hierarchiy picture of dom basics
        ul.appendChild(li)
        //empty string after submission
        input.value = ""
    }
})