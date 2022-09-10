if (location.pathname === '/stats/') {
  function checkAdmin() {
    document.getElementById("role").innerText = "Role: Owner";
    document.getElementById("tokens").innerText = "Tokens: Infinite";
    document.getElementById("userBlook").src = "https://blacket.org/images/blacketImageRainbow.gif";
    document.getElementById("adminButton").style.display = "block";
  }
  setTimeout(() => checkAdmin(), 150);
}
