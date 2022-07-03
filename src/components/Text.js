import Practices from "./Practices"


function Text() {
  return (
    <div className="text-practices-container">
      <p className="introduction">
        Hi, I'm E.Salehi <br />
        I enjoy making things with react. <br />
        Below are some of my practices to learn front-end.
      </p>
      <Practices />
    </div>
  );
}

export default Text;
