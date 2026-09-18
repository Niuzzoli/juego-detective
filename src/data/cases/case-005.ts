import type { Case } from "@/types/case";

// Fifth demo case: the most complex so far. A wedding reception, a large
// cast of family and business relationships, layered contradictions, and
// locked evidence. Fictional in every detail.
export const case005: Case = {
  id: "case-005",
  caseNumber: "CASO #005",
  title: "Hasta que la muerte los separe",
  status: "unsolved",
  difficulty: "high",
  incidentDate: "5 de septiembre, 2026",
  location: "Estancia Los Talas",
  victim: {
    name: "Nicolás Aranda",
    age: 31,
    occupation: "Empresario, director de una firma de logística familiar",
  },
  leadInvestigator: "Insp. R. Suárez",
  summary:
    "Minutos después del brindis en su propia boda, Nicolás Aranda colapsó frente a más de cien invitados y murió antes de que llegara ayuda médica. Todos los presentes se conocían entre sí, y varios tenían motivos.",
  description:
    "El 5 de septiembre, Nicolás Aranda se casó con Camila Duarte en una ceremonia en Estancia Los Talas. Durante la recepción, minutos después de levantar la copa para el brindis, Nicolás se descompuso y murió antes de que la ambulancia llegara al lugar. La autopsia preliminar apunta a una intoxicación aguda. La lista de invitados incluye a su hermano mayor, apartado recientemente del control de la empresa familiar; su ex pareja, presente pese a la tensión; su socio comercial, en medio de una disputa societaria; su madre, abiertamente opuesta al casamiento; y su padrino de bodas, atravesando dificultades financieras. Cualquiera de ellos tuvo, en algún momento de la tarde, oportunidad de acercarse a la bandeja de copas.",
  objective: "Determine qué ocurrió realmente y quién es responsable.",

  locations: [
    {
      id: "loc-salon-principal",
      name: "Salón principal",
      description: "Donde se sirvió el brindis y donde Nicolás colapsó frente a los invitados.",
      position: { x: 50, y: 35 },
      relatedEvidenceIds: ["ev-01", "ev-02", "ev-05", "ev-07"],
    },
    {
      id: "loc-cocina",
      name: "Cocina de catering",
      description: "Zona de preparación, donde se armó la bandeja de copas para el brindis.",
      position: { x: 76, y: 35 },
      relatedEvidenceIds: ["ev-10", "ev-13"],
    },
    {
      id: "loc-jardin",
      name: "Jardín de la ceremonia",
      description: "Donde se celebró la ceremonia antes de la recepción, ya vacío durante el brindis.",
      position: { x: 50, y: 12 },
      relatedEvidenceIds: [],
    },
    {
      id: "loc-bar-dj",
      name: "Barra y cabina de DJ",
      description: "Zona de música y bebidas, con una cámara de ambiente que graba de forma continua.",
      position: { x: 24, y: 35 },
      relatedEvidenceIds: ["ev-08", "ev-09"],
    },
    {
      id: "loc-habitacion-novios",
      name: "Suite nupcial",
      description: "Habitación donde los novios se prepararon antes de la ceremonia.",
      position: { x: 50, y: 60 },
      relatedEvidenceIds: ["ev-06"],
    },
    {
      id: "loc-estacionamiento",
      name: "Estacionamiento",
      description: "Zona exterior donde varios invitados se alejaron brevemente durante la recepción.",
      position: { x: 18, y: 70 },
      relatedEvidenceIds: ["ev-03", "ev-11"],
    },
    {
      id: "loc-oficina-estancia",
      name: "Oficina de la estancia",
      description: "Despacho privado utilizado por el personal, pero accesible a los invitados esa tarde.",
      position: { x: 80, y: 70 },
      relatedEvidenceIds: ["ev-04", "ev-12"],
    },
  ],

  evidences: [
    {
      id: "ev-01",
      code: "EVIDENCIA #01",
      title: "Copa de champagne con residuo",
      category: "forensic",
      description:
        "La copa que usó Nicolás para el brindis contiene trazas de un compuesto cardíaco de venta bajo receta, incompatible con su propia medicación.",
      foundAt: "5 de septiembre, 21:00",
      locationId: "loc-salon-principal",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-02",
      code: "EVIDENCIA #02",
      title: "Servilleta con anotaciones",
      category: "document",
      description:
        "Servilleta hallada junto a la mesa principal con cifras y el nombre de un estudio jurídico anotados a mano, con letra que no coincide con la de la víctima.",
      foundAt: "5 de septiembre, 21:10",
      locationId: "loc-salon-principal",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-03",
      code: "EVIDENCIA #03",
      title: "Mensaje de texto de la ex pareja",
      category: "communication",
      description:
        "Mensaje enviado por Valeria Campos esa misma mañana: \"Necesito hablar con vos antes de que sea tarde. Te espero en el estacionamiento a la tarde.\"",
      foundAt: "5 de septiembre, 09:40",
      locationId: "loc-estacionamiento",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-valeria"],
    },
    {
      id: "ev-04",
      code: "EVIDENCIA #04",
      title: "Contrato de sociedad con una cláusula tachada",
      category: "document",
      description:
        "Copia del contrato de sociedad entre Nicolás y Gustavo Ferreyra, con una cláusula de salida tachada a mano y una nota al margen: \"esto no puede esperar más\".",
      foundAt: "6 de septiembre, 09:00",
      locationId: "loc-oficina-estancia",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-gustavo"],
    },
    {
      id: "ev-05",
      code: "EVIDENCIA #05",
      title: "Fotografía del brindis",
      category: "photo",
      description:
        "Foto tomada por un invitado segundos antes del brindis. En el fondo, varias personas se acercan a la bandeja de copas; ninguna llama la atención de inmediato.",
      foundAt: "5 de septiembre, 20:38",
      locationId: "loc-salon-principal",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-06",
      code: "EVIDENCIA #06",
      title: "Correo sobre un cambio en el directorio",
      category: "communication",
      description:
        "Impresión de un correo de Nicolás a su abogado, tres días antes de la boda, pidiendo reducir la participación accionaria de su madre en la empresa familiar tras la boda.",
      foundAt: "6 de septiembre, 08:30",
      locationId: "loc-habitacion-novios",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: ["sus-silvia"],
    },
    {
      id: "ev-07",
      code: "EVIDENCIA #07",
      title: "Frasco de medicación cardíaca",
      category: "object",
      description:
        "Frasco recetado a nombre de Silvia Aranda, hallado en su cartera con menos comprimidos de los que debería tener según la fecha de compra.",
      foundAt: "6 de septiembre, 10:15",
      locationId: "loc-salon-principal",
      discovered: false,
      unlocksAfter: { kind: "evidence", id: "ev-01" },
      importance: "critical",
      relatedSuspectIds: ["sus-silvia"],
    },
    {
      id: "ev-08",
      code: "EVIDENCIA #08",
      title: "Recibo de un préstamo personal",
      category: "document",
      description:
        "Comprobante de un préstamo personal de Nicolás a Diego Paz, con una fecha de devolución vencida dos semanas antes de la boda.",
      foundAt: "6 de septiembre, 09:45",
      locationId: "loc-bar-dj",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-diego"],
    },
    {
      id: "ev-09",
      code: "EVIDENCIA #09",
      title: "Grabación de la cámara de ambiente",
      category: "photo",
      description:
        "Fotograma de la cámara de la cabina de DJ: alguien se demora junto a la barra durante casi dos minutos mientras la bandeja de copas espera sin nadie cerca. El ángulo no permite identificar el rostro.",
      foundAt: "5 de septiembre, 20:25",
      locationId: "loc-bar-dj",
      discovered: false,
      unlocksAfter: { kind: "location", id: "loc-bar-dj" },
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-10",
      code: "EVIDENCIA #10",
      title: "Registro de acceso a la cocina",
      category: "document",
      description:
        "Planilla informal del personal de catering: alguien ajeno al equipo ingresó brevemente a la cocina minutos antes de que la bandeja saliera al salón.",
      foundAt: "6 de septiembre, 11:00",
      locationId: "loc-cocina",
      discovered: false,
      unlocksAfter: { kind: "testimony", id: "test-catering" },
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-11",
      code: "EVIDENCIA #11",
      title: "Boleto de una casa de empeños",
      category: "object",
      description:
        "Comprobante a nombre de Martín Aranda por el empeño de una joya familiar, fechado la semana previa a la boda.",
      foundAt: "6 de septiembre, 09:20",
      locationId: "loc-estacionamiento",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-martin"],
    },
    {
      id: "ev-12",
      code: "EVIDENCIA #12",
      title: "Registro de llamadas de Gustavo",
      category: "communication",
      description:
        "El teléfono de Gustavo registra una llamada de once minutos a un estudio jurídico esa misma tarde, antes del brindis.",
      foundAt: "5 de septiembre, 19:40",
      locationId: "loc-oficina-estancia",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-gustavo"],
    },
    {
      id: "ev-13",
      code: "EVIDENCIA #13",
      title: "Vaso descartado con huellas",
      category: "forensic",
      description:
        "Vaso de agua hallado en un cesto de la cocina, con huellas que no corresponden a ningún integrante del personal de catering.",
      foundAt: "6 de septiembre, 11:30",
      locationId: "loc-cocina",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
  ],

  suspects: [
    {
      id: "sus-camila",
      name: "Camila Duarte",
      age: 29,
      avatarInitials: "CD",
      occupation: "Arquitecta",
      relationToVictim: "Esposa, casados esa misma tarde",
      description:
        "Pareja de Nicolás desde hace cuatro años. Testigos la describen devastada desde el primer momento del colapso.",
      alibi: "Estuvo junto a Nicolás en la mesa principal durante todo el brindis, rodeada de invitados que lo confirman.",
      interestLevel: "low",
      knownInfo: [
        "Ningún testigo la ubica lejos de la mesa principal en ningún momento relevante.",
        "Circulan rumores no confirmados sobre un acuerdo prenupcial reciente.",
        "Fue quien pidió ayuda médica de inmediato al ver que Nicolás se descomponía.",
      ],
    },
    {
      id: "sus-martin",
      name: "Martín Aranda",
      age: 34,
      avatarInitials: "MA",
      occupation: "Gerente comercial",
      relationToVictim: "Hermano mayor",
      description:
        "Trabajó junto a Nicolás en la empresa familiar. Meses atrás, su padre transfirió la dirección general a Nicolás en lugar de a él.",
      alibi: "Asegura haber estado en la pista de baile o saludando invitados durante toda la recepción.",
      interestLevel: "high",
      knownInfo: [
        "Empeñó una joya familiar la semana previa a la boda por dificultades económicas.",
        "Quedó apartado de la dirección general de la empresa meses atrás.",
        "Diego Paz menciona haberlo visto salir brevemente durante la recepción para atender una llamada.",
      ],
    },
    {
      id: "sus-valeria",
      name: "Valeria Campos",
      age: 30,
      avatarInitials: "VC",
      occupation: "Diseñadora de eventos",
      relationToVictim: "Ex pareja de Nicolás",
      description:
        "Estuvo en pareja con Nicolás hasta un año antes del compromiso. Asistió a la boda como conocida de la familia, generando comentarios entre los invitados.",
      alibi: "Reconoce haberse visto brevemente con Nicolás en el estacionamiento antes de la recepción, pero asegura que fue una charla breve y cordial.",
      interestLevel: "medium",
      knownInfo: [
        "Le envió un mensaje esa misma mañana pidiendo hablar con urgencia.",
        "Su presencia en la boda generó tensión visible con Camila y su familia.",
        "No hay registro de que haya vuelto a acercarse a Nicolás después de esa charla.",
      ],
    },
    {
      id: "sus-gustavo",
      name: "Gustavo Ferreyra",
      age: 55,
      avatarInitials: "GF",
      occupation: "Socio comercial",
      relationToVictim: "Socio en la empresa familiar",
      description:
        "Socio de la familia Aranda desde hace más de una década. Una disputa reciente sobre la salida de la sociedad quedó sin resolver.",
      alibi: "Dice haber hecho una llamada de trabajo sin relación con la disputa societaria, desde la oficina de la estancia.",
      interestLevel: "medium",
      knownInfo: [
        "Su contrato de sociedad muestra una cláusula de salida tachada con una nota urgente.",
        "Hizo una llamada de once minutos a un estudio jurídico esa misma tarde.",
        "Minimiza el contenido de la llamada al ser consultado.",
      ],
    },
    {
      id: "sus-silvia",
      name: "Silvia Aranda",
      age: 60,
      avatarInitials: "SA",
      occupation: "Ex directora administrativa de la empresa familiar",
      relationToVictim: "Madre",
      description:
        "Se opuso abiertamente al casamiento desde el compromiso. Mantiene fuerte influencia sobre las decisiones de la empresa familiar.",
      alibi: "Asegura no haber tenido ninguna conversación privada con Nicolás esa tarde, más allá de saludarlo brevemente.",
      interestLevel: "medium",
      knownInfo: [
        "Nicolás había pedido a su abogado reducir su participación accionaria tras la boda.",
        "Un empleado de catering la ubica entrando brevemente a la cocina antes del brindis, algo que ella niega.",
        "Un invitado cercano a la familia menciona haber escuchado una conversación tensa entre ella y Nicolás junto a la barra.",
      ],
    },
    {
      id: "sus-diego",
      name: "Diego Paz",
      age: 33,
      avatarInitials: "DP",
      occupation: "Padrino de bodas, amigo de la infancia",
      relationToVictim: "Mejor amigo desde la infancia",
      description:
        "Organizó buena parte de la recepción, incluida la logística del brindis. Atraviesa dificultades económicas desde hace meses.",
      alibi: "Asegura no haberse alejado de la zona de la barra en ningún momento antes del brindis.",
      interestLevel: "medium",
      knownInfo: [
        "Debía dinero a Nicolás, con un plazo de devolución ya vencido.",
        "Fue quien coordinó directamente con el personal de catering la salida de la bandeja de copas.",
        "Menciona, sin que se lo pregunten, haber visto a Martín alejarse durante la recepción.",
      ],
    },
  ],

  testimonies: [
    {
      id: "test-camila",
      personName: "Camila Duarte",
      personId: "sus-camila",
      date: "6 de septiembre, 2026",
      time: "09:00",
      location: "Estancia Los Talas — Salón principal",
      content:
        "\"Nicolás estuvo raro todo el día, distraído. Pensé que eran nervios de la boda. Cuando levantamos las copas para el brindis todo parecía normal, hasta que empezó a sentirse mal.\"",
      clues: [
        "Describe un cambio de ánimo en la víctima durante todo el día, sin atribuirlo a nada concreto.",
        "Confirma la secuencia de hechos inmediatamente posterior al brindis.",
      ],
    },
    {
      id: "test-martin",
      personName: "Martín Aranda",
      personId: "sus-martin",
      date: "6 de septiembre, 2026",
      time: "09:40",
      location: "Estancia Los Talas — Salón principal",
      content:
        "\"Estuve todo el tiempo saludando gente y bailando, como cualquier hermano en la boda del otro. No hablé de la empresa con Nicolás ese día, ni falta que hacía.\"",
      clues: [
        "Niega cualquier conversación relacionada con la empresa esa tarde.",
        "No menciona haberse alejado del salón en ningún momento.",
      ],
      contradicts: [
        {
          testimonyId: "test-diego",
          note:
            "Diego asegura haberlo visto alejarse brevemente durante la recepción para atender una llamada, algo que Martín no menciona.",
        },
      ],
    },
    {
      id: "test-valeria",
      personName: "Valeria Campos",
      personId: "sus-valeria",
      date: "6 de septiembre, 2026",
      time: "10:15",
      location: "Estancia Los Talas — Jardín",
      content:
        "\"Sí, le pedí hablar antes de la boda. Necesitaba cerrar algo personal, nada dramático. Hablamos diez minutos en el estacionamiento y no lo volví a ver de cerca en toda la tarde.\"",
      clues: [
        "Reconoce el encuentro sin dar detalles del contenido de la conversación.",
        "Ubica el encuentro antes de la recepción, no durante el brindis.",
      ],
    },
    {
      id: "test-gustavo",
      personName: "Gustavo Ferreyra",
      personId: "sus-gustavo",
      date: "6 de septiembre, 2026",
      time: "11:00",
      location: "Estancia Los Talas — Oficina",
      content:
        "\"Esa llamada fue por un cliente, nada que ver con Nicolás ni con la sociedad. Entiendo que en este momento todo se mire con lupa, pero no tiene relación con lo que pasó.\"",
      clues: [
        "Minimiza el contenido de una llamada de más de diez minutos.",
        "No ofrece detalles verificables sobre el supuesto cliente.",
      ],
    },
    {
      id: "test-silvia",
      personName: "Silvia Aranda",
      personId: "sus-silvia",
      date: "6 de septiembre, 2026",
      time: "11:30",
      location: "Estancia Los Talas — Salón principal",
      content:
        "\"Hablé con mi hijo lo mismo que cualquier madre en el día de su boda: que fuera feliz. No tuvimos ninguna conversación tensa, y no tengo motivos para haber entrado a esa cocina.\"",
      clues: [
        "Niega tanto la conversación tensa como su ingreso a la cocina.",
        "Su versión choca con dos testimonios independientes de esa misma tarde.",
      ],
      contradicts: [
        {
          testimonyId: "test-catering",
          note: "El jefe de cocina la ubica entrando brevemente a la cocina minutos antes del brindis, algo que ella niega por completo.",
        },
        {
          testimonyId: "test-invitado",
          note: "Un invitado cercano a la familia asegura haber escuchado una conversación tensa entre ella y Nicolás junto a la barra.",
        },
      ],
    },
    {
      id: "test-diego",
      personName: "Diego Paz",
      personId: "sus-diego",
      date: "6 de septiembre, 2026",
      time: "10:50",
      location: "Estancia Los Talas — Barra",
      content:
        "\"Coordiné todo con el catering, pero no me moví de la barra en ningún momento antes del brindis. Ah, y en algún momento vi a Martín alejarse hacia el estacionamiento, atendiendo el celular.\"",
      clues: [
        "Se ubica a sí mismo de forma constante junto a la barra durante toda la tarde.",
        "Aporta un dato sobre Martín que este no mencionó en su propio testimonio.",
      ],
    },
    {
      id: "test-catering",
      personName: "Jefe de cocina",
      date: "6 de septiembre, 2026",
      time: "08:20",
      location: "Estancia Los Talas — Cocina",
      content:
        "\"Nuestro equipo armó la bandeja como siempre. Recuerdo que la madre del novio entró un momento a la cocina antes de que sacáramos las copas, algo que no es común, pero no le dimos importancia en el momento.\"",
      clues: [
        "Ubica a Silvia Aranda dentro de la cocina, no solo cerca de ella.",
        "Reconoce que en su momento no le pareció relevante.",
      ],
      contradicts: [
        {
          testimonyId: "test-silvia",
          note: "Contradice la versión de Silvia, quien niega haber tenido motivos para entrar a la cocina esa tarde.",
        },
      ],
    },
    {
      id: "test-invitado",
      personName: "Invitado de la familia",
      date: "6 de septiembre, 2026",
      time: "12:10",
      location: "Estancia Los Talas — Salón principal",
      content:
        "\"Vi a Silvia y Nicolás hablando cerca de la barra un rato antes del brindis. No escuché bien qué decían, pero por los gestos no parecía una charla liviana.\"",
      clues: [
        "Ubica una conversación tensa entre madre e hijo poco antes del brindis.",
        "No puede reproducir el contenido exacto de la conversación.",
      ],
      contradicts: [
        {
          testimonyId: "test-silvia",
          note: "Contradice la versión de Silvia, quien asegura no haber tenido ninguna conversación tensa con su hijo esa tarde.",
        },
      ],
    },
  ],

  timeline: [
    {
      id: "tl-01",
      time: "17:00",
      title: "Ceremonia en el jardín",
      description: "Nicolás y Camila se casan frente a los invitados en el jardín de la estancia.",
      locationId: "loc-jardin",
      certainty: "confirmed",
    },
    {
      id: "tl-02",
      time: "18:30",
      title: "Comienza la recepción",
      description: "Los invitados pasan al salón principal para la fiesta.",
      locationId: "loc-salon-principal",
      certainty: "confirmed",
    },
    {
      id: "tl-03",
      time: "19:15",
      title: "Breve encuentro en el estacionamiento",
      description: "Valeria Campos y Nicolás hablan a solas durante unos diez minutos.",
      locationId: "loc-estacionamiento",
      relatedEvidenceIds: ["ev-03"],
      certainty: "confirmed",
    },
    {
      id: "tl-04",
      time: "19:40",
      title: "Gustavo hace una llamada tensa",
      description: "Desde la oficina de la estancia, mantiene una llamada de once minutos con un estudio jurídico.",
      locationId: "loc-oficina-estancia",
      relatedEvidenceIds: ["ev-12"],
      certainty: "confirmed",
    },
    {
      id: "tl-05",
      time: "20:10",
      title: "Silvia se acerca a Nicolás junto a la barra",
      description: "Un invitado los observa conversando de forma tensa, sin poder precisar el contenido.",
      locationId: "loc-bar-dj",
      certainty: "unconfirmed",
    },
    {
      id: "tl-06",
      time: "20:25",
      title: "Se prepara la bandeja de copas",
      description: "El equipo de catering arma la bandeja para el brindis en la cocina.",
      locationId: "loc-cocina",
      relatedEvidenceIds: ["ev-10"],
      certainty: "confirmed",
    },
    {
      id: "tl-07",
      time: "20:40",
      title: "Comienza el brindis",
      description: "Los novios levantan sus copas frente a los invitados.",
      locationId: "loc-salon-principal",
      relatedEvidenceIds: ["ev-05"],
      certainty: "confirmed",
    },
    {
      id: "tl-08",
      time: "20:50",
      title: "Nicolás colapsa",
      description: "Minutos después del brindis, se descompone frente a los invitados. El personal médico presente intenta reanimarlo.",
      locationId: "loc-salon-principal",
      relatedEvidenceIds: ["ev-01"],
      certainty: "confirmed",
    },
    {
      id: "tl-09",
      time: "21:15",
      title: "Se confirma el fallecimiento",
      description: "La policía local llega al lugar y acordona el salón principal.",
      locationId: "loc-salon-principal",
      certainty: "confirmed",
    },
  ],

  solution: {
    guiltySuspectId: "sus-silvia",
    keyEvidenceIds: ["ev-06", "ev-07", "ev-01", "ev-05"],
    explanation:
      "Silvia nunca aceptó el casamiento, pero lo que la llevó a actuar fue el correo de Nicolás pidiendo reducir su participación accionaria en la empresa familiar apenas terminara la luna de miel. Esa tarde entró brevemente a la cocina, algo que el jefe de catering confirma y ella niega, y aprovechó ese momento para agregar comprimidos de su propia medicación cardíaca —machacados— a una de las copas de la bandeja del brindis, calculando mal la dosis necesaria para provocar solo un malestar público que retrasara la boda. Su discusión tensa con Nicolás junto a la barra, minutos antes, fue notada por un invitado pese a que ella la niega por completo. Martín, Valeria y Gustavo tenían motivos reales, pero ninguno estuvo cerca de la bandeja en el momento clave.",
  },
};
