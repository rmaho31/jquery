$().ready(() => {
    $.getJSON("http://localhost:8080/PurchaseRequestLineItems/List")
    .then((data) => {
        console.log("Respnose to get JSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJson()")
    
})

render = (purchaseRequestLineItems) => {
    var tbody = $("#try1");
    purchaseRequestLineItems.data.map(purchaseRequestLineItems => {         
        var row = "";
        row += "<tr>";
        row += `<td>${purchaseRequestLineItems.id}</td>`;
        row += `<td>${purchaseRequestLineItems.purchaseRequest.id}</td>`;
        row += `<td>${purchaseRequestLineItems.product.name}</td>`;
        row += `<td>${purchaseRequestLineItems.quantity}</td>`;
        tbody.append(row);
    })
    $('#example').DataTable();
}
