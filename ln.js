        function ln()  {
            
              var dt=Number(document.getElementById("dt").value);
               var cp=Number(document.getElementById("sp").value);
                              var ck=Number(document.getElementById("ck").value);
                              var ln = ((dt - cp)*ck);   
         document.getElementById("ln").value= ln;
         if(ln>=0){
              document.getElementById("thongbao").innerHTML= "tháng này ấm no :)";
            }
        else{
                 document.getElementById("thongbao").innerHTML= "tháng này đói meo :(";

        }
        }
        function rs(){
              document.getElementById("thongbao").innerHTML= "";
        }
        


