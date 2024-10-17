function link(){
        var googleLink=document.getElementById("linkGoogle");
        googleLink.href="https://www.google.com"
    
    }
    
    function turnOn(){
        var on=document.getElementById("img");
        on.src="https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png"
        on.style.width="250px";
        // on.style.height="450px";
    
    }
    
    function turnOff(){
        var off=document.getElementById("img");
        off.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOzfvj4CDlwGDVlVhDJJaPHex1Uj6IpYPJw&s";
        off.style.width="250px";
        // off.style.height="450px";
    
    }
    
    var headingH1=document.getElementById("h1Heading");
    headingH1.style.color="red";
    headingH1.style.textDecoration="underline";
    
    var paragraphs=document.getElementsByClassName("paragraph");
    for (var i=0;i<paragraphs.length;i++){
        paragraphs[i].style.color="green";
        paragraphs[i].style.fontFamily="arial";
        paragraphs[i].style.fontStyle="italic";
    }
    
    function submit(){
        var nameElement=document.getElementById("name");
        var emailElement=document.getElementById("email");
        var passwordElement=document.getElementById("password");
        var gender= document.getElementsByClassName("gender");
    
        for(var i=0;i<gender.length;i++){
        
            if(gender[i].checked){
            console.log(gender[i].value);
            }
        }
    
        if (nameElement.value.trim() && emailElement.value.trim() && passwordElement.value.trim()){
        console.log(nameElement.value);
        console.log(emailElement.value);
        console.log(passwordElement.value);
        }
        else alert("All Fields required!!")
    }
