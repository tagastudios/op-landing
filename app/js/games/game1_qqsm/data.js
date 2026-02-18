// Questions
let nivel = null;
const textoLargo = "col s8 m4 box-answer texto-largo";
const textoMuyLargo = "col s8 m4 box-answer texto-muy-largo";

function data(nivel) {
  function nivel1() {
    /*

 PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    puntaje1.className = "qqsm-selected";
    return {
      pregunta:
        "O.P Academy, es la solución ideal para, estudiantes, profesionales y docentes, debido a que fue creada con la finalidad de:",
      respuesta1:
        "Responder a los retos que representa la generación del siglo XXI",
      respuesta2: "Divertirte mientras enseñas o aprendes",
      respuesta3: "Luchar con creatividad contra la apatía y la sumisión",
      respuesta4: "Todas y para muestra un botón",
      correcta: 4,
    };
  }

  function nivel2() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    puntaje2.className = "qqsm-selected";
    return {
      pregunta:
        "No tengo tiempo para estudiar, aprender oficios, o nuevas habilidades <br> ¿Por qué?",
      respuesta1: "No conocía O.P Academy",
      respuesta2: "Mis ocupaciones no me dejan",
      respuesta3: "No me gusta Divertirme",
      respuesta4: "Soy muy flojo",
      correcta: 1,
    };
  }

  function nivel3() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    puntaje3.className = "qqsm-selected";
    return {
      pregunta: "En O.P Academy el termino OverPowered se refiere a:",
      respuesta1:
        "Desarrollar habilidades que te hagan ser el mejor profesional del mundo",
      respuesta2:
        "Descubrir habilidades y talentos ocultos que te harán hacer frente a los desafíos de la vida",
      respuesta3: "Estar sobre cargado de conocimientos",
      respuesta4: "Dominar o ser dominado",
      correcta: 2,
    };
  }

  function nivel4() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    puntaje4.className = "qqsm-selected";
    return {
      pregunta: " El termino Networking hace referencia a:",
      respuesta1: "Trabajar con la red",
      respuesta2: "Trabajar en el internet",
      respuesta3: "Red de contactos que te ayudan a generar oportunidades",
      respuesta4: "Como diría la abuela: “Ser rochelero”",
      correcta: 3,
    };
  }

  function nivel5() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    puntaje5.className = "qqsm-selected";
    return {
      pregunta: "El objetivo de O.P Academy, sistema educativo gamificado es:",
      respuesta1: "Gamificar la red de contactos de la pregunta anterior",
      respuesta2:
        "Generar un entorno de aprendizaje divertido con elementos interactivos",
      respuesta3:
        "Yo mejor me voy me largo de aquí, me van a encontrar muerto en choroní",
      respuesta4: "Jugar y solo jugar",
      correcta: 2,
    };
  }

  function nivel6() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    puntaje6.className = "qqsm-selected";
    return {
      pregunta: "En O.P Academy, las metodologías de evaluación son:",
      respuesta1: "Clases magistrales y tres exámenes",
      respuesta2: "Clase magistral, taller, exámenes sorpresa",
      respuesta3: "Charadas, QQSM, Ted Talk Simulator, y más",
      respuesta4: "Exposiciones convencionales, debates y exámenes",
      correcta: 3,
    };
  }

  function nivel7() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    puntaje7.className = "qqsm-selected";
    return {
      pregunta: "La educación 2.0 que plantea O.P Academy, es una educación:",
      respuesta1: "Basados en mecanismos de evaluación online",
      respuesta2: "Basados en mecanismos de evaluación interactiva",
      respuesta3: "Basados en clases magistrales en un área física",
      respuesta4: "Ninguna de las anteriores",
      correcta: 2,
    };
  }

  function nivel8() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    puntaje8.className = "qqsm-selected";
    return {
      pregunta: "La zona de confort es:",
      respuesta1:
        "Un ambiente donde estamos a gusto y nos hace sentir seguros porque todo está bajo nuestro control, y de donde O.P Academy no va a sacarme",
      respuesta2:
        "Un ambiente donde no estamos a gusto y nos hace sentir seguros porque todo está bajo nuestro control, y de donde O.P Academy va a sacarme",
      respuesta3:
        "Un ambiente donde estamos a gusto y nos hace sentir seguros porque todo está bajo nuestro control, y de donde O.P Academy va a sacarme",
      respuesta4: "No tengo idea, al cabo que no puedo leer las 3 anteriores",
      correcta: 3,
    };
  }

  function nivel9() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    puntaje9.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 9?",
      respuesta1: "Respuesta1 de la 9",
      respuesta2: "Respuesta2 de la 9",
      respuesta3: "Respuesta3 de la 9",
      respuesta4: "Respuesta4 de la 9",
      correcta: "Respuesta2",
    };
  }

  function nivel10() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    puntaje10.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 10?",
      respuesta1: "Respuesta1 de la 10",
      respuesta2: "Respuesta2 de la 10",
      respuesta3: "Respuesta3 de la 10",
      respuesta4: "Respuesta4 de la 10",
      correcta: "Respuesta2",
    };
  }

  function nivel11() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje11 = document.querySelector("#qqsm-puntaje11");
    puntaje11.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 11?",
      respuesta1: "Respuesta1 de la 11",
      respuesta2: "Respuesta2 de la 11",
      respuesta3: "Respuesta3 de la 11",
      respuesta4: "Respuesta4 de la 11",
      correcta: "Respuesta2",
    };
  }

  function nivel12() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje12 = document.querySelector("#qqsm-puntaje12");
    puntaje12.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 12?",
      respuesta1: "Respuesta1 de la 12",
      respuesta2: "Respuesta2 de la 12",
      respuesta3: "Respuesta3 de la 12",
      respuesta4: "Respuesta4 de la 12",
      correcta: "Respuesta2",
    };
  }

  function nivel13() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje13 = document.querySelector("#qqsm-puntaje13");
    puntaje13.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 13?",
      respuesta1: "Respuesta1 de la 13",
      respuesta2: "Respuesta2 de la 13",
      respuesta3: "Respuesta3 de la 13",
      respuesta4: "Respuesta4 de la 13",
      correcta: "Respuesta2",
    };
  }

  function nivel14() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje14 = document.querySelector("#qqsm-puntaje14");
    puntaje14.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 14?",
      respuesta1: "Respuesta1 de la 14",
      respuesta2: "Respuesta2 de la 14",
      respuesta3: "Respuesta3 de la 14",
      respuesta4: "Respuesta4 de la 14",
      correcta: "Respuesta2",
    };
  }

  function nivel15() {
    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje15 = document.querySelector("#qqsm-puntaje15");
    puntaje15.className = "qqsm-selected";
    return {
      pregunta: "Pregunta 15?",
      respuesta1: "Respuesta1 de la 15",
      respuesta2: "Respuesta2 de la 15",
      respuesta3: "Respuesta3 de la 15",
      respuesta4: "Respuesta4 de la 15",
      correcta: "Respuesta2",
    };
  }

  if (nivel === "nivel1") {
    /*









      NIVEL 1









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel1().pregunta}`;

    /*
 
   RESPUESTAS DYNAMIC

 */
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel1().respuesta1}`;
    qqsmR1.className = textoLargo;
    qqsmR2.innerHTML = `${nivel1().respuesta2}`;
    qqsmR3.innerHTML = `${nivel1().respuesta3}`;
    qqsmR4.innerHTML = `${nivel1().respuesta4}`;

    // RETURN RIGHT ANSWER
    return nivel1().correcta;
  } else if (nivel === "nivel2") {
    /*









      NIVEL 2









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel2().pregunta}`;

    /*
 
   RESPUESTAS DYNAMIC

 */
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel2().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel2().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel2().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel2().respuesta4}<br><br>`;

    /*
 
   PUNTAJE DYNAMIC

 */
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    puntaje1.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel2().correcta;
  } else if (nivel === "nivel3") {
    /*









      NIVEL 3









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel3().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel3().respuesta1}`;
    qqsmR1.className = textoLargo;
    qqsmR2.innerHTML = `${nivel3().respuesta2}`;
    qqsmR2.className = textoLargo;
    qqsmR3.innerHTML = `${nivel3().respuesta3}`;
    qqsmR4.innerHTML = `${nivel3().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel3().correcta;
  } else if (nivel === "nivel4") {
    /*









      NIVEL 4









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel4().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel4().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel4().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel4().respuesta3}`;
    qqsmR3.className = textoLargo;
    qqsmR4.innerHTML = `${nivel4().respuesta4}`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel4().correcta;
  } else if (nivel === "nivel5") {
    /*









      NIVEL 5









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel5().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel5().respuesta1}`;
    qqsmR2.innerHTML = `${nivel5().respuesta2}`;
    qqsmR2.className = textoLargo;
    qqsmR3.innerHTML = `${nivel5().respuesta3}`;
    qqsmR3.className = textoLargo;
    qqsmR4.innerHTML = `${nivel5().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel5().correcta;
  } else if (nivel === "nivel6") {
    /*









      NIVEL 6









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel6().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel6().respuesta1}`;
    qqsmR2.innerHTML = `${nivel6().respuesta2}`;
    qqsmR3.innerHTML = `${nivel6().respuesta3}`;
    qqsmR4.innerHTML = `${nivel6().respuesta4}`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";

    // RETURN RIGHT ANSWER
    return nivel6().correcta;
  } else if (nivel === "nivel7") {
    /*









      NIVEL 7









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel7().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel7().respuesta1}`;
    qqsmR2.innerHTML = `${nivel7().respuesta2}`;
    qqsmR3.innerHTML = `${nivel7().respuesta3}`;
    qqsmR4.innerHTML = `${nivel7().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel7().correcta;
  } else if (nivel === "nivel8") {
    /*









      NIVEL 8









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel8().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel8().respuesta1}`;
    qqsmR1.className = textoMuyLargo;
    qqsmR2.innerHTML = `${nivel8().respuesta2}`;
    qqsmR2.className = textoMuyLargo;
    qqsmR3.innerHTML = `${nivel8().respuesta3}`;
    qqsmR3.className = textoMuyLargo;
    qqsmR4.innerHTML = `${nivel8().respuesta4}`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel8().correcta;
  } else if (nivel === "nivel9") {
    /*









      NIVEL 9









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel9().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel9().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel9().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel9().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel9().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel9().correcta;
  } else if (nivel === "nivel10") {
    /*









      NIVEL 10









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel10().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel10().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel10().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel10().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel10().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel10().correcta;
  } else if (nivel === "nivel11") {
    /*









      NIVEL 11









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel11().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel11().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel11().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel11().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel11().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";
    puntaje10.className = "qqsm-passed-checkpoint";

    // RETURN RIGHT ANSWER
    return nivel11().correcta;
  } else if (nivel === "nivel12") {
    /*









      NIVEL 12









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel12().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel12().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel12().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel12().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel12().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    const puntaje11 = document.querySelector("#qqsm-puntaje11");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";
    puntaje10.className = "qqsm-passed-checkpoint";
    puntaje11.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel12().correcta;
  } else if (nivel === "nivel13") {
    /*









      NIVEL 13









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel13().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel13().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel13().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel13().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel13().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    const puntaje11 = document.querySelector("#qqsm-puntaje11");
    const puntaje12 = document.querySelector("#qqsm-puntaje12");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";
    puntaje10.className = "qqsm-passed-checkpoint";
    puntaje11.className = "qqsm-passed";
    puntaje12.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel13().correcta;
  } else if (nivel === "nivel14") {
    /*









      NIVEL 14









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel14().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel14().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel14().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel14().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel14().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    const puntaje11 = document.querySelector("#qqsm-puntaje11");
    const puntaje12 = document.querySelector("#qqsm-puntaje12");
    const puntaje13 = document.querySelector("#qqsm-puntaje13");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";
    puntaje10.className = "qqsm-passed-checkpoint";
    puntaje11.className = "qqsm-passed";
    puntaje12.className = "qqsm-passed";
    puntaje13.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel14().correcta;
  } else if (nivel === "nivel15") {
    /*









      NIVEL 15









    */
    /*
  
    PREGUNTAS DYNAMIC

  */
    const qqsmPregunta = document.querySelector("#qqsmPregunta");
    qqsmPregunta.innerHTML = `${nivel15().pregunta}
<br>
<br>
`;

    /*

RESPUESTAS DYNAMIC

*/
    const qqsmR1 = document.querySelector("#qqsmR1");
    const qqsmR2 = document.querySelector("#qqsmR2");
    const qqsmR3 = document.querySelector("#qqsmR3");
    const qqsmR4 = document.querySelector("#qqsmR4");
    qqsmR1.innerHTML = `${nivel15().respuesta1}<br><br>`;
    qqsmR2.innerHTML = `${nivel15().respuesta2}<br><br>`;
    qqsmR3.innerHTML = `${nivel15().respuesta3}<br><br>`;
    qqsmR4.innerHTML = `${nivel15().respuesta4}<br><br>`;

    /*

PUNTAJE DYNAMIC

*/
    const puntaje1 = document.querySelector("#qqsm-puntaje1");
    const puntaje2 = document.querySelector("#qqsm-puntaje2");
    const puntaje3 = document.querySelector("#qqsm-puntaje3");
    const puntaje4 = document.querySelector("#qqsm-puntaje4");
    const puntaje5 = document.querySelector("#qqsm-puntaje5");
    const puntaje6 = document.querySelector("#qqsm-puntaje6");
    const puntaje7 = document.querySelector("#qqsm-puntaje7");
    const puntaje8 = document.querySelector("#qqsm-puntaje8");
    const puntaje9 = document.querySelector("#qqsm-puntaje9");
    const puntaje10 = document.querySelector("#qqsm-puntaje10");
    const puntaje11 = document.querySelector("#qqsm-puntaje11");
    const puntaje12 = document.querySelector("#qqsm-puntaje12");
    const puntaje13 = document.querySelector("#qqsm-puntaje13");
    const puntaje14 = document.querySelector("#qqsm-puntaje14");
    puntaje1.className = "qqsm-passed";
    puntaje2.className = "qqsm-passed";
    puntaje3.className = "qqsm-passed";
    puntaje4.className = "qqsm-passed";
    puntaje5.className = "qqsm-passed-checkpoint";
    puntaje6.className = "qqsm-passed";
    puntaje7.className = "qqsm-passed";
    puntaje8.className = "qqsm-passed";
    puntaje9.className = "qqsm-passed";
    puntaje10.className = "qqsm-passed-checkpoint";
    puntaje11.className = "qqsm-passed";
    puntaje12.className = "qqsm-passed";
    puntaje13.className = "qqsm-passed";
    puntaje14.className = "qqsm-passed";

    // RETURN RIGHT ANSWER
    return nivel15().correcta;
  } else {
    nivel1();
  }
}
