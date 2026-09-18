import type { Case } from "@/types/case";

// Fourth demo case: a closed-circle mystery aboard a cruise ship, mid-ocean.
// Introduces locked evidence: some pieces only become available after
// examining another evidence, reviewing a testimony, or visiting a location.
// Fictional in every detail.
export const case004: Case = {
  id: "case-004",
  caseNumber: "CASO #004",
  title: "Subasta en altamar",
  status: "unsolved",
  difficulty: "medium",
  incidentDate: "20 de agosto, 2026",
  location: "Crucero Estrella del Sur, en altamar",
  victim: {
    name: "Leonor Aguirre-Beltrán",
    age: 61,
    occupation: "Coleccionista de arte y joyas",
  },
  leadInvestigator: "Insp. R. Suárez",
  summary:
    "La noche previa a una subasta benéfica a bordo, Leonor Aguirre-Beltrán apareció sin vida en su camarote. El Zafiro de Bengala, la pieza que iba a subastarse, desapareció con ella.",
  description:
    "El crucero Estrella del Sur navegaba a tres días de tierra firme cuando, la noche del 20 de agosto, se celebró una cena de gala previa a la subasta benéfica del Zafiro de Bengala, un collar histórico propiedad de Leonor Aguirre-Beltrán. Contra el protocolo de seguridad del barco, Leonor decidió guardar la pieza en la caja fuerte de su propio camarote esa última noche en lugar de la bóveda general. A la mañana siguiente, personal de limpieza la encontró sin vida y la joya no apareció en la caja fuerte, forzada durante la noche. Al no haber ningún puerto cercano, la investigación formal comenzó recién cuando la nave atracó, pero la tripulación preservó la escena y recolectó testimonios de inmediato. Nadie pudo haber abandonado el barco esa noche: quien lo hizo, sigue a bordo.",
  objective: "Determine qué ocurrió realmente y quién es responsable.",

  locations: [
    {
      id: "loc-camarote-leonor",
      name: "Camarote de Leonor",
      description: "Suite principal, escena del hallazgo. Incluye una caja fuerte personal encontrada forzada.",
      position: { x: 50, y: 18 },
      relatedEvidenceIds: ["ev-01", "ev-02", "ev-03"],
    },
    {
      id: "loc-camarote-clara",
      name: "Camarote de Clara Fontán",
      description: "Suite de la tasadora contratada para autenticar y rematar la pieza en la subasta.",
      position: { x: 22, y: 18 },
      relatedEvidenceIds: ["ev-04"],
    },
    {
      id: "loc-camarote-felipe",
      name: "Camarote de Felipe",
      description: "Suite del sobrino de Leonor, en el mismo pasillo de camarotes principales.",
      position: { x: 78, y: 18 },
      relatedEvidenceIds: ["ev-07"],
    },
    {
      id: "loc-sala-subastas",
      name: "Sala de subastas",
      description: "Salón preparado para la subasta benéfica del día siguiente, ya vacío tras la cena de gala.",
      position: { x: 50, y: 50 },
      relatedEvidenceIds: ["ev-05"],
    },
    {
      id: "loc-cubierta",
      name: "Cubierta principal",
      description: "Zona exterior con vista al mar, uno de los pocos puntos del barco con buena señal satelital.",
      position: { x: 50, y: 82 },
      relatedEvidenceIds: ["ev-06"],
    },
    {
      id: "loc-seguridad",
      name: "Oficina de seguridad del barco",
      description: "Centro de control con las cámaras del pasillo de camarotes y el registro de llaves maestras.",
      position: { x: 20, y: 65 },
      relatedEvidenceIds: ["ev-08"],
    },
    {
      id: "loc-boveda",
      name: "Bóveda general del crucero",
      description: "Donde debería haber pasado la noche el Zafiro de Bengala, según el protocolo habitual de seguridad.",
      position: { x: 80, y: 65 },
      relatedEvidenceIds: ["ev-09"],
    },
  ],

  evidences: [
    {
      id: "ev-01",
      code: "EVIDENCIA #01",
      title: "Caja fuerte forzada del camarote",
      category: "forensic",
      description:
        "La caja fuerte personal de Leonor presenta marcas de forzado recientes. El mecanismo es de un modelo estándar de la naviera, sin sistema de registro de aperturas.",
      foundAt: "21 de agosto, 07:10",
      locationId: "loc-camarote-leonor",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-02",
      code: "EVIDENCIA #02",
      title: "Copa de champagne con residuo",
      category: "forensic",
      description:
        "Copa hallada en la mesa de noche con trazas de un sedante de acción rápida, no perteneciente a la medicación conocida de la víctima.",
      foundAt: "21 de agosto, 07:15",
      locationId: "loc-camarote-leonor",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-03",
      code: "EVIDENCIA #03",
      title: "Informe de autenticación con incongruencias",
      category: "document",
      description:
        "Informe firmado por Clara Fontán días antes del viaje. El peso registrado de la piedra difiere levemente del certificado original de hace diez años, algo que ninguna de las partes explicó públicamente.",
      foundAt: "21 de agosto, 09:00",
      locationId: "loc-camarote-leonor",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: ["sus-clara"],
    },
    {
      id: "ev-04",
      code: "EVIDENCIA #04",
      title: "Réplica de la joya",
      category: "object",
      description:
        "Una imitación de alta calidad del Zafiro de Bengala, hallada envuelta en tela dentro de un neceser en el camarote de Clara Fontán. Es visualmente casi indistinguible del original.",
      foundAt: "21 de agosto, 14:20",
      locationId: "loc-camarote-clara",
      discovered: false,
      unlocksAfter: { kind: "evidence", id: "ev-03" },
      importance: "critical",
      relatedSuspectIds: ["sus-clara"],
    },
    {
      id: "ev-05",
      code: "EVIDENCIA #05",
      title: "Boleto de una casa de apuestas",
      category: "document",
      description:
        "Comprobante de una deuda de juego a nombre de Diego Roldán, con vencimiento la semana posterior al viaje, hallado caído junto a su asiento habitual en la sala de subastas.",
      foundAt: "21 de agosto, 10:15",
      locationId: "loc-sala-subastas",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-diego"],
    },
    {
      id: "ev-06",
      code: "EVIDENCIA #06",
      title: "Mensaje a un comprador anónimo",
      category: "communication",
      description:
        "Mensaje enviado por Marina Costa la tarde del incidente, desde uno de los pocos puntos del barco con señal: \"El otro collar está listo para cerrarse en cuanto lleguemos a puerto, como pidió la señora.\"",
      foundAt: "20 de agosto, 17:45",
      locationId: "loc-cubierta",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-marina"],
    },
    {
      id: "ev-07",
      code: "EVIDENCIA #07",
      title: "Registro de llamadas de Felipe",
      category: "communication",
      description:
        "Detalle de llamadas del último mes: tres comunicaciones con un prestamista informal, la última realizada dos días antes de zarpar.",
      foundAt: "21 de agosto, 16:00",
      locationId: "loc-camarote-felipe",
      discovered: false,
      unlocksAfter: { kind: "testimony", id: "test-felipe" },
      importance: "high",
      relatedSuspectIds: ["sus-felipe"],
    },
    {
      id: "ev-08",
      code: "EVIDENCIA #08",
      title: "Grabación de la cámara del pasillo",
      category: "photo",
      description:
        "Fotograma del pasillo de camarotes principales: una figura sale del camarote de Leonor a las 23:10. La calidad de la imagen no permite identificar el rostro con certeza.",
      foundAt: "20 de agosto, 23:10",
      locationId: "loc-seguridad",
      discovered: false,
      unlocksAfter: { kind: "location", id: "loc-seguridad" },
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-09",
      code: "EVIDENCIA #09",
      title: "Llave maestra sin registrar",
      category: "object",
      description:
        "El registro de uso de llaves maestras de la tripulación muestra un faltante sin justificar la noche del incidente, algo que el jefe de seguridad no supo explicar de inmediato.",
      foundAt: "21 de agosto, 11:30",
      locationId: "loc-boveda",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-ivan"],
    },
  ],

  suspects: [
    {
      id: "sus-marina",
      name: "Marina Costa",
      age: 33,
      avatarInitials: "MC",
      occupation: "Asistente personal",
      relationToVictim: "Empleada de confianza desde hace seis años",
      description:
        "Organizaba la agenda de Leonor y tenía acceso habitual a sus pertenencias durante los viajes, incluida la combinación de la caja fuerte personal.",
      alibi: "Dice haber llevado una copa de champagne al camarote alrededor de las 22:30 y haberse retirado de inmediato.",
      interestLevel: "medium",
      knownInfo: [
        "Un mensaje suyo menciona la venta de \"otro collar\" a un comprador anónimo.",
        "Tenía acceso directo a la caja fuerte y a los hábitos nocturnos de Leonor.",
        "Según la camarera, permaneció junto a la puerta del camarote más tiempo del que declara.",
      ],
    },
    {
      id: "sus-diego",
      name: "Diego Roldán",
      age: 45,
      avatarInitials: "DR",
      occupation: "Coleccionista privado",
      relationToVictim: "Rival de coleccionismo desde hace años",
      description:
        "Compitió por el Zafiro de Bengala en una subasta anterior y perdió frente a Leonor. Desde entonces mantuvo interés público en adquirir la pieza.",
      alibi: "Asegura haber pasado toda la noche en el casino del barco, jugando a las cartas.",
      interestLevel: "high",
      knownInfo: [
        "Tiene una deuda de juego significativa con vencimiento inminente.",
        "Su presencia en el casino está confirmada solo de forma parcial por el personal de turno.",
        "Comentó abiertamente durante la cena que \"esa piedra debería haber sido mía\".",
      ],
    },
    {
      id: "sus-felipe",
      name: "Felipe Aguirre-Beltrán",
      age: 29,
      avatarInitials: "FA",
      occupation: "Sin ocupación fija",
      relationToVictim: "Sobrino y heredero directo",
      description:
        "Único sobrino de Leonor y principal beneficiario de su patrimonio. Su relación con ella era cordial pero con tensiones económicas recientes.",
      alibi: "Dice haberse retirado temprano a su camarote por mareo, sin testigos que lo confirmen.",
      interestLevel: "medium",
      knownInfo: [
        "Su registro de llamadas muestra contacto reciente con un prestamista informal.",
        "Es el principal heredero de la colección de Leonor.",
        "Nadie puede confirmar ni desmentir su versión sobre esa noche.",
      ],
    },
    {
      id: "sus-ivan",
      name: "Iván Rocca",
      age: 50,
      avatarInitials: "IR",
      occupation: "Jefe de seguridad del crucero",
      relationToVictim: "Sin relación previa conocida",
      description:
        "Responsable de la seguridad de pasajeros y de la bóveda general del barco desde hace ocho años en la naviera.",
      alibi: "Declara haber estado en la oficina de seguridad toda la noche, monitoreando cámaras junto a un colega.",
      interestLevel: "low",
      knownInfo: [
        "El registro de llaves maestras de su área muestra un faltante sin explicación esa noche.",
        "Fue quien autorizó, a pedido de Leonor, que la joya pasara la noche fuera de la bóveda general.",
        "Su colega de turno confirma parcialmente su versión, aunque reconoce haberse ausentado unos minutos.",
      ],
    },
    {
      id: "sus-clara",
      name: "Clara Fontán",
      age: 38,
      avatarInitials: "CF",
      occupation: "Tasadora y subastadora",
      relationToVictim: "Contratada para autenticar y rematar la pieza",
      description:
        "Especialista contratada por la fundación organizadora de la subasta para certificar la autenticidad del Zafiro de Bengala antes del remate.",
      alibi: "Afirma haber visitado el camarote de Leonor brevemente a las 21:40 para una verificación rutinaria del certificado, y haberse retirado a los pocos minutos.",
      interestLevel: "medium",
      knownInfo: [
        "Su propio informe de autenticación contiene una incongruencia en el peso de la piedra que nunca se explicó.",
        "Fue la última persona, aparte de Marina, en reconocer haber visitado el camarote esa noche.",
        "Tiene acceso profesional a réplicas de alta calidad usadas habitualmente para exhibiciones y seguros.",
      ],
    },
  ],

  testimonies: [
    {
      id: "test-marina",
      personName: "Marina Costa",
      personId: "sus-marina",
      date: "21 de agosto, 2026",
      time: "10:00",
      location: "Estrella del Sur — Salón principal",
      content:
        "\"Le llevé la copa de champagne que había pedido, cerca de las diez y media. Se la dejé en la mesa de noche y me fui enseguida, no me quedé charlando ni nada raro.\"",
      clues: [
        "Confirma haber estado en el camarote alrededor de las 22:30.",
        "Insiste en que su visita fue breve y sin incidentes.",
      ],
      contradicts: [
        {
          testimonyId: "test-camarera",
          note:
            "La camarera del pasillo asegura haber visto a Marina junto a la puerta del camarote todavía a las 23:00, media hora después de que ella dice haberse retirado.",
        },
      ],
    },
    {
      id: "test-diego",
      personName: "Diego Roldán",
      personId: "sus-diego",
      date: "21 de agosto, 2026",
      time: "11:20",
      location: "Estrella del Sur — Casino",
      content:
        "\"Estuve jugando a las cartas toda la noche, pregúntenle a cualquiera del casino. No tenía ningún motivo para acercarme a su camarote, ya había perdido esa pieza hace tiempo y lo asumí.\"",
      clues: [
        "El personal del casino confirma su presencia solo de forma parcial, no durante toda la noche.",
        "Minimiza su interés en la joya pese a comentarios previos registrados por otros invitados.",
      ],
    },
    {
      id: "test-felipe",
      personName: "Felipe Aguirre-Beltrán",
      personId: "sus-felipe",
      date: "21 de agosto, 2026",
      time: "12:05",
      location: "Estrella del Sur — Camarote de Felipe",
      content:
        "\"Me sentía mal del estómago, algo común en mí con el movimiento del barco. Me acosté temprano y no volví a salir. Ojalá alguien pudiera confirmarlo, pero dormía solo.\"",
      clues: [
        "No ofrece ningún testigo para el resto de la noche.",
        "Evita mencionar sus finanzas personales durante la entrevista.",
      ],
    },
    {
      id: "test-ivan",
      personName: "Iván Rocca",
      personId: "sus-ivan",
      date: "21 de agosto, 2026",
      time: "09:30",
      location: "Estrella del Sur — Oficina de seguridad",
      content:
        "\"Estuve toda la noche acá, monitoreando cámaras con un colega. El faltante en el registro de llaves maestras es raro, lo estamos revisando, pero no tengo una explicación todavía.\"",
      clues: [
        "Reconoce la irregularidad en el registro de llaves sin poder explicarla.",
        "Su colega de turno confirma la mayor parte de su versión, con una breve ausencia sin especificar.",
      ],
    },
    {
      id: "test-clara",
      personName: "Clara Fontán",
      personId: "sus-clara",
      date: "21 de agosto, 2026",
      time: "13:40",
      location: "Estrella del Sur — Salón principal",
      content:
        "\"Pasé un momento antes de la cena para confirmar un detalle del certificado con Leonor, nada fuera de lo común. La diferencia de peso que mencionan es mínima, esas variaciones ocurren con instrumentos distintos.\"",
      clues: [
        "Minimiza la incongruencia detectada en su propio informe.",
        "Confirma haber visitado el camarote esa misma noche, antes que Marina.",
      ],
    },
    {
      id: "test-camarera",
      personName: "Camarera del pasillo",
      date: "21 de agosto, 2026",
      time: "08:15",
      location: "Estrella del Sur — Pasillo de camarotes",
      content:
        "\"Encontré el camarote revuelto cuando fui a llevar el desayuno. La noche anterior había visto a la asistente de la señora Leonor merodeando cerca de la puerta bastante después de lo que imaginé normal, cerca de las once.\"",
      clues: [
        "Ubica a Marina en el pasillo más tarde de lo que ella misma reconoce.",
        "Describe el estado de la habitación al momento del hallazgo.",
      ],
      contradicts: [
        {
          testimonyId: "test-marina",
          note:
            "Contradice la versión de Marina, quien asegura haberse retirado del camarote de inmediato tras entregar la copa, media hora antes de lo que reporta la camarera.",
        },
      ],
    },
  ],

  timeline: [
    {
      id: "tl-01",
      time: "20:00",
      title: "Cena de gala previa a la subasta",
      description: "Todos los pasajeros relevantes coinciden en el salón principal antes del remate del día siguiente.",
      locationId: "loc-sala-subastas",
      certainty: "confirmed",
    },
    {
      id: "tl-02",
      time: "21:15",
      title: "Leonor se retira con la joya a su camarote",
      description:
        "Contra el protocolo habitual, decide guardar el Zafiro de Bengala en la caja fuerte de su propia suite esa última noche.",
      locationId: "loc-camarote-leonor",
      certainty: "confirmed",
    },
    {
      id: "tl-03",
      time: "21:40",
      title: "Clara Fontán visita el camarote",
      description: "Según su testimonio, pasa brevemente para confirmar un detalle del certificado de autenticidad.",
      locationId: "loc-camarote-leonor",
      relatedEvidenceIds: ["ev-03"],
      certainty: "confirmed",
    },
    {
      id: "tl-04",
      time: "22:30",
      title: "Marina entrega una copa de champagne",
      description: "Según su propio testimonio, la deja en la mesa de noche y se retira de inmediato.",
      locationId: "loc-camarote-leonor",
      relatedEvidenceIds: ["ev-02"],
      certainty: "confirmed",
    },
    {
      id: "tl-05",
      time: "23:00",
      title: "La camarera ve a Marina junto a la puerta",
      description: "Media hora después de lo que Marina declara haberse retirado del camarote.",
      locationId: "loc-camarote-leonor",
      certainty: "unconfirmed",
    },
    {
      id: "tl-06",
      time: "23:10",
      title: "Una figura sale del camarote de Leonor",
      description: "La cámara del pasillo registra el movimiento, pero la imagen no permite identificar a la persona.",
      locationId: "loc-camarote-leonor",
      relatedEvidenceIds: ["ev-08"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-07",
      time: "23:45",
      title: "Última vez que alguien reconoce haber visto luz en el camarote",
      description: "Un pasajero del camarote vecino menciona haber visto luz por debajo de la puerta hasta esta hora.",
      certainty: "unconfirmed",
    },
    {
      id: "tl-08",
      time: "07:10",
      title: "La camarera encuentra el camarote revuelto",
      description: "Da aviso inmediato a la tripulación, que confirma que Leonor no responde y da parte a seguridad.",
      locationId: "loc-camarote-leonor",
      certainty: "confirmed",
    },
  ],

  solution: {
    guiltySuspectId: "sus-clara",
    keyEvidenceIds: ["ev-03", "ev-04", "ev-08", "ev-09"],
    explanation:
      "Clara Fontán había sustituido el Zafiro de Bengala por una réplica de alta calidad semanas antes del viaje, durante una de sus verificaciones rutinarias. Su propio informe de autenticación quedó con una incongruencia de peso que nunca explicó del todo. Durante su visita de las 21:40, notó que Leonor sospechaba algo respecto al broche, así que consiguió acceso a una llave maestra sin registrar para volver esa noche, cerca de las 23:10, y retirar cualquier rastro antes de que la sustitución saliera a la luz en la subasta del día siguiente. Diego, Felipe y Marina tenían motivos reales, pero ninguno de sus rastros coincide con el patrón de acceso ni con la pieza hallada escondida en el camarote de Clara.",
  },
};
