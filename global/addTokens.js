if (location.pathname === '/market/') {
  setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`);
    updateTokens();
    console.log("[addTokens.js] Added 25,000 tokens!");
  }, 751);
} else {
  setInterval(() => {
    $.post('/worker/box/openbox.php', `box=Add Tokens`);
    console.log("[addTokens.js] Added 25,000 tokens!");
  }, 751);
};
