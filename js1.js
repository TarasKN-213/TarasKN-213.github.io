
var whitebutton = document.getElementById("whitebutton");
var blackbutton = document.getElementById("blackbutton");
function White(el){
    if(blackbutton != null){
        if(blackbutton.style.display == "block"){
            blackbutton.style.display = 'none';
        }
        else{
            blackbutton.style.display = 'block';
            whitebutton.style.display = 'none';
        }
        return false;
    }
}
function Black(el){
    if(whitebutton != null){
        if(whitebutton.style.display == "block"){
            whitebutton.style.display = 'none';
        }
        else{
            whitebutton.style.display = 'block';
            blackbutton.style.display = 'none';
        }
        return false;
    }
}
var main_cont = document.getElementById("main_cont");
var main_news = document.getElementById("main_news");
var headertop_main = document.getElementById("headertop_main");
function BlackThm(el){
main_cont.style.backgroundColor = "#999191";
main_news.style.color = "#fff";
headertop_main.style.backgroundColor = "#995656";
}

function WhiteThm(el){
main_cont.style.backgroundColor = "";
main_news.style.color = "";
headertop_main.style.backgroundColor = "";
}




whitebutton.addEventListener("click", White);
blackbutton.addEventListener("click", Black);

whitebutton.addEventListener("click",WhiteThm);
blackbutton.addEventListener("click", BlackThm);
