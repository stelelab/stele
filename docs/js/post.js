window.addEventListener('coreLoaded', async function () {
  let index = parseInt(window.location.hash.replace('#', ''))
  window._stele.loadWithIdx(index)
})
