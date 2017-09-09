var playlist = {
  artist: "George Strait"
}

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, { [name]: song })
}
