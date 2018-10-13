var url = "http://localhost:8080/Users/";
$().ready(() => {
    $("#btn").click(() => {
        getUserByPrimaryKey($("#pidi").val());
    });
    console.log("After getJSON()");
    $("#save").click(() => {
        updateUser();
    })
})

    getUserByPrimaryKey = (pkey) => {
        $.getJSON(url + "Get/" + pkey)
            .then((data) => {
                console.log("Response to getJSON()");
                console.log(data);
                render(data);
            });
    },


    render = (user) => {
        user = user.data;
        $("#pid").val(user.id);
        $("#ppassword").val(user.password)
        $("#pfirstname").val(user.firstName)
        $("#plastname").val(user.lastName);
        $("#pusername").val(user.userName);
        $("#pphone").val(user.phoneNumber);
        $("#pemail").val(user.email);
        $("#previewer").prop("checked", user.reviewer);
        $("#padmin").prop("checked", user.admin);
    },

    updateUser = () => {
        console.log("Response to getJSON()");
        $.ajax({
            headers: {
                'Content-Type': 'application/json'
            },
            type: "POST",
            url:url+"Change",
            data: JSON.stringify({
                id: $("#pid").val(),
                userName: $("#pusername").val(),
                password: $("#ppassword").val(),
                firstName: $("#pfirstname").val(),
                lastName: $("#plastname").val(),
                phoneNumber: $("#pphone").val(),
                email: $("#pemail").val(),
                reviewer: $("#previewer").is(":checked"),
                admin: $("#padmin").is(":checked")
            })
        })
            // .then((data) => {
            //     console.log(data);
            // });
    }