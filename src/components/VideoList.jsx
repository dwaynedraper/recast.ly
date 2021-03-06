var VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video, index) => (
        //pass in state as props, use props.stateBeingPassed this time
        <VideoListEntry changeCurrentVideo={props.changeCurrentVideo} video={video} key={'video' + index} />
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
window.VideoList = VideoList;

// var VideoList = (props) => (
//   if (props.videos.length === 0) {
//     return (
//       <p>Loading</p>
//     );
//   }

//   <div className="video-list">
//     {props.videos.map((video, index) => (
//       //pass in state as props, use props.stateBeingPassed this time
//       <VideoListEntry changeCurrentVideo={props.changeCurrentVideo} video={video} key={'video' + index} />
//     ))}
//   </div>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
// export default VideoList;
// window.VideoList = VideoList;