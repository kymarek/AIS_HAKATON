function GoToURLWithId(url, id) {
    url = url + "?id=" + id;
    GoToURL(url);
}

function Element_WithUrlAndId_ClickEvent(event) {
    var url = "";
    var id = 0;
    var $div = $(event.currentTarget);

    id = $div.data("id");
    url = $div.data("url");

    GoToURLWithId(url, id);
}

function GoToURL(url) {
    location.href = url;
}