if (location.pathname === '/market/') {
  setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`, function(data) {
      if (data === 'Blacket|Divine|/images/blacketImageRainbow.gif') {
        updateTokens();
        console.log("[addTokens.js] Added 25,000 tokens!");
      };
    });
  }, 200);
} else {
  setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`, function(data) {
      if (data === 'Blacket|Divine|/images/blacketImageRainbow.gif') console.log("[addTokens.js] Added 25,000 tokens!");
    });
  }, 200);
};
