$().ready(() => {
    $.getJSON("http://localhost:8080/Users/List")
    .then((data) => {
        console.log("Respnose to get JSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJson()");
    
})

render = (users) => {
    var tbody = $("#try1");
    users.data.map(user => {         
        var row = "";
        row += "<tr>";
        row += `<td>${user.id}</td>`;
        row += `<td>${user.userName}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstName}</td>`;
        row += `<td>${user.lastName}</td>`;
        row += `<td>${user.phoneNumber}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.reviewer}</td>`;
        row += `<td>${user.admin}</td>`;
        row += "</tr>";
        tbody.append(row);
    })
    $('#example').DataTable();
}
