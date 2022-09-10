setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`);
    console.log("[addTokens.js] Added 25000 tokens!");
}, 751);
