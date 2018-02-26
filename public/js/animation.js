jQuery(document).ready(function($) {
    $(function animation() {
        var emailPasswordLeave = 'animate bounceOutLeft';
        var userDetailsJoin = 'animate bounceInRight';
        var userDetailsLeave = 'animate bounceOutRight';
        var emailPasswordJoin = 'animate bounceInLeft';
        $('#registerBtn').click(function() {
            $('#emailPassword').addClass(emailPasswordLeave);
            $('#userDetails').addClass(userDetailsJoin);
            setTimeout(function() {
                $('#emailPassword').addClass('hidden');
                $('#userDetails').removeClass('hidden');
                $('#emailPassword').removeClass(emailPasswordLeave);
            },850);
        });
        $('#backBtn').click(function() {
            $('#userDetails').addClass(userDetailsLeave);
            $('#emailPassword').addClass(emailPasswordJoin);
            setTimeout(function() {
                $('#userDetails').addClass('hidden');
                $('#emailPassword').removeClass('hidden');
                $('#userDetails').removeClass(userDetailsLeave);
            },850);
        });
    });
});