function sellBlook(blookname, amt) {
    $.post("/worker/blook/sellblook.php", `blook=${blookname}&amount=${amt}`, (res) => {
        console.log(res);
    });
}

for (let i = 0; i <= window.maxID; i++) {
    $.get(`/worker/misc/getblook.php?id=${i}`, (res) => {
        $.get(`/worker/blook/getuserblook.php?blook=${res}`, (res2) => {
            qnt = Number.parseInt(res2) - 1;
            if (qnt <= 0) return;
            sellBlook(res2, qnt);
            console.log(`[sellDupes.js] Selling ${qnt} ${qnt <= 1 ? `${res2}` : `${res2}s`}`);
        });
    });
}