function changeActiveTab(tab) {
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

$(function () {
    $('body').prepend($('<div class="overlay"></div>'));
    $('#sidebarCollapse').on('click', function () {
        if ($('#sidebar').hasClass('active')) {
            $('#sidebar').removeClass('active');
            $('body').removeClass('has-overlay');
        } else {
            $('#sidebar').addClass('active');
            $('body').addClass('has-overlay');
        }
    });

    $('.overlay, #sidebar a').on('click', function () {
        $('#sidebar').removeClass('active');
        $('body').removeClass('has-overlay');
    });
    $('[data-toggle="tooltip"]').tooltip();
});

function toggleProfileView(tab) {
    $(tab).toggleClass("my-profile-view");
    $('#save-profile-btn').toggleClass("d-block");
    $('#edit-profile-btn').toggleClass("d-none");
}

function changeActiveAccordian(id) {
    console.log('id', id)
    console.log($(id).hasClass('shadow'))

    if ($(id).hasClass('shadow')) {
        $(id).removeClass('shadow');
    } else {
        $(id).addClass('shadow');
    }

}