﻿function detectScreen() {
    var screenWidth = screen.availWidth;

    if (screenWidth < 550) {
       
            $("#mobileMain").load("mobileMain.html");
      
    }
    else {
      
            $("#desktopMain").load("desktopMain.html");
   
    }
    
}