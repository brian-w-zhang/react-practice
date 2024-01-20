import profilePic from './assets/ghibli car sleep.jpg';

function Card() {
  return (
    <div className="card">
      <img className="pfp" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Brian</h2>
      <p className="card-text">Software Engineering Student at UWaterloo.</p>
    </div>
  );
}

export default Card;
