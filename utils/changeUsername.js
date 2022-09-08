function changeUsername() {
    var newUsername = prompt("Enter your new username.");

    $.post('/worker/user/updateusername.php', `value=${newUsername}`, (data) => {
        navigator.clipboard.writeText(newUsername);
        alert("copied username to clipboard!");
    });
}
changeUsername();
