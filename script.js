const scContainer = document.getElementById('js--sc--container');

const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: 'ScratchCover300.png',
  imageBackgroundSrc: 'peterCrown300.png',
  // htmlBackground: '<div class="inner_html"><p>Subscribe for more Videos</p></div>',
  clearZoneRadius: 30,
  nPoints:50,
  pointSize: 4,
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