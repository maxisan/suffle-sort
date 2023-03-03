const orderedTiles = document.querySelectorAll('.tiles')
const tilesContainer = document.querySelector('.tiles-container')

const shuffle = () => {
  const tiles = Array.from(document.querySelectorAll('.tiles'))
  tiles.sort((a, b) => 0.5 - Math.random());
  insertTiles(tiles)
}

const sort = () => {
  insertTiles(orderedTiles)
}

const insertTiles = (tiles) => {
  tilesContainer.innerHTML = ''
  tiles.forEach(tile => tilesContainer.appendChild(tile))
}


