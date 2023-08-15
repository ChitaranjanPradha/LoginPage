function passcheck(){
    var a = document.jarvis.uid.value;
    var b = document.jarvis.pass.value;
    if(a=="Astoria" && b== "Astoria"){
        
        setTimeout(function() {
            window.location="home.html";}, 1);
    }
    if (a!="Astoria" && b!= "Astoria"){
        alert("User not found");
        return false;
        // setTimeout(function() {
        //     window.location="Login.html";}, 1);
    }
    else if(a != "Astoria"){
        alert("Wrong user Id");
        return false;
        // setTimeout(function() {
        //     window.location="Login.html";}, 1);
    }
    else if(b != "Astoria"){
        alert("Wrong password");
        return false;
        // setTimeout(function() {
        //     window.location="Login.html";}, 1);
    }
}