exports.onRouteUpdate = location => {
  if (location.hash) {
    setTimeout(() => {
      document
        .querySelector(`${location.hash}`)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, 0)
  }
}
