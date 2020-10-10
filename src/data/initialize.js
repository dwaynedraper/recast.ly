let initialize = [{
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0
      },
      medium: {
        url: '',
        width: 0,
        height: 0
      },
      high: {
        url: '',
        width: 0,
        height: 0
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
}];

export default initialize;
window.initialize = initialize;