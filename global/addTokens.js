setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`);
    curAmt = Number.parseInt(document.getElementById("tokensText").innerHTML) + 25000;
    if (isNaN(curAmt)) updateTokens();
    document.getElementById("tokensText").innerHTML = curAmt.toString();
    console.log("[addTokens.js] Added 25000 tokens!");
}, 750);