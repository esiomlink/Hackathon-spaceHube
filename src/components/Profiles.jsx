import DisplayProfile from "./DisplayProfile";
import "./assets/Profile.css";
import img1 from  "../img/actors/MjAyMTAyMDJmNTdjNGY4NmJlZTQ2Y2U1MmExNzJmNjQ3ZmYzMzA.jfif";
import img2 from "../img/actors/Maquette-Robot-Curiosity-MSL-1011.jpg";
import img3 from "../img/actors/Robonetica-Explorer-1.0-rover_Autonomous-robot_0006_5ce6c73e31deaaaff7a8b95d_Mars-Rover-screen1.jpg";
import img4 from "../img/actors/showing-images-for-wall-e-xxx-2.jpg";
import img5 from "../img/actors/83_johnny5.jpg";

class Actor {
  constructor(name, age, oilLevel, image, films, kilometers) {
    this.name = name;
    this.age = age;
    this.oilLevel = oilLevel;
    this.image = image;
    this.films = films;
    this.kilometers = kilometers;
  }
}

const roboSiffredi = new Actor(
  "Robo Siffredi",
  25,
  15,
 img1,
  [
    "Pas encore vidangé",
    "Le plus dur est derrière toi",
    "La perceuse a perdu ses roulements",
  ],
  135000
);
const curiosityX = new Actor(
  "Curiosit'X",
  23,
  11,
  img2,
  [
    "Ca dérouille !",
    "Un peu de WD40 ?", 
    "Slip, tongues et chenilles huilées"
  ],
  114000
);
const rovtsumi = new Actor(
  "Rov'tsumi",
  29,
  19,
  img3,
  [
    "Faut que ça grince !",
    "J'ai pas la vie d'ange",
    "Rot vert",
  ],
  98000
);
const walleX = new Actor(
  "Wall'X",
  19,
  17,
  img4,
  [
    "J'ai pété ton silent-bloc",
    "Change les amortisseurs",
    "Visite moi l'caillou",
  ],
  45000
);
const gadjet = new Actor(
  "Gad'jett",
  34,
  16,
  img5,
  [
    "J'ai des bornes au compteur",
    "Change de carrossier",
    "T'auras vu Mars, visite moi la Lune",
  ],
  66000
);

export default function Profile() {
  return (
    <div className="profile-cards">
      <DisplayProfile {...roboSiffredi} />
      <DisplayProfile {...curiosityX} />
      <DisplayProfile {...rovtsumi} />
      <DisplayProfile {...walleX} />
      <DisplayProfile {...gadjet} />
    </div>
  );
}
