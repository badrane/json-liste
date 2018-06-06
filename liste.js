$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"http://localhost:3007/liste", 
            success : function(data){
            var tab = [];
            for (var id in data){
                tab.push ('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
            }
            $("#l").html(tab);
        }});
    });
});

$.ajax({url:"http://localhost:3007/liste", 
    success : function(data){
    var tab = [];
    for (var id in data){
        tab.push ('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
    }
    $("#l").html(tab);
}});