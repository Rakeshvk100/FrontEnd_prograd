var array = [
    {

 id:"1",
 title:"the jolly frog",
 author:"tina twinkly",
 subject:"art & design",
 pdate:"12-02-2021"
},
{

    id:"2",
    title:"number the stars",
    author:"lois lowry",
    subject:"horror",
    pdate:"10-08-2000"
   }, {

    id:"3",
    title:"dark tower",
    author:"stephen king",
    subject:"story",
    pdate:"22-08-2020"
   }, {

    id:"4",
    title:"a passage to india",
    author:"e.m.forster",
    subject:"history",
    pdate:"14-09-2016"
   }, {

    id:"5",
    title:"lords of the rings",
    author:"j.r.tolkien",
    subject:"social",
    pdate:"01-02-2021"
   }

]

//show table

function showtable(curarray){

document.getElementById("mytable").innerHTML=`

<tr class="bg-primary text-white fw-bold">
<td>ID</td>
<td>TITLE</td>
<td>AUTHOR</td>
<td>SUBJECT</td>
<td>PUBLISHED-DATE</td>
</tr>
`;

//FOR CHECKING ARRAY IS EMPTY

if(curarray==""){
    document.getElementById("error").innerHTML=`<span class="text-danger">Not Found</span>`
}
else{
    document.getElementById("error").innerHTML="";

    for(var i=0;i<curarray.length;i++){

  document.getElementById("mytable").innerHTML +=`
  <tr>
  <td>${curarray[i].id}</td>
  <td>${curarray[i].title}</td>
  <td>${curarray[i].author}</td>
  <td>${curarray[i].subject}</td>
  <td>${curarray[i].pdate}</td>
  </tr>`



    }
}



}

//calling 
showtable(array);

//take filtered data array

var newarr = [];

//for searching methods

document.getElementById("search").addEventListener("keyup",function(){

var search=this.value.toLocaleLowerCase();

newarr = array.filter(function(val){

    if(val.id.includes(search) || val.pdate.includes(search)  || val.title.includes(search)  || val.author.includes(search)  || val.subject.includes(search)){

  var newobj ={id:val.id, title:val.title,author:val.author,subject:val.subject,pdate:val.pdate};
  return newobj;

    }



})

showtable(newarr);



})