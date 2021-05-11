export default function DisplayProfile(actor){
  return (
    <div>
      <img src={actor.image} alt={actor.name} />
      <h2>{actor.name}</h2>

      <p><span>Age : </span>{actor.age}</p>
      <p><span>Niveau d'huile : </span>{actor.oilLevel}</p>
      <p><span>Kilomètres au compteur : </span>{actor.kilometers}</p>
      <h6>Films</h6>
      <ul>
      {actor.films.map(e=><li>e</li>)}
      </ul>
      
    </div>
  )
}