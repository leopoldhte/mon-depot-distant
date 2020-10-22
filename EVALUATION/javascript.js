
// EXERCICE 1

 var bouton1= document.getElementById("Id_btn1");
 bouton1.addEventListener("click",clickbtn1);

 function clickbtn1()
 {
var ageinf20 =0;
var ageinf40 =0;
var agesup40 =0;
var message ="";

do{
var age = prompt("Saisir l'age de l'individu" );
if (age=="" || age==null || age==0){
    ageinf20=ageinf20;
    alert("Mauvaise saisie !");
}
else if(age<20){
    ageinf20=ageinf20+1;
}
else if(age<=40){
    ageinf40=ageinf40+1;
}
else {
    agesup40=agesup40+1;
}
}
while(age<100)
message=message+ageinf20+" personne(s) ont moins de 20 ans"+"\n"
+ageinf40+ " de personne(s) ont entre 20 et 40 ans" +"\n" 
+agesup40 +  " de personne(s) ont plus de 40 ans";

alert(message);
}



// EXERCICE 2 

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2()
{
function multiplication()
{
var n = parseInt(prompt("Entrez un nombre :"));
var message = "";

for (i = 0; i<11; i++)
{
  resultat = n * i;
  message = message + "\n" +n+"*"+i+"="+resultat ;
}
alert(message)
}

multiplication()
};

// EXERCICE 3 


var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3()
{
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var saisie = prompt("Entrez l'élément à retirer :\n" + tab);

 

    if (saisie === "Audrey")
    {
        tab.shift();
      	tab.push(" ");
      	alert("Audrey");
    }
			

    else if (saisie === "Aurélien")
    {
        tab.splice(1, 1);
      	tab.push(" ");
      	alert("Aurélien"); 
    }


    else if (saisie === "Flavien")
    {
        tab.splice(2, 1);
   			alert("Flavien");
      	tab.push(" ");
    }
			

    else if (saisie === "Jérémy")
    {
        tab.splice(3, 1);
   			alert("Jérémy");
      	tab.push(" ");
    }
			

    else if (saisie === "Laurent")
    {
        tab.splice(4, 1);
    		alert("Laurent");
      	tab.push(" ");
    }
			

    else if (saisie === "Melik")
    {
        tab.splice(5, 1);
    		alert("Melik");
      	tab.push(" ");
    }
			

    else if (saisie === "Nouara")
    {
        tab.splice(6, 1);
    		alert("Nouara");
      	tab.push(" ");
    }
			

    else if (saisie === "Salem")
    {
        tab.splice(7, 1);
    		alert("Salem");
      	tab.push(" ");
    }
			

    else if (saisie === "Samuel")
    {
        tab.splice(8, 1);
    		alert("Samuel");
      	tab.push(" ");
    }
			

    else if (saisie === "Stéphane")
    {
        tab.pop();
    		alert("Stéphane");
      	tab.push(" ");
    }

	  else if (saisie != "")
     {
       alert("Vous avez saisi un mauvais prénom");
     }
			

    alert(tab)
};


// EXERCICE 4

var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{

    var pu = parseInt(prompt("Saisir le prix unitaire :"));
    var qtecom = parseInt(prompt("Saisir la quantité commandée :"));
    var tot = (pu * qtecom);
    var rem;
    var port;

		if (100 <= tot && tot <= 200)
    {
        rem = "5%";
        port = 6;
      	tot = tot * 0.95 + port; 
    }


    else if (tot > 200)
    {
        rem = "10%";
        tot = tot * 0.9;
        if (tot >= 500)
        {
            port = "OFFERT";
            tot = tot;
        }    	
    


    else if (tot >= 300)
    {
        port = "2%";
      	tot = tot + tot * 0.02;
    }

    

     else 
    {
        port = 6;
      	tot = tot + 6;
    }
  }    
    

 		else
    {
        rem = "0%"
        port = "6€";
      	tot = tot + 6;
    }

  alert("Le prix unitaire est de "+pu+"€\nLa quantité commandée est de "+qtecom+"\nNous vous offrons une remise de "+rem+
  "\nLes frais de port sont de "+port+"\nLe prix à payer est de "+tot.toFixed(2)+"€\n L'équipe vous remercie pour votre commande !\n A Bientôt !");

};


// EXERCICE 5

function ValidateEmail(inputText)
{
    var mailformat = /.+@.+\..+/;
        if(inputText.value.match(mailformat))
        {
            document.form1.text1.focus();
            return (true);
        }
        else
        {
            alert("Entrez une adresse mail valide !");
            document.form1.text1.focus();
            event.preventDefault();
            return (false);
        }
};
