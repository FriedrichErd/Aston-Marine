function astronmarineNextPage(page){
    $("#astronmarine-next-page img").show();
    var get = window.location.search;
    $.get(url_ajax + get,
                {
                    "PAGEN_1": page,
                    "PARAMS": params,
                },
                function(data, textStatus){
                    $('#astronmarine-next-page').remove();
                        $(".astronmarine-catalog-section.default").append(data);
                        },
                "text"
                );
}