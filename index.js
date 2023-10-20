//var button = document.getElementsByTagName("button")[0];
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
// querying elements by using id in html 
let button2 = document.createElement('BUTTON');
let text = document.createTextNode("DELETE");
button2.appendChild(text);



var ul = document.querySelector("ul")
button.addEventListener("click", function(){
    if (input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        //see parent child hierarchiy picture of dom basics
        ul.appendChild(li)
        li.appendChild(button2)
        //empty string after submission
        input.value = ""
    }
li.addEventListener("click",function(){
    li.classList.toggle("done");
})
button2.addEventListener("click",function(){
    button2.remove();
})
})