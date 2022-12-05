for (let i = 0; i <= window.maxID; i++) {
  $.get(`/worker/misc/getblook.php?id=${i}`, (res) => {
    $.get(`/worker/blook/getuserblook.php?blook=${res.split('|')[0].replace(/\s/g, '')}`, (res2) => {
      if (Number.parseInt(res2) === 0 || Number.parseInt(res2) === 1) return;
      console.log(res.split('|')[0].replace(/\s/g, '') + ' || ' + res2);
    });
  });
};
