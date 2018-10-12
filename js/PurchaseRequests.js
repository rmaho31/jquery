$().ready(() => {
    $.getJSON("http://localhost:8080/PurchaseRequests/List")
    .then((data) => {
        console.log("Respnose to get JSON()");
        console.log(data);
        render(data);
    });
    console.log("After getJson()")
    
})

render = (purchaseRequestss) => {
    var tbody = $("#try1");
    purchaseRequestss.data.map(purchaseRequests => {         
        var row = "";
        row += "<tr>";
        row += `<td>${purchaseRequests.id}</td>`;
        row += `<td>${purchaseRequests.user.userName}</td>`;
        row += `<td>${purchaseRequests.description}</td>`;
        row += `<td>${purchaseRequests.justification}</td>`;
        row += `<td>${purchaseRequests.dateNeeded}</td>`;
        row += `<td>${purchaseRequests.deliveryMode}</td>`;
        row += `<td>${purchaseRequests.status}</td>`;
        row += `<td>${purchaseRequests.total}</td>`;
        row += `<td>${purchaseRequests.submittedDate}</td>`;
        row += `<td>${purchaseRequests.reasonForRejection}</td>`;
        row += "</tr>";
        tbody.append(row);
    })
    $('#example').DataTable();
}
