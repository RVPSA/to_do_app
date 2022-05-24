var inputElement = document.querySelector("input");
var formElement = document.querySelector("form");
var listElement = document.querySelector("ul");
var spanElement = document.querySelector("#span1");

var tasks = ['Go to shop','Settle Electricity bill'];

function deleteItem(e){
    var find = e.target.parentElement.previousElementSibling.innerHTML;
    //when we press delete button element is 'i', parentelement is 'a' and 
    //previousElementSibling is 'span'
    var index = tasks.indexOf(find);//get the inde of that element and delete if 
    //index value is not equal to -1 that means it's found
    if(index!==-1){
        tasks.splice(index,1);
    }
    listPopulate();
}

function listPopulate(){
    listElement.innerHTML='';
    inputElement.value='';
    tasks.forEach(function(item){
        var newLi = document.createElement("li");
        //add span tag for text
        var spanEle = document.createElement("span");
        spanEle.innerHTML = item;
        newLi.appendChild(spanEle);
        
        //add anchor tag for delete
        var anchorEle = document.createElement('a');
        anchorEle.classList.add('Delete');//delete class to the html file
        anchorEle.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
        newLi.appendChild(anchorEle);
        anchorEle.addEventListener('click',(e)=>deleteItem(e))

        listElement.appendChild(newLi);
    });
    spanElement.innerHTML = tasks.length;
}

listPopulate();

//restricted, can't add empty values
function isWhiteSpace(s){
    var whitespace = s.trim;
    return whitespace.length > 0;// if this is true it doesn't have whiite spaces
    
}

function addTask(){
    if(inputElement.value && isWhiteSpace(inputElement.value)){
        tasks.push(inputElement.value);
        listPopulate();
        
    }
}

formElement.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
});