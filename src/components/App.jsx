

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
  changeCurrentVideo (video) {
    console.log(video);
    this.setState({
      currentVideo: video,
    });
  }
  loadYouTubeVideo(data) {
    this.setState({
      currentVideo: data[0],
      videoList: data
    });
  }
  componentDidMount() {
    let options = {query: 'react', max: 5, key: YOUTUBE_API_KEY};
    this.props.searchYouTube(options, this.loadYouTubeVideo.bind(this));
  }
  render () {
    if (this.state.currentVideo === null) {
      console.log('test for null working');
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><Search changeCurrentVideo={this.changeCurrentVideo.bind(this)} /></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div>Loading</div>
            </div>
            <div className="col-md-5">
              // pass in state as props, make sure to bind this
              <div>Loading</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>

        </div>
      );
    }
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
window.App = App;
