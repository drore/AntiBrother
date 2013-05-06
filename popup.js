var button = document.querySelector(".button");
var value = !!localStorage.getItem("disabled");
button.addEventListener("click", function(){
    value = !value;
    setLabel(value);
});

function setLabel(isDisabled){
    localStorage.setItem("disabled", isDisabled);
    if(isDisabled){
        button.innerHTML = "Enable";
    } else {
        button.innerHTML = "Disable";
    }
}

setLabel(value);

