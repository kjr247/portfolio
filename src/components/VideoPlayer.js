import HoverVideoPlayer from 'react-hover-video-player';

function VideoPlayer(props) {
  return (
    <HoverVideoPlayer
      videoSrc={props.videoSrc}
      pausedOverlay={
        <img
          src={props.imgSrc}
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            paddingBottom: '.12em'
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

export default VideoPlayer;