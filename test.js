var g=1;
var x=document.getElementById("inp");
var y;
function fun()
{
    if(x.value==""){
        return;
    }
    document.getElementById("contain").innerHTML+="<div id='container' class='"+g+"'><input type='checkbox' id='checkbox' /><span id='addrem' onClick='edit("+g+")'>"+x.value+"</span><div id='cross' onClick='rem("+g+")'>&#10060;</div><hr/></div>";
    g+=1;
    x.value="";
    x.focus();
}
function rem(id){
    var a=document.getElementsByClassName(id);
    a[0].parentNode.removeChild(a[0]);
}
function edit(clas){
    y=document.getElementsByClassName(clas)
    var change=y[0].childNodes[1];
    var create=document.createElement("input")
    create.type="text";
    create.id="change";
    create.value=change.innerHTML;

    var we=y[0].replaceChild(create,change);
    create.focus();
    create.addEventListener("keypress", (event)=>{
        if(event.key==="Enter"){
            we.innerHTML=create.value;
            y[0].replaceChild(change,create);
        }
    create.addEventListener("click",(event)=>{event.stopPropagation();
    })
    })
}



x.addEventListener("keypress",(ev)=>{
    if(ev.key==="Enter"){
        fun();
    }
});