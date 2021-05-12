import React from "react";
import "./assets/Subscription.css";

const Subscription = () => (
  <div className='subscription'>
    <div className='first-offer'>
      <h1>OFFRE DECOUVERTE</h1>
      <ul>
        <li>Accéder à toutes nos vidéos</li>
        <li>Accéder à toutes nos photos</li>
        <li>Accéder aux profils de nos acteurs</li>
      </ul>
      <p>Seulement O.99 cts pendant 1 mois</p>
      <button className='sub-button'>Abonnement</button>
    </div>
    <div className='second-offer'>
      <h1>OFFRE PREMIUM</h1>
      <ul>
        <li>Accéder à toutes nos vidéos</li>
        <li>Accéder à toutes nos photos</li>
        <li>Accéder aux profils de nos acteurs</li>
        <li>Accéder au tchat</li>
        <li>Rencontres VIP</li>
        <li>Un bidon d'huile premium offert</li>
      </ul>
      <p>Seulement 3.99 euros par mois</p>
      <button className='sub-button'>Abonnement</button>
    </div>
  </div>
);

export default Subscription;