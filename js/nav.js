//Define the arrays for the links location

var links = new Array("necorner", "tripreps", "stories", "birdalbum", "birdwatch", "delhibirds", "contact", "faq");
var links_text = new Array("North-East Corner", "Trip Reports", "Stories", "Bird Album", "Bird Watching", "Birds around Delhi", "Contact Us", "FAQ");
var links_url = new Array("necorner.html", "tripreps.html", "stories.html", "birdalbum.html", "birdwatch.html", "delhibirds.html", "contactus.html", "faq.html");

//Resolve the location

var loc = String(this.location);

loc = loc.split("/");
loc = loc[loc.length - 1].split(".");
loc = loc[loc.length - 2];

//Menu generating function
function dyn_menu_gen() {
    for (var i = 0; i < links.length; i++) {
        if (loc == links[i]) {
            document.write('<li class=\"btn active\"><a href = \"#\">' + links_text[i] + '</a></li>');
        } else {
            document.write('<li class=\"btn\"><a href=\"' + links_url[i] + '\">' + links_text[i] + '</a></li>');
        }
        //document.write('<table.cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"><tr><td></td></tr></table>');
    }
}

//Now, generate the menu
document.write("<ul class=\"main-menu\" > ");
dyn_menu_gen();
document.write("</ul>");