// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm");
var masaiForm=JSON.parse(localStorage.getItem("schedule")) || [];
form.addEventListener("submit",myfunction)
function myfunction()
{
    event.preventDefault();
    var data={
        matchNum:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value,
        
        
    };
    masaiForm.push(data);
    localStorage.setItem("schedule",JSON.stringify(masaiForm))
}
