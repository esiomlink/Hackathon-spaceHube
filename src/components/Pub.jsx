import React from 'react';
import './Pub.css'
const Pub = () => {
  const pubData = [
    {
      a: 'Viens rencontrer les robots les mieux boulonnés de ta région',
      b: 'https://rebot.me/assets/images/mini-avatars/173225.png?r=1494637413',
      c: 'https://64.media.tumblr.com/57121f7695f4f8175a2b5ea251272374/tumblr_nhvnva3War1u6fszlo1_640.jpg',
      d: 'https://i.redd.it/lj7c85ix2qf11.jpg',
    },
    {
      a: 'Tu es seul et tu commences à rouiller, viens te faire vidanger!',
      b: 'https://image.freepik.com/photos-gratuite/robot-metal-rouille-fermez-tete-du-robot-mise-au-point-selective_79919-320.jpg',
      c: 'https://fvstorageprod.blob.core.windows.net/feuvert/zones/13279/10052-changer-huile-moteur-01_468a5ab2-37c7-408c-ac78-8af6900e9b8f.jpg',
      d: 'https://images-na.ssl-images-amazon.com/images/I/71LFpKcZjGL._AC_SL1305_.jpg',
    },
    {
      a: 'Si toi aussi tu as les roullement qui grincent, une solution !',
      b: 'https://cdn2.batidirect.fr/945-thickbox_default/super-degrippant-d-grip.jpg',
      c: 'https://www.centrale-directe.com/pub/media/catalog/product/cache/40df0a5b4f3391eb49d0aa3dedde2e14/w/d/wd-40-bidon-multi-usages-5l-wd40.jpg',
      d: 'https://blog.monmagasingeneral.com/wp-content/uploads/2017/11/Fotolia_93177910_Subscription_Monthly_M-1270x843.jpg',
    },
  ];
  return (
    pubData.map((data) => (
    <div className='container-pub'>
          <h1>{data.a}</h1>
          <div className='pub'>
            <img src={data.b} alt='pick' />
          </div>
          <div className='pub'>
            <img src={data.c} alt='pick' />
          </div>
          <div className='pub'>
            <img src={data.d} alt='pick' />
          </div>
        </div>
      ))
  );
};

export default Pub;
