if (location.pathname === '/stats/') {
  document.getElementById("role").innerText = "Role: Owner";
  document.getElementById("tokens").innerText = "Tokens: Infinite";
  document.getElementById("userBlook").src = "https://blacket.org/images/blacketImageRainbow.gif";
} else if (location.pathname === '/leaderboard/') {
  $.get(`/worker/user/getusername.php`, function(data) {
    if (document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1].includes(data)) {
        let x = document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1].replace(data, "asdfghjkl");
        document.getElementById("preloadLeaderboard").innerHTML = `1. ${data} - Infinite Tokens<br>2. ` + x;
    } else {
        let x = document.getElementById("preloadLeaderboard").innerHTML.split('<br>2. ')[1];
        document.getElementById("preloadLeaderboard").innerHTML = `1. ${data} - Infinite Tokens<br>2. ` + x;
    };
  });
} else if (location.pathname === '/market/') {
  document.getElementById("tokensText").innerHTML = 'INFINITE';
} else if (location.pathname === '/blooks') {
  setInterval(() => {
    document.getElementById("blookQuantity").innerHTML = 'Quantity: Infinite';
  }, 10);
};
$(`<a id="adminSpoofBtn" class="styles__navContainer___1sGPx-camelCase" onclick='alert("This is not an admin giver, just a spoof.")'><i class="styles__statsIcon___j0Lcd-camelCase fas fa-wrench"></i></a>`).appendTo('.styles__headerRight___1Qwu1-camelCase');
