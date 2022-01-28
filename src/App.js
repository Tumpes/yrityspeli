import React, { useState, useEffect } from "react";
import "./App.css";
import Napit from "./Components/napit";

const yrittaja = require("./Img/yrittaja.png");
const tausta = require("./Img/tausta.jpg");
const voittoKuva = require("./Img/ismo.jpg");
const allEvents = require("./events.json");

const Notification = (props) => {
  if (!props.msg) return null;
  return <div className="notification">{props.msg}</div>;
};

const App = () => {
  const [valuutta, setValuutta] = useState(1000);
  const [yritysNimi, setNimi] = useState("");
  const [aloitettu, setAloitettu] = useState(false);
  const [voitettu, setVoitettu] = useState(false);
  const [event, setEvent] = useState(null);
  const [msg, setMsg] = useState(null);
  console.log(allEvents);

  const voitto = () => {
    setVoitettu(true);
  };

  const viesti = (msg) => {
    setMsg(msg);
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  };

  const napit = () => {
    const event = allEvents[Math.floor(Math.random() * allEvents.length)];
    console.log(event);
    return event;
  };

  const kuolema = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleEvents = (vaihtoehto) => {
    console.log(vaihtoehto);

    //#region

    if (vaihtoehto === "Soita palokunta") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("palokunta tuli myöhässä, rip valuutat");
        setValuutta(Math.floor(valuutta * 0.25));
      } else {
        viesti("palo sammutettiin, sammutus maksoi 50e");
        setValuutta(valuutta - 50);
      }
    }

    if (vaihtoehto === "Sammuta itse") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("Sammutit palon, hyvä duuni");
      } else {
        viesti("kuolit palossa");
        kuolema();
      }
    }

    if (vaihtoehto === "Anna tehtaan palaa") {
      setValuutta(5);
      viesti("tehtaat palo xd");
    }

    if (vaihtoehto === "Myy venäjälle") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("Venäläiset anto valuuttaa");
        setValuutta(valuutta + 2500);
      } else {
        viesti("Venäläiset scammas xd");
        setValuutta(valuutta - 1000);
      }
    }

    if (vaihtoehto === "Myy kouvolaan") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("Kouvostoliitto oli rehellinen");
        setValuutta(valuutta + 3000);
      } else {
        viesti("Kouvostoliitto valtasi tehtaat :DD");
        setValuutta(valuutta - 1500);
      }
    }

    if (vaihtoehto === "Myy uzbekistaniin") {
      viesti("Uzbekistani anto valuuttaa");
      setValuutta(valuutta + 1000);
    }

    if (vaihtoehto === "Anna potkut") {
      viesti("Joudut maksaa Sakun lopputilin");
      setValuutta(valuutta - 300);
    }

    if (vaihtoehto === "Haasta oikeuteen") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("Voitit oikeudenkäynnin");
        setValuutta(valuutta + 1500);
      } else {
        viesti("Hävisit oikeudenkäynnin. söis");
        setValuutta(valuutta - 750);
      }
    }

    if (vaihtoehto === "Teloita saku") {
      if (Math.floor(Math.random() * 2) === 1) {
        viesti("Lahjoit poliisit");
        setValuutta(valuutta - 500);
      } else {
        viesti("Jouduit vankilaan murhasta. Rip saku");
        kuolema();
      }
    }

    //#endregion

    if (vaihtoehto === "Myy firma") {
      if (Math.floor(Math.random() * 5) === 1) {
        viesti("Myit firman. Voitit pelin.");
        voitto();
      } else {
        viesti("Pekka perui kaupat.");
        setValuutta(valuutta - 100);
      }
    }

    if (vaihtoehto === "Älä myy firmaa") {
      if (Math.floor(Math.random() * 2) === 14) {
        viesti("Sait turpaan. hammaslääkärimaksu: 30$");
        setValuutta(valuutta - 30);
      }
    }
    const rand = Math.floor(Math.random() * 8);

    if(rand === 1) {
alert("Jos markkinoilla on aukko siihen kannattaa tarttua.")      
    }
    if(rand === 2) {
alert("Muistathan että veronkierto ei kannata.")
    }
    if(rand === 3) {
alert("yrittäessa tulee epäonnistumisia mutta niistä ei kannata lannistua.")
    }
    if(rand === 4) {
alert("Yrittämisessä on aina riski.")
    }
    if(rand === 5) {
alert("Hyvä palvelu parantaa yrityksesi mainetta.")
    }
    if(rand === 6) {
alert("Muista hajoittaa sijoituksiasi.")
    }
    if(rand === 7) {
      alert("Yrittäessä oppii tärkeitä taitoja elämään.")
          }
      

    setEvent(null);
  };

  useEffect(() => {
    if (!event) {
      setEvent(napit());
    }
  }, [event]);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNimi(event.target.value);
  };

  const myStyle = {
    backgroundImage: `url(${tausta})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const voittoKuva2 = {
    backgroundImage: `url(${voittoKuva})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  if (voitettu) {
    return (
      <div style={voittoKuva2}>
        <p className="voittoteksti"> VOITIT PELIN</p>
      </div>
    );
  }

  if (!aloitettu)
    return (
      <div style={myStyle}>
        <div className="yrittaja">
          Yrityksen nimi:
          <input
            onChange={handleNameChange}
            onKeyDown={(e) => (e.key === "Enter" ? setAloitettu(true) : null)}
            value={yritysNimi}
          ></input>
          <button onClick={() => setAloitettu(true)}> Aloita peli</button>
        </div>
      </div>
    );
  console.log(msg);

  return (
    <div style={myStyle}>
      <Notification msg={msg} />
      <div>
        <p id="valuutta"> {valuutta}€</p>
        <p id="nimi">{yritysNimi}</p>
      </div>
      <div>
        <p className="yrittajaTeksti"> Ismo Yrittäjä</p>
        <img className="yrittaja" src={yrittaja} alt="yrittäjän kuva"></img>
      </div>
      <Napit event={event} handleEvents={handleEvents} />
    </div>
  );
};

export default App;
