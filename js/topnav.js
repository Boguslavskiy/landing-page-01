var openTopNav = false;
function topNavigation(){
    openTopNav = !openTopNav;
    var x = document.getElementById('myTopNav');
    if(openTopNav == true){
        x.className = "topnav-on";
    }
    if(openTopNav == false){
        x.className = "topnav-off";
    }
}