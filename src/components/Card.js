import React from 'react';
import '../styles/Card.css';
import Bretta from '../images/bretta.png';
import Brumm from '../images/brumm.png';
import Cloth from '../images/cloth.png';
import Grimm from '../images/grimm.png';
import Hornet from '../images/hornet.png';
import Jiji from '../images/jiji.png';
import Knight from '../images/knight.png';
import Quirrel from '../images/quirrel.png';
import Seer from '../images/seer.png';
import Sly from '../images/sly.png';
import Tiso from '../images/tiso.png';
import Zote from '../images/zote.png';

function Card(props) {
    const character = props.character;
    const finalChar = character.charAt(0).toUpperCase() + character.slice(1);
    let finalImage;

    if (character === "bretta") {
        finalImage = Bretta;
    } else if (character === "brumm") {
        finalImage = Brumm;
    } else if (character === "cloth") {
        finalImage = Cloth;
    } else if (character === "jiji") {
        finalImage = Jiji;
    } else if (character === "grimm") {
        finalImage = Grimm;
    } else if (character === "hornet") {
        finalImage = Hornet;
    } else if (character === "knight") {
        finalImage = Knight;
    } else if (character === "quirrel") {
        finalImage = Quirrel;
    } else if (character === "seer") {
        finalImage = Seer;
    } else if (character === "sly") {
        finalImage = Sly;
    } else if (character === "tiso") {
        finalImage = Tiso;
    } else if (character === "zote") {
        finalImage = Zote;
    }

    return (
        <div className="card-container">
            <img className="card-image" src={finalImage} alt={character + "'s image"} />
            <div className="card-name">{finalChar}</div>
        </div>
    );
}

export default Card;