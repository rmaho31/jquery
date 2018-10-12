$().ready(() => {
    $.getJSON("http://localhost:8080/Vendors/List")
    .then((data) => {
        console.log("Respnose to get JSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJson()")
    
})

render = (vendors) => {
    var tbody = $("#try1");
    vendors.data.map(vend => {         
        var row = "";
        row += "<tr>";
        row += `<td>${vend.id}</td>`;
        row += `<td>${vend.code}</td>`;
        row += `<td>${vend.name}</td>`;
        row += `<td>${vend.address}</td>`;
        row += `<td>${vend.city}</td>`;
        row += `<td>${vend.state}</td>`;
        row += `<td>${vend.zip}</td>`;
        row += `<td>${vend.phoneNumber}</td>`;
        row += `<td>${vend.email}</td>`;
        row += "</tr>";
        tbody.append(row);
    })
    $('#example').DataTable();
}
