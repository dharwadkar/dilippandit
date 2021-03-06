//Define the arrays for the links location

let links = new Array("index", "tripreps/", "stories/", "birdalbum", "delhibirds", "contactus");
let links_text = new Array("Home", "Trip Reports", "Stories", "Bird Album", "Birds around Delhi", "Contact Us");
let links_url = new Array("/index.html", "/tripreps/", "/stories/", "/birdalbum.html", "/delhibirds.html", "/contactus.html");
/*var links = new Array("tripreps/", "stories/", "birdalbum", "birdwatch", "delhibirds", "contactus", "faq", "aboutme");
var links_text = new Array("Trip Reports", "Stories", "Bird Album", "Bird Watching", "Birds around Delhi", "Contact Us", "FAQ", "About Me");
var links_url = new Array("/tripreps/", "/stories/", "/birdalbum.html", "/birdwatch.html", "/delhibirds.html", "/contactus.html", "/faq.html", "/aboutme.html");*/
//Resolve the location

let loc = String(this.location);

loc = loc.split("/");
if (loc.length === 4) {
    loc1 = loc[loc.length - 1];
    loc = loc[loc.length - 1].split(".")
    loc = loc[0]
} else {
    loc1 = loc[loc.length - 2];
    loc2 = loc[loc.length - 1].split(".");
    loc2 = loc2[0];
    //loc = loc1 + "/" + loc2;
    loc = loc1 + "/";
}

//Menu generating function
function dyn_menu_gen() {
    for (let i = 0; i < links.length; i++) {
        if (loc === links[i]) {
            document.write('<li class=\"btn active\"><a class="navi" href = \"#\">' + links_text[i] + '</a></li>');
        } else {
            //console.log("Links are: ", links[i]);
            //console.log("Links URL: ", links_url[i]);
            document.write('<li class=\"btn\"><a class="navi" href=\"' + links_url[i] + '\">' + links_text[i] + '</a></li>');
        }
        //document.write('<table.cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"><tr><td></td></tr></table>');
    }
}

//Now, generate the menu
document.write("<ul>");
dyn_menu_gen();
document.write("</ul>");