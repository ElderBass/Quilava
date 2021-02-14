$(document).ready(() => {

    $('#browseAll').on('click', function() {
        $.get('/api/artists', function() {
            console.log('getting artists');
            window.location.assign('/api/artists');
        })
    })
})