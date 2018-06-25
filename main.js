function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
 let data=JSON.parse(text);
 console.log(data);
 //function definitions
 fun_career(data.career);//here data.career menas calling caree object  of json file
 fun_education(data.education);//abstract function
 fun_achievement(data.achievements);
 fun_skills(data.skills);

});

var div2=document.getElementById("child2");

//career OBJECTIVE
function fun_career(career_obj){
//creating heading
  var heading1=document.createElement("h2");
  heading1.textContent="CAREER OBJECTIVE";
    div2.appendChild(heading1);
//horizontal line for heading
    var horz=document.createElement("hr");
      heading1.appendChild(horz);
//writing content under heading
      var info=document.createElement("p");
      info.classList.add("largeFont");
      div2.appendChild(info);
      info.textContent=career_obj.info;
}

//education details
function fun_education(edu){
  //creating heading
  var heading=document.createElement("h2");
  heading.textContent="EDUCATION QUALIFICATION";
    div2.appendChild(heading);
//horizontal line for heading
    var horz=document.createElement("hr");
      heading.appendChild(horz);
//creating unorder list
 var list=document.createElement("ul");
 //appending this element in div2
 div2.appendChild(list);

//displaying
 for(var i=0;i<edu.length;i++)
 {
 var listItem=document.createElement("li");
 listItem.style.fontWeight="550";
 listItem.style.fontSize="25px";

 listItem.textContent=edu[i].degree;
 list.appendChild(listItem);

 var listItem1=document.createElement("p");
 listItem1.textContent=edu[i].institute;
 list.appendChild(listItem1);

 var listItem2=document.createElement("p");
 listItem2.textContent=edu[i].data;
 list.appendChild(listItem2);

 }
}
 //achievementsfunction
  function fun_achievement(achieveObj){
 //creating heading
   var heading2=document.createElement("h2");
   heading2.textContent="ACHIEVEMENTS";
     div2.appendChild(heading2);
 //horizontal line for heading
     var horz=document.createElement("hr");
       heading2.appendChild(horz);
//creating unordere list
   var ul=document.createElement("ul");
   div2.appendChild(ul);
   //displaying content
    for(var i=0;i<achieveObj.length;i++)
       {

       var listItem1=document.createElement("li");
       listItem1.style.fontSize="20px";
       listItem1.innerHTML=achieveObj[i].name;
       ul.appendChild(listItem1);

       }
      }

 function fun_skills(tech)
 {
   //creating heading
     var heading2=document.createElement("h2");
     heading2.textContent="TECHNICAL SKILLS";
       div2.appendChild(heading2);
   //horizontal line for heading
       var horz=document.createElement("hr");
         heading2.appendChild(horz);
         var tr="";
   //creating table
     var table=document.createElement("table");
  div2.appendChild(table);
     //displaying content
      for(var i=0;i<tech.length;i++)
         {
          tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
         }
         table.innerHTML=tr;
         table.border="1";
        }
