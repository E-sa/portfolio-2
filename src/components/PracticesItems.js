function PracticesItems({ PracticesDetails }) {
  return (
    <div className="practices-items">
      <a href={PracticesDetails.link}>
        <img
          alt="image-screen"
          className="practices-image"
          src={PracticesDetails.image}
        />
      </a>

      <div className="one">
        <h4 className="margin-7 ">{PracticesDetails.title}</h4>
        <p className="margin-7 ">Made with:</p>
        <p className="margin-7 ">{PracticesDetails.madeWith}</p>
        <a href={PracticesDetails.git}>
          <img alt="git" className="git-icon" src="https://flyclipart.com/thumb2/git-github-hub-repository-icon-813483.png" />
        </a>
      </div>
    </div>
  );
}

export default PracticesItems;
