import "./assets/DisplayProfile.css";

export default function DisplayProfile(actor) {
  return (
    <div className="profile-card">
      <img className="profile-image" src={actor.image} alt={actor.name} />
      <h2 className="profile-name">{actor.name}</h2>
      <div className = "profile-infos">
        <p>
          <em>Age : </em>
          {actor.age}
        </p>
        <p>
          <em>Niveau d'huile : </em>
          {actor.oilLevel}
        </p>
        <p>
          <em>Kilomètres au compteur : </em>
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
