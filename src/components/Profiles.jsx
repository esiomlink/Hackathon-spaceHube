import DisplayProfile from './DisplayProfile';
class Actor {
  constructor (name, age, oilLevel, image, films, kilometers){
    this.name = name;
    this.age = age;
    this.oilLevel=  oilLevel;
    this.image= image;
    this.films = films;
    this.kilometers= kilometers;
  }
}

const roboSiffredi = new Actor('Robo Siffredi', 25, 15, "https://media.ouest-france.fr/v1/pictures/MjAyMTAyMDJmNTdjNGY4NmJlZTQ2Y2U1MmExNzJmNjQ3ZmYzMzA?width=1260&height=712&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=ed6aa22acafaefb6eb2467c1b1a2e4318944f17ecdc7c00b425d07e4a7251222", ['Pas encore vidangé', 'Le plus dur est derrière toi', `la perceuse a perdu ses roulements`], 135000);
const curiosityX = new Actor("Curiosit'X", 23, 11, "http://www.espace-maquette.com/wp-content/uploads/2014/10/Maquette-Robot-Curiosity-MSL-1011.jpg", ['Ca dérouille !', 'un peu de WD40 ?', 'Slip, tongues et chenilles huilées'], 114000)
const rovtsumi = new Actor("Rov'tsumi", 29, 19, "https://www.yankodesign.com/images/design_news/2020/11/this-ai-enabled-autonomous-rover-for-mars-exploration-reminds-of-the-cute-wall-e-robot/Robonetica-Explorer-1.0-rover_Autonomous-robot_0006_5ce6c73e31deaaaff7a8b95d_Mars-Rover-screen1.jpg", ['Fais jaillir ton pétrole pour des robots',"j'ai pas la vie d'ange",'rot vert'], 98000)
const walleX = new Actor("Wall'X", 19, 17, "https://bevstow.com/img/showing-images-for-wall-e-xxx-2.jpg", ["J'ai pété ton silent-bloc", "change les amortisseurs", "visite moi l'caillou"], 45000);
const gadjet = new Actor("Gad'jett", 34, 16, "http://2.bp.blogspot.com/_i5zS3Wc1i_4/SCL3b3x6jOI/AAAAAAAAAE8/y1FqREbrZfk/s400/83_johnny5.jpg", ["J'ai des bornes au compteur","change de carrossier","t'auras vu Mars, visite moi la Lune"], 66000);

export default function Profile(){
  return (
  <div>
    <DisplayProfile {...roboSiffredi} />
    <DisplayProfile {...curiosityX} />
    <DisplayProfile {...rovtsumi} />
    <DisplayProfile {...walleX} />
    <DisplayProfile {...gadjet} />
  </div>
  );
}