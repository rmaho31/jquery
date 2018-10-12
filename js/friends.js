var friends = {
        "friend" : [
        { name: "Monty", favcolor: "blue", favnumber: 42 },
        { name: "Joel", favcolor: "green", favnumber: 7576 },
        { name: "Andrew", favcolor: "orange", favnumber: 27 },
        { name: "Nick S", favcolor: "purple", favnumber: 13 },
        { name: "Steven", favcolor: "orange", favnumber: 10 },
        { name: "Lance", favcolor: "blue", favnumber: 21 },
        { name: "Angie", favcolor: "pink", favnumber: 7 },
        { name: "Mike", favcolor: "green", favnumber: 23 },
        { name: "Nick S1", favcolor: "blue", favnumber: 6 },
        { name: "Emilie", favcolor: "olive", favnumber: 13 },
        { name: "Robert", favcolor: "purple", favnumber: 31 },
        { name: "Philip", favcolor: "green", favnumber: 13 },
        { name: "Sheila", favcolor: "purple", favnumber: 17 },
        { name: "Rachael", favcolor: "black", favnumber: 666 }
    ],
}


$().ready(() => {
    var tbody = $("tbody");


    friends.friend.map((x) => {
        var row = "<tr>";
        row += "<td>" + x.name + "</td>";
        row += "<td>" + x.favcolor + "</td>";
        row += "<td>" + x.favnumber + "</td>";
        row += "</tr>";
        tbody.append(row);
    })
})