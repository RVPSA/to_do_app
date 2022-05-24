var inputElement = document.querySelector("input");
var formElement = document.querySelector("form");
var listElement = document.querySelector("ul");
var spanElement = document.querySelector("#span1");

var tasks = ['Go to shop','Settle Electricity bill'];

function listPopulate(){
    tasks.forEach(function(item){
        var newLi = document.createElement("li");
        //add span tag for text
        var spanEle = document.createElement("span");
        spanEle.innerHTML = item;
        newLi.appendChild(spanEle);
        
        //add anchor tag for delete
        var anchorEle = document.createElement('a');
        anchorEle.classList.add('Delete');
        anchorEle.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
        newLi.appendChild(anchorEle);

        listElement.appendChild(newLi);
    });
    spanElement.innerHTML = tasks.length;
}

listPopulate();