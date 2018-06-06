$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "http://localhost:3007/liste",
            methode: 'get',
            success: function (data) {
                for (var id in data) {
                    $("#l").prepend('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
                    // $("#l").append('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
                    // $("#l").html('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
                }

            }
        });
    });
});



