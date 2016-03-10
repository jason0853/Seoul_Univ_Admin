$(document).ready(function(){
        // document height control
        var wHeight = $(window).height();
        $('#page-wrapper').css('min-height', wHeight + 'px');

        

        $(window).resize(function() {
                var wHeight = $(window).height();
                $('#page-wrapper').css('min-height', wHeight + 'px');

                
        });

        // map img height control
        var documentHeight = $(document).height();
        var headerHeight = $('.navbar-static-top').height();
        var footerHeight = $('.footer').height();
        var pageHeadingHeight = $('.page-heading').height() + 20;

        var contentHeight = documentHeight - (headerHeight + footerHeight + pageHeadingHeight);
        $('.map').find('img').css('height', contentHeight);
       

});