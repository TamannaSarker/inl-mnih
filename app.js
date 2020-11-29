

// inkomst  div: vi måste läsa den med querySelector 
// uppdatera med användarens inmatat data med textContent


// kostnad  div: vi måste läsa den med querySelector 
// uppdatera med användarens inmatat data med textContent


  

// form data: måste läsa när användare trycker på add button (event ska anropa nån function )


//inkomstlista , kostnadlista ska uppdateras med nya element. elementet ska ha sånt format:
           // beskrivning: 100 



            // användare mata in flera samma typ av data :
              // array av inkomst , array av kostnad : 
              
                       //InkomstArray= [1000, 2000]  : loopa igenom för att kunna räkna totalt 
                       //KostnadArray = [100, 200]  : loopa igenom för att kunna räkna totalt 
                       //inkomstArrayTotalt-konstnadArrayTotalt = vinst 

                       //alt : 

                       //arrayAllValues = [1000, 2000, -100, -200] = totalt  

                          // var summa = 0; 
                          // for( var i= 0; i<arrayAllValues.length; i++)
                            // arrayAllValues[i] //1000 , 2000, -100, -200
                           //  summa +=  arrayAllValues[i]  //1000 +2000 -100 -200 = 2700
                           //  console.log(summa);

                           // arrayValues= []
                           // array.push()

var valueLista = []; //globalt

function countTotalt(event){
   // sidan ska inte uppdateras 
      // data ska inte försvinnas 
  event.preventDefault();
    // om användare väljer plus : 
     

  var options =   document.querySelector("#selectOption")
  console.log(options.value)
   if(options.value === "+")
   {
    //console.log("hello ")

      //ska uppdateras : inkomst 
                          // - vinst
                          // -inkomstlista  

     var description=  document.querySelector("#description").value;
     var value=  document.querySelector("#value").value;

     //pusha value in i valueLista: 
     valueLista.push(   Number(value)    )
               //Number(value) konverterar value till siffra 

     // inkomst div > span :  value


                                         //  optional om du tar bort extra divar från html 
     var inkomstData = document.querySelector(".inkomstData")

     inkomstData.innerText = value;
                                         //  




     //inkomstlista : description och value

     // skapa en element: document.createElement("p")
     var li = document.createElement("li");

      li.innerText= description + "  :  " + value;

     var ul = document.querySelector(".listaIncome")

     ul.appendChild(li);

     // pusha elementet i en element: 


   }
   
   else if(options.value === "-" )
   {
     //om användare väljer minus: 
           //ska uppdateras : konstnad 
                     // -kostnadLista  
    var description =  document.querySelector("#description").value;
          var value =  document.querySelector("#value").value;
                           //pusha value in i valueLista: 
     valueLista.push(   Number(-value)    )
                                              //
     var kostnadData = document.querySelector(".kostnadData")
     kostnadData.innerText = value;
                                             //
     var li =  document.createElement("li");
     li.innerText = description + " : " + value;
     var ul = document.querySelector(".listaKostnad")
     ul.appendChild(li)
   }
console.log(valueLista)
   // - vinst
var summa = 0;
   for(var i= 0; i<valueLista.length; i++ ){
      summa += valueLista[i];
   }
   var vinstSpan = document.querySelector(".vinstData")

   vinstSpan.innerText = summa;


}

function rensa() {
  
     //js egna object och metod
       location.reload();
     // testa ta bort allt manuellt med js 
}


var btn = document.querySelector(".add");
btn.addEventListener("click" , countTotalt );


var clean = document.querySelector(".rensa")

clean.addEventListener("click", rensa )