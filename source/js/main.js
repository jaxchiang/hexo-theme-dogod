$(document).ready(function() {
    $('.highlight').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $('.markdown-body pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $('.pinBox').stickMe();
});

$(function() {
    function scroll_fn() {
        document_height = $(".content .section").height();
        scroll_so_far = $(".content").scrollTop();
        window_height = $(".content").height();
        max_scroll = document_height - window_height;
        scroll_percentage = scroll_so_far / (max_scroll / 100);
        $('.process').width(scroll_percentage + '%');
    };

    $(".content").scroll(function() {
        scroll_fn();
    });

    $(window).resize(function() {
        scroll_fn();
    });
});

hljs.configure({});

Pace.on("hide", function() {
    $(".maindiv").removeClass('hide');
})
