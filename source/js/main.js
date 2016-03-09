$(document).ready(function() {
    $('.highlight').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $('.markdown-body pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $('.pinBox').stickMe();

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
    });

    $(".nav-tags").click(function() {
        $(".social").addClass("hide");
        $(".aboutMe").addClass('hide')
        $(".nav-menu").html("Tags");
        $(".allTags").removeClass('hide')
    });

    $(".nav-about").click(function(){
        $(".social").addClass("hide");        
        $(".allTags").addClass("hide");  
        $(".aboutMe").removeClass("hide");                              
        $(".nav-menu").html("About");
    })
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

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button
    });
});

hljs.configure({});

Pace.on("hide", function() {
    $(".maindiv").removeClass('hide');
})
