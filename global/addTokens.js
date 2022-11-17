if (location.pathname === '/market/') {
    setInterval(() => {
      $.post('/worker/box/openbox.php', `box=Add Tokens`);
      curAmt = Number.parseInt(document.getElementById("tokensText").innerHTML.replaceAll(',', '')) + 25000;
      if (isNaN(curAmt)) updateTokens();
      document.getElementById("tokensText").innerHTML = curAmt.toLocaleString();
    };
    console.log("[addTokens.js] Added 25,000 tokens!");
  }, 751);
} else {
    setInterval(() => {
      $.post('/worker/box/openbox.php', `box=Add Tokens`);
      console.log("[addTokens.js] Added 25,000 tokens!");
    }, 751)
}
