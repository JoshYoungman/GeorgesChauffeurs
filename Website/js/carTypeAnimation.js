jQuery(document).ready(function($) {
    $(function animation() {
        var carTypeLeave = 'animate bounceOutLeft';
        var locationJoin = 'animate bounceInRight';
        var locationLeave = 'animate bounceOutRight';
        var carTypeJoin = 'animate bounceInLeft';
        $('#acceptBtn').click(function() {
            $('#carType').addClass(carTypeLeave);
            $('#location').addClass(locationJoin);
            setTimeout(function() {
                $('#carType').addClass('hidden');
                $('#location').removeClass('hidden');
                $('#carType').removeClass(carTypeLeave);
            },850);
        });
        $('#backBtn').click(function() {
            $('#location').addClass(locationLeave);
            $('#carType').addClass(carTypeJoin);
            setTimeout(function() {
                $('#location').addClass('hidden');
                $('#carType').removeClass('hidden');
                $('#location').removeClass(locationLeave);
            },850);
        });
    });
});