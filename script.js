const scContainer = document.getElementById('js--sc--container');

const sc = new ScratchCard('js--sc--container', {
    scratchType: SCRATCH_TYPE.LINE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: 300,
    imageForwardSrc: '/peterCrown.png',
    imageBackgroundSrc: '/ScratchCover.png',
    clearZoneRadius: 30,
    nPoints: 0,
    pointSize: 0,
})

sc.init().then(() => {
    sc.canvas.addEventListener('scratch.move', () => {
        let percent = sc.getPercent().toFixed(0);
        scInfos.innerHTML = percent + '%';
        console.log(percent)
    })
}).catch((error) => {
    alert(error.message);
});