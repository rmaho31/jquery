var nbr = 0;
$().ready(() => {
    $("#add").click(() => {
        nbr++;
        display(nbr);
    })
    $("#subtract").click(() => {
        nbr--;
        display(nbr);
    })
});

display = (nbr) => {
    $("#lbl").text(nbr)
        .css("color","black")
        .css("font-style","normal")
        .css("font-weight","normal");
        if(+($("#lbl").text())%2===0){
            $("#lbl").css("color","red")
        } 
        if(+($("#lbl").text())%7===0){
            $("#lbl").css("font-style","italic")
        } 
        if(+($("#lbl").text())%3===0){
            $("#lbl").css("font-weight","bolder")
        }
}

// loaded = () => {
//     document.getElementById("lbl").innerText = "Greg";
// }
// clicked = () => {
//     document.getElementById("lbl").innerText = document.getElementById("txt").value+1;
//     document.getElementById("txt").value = document.getElementById("txt").value+1;
//     clicked();
// }