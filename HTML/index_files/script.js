$(function() {
    $('#index-news').carouFredSel({
            auto: {},
            prev: '#index-prev',
            next: '#index-next',
            pagination: "#pager22",
            mousewheel: true,
            swipe: {
                    onMouse: true,
                    onTouch: true
            }
    });
});