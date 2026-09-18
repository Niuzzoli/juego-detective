import type { Case } from "@/types/case";

// Demo case used to validate the platform end to end. Fictional in every
// detail — names, places, evidence — and intentionally left open-ended.
export const case001: Case = {
  id: "case-001",
  caseNumber: "CASO #001",
  title: "El último tren",
  status: "unsolved",
  difficulty: "medium",
  incidentDate: "12 de marzo, 2026",
  location: "Estación Central, Distrito Norte",
  victim: {
    name: "Martín Ibarra",
    age: 34,
    occupation: "Contador",
  },
  leadInvestigator: "Insp. R. Suárez",
  summary:
    "Martín Ibarra abordó el último tren nocturno con destino a Villa Elena y nunca llegó a su parada. Su teléfono dejó de emitir señal minutos después de la partida.",
  description:
    "La noche del 12 de marzo, Martín Ibarra salió de su departamento con dirección a la Estación Central. Cámaras de seguridad y testigos confirman que abordó el tren de las 22:41. Sin embargo, no hay registro de que haya descendido en ninguna de las paradas siguientes. Su teléfono envió su última señal a las 23:14, cerca del kilómetro 9 de la línea. No se encontró el cuerpo. Familiares, un socio comercial y personal de la estación fueron identificados como personas de interés durante las primeras 48 horas de investigación.",
  objective: "Determine qué ocurrió realmente y quién es responsable.",

  locations: [
    {
      id: "loc-departamento",
      name: "Departamento de la víctima",
      description:
        "Ubicado a doce cuadras de la estación. Sin señales de forcejeo ni ingreso forzado.",
      position: { x: 18, y: 74 },
      relatedEvidenceIds: [],
    },
    {
      id: "loc-estacion-central",
      name: "Estación Central",
      description:
        "Hall principal y boleterías. Punto donde la víctima fue vista por última vez con vida por testigos.",
      position: { x: 46, y: 40 },
      relatedEvidenceIds: ["ev-02", "ev-06"],
    },
    {
      id: "loc-bar",
      name: "Bar El Rincón",
      description:
        "Bar frente a la estación, frecuentado por empleados ferroviarios y pasajeros nocturnos.",
      position: { x: 30, y: 22 },
      relatedEvidenceIds: ["ev-05"],
    },
    {
      id: "loc-anden",
      name: "Andén 3 — Vías del tren",
      description:
        "Plataforma de partida del tren nocturno hacia Villa Elena. Escena donde se registró el abordaje.",
      position: { x: 64, y: 58 },
      relatedEvidenceIds: ["ev-01", "ev-04", "ev-08", "ev-10"],
    },
    {
      id: "loc-parque",
      name: "Parque Norte",
      description:
        "Área boscosa próxima al kilómetro 9 de la línea, cerca de donde se perdió la última señal del teléfono.",
      position: { x: 80, y: 78 },
      relatedEvidenceIds: [],
    },
  ],

  evidences: [
    {
      id: "ev-01",
      code: "EVIDENCIA #01",
      title: "Ticket de tren",
      category: "document",
      description:
        "Boleto para el tren nocturno de las 22:41 con destino a Villa Elena, comprado en efectivo dos horas antes de la partida.",
      foundAt: "12 de marzo, 22:41",
      locationId: "loc-anden",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-02",
      code: "EVIDENCIA #02",
      title: "Fotografía de la estación",
      category: "photo",
      description:
        "Imagen tomada por un pasajero que capta, de fondo, a la víctima conversando con una figura no identificada junto a la boletería.",
      foundAt: "12 de marzo, 22:18",
      locationId: "loc-estacion-central",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-03",
      code: "EVIDENCIA #03",
      title: "Mensaje de texto",
      category: "communication",
      description:
        "Mensaje enviado a la víctima a las 21:12: \"Necesitamos hablar esta noche. No puede esperar.\" Remitente sin nombre guardado.",
      foundAt: "12 de marzo, 21:12",
      locationId: "loc-departamento",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-04",
      code: "EVIDENCIA #04",
      title: "Huella encontrada en el vagón",
      category: "forensic",
      description:
        "Huella parcial levantada del pasamanos del vagón 3, cerca del asiento asignado a la víctima. Coincidencia parcial, pendiente de cotejo.",
      foundAt: "13 de marzo, 06:40",
      locationId: "loc-anden",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-05",
      code: "EVIDENCIA #05",
      title: "Recibo del bar El Rincón",
      category: "document",
      description:
        "Recibo por dos cafés emitido a las 22:32, ocho minutos antes del abordaje. No coincide con el consumo habitual de una persona sola.",
      foundAt: "12 de marzo, 22:32",
      locationId: "loc-bar",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-06",
      code: "EVIDENCIA #06",
      title: "Cámara de seguridad — fotograma",
      category: "photo",
      description:
        "Fotograma de la cámara del hall mostrando a la víctima ingresando solo a las 22:05 y saliendo de cuadro acompañado a las 22:18.",
      foundAt: "12 de marzo, 22:05",
      locationId: "loc-estacion-central",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-07",
      code: "EVIDENCIA #07",
      title: "Correo electrónico amenazante",
      category: "communication",
      description:
        "Correo enviado tres días antes: \"Si esto sale a la luz, los dos perdemos todo. No voy a dejar que arruines años de trabajo.\"",
      foundAt: "9 de marzo, 19:47",
      locationId: "loc-departamento",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-08",
      code: "EVIDENCIA #08",
      title: "Botón desprendido",
      category: "object",
      description:
        "Botón de abrigo de vestir hallado entre el asiento y la ventana del vagón 3. No pertenece a la ropa que vestía la víctima.",
      foundAt: "13 de marzo, 06:52",
      locationId: "loc-anden",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-09",
      code: "EVIDENCIA #09",
      title: "Registro de llamadas",
      category: "communication",
      description:
        "Detalle de llamadas de las últimas 48 horas. Tres llamadas no atendidas al mismo número en la tarde del 12 de marzo, sin respuesta registrada.",
      foundAt: "12 de marzo, 18:00 – 20:30",
      locationId: "loc-departamento",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-10",
      code: "EVIDENCIA #10",
      title: "Guante de cuero olvidado",
      category: "object",
      description:
        "Guante individual encontrado bajo el asiento contiguo. Talle pequeño, sin marca visible.",
      foundAt: "13 de marzo, 07:05",
      locationId: "loc-anden",
      discovered: true,
      importance: "low",
      relatedSuspectIds: [],
    },
  ],

  suspects: [
    {
      id: "sus-sofia",
      name: "Sofía Aranda",
      age: 29,
      avatarInitials: "SA",
      occupation: "Cantante en el bar El Rincón",
      relationToVictim: "Ex pareja",
      description:
        "Estuvo en pareja con la víctima durante dos años. La relación terminó hace ocho meses en términos que ella describe como \"complicados\".",
      alibi:
        "Afirma haber estado trabajando en el bar hasta las 23:00, con al menos una decena de testigos presentes.",
      interestLevel: "medium",
      knownInfo: [
        "Trabajaba esa noche en el bar frente a la estación.",
        "Reconoce haber enviado un mensaje a la víctima esa tarde, pero no revela el contenido.",
        "Fue vista hablando con un empleado de la estación poco antes de las 22:30.",
      ],
    },
    {
      id: "sus-diego",
      name: "Diego Ferreira",
      age: 41,
      avatarInitials: "DF",
      occupation: "Socio comercial",
      relationToVictim: "Socio en un estudio contable compartido",
      description:
        "Socio de la víctima desde hace seis años. Documentación reciente sugiere desacuerdos sobre el manejo de fondos del estudio.",
      alibi:
        "Declara haber estado en su domicilio toda la noche, sin testigos que lo confirmen.",
      interestLevel: "high",
      knownInfo: [
        "Envió múltiples mensajes a la víctima solicitando una reunión urgente.",
        "Un correo suyo enviado días antes menciona una deuda no declarada.",
        "Su coartada no pudo ser corroborada por ningún tercero.",
      ],
    },
    {
      id: "sus-marcos",
      name: "Marcos Lehmann",
      age: 52,
      avatarInitials: "ML",
      occupation: "Jefe de andén, Estación Central",
      relationToVictim: "Sin relación previa conocida",
      description:
        "Empleado de la estación desde hace dieciocho años. Fue quien reportó la ausencia de la víctima al llegar el tren a destino sin ella.",
      alibi:
        "Su turno registrado lo ubica en la estación durante toda la noche, incluyendo el horario de partida del tren.",
      interestLevel: "low",
      knownInfo: [
        "Fue la última persona del personal en revisar los boletos del vagón 3.",
        "Reconoce haber hablado brevemente con la víctima en el andén.",
        "Su versión de los hechos coincide con los registros de cámaras del hall.",
      ],
    },
    {
      id: "sus-carla",
      name: "Carla Ibarra",
      age: 37,
      avatarInitials: "CI",
      occupation: "Diseñadora gráfica",
      relationToVictim: "Hermana",
      description:
        "Única hermana de la víctima. Ambos mantenían una relación cercana, aunque reconoce tensiones recientes por un tema de herencia familiar.",
      alibi:
        "Afirma haber estado de viaje en otra ciudad, con reserva de hotel a su nombre para esa noche.",
      interestLevel: "low",
      knownInfo: [
        "Es beneficiaria de una póliza de seguro de vida reciente a nombre de la víctima.",
        "Reconoce no haber sabido de la póliza hasta después de los hechos, según su testimonio.",
        "Mantuvo contacto telefónico frecuente con la víctima hasta dos días antes.",
      ],
    },
  ],

  testimonies: [
    {
      id: "test-01",
      personName: "Sofía Aranda",
      personId: "sus-sofia",
      date: "13 de marzo, 2026",
      time: "10:20",
      location: "Bar El Rincón",
      content:
        "\"Esa noche trabajé como siempre. Lo vi pasar por la vereda de enfrente, pero no hablé con él. Hacía meses que no teníamos contacto directo, salvo por mensajes ocasionales.\"",
      clues: [
        "No menciona el mensaje enviado esa tarde.",
        "Ubica a la víctima \"pasando\", no describe si entró al bar.",
      ],
    },
    {
      id: "test-02",
      personName: "Diego Ferreira",
      personId: "sus-diego",
      date: "13 de marzo, 2026",
      time: "11:45",
      location: "Estudio contable compartido",
      content:
        "\"Necesitábamos resolver un tema del estudio, nada grave. Le escribí para vernos, pero nunca me confirmó. Me quedé esperando su respuesta toda la noche, en casa.\"",
      clues: [
        "Describe el asunto como \"nada grave\", en contraste con el tono del correo hallado.",
        "No aporta testigos de su ubicación esa noche.",
      ],
    },
    {
      id: "test-03",
      personName: "Marcos Lehmann",
      personId: "sus-marcos",
      date: "13 de marzo, 2026",
      time: "07:30",
      location: "Estación Central",
      content:
        "\"Lo crucé en el andén cuando revisaba los boletos del vagón 3. Intercambiamos un par de palabras sobre el frío, nada más. Subió tranquilo, sin apuro.\"",
      clues: [
        "Confirma contacto directo en el andén, no solo en el hall.",
        "No menciona haber visto a nadie acompañándolo.",
      ],
    },
    {
      id: "test-04",
      personName: "Carla Ibarra",
      personId: "sus-carla",
      date: "13 de marzo, 2026",
      time: "14:10",
      location: "Vía telefónica",
      content:
        "\"Hablamos dos días antes, todo normal. Yo estaba de viaje esa noche, me enteré de todo por un llamado de la policía a la mañana siguiente. Todavía no puedo creerlo.\"",
      clues: [
        "No fue consultada aún sobre la póliza de seguro.",
        "Su viaje coincide con la fecha de los hechos según reserva de hotel.",
      ],
    },
    {
      id: "test-05",
      personName: "Pasajero del vagón 3",
      date: "13 de marzo, 2026",
      time: "09:15",
      location: "Declaración telefónica",
      content:
        "\"Iba dos asientos más atrás. En algún momento después de las 23:00 sentí como un golpe seco y el tren frenó un poco. Pensé que había sido una piedra en las vías. No vi nada más, me había quedado dormido.\"",
      clues: [
        "El horario coincide aproximadamente con la última señal del teléfono, 23:14.",
        "No puede precisar si alguien se movió por el vagón en ese momento.",
      ],
    },
    {
      id: "test-06",
      personName: "Encargado del Bar El Rincón",
      date: "13 de marzo, 2026",
      time: "12:00",
      location: "Bar El Rincón",
      content:
        "\"Esa noche vendí dos cafés para llevar, cerca de las 22:30. No recuerdo bien quién los pidió, había bastante movimiento por el cambio de turno del personal de la estación.\"",
      clues: [
        "El horario coincide con el recibo hallado entre las evidencias.",
        "No puede confirmar ni descartar que Sofía haya estado detrás de la barra en ese momento exacto.",
      ],
    },
  ],

  timeline: [
    {
      id: "tl-01",
      time: "21:30",
      title: "La víctima sale de su departamento",
      description:
        "Sin señales de que algo fuera de lo común ocurriera antes de su salida. Vecinos no reportan visitas previas.",
      locationId: "loc-departamento",
      relatedEvidenceIds: ["ev-03"],
      certainty: "confirmed",
    },
    {
      id: "tl-02",
      time: "22:05",
      title: "Llega a la estación",
      description:
        "Ingresa solo al hall principal de la Estación Central, registrado por cámaras de seguridad.",
      locationId: "loc-estacion-central",
      relatedEvidenceIds: ["ev-06"],
      certainty: "confirmed",
    },
    {
      id: "tl-03",
      time: "22:18",
      title: "Habla con una persona desconocida",
      description:
        "Es visto conversando junto a la boletería con una figura que no pudo ser identificada con claridad en las imágenes disponibles.",
      locationId: "loc-estacion-central",
      relatedEvidenceIds: ["ev-02", "ev-06"],
      certainty: "confirmed",
    },
    {
      id: "tl-04",
      time: "22:32",
      title: "Se emite un recibo por dos cafés",
      description:
        "El bar frente a la estación registra la venta de dos cafés para llevar, ocho minutos antes del abordaje.",
      locationId: "loc-bar",
      relatedEvidenceIds: ["ev-05"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-05",
      time: "22:41",
      title: "Aborda el tren",
      description:
        "Sube al vagón 3 del tren nocturno con destino a Villa Elena. El jefe de andén confirma haberlo visto subir sin compañía visible.",
      locationId: "loc-anden",
      relatedEvidenceIds: ["ev-01"],
      certainty: "confirmed",
    },
    {
      id: "tl-06",
      time: "23:14",
      title: "Ocurre un evento desconocido",
      description:
        "Un pasajero del mismo vagón reporta un golpe seco y una breve frenada. Es la última hora en que el teléfono de la víctima emitió señal.",
      locationId: "loc-anden",
      relatedEvidenceIds: ["ev-04", "ev-08", "ev-10"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-07",
      time: "23:50",
      title: "El tren llega a destino sin la víctima",
      description:
        "El personal de Villa Elena no encuentra al pasajero correspondiente al asiento del vagón 3. Se da aviso a la policía de inmediato.",
      certainty: "confirmed",
    },
  ],

  solution: {
    guiltySuspectId: "sus-marcos",
    keyEvidenceIds: ["ev-03", "ev-04", "ev-08"],
    explanation:
      "El mensaje sin remitente identificado (\"Necesitamos hablar esta noche, no puede esperar\") lo envió Marcos Lehmann, no Diego ni Sofía. Como contador, Martín había detectado irregularidades en las cuentas de la estación y se lo había advertido a Marcos días antes. Marcos, con acceso rutinario al vagón 3 para revisar boletos, subió antes de la partida y permaneció oculto hasta encontrarse con Martín cerca del kilómetro 9 — un tramo boscoso que conoce por su trabajo. La huella parcial del vagón y el botón desprendido de su propio abrigo lo ubican en la escena. Diego y Carla tenían motivos reales pero coartadas que, aunque débiles en apariencia, se sostienen: ninguno de los dos abordó el tren esa noche.",
  },
};
