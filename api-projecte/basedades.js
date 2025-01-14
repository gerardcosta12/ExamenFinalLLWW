import mongoose from 'mongoose';
import Pregunta from './models/Pregunta.js';

mongoose
  .connect('mongodb://localhost:27017/trivia')
  .then(() => console.log('Connectat a MongoDB'))
  .catch((err) => console.error('Error al connectar amb MongoDB:', err));

  const preguntesInicials = [
    {
      pregunta: "Quina especialitat de la URV es troba entre les millors del món segons el QS World University Rankings?",
      opcions: [
        { text: 'Medicina', correcta: false },
        { text: 'Química', correcta: true },
        { text: 'Arqueologia', correcta: false },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "Quin municipi de la província té una denominació d'origen d'avellanes?",
      opcions: [
        { text: 'Valls', correcta: false },
        { text: 'Montblanc', correcta: false },
        { text: 'Reus', correcta: true },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "Quin científic, estudiant de la URV, va presentar el programa 'El cazador de cerebros'?",
      opcions: [
        { text: 'Pere Estupinyà', correcta: true },
        { text: 'Arnau Ginestà', correcta: false },
        { text: 'Albert Mallafré', correcta: false },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "En quina disciplina científica va destacar el tarragoní Antoní Martí i Franquès?",
      opcions: [
        { text: 'Química', correcta: true },
        { text: 'Medicina', correcta: false },
        { text: 'Enologia', correcta: false },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "Quina institució de la URV es dedica a la recerca en salut i biomedicina?",
      opcions: [
        { text: 'Institut de Recerca en Biomedicina de Tarragona', correcta: false },
        { text: 'Institut de Recerca Sanitària Pere Virgili', correcta: true },
        { text: 'Institut de Recerca en Ciències de la Vida', correcta: false },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "Per quin producte és coneguda la denominació d'origen 'DO Tarragona'?",
      opcions: [
        { text: 'Vi', correcta: true },
        { text: 'Formatge', correcta: false },
        { text: 'Xocolata', correcta: false },
      ],
      tematica: 'Ciencia',
    },

    {
      pregunta: "Quina d'aquestes carreres científiques NO s'imparteix a la URV?",
      opcions: [
        { text: 'Grau en Enginyeria Informàtica', correcta: false },
        { text: 'Grau en Física', correcta: true },
        { text: 'Grau en Biotecnologia', correcta: false },
      ],
      tematica: 'Ciencia',
    },
  
    {
      pregunta: "Quants municipis formen la província de Tarragona?",
      opcions: [
        { text: '98', correcta: false },
        { text: '241', correcta: false },
        { text: '184', correcta: true },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "En quin d'aquests municipis hi ha una facultat de la URV?",
      opcions: [
        { text: 'El Vendrell', correcta: true },
        { text: 'Valls', correcta: false },
        { text: 'Salou', correcta: false },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "Quina facultat de la URV es troba al Campus de Vila-seca?",
      opcions: [
        { text: 'Facultat de Química', correcta: false },
        { text: 'Facultat de Turisme i Geografia', correcta: true },
        { text: 'Facultat de Medicina i Ciències de la Salut', correcta: false },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "En quina localitat va néixer Antoni Martí i Franquès?",
      opcions: [
        { text: 'Torredembarra', correcta: false },
        { text: 'Reus', correcta: false },
        { text: 'Altafulla', correcta: true },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "Quina facultat de la URV es troba al Campus de Vila-seca?",
      opcions: [
        { text: 'Facultat de Química', correcta: false },
        { text: 'Facultat de Turisme i Geografia', correcta: true },
        { text: 'Facultat de Medicina i Ciències de la Salut', correcta: false },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "Quina comarca té com a capital la ciutat d'Amposta?",
      opcions: [
        { text: 'Terra Alta', correcta: false },
        { text: 'Falset', correcta: false },
        { text: 'Montsià', correcta: true },
      ],
      tematica: 'Geografia',
    },

    {
      pregunta: "Quina muntanya és el punt més alt de la província de Tarragona?",
      opcions: [
        { text: 'Mont Caro', correcta: true },
        { text: 'Montsant', correcta: false },
        { text: 'Montserrat', correcta: false },
      ],
      tematica: 'Geografia',
    },
  
    {
      pregunta: "Quin d'aquests esportistes tarragonins ha guanyat un campionat del món?",
      opcions: [
        { text: 'Carles Coll (natació)', correcta: true },
        { text: 'Pau Roselló (esgrima)', correcta: false },
        { text: 'Marta Galimany (atletisme)', correcta: false },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "Quin d'aquests equips disputa o ha disputat partits de competició europea?",
      opcions: [
        { text: 'Tarragona Handbol Club (handbol)', correcta: false },
        { text: 'Reus Deportiu (hoquei)', correcta: true },
        { text: 'CB Valls (bàsquet)', correcta: false },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "Qui va ser el primer tarragoní en debutar a la lliga ACB de bàsquet?",
      opcions: [
        { text: 'Jordi Mariné', correcta: false },
        { text: 'Joan Mateu', correcta: false },
        { text: 'Berni Álvarez', correcta: true },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "Quin d'aquests jugadors professionals de futbol va néixer a la província de Tarragona?",
      opcions: [
        { text: 'Marc Bartra', correcta: true },
        { text: 'Sergi Cardona', correcta: false },
        { text: 'Èric Garcia', correcta: false },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "En quin esport destaca David García Torné, olímpic a París 2024?",
      opcions: [
        { text: 'Judo', correcta: true },
        { text: 'Atletisme', correcta: false },
        { text: 'Natació', correcta: false },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "Quin nom porta la pista d'atletisme de Tarragona?",
      opcions: [
        { text: 'Marta Jurado', correcta: false },
        { text: 'Natalia Rodríguez', correcta: true },
        { text: 'Albert Casadó', correcta: false },
      ],
      tematica: 'Esports',
    },

    {
      pregunta: "Qui és el jugador amb més partits disputats amb el Nàstic de Tarragona?",
      opcions: [
        { text: 'Santi Coch', correcta: true },
        { text: 'Valero Serer', correcta: false },
        { text: 'Joan Oriol', correcta: false },
      ],
      tematica: 'Esports',
    },
  
    {
      pregunta: "Quina lletra representa el logo de la Universitat Rovira i Virgili?",
      opcions: [
        { text: 'Lletra a', correcta: false },
        { text: 'Lletra alfa', correcta: true },
        { text: 'Lletra o', correcta: false },
      ],
      tematica: 'Art',
    },

    {
      pregunta: "Qui va dissenyar el logo de la Universitat Rovira i Virgili?",
      opcions: [
        { text: 'Antoni Tàpies', correcta: true },
        { text: 'Salvador Dalí', correcta: false },
        { text: 'Joan Miró', correcta: false },
      ],
      tematica: 'Art',
    },

    {
      pregunta: "Quin escriptor va ambientar la seva obra Aigües encantades en un poble de la província de Tarragona?",
      opcions: [
        { text: 'Josep Pla', correcta: false },
        { text: 'Joan Puig i Ferreter', correcta: true },
        { text: 'Àngel Guimerà', correcta: false },
      ],
      tematica: 'Art',
    },

    {
      pregunta: "En quina ciutat es troba el Teatre Fortuny?",
      opcions: [
        { text: 'Tarragona', correcta: false },
        { text: 'Tortosa', correcta: false },
        { text: 'Reus', correcta: true },
      ],
      tematica: 'Art',
    },

    {
      pregunta: "Quina d'aquestes obres és de l'arquitecte Antoni Gaudí?",
      opcions: [
        { text: 'Casa Batlló', correcta: true },
        { text: 'Ciutat de les Arts i les Ciències', correcta: false },
        { text: 'Estadi Olímpic de Montjuïc', correcta: false },
      ],
      tematica: 'Art',
    },

    {
      pregunta: "Quin castell es representa al Monument als Castells de Tarragona?",
      opcions: [
        { text: '3d10 amb folre i manilles', correcta: false },
        { text: '4d8', correcta: true },
        { text: 'Pilar de 6', correcta: false },
      ],
      tematica: 'Art',
    },
    
    {
      pregunta: "En quin any es va fundar la Universitat Rovira i Virgili?",
      opcions: [
        { text: '1991', correcta: true },
        { text: '2003', correcta: false },
        { text: '1960', correcta: false },
      ],
      tematica: 'Historia',
    },

    {
      pregunta: "Qui va ser Antoni Rovira i Virgili?",
      opcions: [
        { text: 'Arquitecte Modernista', correcta: false },
        { text: 'Jugador de futbol', correcta: false },
        { text: 'President del Parlament de Catalunya', correcta: true },
      ],
      tematica: 'Historia',
    },

    {
      pregunta: "La batalla de l'Ebre de la Guerra Civil Espanyola va ser...",
      opcions: [
        { text: 'La més llarga de la guerra', correcta: true },
        { text: 'La primera de la guerra', correcta: false },
        { text: 'La més curta de la guerra', correcta: false },
      ],
      tematica: 'Historia',
    },

    {
      pregunta: "Quin va ser el nom romà de la ciutat de Tarragona?",
      opcions: [
        { text: 'Tarrakus', correcta: false },
        { text: 'Tarraco', correcta: true },
        { text: 'Tarraconensis', correcta: false },
      ],
      tematica: 'Historia',
    },

    {
      pregunta: "Quina flor apareix a l'escut de la ciutat de Reus?",
      opcions: [
        { text: 'Rosa', correcta: true },
        { text: 'Tulipa', correcta: false },
        { text: 'Margarida', correcta: false },
      ],
      tematica: 'Historia',
    },

    {
      pregunta: "Quina longitud tenia la Via Augusta, la via romana que passa per Tarragona i Tortosa, entre altres?",
      opcions: [
        { text: 'Uns 100 km', correcta: false },
        { text: 'Uns 1.500 km', correcta: true },
        { text: 'Uns 17.000 km', correcta: false },
      ],
      tematica: 'Historia',
    },
  
    {
      pregunta: "Quin és l'usuari d'Instagram de la Universitat Rovira i Virgili?",
      opcions: [
        { text: '@uniurv', correcta: false },
        { text: '@urv', correcta: false },
        { text: '@universitaturv', correcta: true },
      ],
      tematica: 'Entreteniment',
    },

    {
      pregunta: "Quina activitat cultural organitza la URV per als estudiants?",
      opcions: [
        { text: 'Festa Major de la URV', correcta: true },
        { text: 'Carnaval de la URV', correcta: false },
        { text: 'Nadal de la URV', correcta: false },
      ],
      tematica: 'Entreteniment',
    },

    {
      pregunta: "Óscar Cornejo, el creador d'un famós programa de televisió, va néixer a Tarragona. De quin programa es tracta?",
      opcions: [
        { text: 'Pasapalabra', correcta: false },
        { text: 'Masterchef', correcta: false },
        { text: 'Sálvame Deluxe', correcta: true },
      ],
      tematica: 'Entreteniment',
    },

    {
      pregunta: "Quin d'aquests pòdcasts NO ha fet mai un show presencial a Tarragona?",
      opcions: [
        { text: 'La Sotana', correcta: false },
        { text: 'La Ruina', correcta: false },
        { text: 'La Pija y la Quinqui', correcta: true },
      ],
      tematica: 'Entreteniment',
    },

    {
      pregunta: "Quin d'aquests humoristes va néixer a Reus?",
      opcions: [
        { text: 'Andreu Buenafuente', correcta: true },
        { text: 'Santiago Segura', correcta: false },
        { text: 'Leo Harlem', correcta: false },
      ],
      tematica: 'Entreteniment',
    },
  ];
  

const preguntesBaseDades = async () => {
  try {
    await Pregunta.deleteMany();
    const result = await Pregunta.insertMany(preguntesInicials);
    console.log('Preguntes iniciales afegides:', result);
    mongoose.connection.close();
  } catch (error) {
    console.error("Error a l'insertar les preguntes:", error);
    mongoose.connection.close();
  }
};

preguntesBaseDades();
