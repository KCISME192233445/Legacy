setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`);
    if (location.pathname === '/market/') {
      curAmt = Number.parseInt(document.getElementById("tokensText").innerHTML.replaceAll(',', '')) + 25000;
      if (isNaN(curAmt)) updateTokens();
      document.getElementById("tokensText").innerHTML = curAmt.toLocaleString();
    };
    console.log("[addTokens.js] Added 2,500 tokens!");
}, 751);
