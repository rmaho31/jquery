$().ready(() => {
    $.getJSON("http://localhost:8080/Users/Get/2")
    .then((data) => {
        console.log("Response to getJSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJSON()");
})

render = (user) => {
    user = user.data;
    $("#pid").val(user.id);
    $("#pname").val(user.firstName +" "+ user.lastName);
    $("#pusername").val(user.userName);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
    $('example').DataTable();
}