$().ready(() => {
    $.getJSON("http://localhost:8080/Products/List")
    .then((data) => {
        console.log("Respnose to get JSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJson()")
    
})

render = (products) => {
    var tbody = $("#try1");
    var row = "";
    products.data.map(prod => {         
        row += "<tr>";
        row += `<td>${prod.id}</td>`;
        row += `<td>${prod.partNumber}</td>`;
        row += `<td>${prod.name}</td>`;
        row += `<td>${prod.price}</td>`;
        row += `<td>${prod.vendor.name}</td>`;
        row += `<td>${prod.unit}</td>`;
        row += `<td>${prod.photoPath}</td>`;
        row += "</tr>";
        tbody.append(row);
    })
    $('#example').DataTable();
}
