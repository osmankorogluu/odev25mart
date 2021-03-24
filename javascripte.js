const secili=document.getElementById("secili")
const hepsi =document.getElementById("hepsi")
var e = document.getElementById("selectedvalue");
let kadin=["Fatma","Ayşe","Gamze","Eylül","Ece"]
let erkek=["Ahmet","Batuhan","Ömer","Sedat","Fatih"]
let erkekkadinselect=""
secili.addEventListener("click",seciliGetir)
hepsi.addEventListener("click",hepsiGetir)

e.onchange=function()
{
        var strerkekkadin= e.options[e.selectedIndex].value;
        erkekkadinselect=strerkekkadin

}
function hepsiGetir()
{
        document.getElementById("list-group").innerHTML="" 
        kadin.forEach(x=>{
                addTodoToUı(x)
        })
        erkek.forEach(x=>{
                addTodoToUı(x)
        })
}
function seciliGetir()
{
      if (erkekkadinselect==="erkek") {
              document.getElementById("list-group").innerHTML=""
              erkek.forEach(x=>{
                      addTodoToUı(x)
              })
        }
        if (erkekkadinselect==="kadin") {
                document.getElementById("list-group").innerHTML=""
                kadin.forEach(x=>{
                        addTodoToUı(x)
                })
          }

              
      
       
}
function addTodoToUı(value){
        var node = document.createElement("LI");
        var textnode= document.createTextNode(value);
        node.appendChild(textnode);
        document.getElementById("list-group").appendChild(node);

}

