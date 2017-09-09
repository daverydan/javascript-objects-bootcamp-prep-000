var playlist = {
  artist: "George Strait"
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
