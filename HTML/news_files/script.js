function astronmarineNextPage(page){
    $("#astronmarine-next-page img").show();
    $.get(url_ajax,
                {
                    "PAGEN_1": page,
                    "PARAMS": params,
                },
                function(data, textStatus){
                    $('#astronmarine-next-page').remove();

                        $(".astronmarine-news-list.news").append(data);
                        },
                "text"
                );
}