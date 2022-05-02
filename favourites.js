// write js code here corresponding to favourites.html
var favdata=JSON.parse(localStorage.getItem("favourites"));
favdata.forEach(function (elem)
{
    var tr1=document.createElement("tr");
    var matchno=document.createElement("td");
    matchno.innerText=elem.matchNum;
    var teama=document.createElement("td");
    teama.innerText=elem.teamA;
    var teamb=document.createElement("td");
    teamb.innerText=elem.teamB;
    var date=document.createElement("td");
    date.innerText=elem.date;
    var venue=document.createElement("td");
    venue.innerText=elem.venue;
    var td1=document.createElement("td");
    var fav=document.createElement("button");
    fav.innerText="Remove as Favourite";
    fav.addEventListener("click",delfav);
    function delfav()
    {
        matchno.innerText="";
        teama.innerText="";
        teamb.innerText="";
        date.innerText="";
        venue.innerText="";
        fav.innerText="";

    }
    td1.append(fav);
    tr1.append(matchno,teama,teamb,date,venue,td1);
    document.querySelector("#display").append(tr1);
});