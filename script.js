// github user finder
$(document).ready(function () {
    $(document).on('keypress', '#username', function (event) {
        if (event.which === 13) { // check the key was <enter>
            var input = $(this);
            var username = input.val();

            getGithubInfo(username)
        }
    });
});

function getGithubInfo(username) {
    var url = 'https://api.github.com/users/' + username;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();

    var data = xmlhttp.responseText;

    // console.log(data);
    showUser(xmlhttp)
}

function showUser(xmlhttp) {
    if (xmlhttp.status === 200) {
        // show the user details
        var json = xmlhttp.responseText;
        var user = JSON.parse(json);
        $('#profile .avatar').html('<img src="'+user.avatar_url+'" width="80" height="80">')
        $('#profile .login').html("Login: " + user.login)
        $('#profile .id').html( "ID: " + user.id)
        $('#profile .url').html("URL: " + user.html_url)
        $('#profile .location').html("Location: " + user.location)
    } else {
        // show an error
        $('#profile p').html("No such user!")
    }
}