$(document).ready(function(){
    
    // hide navabr primary, fixed secondary
    $(window).on('scroll', function(){
        if ( $(window).scrollTop()){
            $('#navPrimary').addClass('d-lg-none').css({
                'transition' : 'ease'
            });
            $('#navSecondary').addClass('position-fixed');
            $('#searchPrimary').removeClass('d-none');
            $('#searchSecondary').addClass('d-none');
        } else {
            $('#navPrimary').removeClass('d-lg-none');
            $('#navSecondary').removeClass('fixed-top');
            $('#searchPrimary').addClass('d-none');
            $('#searchSecondary').removeClass('d-none');
        }
    })

})