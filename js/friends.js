var friends = [
    {
        name: "Monty",
        favcolor: "Blue",
        favnumber: 42
    },
    {
        name: "Joel",
        favcolor: "Green",
        favnumber: 7576
    },
    {
        name: "Andrew",
        favcolor: "Orange",
        favnumber: 27
    },
    {
        name: "NStrang",
        favcolor: "Purple",
        favnumber: 13
    },
    {
        name: "Steven",
        favcolor: "Orange",
        favnumber: 10
    },
    {
        name: "Lance",
        favcolor: "Blue",
        favnumber: 21
    },
    {
        name: "Angie",
        favcolor: "Pink",
        favnumber: 7
    },
    {
        name: "Mike",
        favcolor: "Green",
        favnumber: 23
    },
    {
        name: "Nick S",
        favcolor: "Blue",
        favnumber: 6
    },
    {
        name: "Emilie",
        favcolor: "sage",
        favnumber: 13
    },
    {
        name: "Robert",
        favcolor: "Purple",
        favnumber: 31
    },
    {
        name: "Phillip",
        favcolor: "Green",
        favnumber: 13
    },
    {
        name: "Sheila",
        favcolor: "Purple",
        favnumber: 17
    },
    {
        name: "Rachael",
        favcolor: "Black",
        favnumber: 666
    }
]


$().ready(() => {
    var tbody = $("tbody");


    friends.map((friend) => {
        var row = "<tr>";
        row += "<td>" + friend.name + "</td>";
        row += "<td>" + friend.favcolor + "</td>";
        row += "<td>" + friend.favnumber + "</td>";
        row += "</tr>";
        tbody.append(row);
    })
})