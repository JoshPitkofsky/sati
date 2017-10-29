var apps = "Links to download meditation apps"
var breathing_written = "3-5-7 breathing description (with eyes open or closed) "
var scan_written = "Body scan description (with eyes open or closed)"
var visualization = "Visualization description"
var senses  = "Mindfulness with senses / certain activities description (make tea, eat, color, walk, etc)"
var walking = "NYT walking meditation"
var tea = "NYT mindful cup of tea"
var nyt_scan = "NYT body scan"
var calm_breath = "CALM mindfulness of breath audio"
var calm_scan = "CALM long body scan audio"
var calm_muscle = "CALM muscle relaxation audio"
var calm_walking = "CALM walking meditation audio"
var calm_sitting = "CALM sitting loving kindness meditation audio"
var calm_kindness = "CALM walking loving kindness meditation audio"
var youtube_waves = "YouTube 1: https://www.youtube.com/watch?v=Jyy0ra2WcQQ&t=201s (waves)"
var youtube_anxiety = "YouTube 2: https://www.youtube.com/watch?v=xoYnqvadurg"
var youtube_sleep  = "YouTube 3: https://www.youtube.com/watch?v=rR6DZz5EX4E"
var tara_vipassana = "Tara Brach vipassana meditation audio"
var tara_brief = "Tara Brach brief audio"
var tara_calm = "Tara Brach video (opening and calming)"


var techniques = {
apps : 1,
breathing_written : 0,
scan_written : 0,
visualization : 0,
senses  : 1,
walking : 1,
tea : 1,
nyt_scan: 1,
calm_breath : 1,
calm_scan : 1,
calm_muscle : 1,
calm_walking : 0,
calm_sitting : 1,
calm_kindness : 1,
youtube_waves : 1,
youtube_anxiety : 1,
youtube_sleep  : 1,
tara_vipassana : 1,
tara_brief: 1,
tara_calm : 1
}

sortList();

function sortList() {
    var sortable = [];
    for (var technique in techniques)
   
        if(techniques[technique]!= 0){
        sortable.push([technique, techniques[technique]])
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1]
    })
    var html = "";
    for (var i = 0; i < sortable.length; i++) {

    html += "<li><a href=\"#popupBasic\" data-rel=\"popup\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-inline\" data-transition=\"pop\">"+ eval(sortable[i][0]) +"</a></li>";
        
    // html += "<li><a href=\"#\"" +eval(sortable[i][0])+ " class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"+ eval(sortable[i][0]) +"</a></li>";

        // html += "<li><h2>";
        // html += eval(sortable[i][0]);
        // html += "</h2>";
        // html += "<div><p>";
        // html += eval(sortable[i][0]);;
        // html += "</p></div></li>";
        // html += "<li data-role=\"collapsible\" data-iconpos=\"right\" data-inset=\"false\" class=\"ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed ui-li-static ui-body-inherit ui-first-child\">";
        // html += "<h2 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\"><a href=\"#\" class=\"ui-collapsible-heading-toggle ui-btn ui-icon-plus ui-btn-icon-right ui-btn-inherit\">";
        // html += eval(sortable[i][0]);
        // html += "<span class=\"ui-collapsible-heading-status\"> click to expand contents</span>";
        // html += "</h2>";
        // html += "<p>";
        // html += eval(sortable[i][0]);
        // html += "</p></li>";
        // <h3 href=\"#\" class=\"ui-collapsible-heading-toggle ui-btn ui-icon-plus ui-btn-icon-right ui-btn-inherit\">"+eval(sortable[i][0]) + "</h3><div class=\"ui-collapsible-content ui-body-inherit ui-collapsible-content-collapsed\" aria-hidden=\"true\"><div class=\"ui-collapsible-content ui-collapsible-content-collapsed\" aria-hidden=\"true\"><p>"+eval(sortable[i][0])+"</p> </div></li>";

        // html += " <li data-role=\"collapsible\" data-iconpos=\"right\" data-inset=\"false\"><h3>" + eval(sortable[i][0]);
        // html += "</h3><p>" + eval(sortable[i][0])+" </p></li>";
    }
    document.getElementById("medlist").innerHTML = html;
}

// "<li data-role=\"collapsible\" data-iconpos=\"right\" data-inset=\"false\" class=\"ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed ui-li-static ui-body-inherit ui-first-child\"><h3 class=\"ui-collapsible-heading ui-collapsible-heading-collapsed\"><a href=\"#\" class=\"ui-collapsible-heading-toggle ui-btn ui-icon-plus ui-btn-icon-right ui-btn-inherit\">"+eval(sortable[i][0]) + "<span class=\"ui-collapsible-heading-status\">"+ click to expand contents+"</span></a></h3><div class=\"ui-collapsible-content ui-body-inherit ui-collapsible-content-collapsed\" aria-hidden=\"true\"><p>"+eval(sortable[i][0])+" </p></div></li>";


function crisis() {
    /*	Make meditation specific changes here
    	Addition means worse choice for helping student
    	Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('crisis').checked;
    if (checkedValue) {
    	techniques.breathing_written = 0;
        techniques.scan_written = 0;
        techniques.visualization = 0;
        techniques.nyt_scan = 0;
        techniques.calm_scan = 0;
        techniques.youtube_anxiety = 0;
        techniques.calm_walking = 2;
        sortList();
    } else {
        techniques.breathing_written = 1;
        techniques.scan_written = 1;
        techniques.visualization = 1;
        techniques.nyt_scan = 1;
        techniques.calm_scan = 1;
        techniques.youtube_anxiety = 1;
        techniques.calm_walking = 1;
        sortList();
    }
}

function emotions() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('emotions').checked;
    if (checkedValue) {
        techniques.breathing_written = 0;
        techniques.scan_written = 0;
        techniques.visualization = 0;
        techniques.nyt_scan = 0;
        techniques.calm_scan = 0;
        techniques.youtube_anxiety = 0;
        techniques.senses = 0;
        sortList();
    } else {
        techniques.breathing_written = 1;
        techniques.scan_written = 1;
        techniques.visualization = 1;
        techniques.nyt_scan = 1;
        techniques.calm_scan = 1;
        techniques.youtube_anxiety = 1;
        techniques.calm_walking = 1;
        techniques.senses = 1;

        sortList();
    }
}









