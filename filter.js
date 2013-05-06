var stream = document.querySelector("#globalContainer");
var working = false;

function filter(){

    if(localStorage.getItem("disabled"))
        return;

    var stories = stream.querySelectorAll(".storyInnerContent");
    working = true;
    for(var i=0; i < stories.length; i++){
        var story = stories[i];
        var content = story.textContent;

        if(!story.classList.contains("brotherdone") && /דיירים|אח הגדול/.test(content)){

            toggle(story, false);

            var more = document.createElement("A");
            more.innerHTML = "אני רוצה לראות זבל";
            more.style.fontSize = "9px";

            var brother = document.createElement("div");
            brother.classList.add("antibrother");
            brother.innerHTML = "<h1 style='line-height: 80px; display: inline-block; margin: 0 10px;'>פח</h1>";
            brother.appendChild(more);

            story.appendChild(brother);

            attach(more, story);
            story.classList.add("brotherdone")
        }
    }
    working = false;

}

function attach(button, element){
    button.addEventListener("click", function(){
        toggle(element, true);
    });
}

function toggle(element, isShow){
    var children = element.childNodes;
    for(var z=0; z<children.length; z++)
        children[z].style.display = (isShow)? "block" : "none";

    var button = element.querySelector(".antibrother");
    if(button)
        button.style.display = (isShow)? "none" : "block";
}

if(stream){

    filter();

    stream.addEventListener("DOMNodeInserted", function (ev) {
        if(!working)
            filter();
    }, false);
}