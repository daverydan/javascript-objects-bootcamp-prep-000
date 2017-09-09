var playlist = {
  artist: "George Strait"
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj, artistName) {
  return delete obj.artistName
}
