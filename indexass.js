// let email1=document.getElementById("email1");
// let pwd=document.getElementById("pwd");
// function validate(){
     
//      if(email1.value==="admin"&&pwd.value==="12345")
//      {
//          error1.innerHTML=" emailand password are valid";
//          error1.style.color="green";
//          return true;
//     }
//      else 
//      {
//          error1.innerHTML=" email or password is invalid";
//          error1.style.color="red";
//          return false;
  
//      };
// }
// function validate()
// {
    
//          if(email1.value==="admin")
//          {
//              error1.innerHTML=" email is valid";
//              error1.style.color="green";
//              return true;
//         }
//          else 
//          {
//              error1.innerHTML=" email is invalid";
//              error1.style.color="red";
//              return false;
      
//          }
// }
//password validation
// function passtest()
// {
//      if (pwd.value==="123") { return true;}
//        else 
//        { error1.innerHTML="password is not valid";
//          error1.style.color="red";
//              return false; }

// }

function ajax()
{
    //creating an XHR object
var xhttp=new XMLHttpRequest();
//eventlistener
xhttp.onreadystatechange=function()
{
    //condition
    if(this.readyState==4&&this.status==200)
    {
        //document.getElementById("demo").innerHTML=this.responseText;
        var response=JSON.parse(this.responseText);//responseText holding content from people.json   
        //console.log(response);
        var jtodo=response;
        //var jtodo=response.todo;//. operater to access the array
        //console.log(jpeople);
        var output1="";
        var output2="";
        for(var i=0;i<jtodo.length;i++)
        {
         
            // output1+="<li>"+jpeople[i].name+"</li>";
            // output2+="<li>"+jpeople[i].gender+"</li>";

            // output1+="<ol>"+jtodo[i].title+"</ol>";
            // output1+= "<ol><input type='checkbox' class='chkbox'" + ((jtodo[i].completed == true) ? 'checked' : '') + " ></ol>";
            
            output1+="<li>"+jtodo[i].title+"<input type='checkbox' class='chkbox'" + ((jtodo[i].completed == true) ? 'checked' : '') + " ></li>";
            

            //var currentdata=jpeople[i];
            // output1+="<tr><td>"
            //         +jpeople[i].name+
            //         "</td><td>"
            //         +jpeople[i].gender+
            //         "</td></tr>";

        }
        //console.log(output);
        document.getElementById("demo").innerHTML=output1;
        //document.getElementById("demo").innerHTML=output1+"<br>"+output2;
    }
}
//xhttp.open("GET","indexasstodos.json",true);
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
// xhttp.open("GET","april27people.json",true);//april27ajax.txt/april26json.json,three object in an array
xhttp.send();  
}      
         


