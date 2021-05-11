import "./assets/DisplayProfile.css";

export default function DisplayProfile(actor) {
  return (
    <div className="profile-card">
      <img className="profile-image" src={actor.image} alt={actor.name} />
      <h2>{actor.name}</h2>
      <div className = "profile-infos">
        <p>
          <span>Age : </span>
          {actor.age}
        </p>
        <p>
          <span>Niveau d'huile : </span>
          {actor.oilLevel}
        </p>
        <p>
          <span>Kilomètres au compteur : </span>
          {actor.kilometers}
        </p>
      </div>
      <div className = "profile-films">
        <h6>Films</h6>
        <ul>
          {actor.films.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
