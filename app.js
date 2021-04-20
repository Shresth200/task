var elements=[];
var input=document.querySelector("input");
window.onload=function(){
    if(JSON.parse(localStorage.getItem("elements"))!=null){
        elements=JSON.parse(localStorage.getItem("elements"));
        console.log("elements");
        display();
    }
};
function display(){
    document.querySelector(".list").innerHTML="";
    for(var i=elements.length-1;i>=0;i--){
        document.querySelector(".list").innerHTML+="<centre><div class='elements' align='centre' >" + elements[i] + "<img class='dustbin' src='user-trash-full-icon.png' align='right' height='25' width='25' onclick='del("+ i +")'</div></centre><br>";



    }
         
}
function addElement(){
    if(input.value.trim() !=""){
        elements.push(input.value.trim());
        localStorage.setItem("elements",JSON.stringify(elements));
        display();s
    }       
        
        
}
function del(index){
    elements.splice(index,1);
    localStorage.setItem("elements",JSON.stringify(elements));
    display();
}