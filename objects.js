var playlist = {
  artist: "George Strait"
}

function updatePlaylist(obj, name, song) {
  Object.assign({}, obj, { [name]: song })
}
