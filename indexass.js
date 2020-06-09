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
$(function () {
    
    let count = 0;
    $("#demo").on("change", ":checkbox", function () {
        
        var checkstatus=this.checked;
        
        var promisee = new Promise(function (resolve, reject) {
            if(checkstatus === true)count++ ;
            console.log(count,checkstatus);
            if (count == 5) {
                resolve("Congratulation,you have complete 5 task today");
            }
        });
        promisee
            .then(function (f) {
                alert(f);
                count = 0;
            });
    });
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
              //var jtodo=response.todo;
            var jtodo = response;
           
            
            var output1="";
            for (let i = 0;i<jtodo.length; i++) {

                output1+="<li>"+jtodo[i].title+"<input type='checkbox'" + ((jtodo[i].completed=false) ? 'checked' : '') + " ></li>";

            }
            document.getElementById("demo").innerHTML=output1;
          
        }
    }
    //xhttp.open("GET","indexasstodos.json",true);
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    


});