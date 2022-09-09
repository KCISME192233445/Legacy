zename = prompt("Which box would you like to open?");
i = 0;
amt = Number.parseInt(prompt(`How many of the ${zename} Box would you like to open?`));

function buyBox(name) {
    $.post('/worker/box/openbox.php', `box=${name}`, function(data) {
        if (data.includes("rate")) i--;
        blookRarity = data.split('|')[1];
        blookUnlocked = data.split('|')[0];
        switch (blookRarity) {
            case "Uncommon":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lime;', `${blookUnlocked}`);
                break;
            case "Rare":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px blue;', `${blookUnlocked}`);
                break;
            case "Epic":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px red;', `${blookUnlocked}`);
                break;
            case "Legendary":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px gold;', `${blookUnlocked}`);
                break;
            case "Chroma":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px skyblue;', `${blookUnlocked}`);
                break;
            case "Perfect":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lemonchiffon;', `${blookUnlocked}`);
                break;
            case "Mystical":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px plum;', `${blookUnlocked}`);
                break;
            case "Divine":
                console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px violet;', `${blookUnlocked}`);
                break;
        }
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        buyBox(zename);
        i++;
    } else {
        clearInterval(check);
        alert("Done buying boxes!\nCheck the Blooks page or the Console for your results.");
    }
}, 751);
