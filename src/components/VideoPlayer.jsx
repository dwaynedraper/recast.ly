var VideoPlayer = (props) => {
  return (
    <div className="video-player">
          console.log(props)
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

/* When pulling one item from the array of video data, you need to use videos to represent the whole array, and use video where you have mapped or done something similar to all of the individual videos. My bug here was typing video[0] instead of videos[0].*/
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
window.VideoPlayer = VideoPlayer;

