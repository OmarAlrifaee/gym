import Loader from "./Loader";
const ExerciseVideos = ({ name, exerciseVideos }) => {
  return (
    <div className="exercises-videos-container mt-5 py-5">
      <h3 className=" text-capitalize fw-bold text-lg-start text-center">
        watch <span className="text-danger">{name}</span> exercise videos on
        youtube
      </h3>
      <div className="d-flex flex-wrap mt-5 gap-5 justify-content-lg-start justify-content-center">
        {exerciseVideos.length &&
          exerciseVideos.slice(0, 5).map(({ video }) => {
            const { videoId, channelName, thumbnails, title } = video;
            return (
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                key={videoId}
                target="_blank"
                rel="noreferrer"
                className="exercise-video text-decoration-none shadow"
              >
                <img
                  src={thumbnails[0].url}
                  width={thumbnails[0].width}
                  height={thumbnails[0].height}
                />
                <div className="info text-black text-capitalize p-3">
                  <h4>{title}</h4>
                  <p className="lead">created by {channelName}</p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ExerciseVideos;
