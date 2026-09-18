import type { Case } from "@/types/case";

// Second demo case: a closed-circle mystery in an isolated mansion.
// More suspects, more evidence, real contradictions between testimonies,
// and at least one deliberately staged false lead. Fictional in every detail.
export const case002: Case = {
  id: "case-002",
  caseNumber: "CASO #002",
  title: "Noche de tormenta",
  status: "unsolved",
  difficulty: "high",
  incidentDate: "14 de agosto, 2026",
  location: "Villa Alborada, Sierra de los Cóndores",
  victim: {
    name: "Augusto Valdéz",
    age: 68,
    occupation: "Empresario retirado, fundador de Constructora Valdéz",
  },
  leadInvestigator: "Insp. R. Suárez",
  summary:
    "La familia Valdéz se reunió en su casa de campo para la lectura anticipada del testamento. Un temporal aisló la propiedad durante toda la noche. A la mañana siguiente, Augusto apareció muerto en su estudio.",
  description:
    "La noche del 14 de agosto, Augusto Valdéz reunió a su familia en Villa Alborada para anunciar cambios en su testamento. Una tormenta cortó el único camino de acceso a la propiedad poco después de la cena, dejando a los presentes completamente aislados hasta la mañana siguiente. Alrededor de las 07:15, el ama de llaves encontró el cuerpo de Augusto en su estudio. No hay señales claras de que alguien haya entrado desde afuera durante la noche, lo que reduce la lista de sospechosos a quienes estaban dentro de la casa: dos hijos, su esposa, su abogado y sobrino, y el personal de servicio. Cada uno dio una versión distinta de dónde estuvo esa noche, y no todas esas versiones coinciden entre sí.",
  objective: "Determine qué ocurrió realmente y quién es responsable.",

  locations: [
    {
      id: "loc-estudio",
      name: "Estudio de Augusto",
      description:
        "Escena del hallazgo. Escritorio, chimenea apagada y un ventanal con vista al jardín trasero, encontrado con marcas de forzado.",
      position: { x: 50, y: 40 },
      relatedEvidenceIds: ["ev-01", "ev-02", "ev-10", "ev-11", "ev-12"],
    },
    {
      id: "loc-habitacion-rodrigo",
      name: "Habitación de Rodrigo",
      description: "Suite del hijo mayor, en el ala este de la casa.",
      position: { x: 20, y: 16 },
      relatedEvidenceIds: ["ev-04"],
    },
    {
      id: "loc-habitacion-elena",
      name: "Habitación de Elena",
      description: "Suite principal, compartida con Augusto, en el ala oeste.",
      position: { x: 80, y: 16 },
      relatedEvidenceIds: ["ev-05"],
    },
    {
      id: "loc-biblioteca",
      name: "Biblioteca",
      description: "Sala contigua al estudio, con una chimenea y archivos familiares.",
      position: { x: 26, y: 55 },
      relatedEvidenceIds: ["ev-03", "ev-09"],
    },
    {
      id: "loc-cocina",
      name: "Cocina",
      description: "Zona de servicio en la planta baja, dominio habitual de Marisa.",
      position: { x: 74, y: 66 },
      relatedEvidenceIds: ["ev-07"],
    },
    {
      id: "loc-pasillo",
      name: "Pasillo de servicio",
      description: "Corredor trasero que conecta la cocina con la salida al jardín. Tiene una cámara de seguridad.",
      position: { x: 50, y: 64 },
      relatedEvidenceIds: ["ev-08"],
    },
    {
      id: "loc-jardin",
      name: "Jardín trasero",
      description: "Zona exterior bajo la ventana del estudio, embarrada por la tormenta de esa noche.",
      position: { x: 50, y: 88 },
      relatedEvidenceIds: ["ev-06"],
    },
  ],

  evidences: [
    {
      id: "ev-01",
      code: "EVIDENCIA #01",
      title: "Borrador de testamento modificado",
      category: "document",
      description:
        "Versión sin firmar hallada en el escritorio del estudio. Reduce drásticamente la parte de Rodrigo, aumenta la de Valentina y agrega una cláusula a nombre de Elena.",
      foundAt: "15 de agosto, 07:40",
      locationId: "loc-estudio",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-rodrigo", "sus-valentina", "sus-elena"],
    },
    {
      id: "ev-02",
      code: "EVIDENCIA #02",
      title: "Copa de whisky con residuo",
      category: "forensic",
      description:
        "Copa encontrada junto al sillón del estudio. El análisis preliminar detectó restos de un sedante de uso común, no recetado a nombre de la víctima.",
      foundAt: "15 de agosto, 07:20",
      locationId: "loc-estudio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-03",
      code: "EVIDENCIA #03",
      title: "Fotografía familiar rota",
      category: "photo",
      description:
        "Fragmentos de una foto familiar antigua, hallados entre las cenizas de la chimenea de la biblioteca. Alguien la quemó parcialmente esa misma noche.",
      foundAt: "15 de agosto, 08:10",
      locationId: "loc-biblioteca",
      discovered: true,
      importance: "low",
      relatedSuspectIds: [],
    },
    {
      id: "ev-04",
      code: "EVIDENCIA #04",
      title: "Mensaje de texto a un prestamista",
      category: "communication",
      description:
        "Mensaje enviado por Rodrigo la tarde del incidente: \"Necesito más tiempo, no puedo cubrir todo esta semana.\" Sin respuesta registrada.",
      foundAt: "14 de agosto, 19:40",
      locationId: "loc-habitacion-rodrigo",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-rodrigo"],
    },
    {
      id: "ev-05",
      code: "EVIDENCIA #05",
      title: "Frasco de somníferos vacío",
      category: "object",
      description:
        "Frasco recetado a nombre de Elena Duarte, hallado en su baño privado. Según la farmacia, faltan más pastillas de las que deberían quedar según la fecha de compra.",
      foundAt: "15 de agosto, 08:45",
      locationId: "loc-habitacion-elena",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-elena"],
    },
    {
      id: "ev-06",
      code: "EVIDENCIA #06",
      title: "Huella de barro bajo la ventana",
      category: "forensic",
      description:
        "Marca de calzado embarrada en el jardín, justo bajo el ventanal del estudio, consistente con el temporal de esa noche.",
      foundAt: "15 de agosto, 07:50",
      locationId: "loc-jardin",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-07",
      code: "EVIDENCIA #07",
      title: "Carta sin enviar",
      category: "document",
      description:
        "Carta manuscrita dirigida a Augusto, hallada en un cajón de la cocina. El tono sugiere un vínculo personal más cercano del que se conocía públicamente.",
      foundAt: "15 de agosto, 09:15",
      locationId: "loc-cocina",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-marisa"],
    },
    {
      id: "ev-08",
      code: "EVIDENCIA #08",
      title: "Fotograma de cámara de seguridad",
      category: "photo",
      description:
        "Cuadro extraído de la cámara del pasillo de servicio: una figura cruza hacia la puerta trasera a las 23:35. El rostro no es identificable.",
      foundAt: "14 de agosto, 23:35",
      locationId: "loc-pasillo",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-09",
      code: "EVIDENCIA #09",
      title: "Recibo de una casa de empeños",
      category: "document",
      description:
        "Comprobante a nombre de Tomás Ferro por el empeño de una pieza de la colección familiar, fechado tres semanas antes del incidente.",
      foundAt: "15 de agosto, 08:30",
      locationId: "loc-biblioteca",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-tomas"],
    },
    {
      id: "ev-10",
      code: "EVIDENCIA #10",
      title: "Ventana del estudio forzada",
      category: "forensic",
      description:
        "La ventana presenta marcas de forzado, pero la disposición de las marcas resulta inusual para un ingreso realizado desde el exterior.",
      foundAt: "15 de agosto, 07:30",
      locationId: "loc-estudio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-11",
      code: "EVIDENCIA #11",
      title: "Reloj de pulsera detenido",
      category: "object",
      description:
        "Reloj de la víctima, detenido a las 23:52. Podría indicar el momento del incidente, aunque no está confirmado que se haya roto en ese instante.",
      foundAt: "15 de agosto, 07:15",
      locationId: "loc-estudio",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: [],
    },
    {
      id: "ev-12",
      code: "EVIDENCIA #12",
      title: "Correo a un abogado externo",
      category: "communication",
      description:
        "Correo enviado por Augusto un día antes de morir: pedía una auditoría independiente del patrimonio familiar y una revisión completa del testamento vigente.",
      foundAt: "13 de agosto, 20:10",
      locationId: "loc-estudio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: ["sus-tomas"],
    },
  ],

  suspects: [
    {
      id: "sus-rodrigo",
      name: "Rodrigo Valdéz",
      age: 42,
      avatarInitials: "RV",
      occupation: "Empresario",
      relationToVictim: "Hijo mayor",
      description:
        "Dirige una de las empresas del grupo familiar, con resultados discretos en los últimos años. Su relación con Augusto se había tensado por decisiones de negocio recientes.",
      alibi: "Asegura haberse retirado a su habitación apenas terminada la cena y no haber vuelto a salir.",
      interestLevel: "high",
      knownInfo: [
        "Acumula deudas de juego significativas.",
        "Un mensaje suyo a un prestamista menciona un plazo vencido esa misma tarde.",
        "Su hermana asegura haberlo visto entrar al estudio pasada la medianoche, algo que él niega por completo.",
      ],
    },
    {
      id: "sus-valentina",
      name: "Valentina Valdéz",
      age: 34,
      avatarInitials: "VV",
      occupation: "Artista plástica",
      relationToVictim: "Hija menor",
      description:
        "Vive de forma independiente de la familia desde hace años. Su relación con Augusto era cordial pero distante, marcada por años sintiéndose relegada frente a su hermano.",
      alibi:
        "Dice haber estado despierta hasta tarde en el pasillo del primer piso, buscando un libro que le había prestado a su padre.",
      interestLevel: "low",
      knownInfo: [
        "Reconoce tensión histórica con Rodrigo por el manejo de la empresa familiar.",
        "Es la única que menciona haber visto a Rodrigo cerca del estudio esa noche.",
        "Su participación en la herencia crecía en el borrador de testamento hallado.",
      ],
    },
    {
      id: "sus-elena",
      name: "Elena Duarte",
      age: 39,
      avatarInitials: "ED",
      occupation: "Ex modelo",
      relationToVictim: "Esposa (segundo matrimonio)",
      description:
        "Se casó con Augusto hace cinco años. La diferencia de edad y el momento del matrimonio generaron comentarios persistentes entre el resto de la familia.",
      alibi: "Afirma haberse retirado a su habitación a las 22:30 y no haber salido en toda la noche.",
      interestLevel: "medium",
      knownInfo: [
        "Un frasco de somníferos recetado a su nombre apareció vacío, con más pastillas faltantes de las que ella recuerda haber consumido.",
        "Fue, según su propio testimonio, la última persona en ver a Augusto con vida esa noche.",
        "El borrador de testamento hallado le asignaba una cláusula nueva, que ella dice desconocer.",
      ],
    },
    {
      id: "sus-tomas",
      name: "Tomás Ferro",
      age: 29,
      avatarInitials: "TF",
      occupation: "Abogado de la familia",
      relationToVictim: "Sobrino y ahijado",
      description:
        "Maneja las finanzas y los asuntos legales de la familia desde hace varios años, con la confianza directa de Augusto.",
      alibi: "Declara haber pasado toda la noche en la biblioteca junto a Marisa, revisando contratos pendientes.",
      interestLevel: "medium",
      knownInfo: [
        "Un recibo de una casa de empeños sugiere dificultades económicas que no coinciden con su posición.",
        "Augusto había contactado a un estudio externo para auditar el patrimonio que Tomás administra.",
        "Marisa no confirma haber estado con él durante toda la noche, como él asegura.",
      ],
    },
    {
      id: "sus-marisa",
      name: "Marisa Colque",
      age: 55,
      avatarInitials: "MC",
      occupation: "Ama de llaves",
      relationToVictim: "Empleada de confianza desde hace veinte años",
      description:
        "Trabaja para la familia Valdéz desde antes de que naciera Valentina. Conoce la dinámica interna de la casa mejor que nadie.",
      alibi: "Dice haber estado en la cocina hasta pasada la medianoche, ordenando y preparando una infusión.",
      interestLevel: "low",
      knownInfo: [
        "Conoce de primera mano tensiones económicas y personales de varios miembros de la familia.",
        "Una carta suya sin enviar sugiere un vínculo cercano con Augusto que nunca se hizo público.",
        "Su versión de esa noche no coincide con la coartada que da Tomás.",
      ],
    },
  ],

  testimonies: [
    {
      id: "test-01",
      personName: "Rodrigo Valdéz",
      personId: "sus-rodrigo",
      date: "15 de agosto, 2026",
      time: "09:00",
      location: "Villa Alborada — Sala principal",
      content:
        "\"Me fui a dormir apenas terminó la cena. No volví a salir de mi habitación en toda la noche. No tengo forma de probarlo porque dormía solo, pero es la verdad.\"",
      clues: [
        "No menciona ningún conflicto con su padre esa noche.",
        "No ofrece testigos que respalden su versión.",
      ],
      contradicts: [
        {
          testimonyId: "test-02",
          note: "Valentina asegura haberlo visto entrar al estudio pasadas las 23:30. Rodrigo niega haber salido de su habitación en algún momento.",
        },
      ],
    },
    {
      id: "test-02",
      personName: "Valentina Valdéz",
      personId: "sus-valentina",
      date: "15 de agosto, 2026",
      time: "09:35",
      location: "Villa Alborada — Sala principal",
      content:
        "\"Vi a Rodrigo entrar al estudio pasadas las once y media. No me sorprendió: siempre terminaba discutiendo con papá por dinero. No escuché de qué hablaron esta vez.\"",
      clues: [
        "Ubica a Rodrigo en el estudio, no simplemente cerca de él.",
        "No puede precisar cuánto tiempo permaneció adentro.",
      ],
      contradicts: [
        {
          testimonyId: "test-01",
          note: "Contradice directamente la coartada de Rodrigo, quien asegura no haber salido de su habitación en toda la noche.",
        },
      ],
    },
    {
      id: "test-03",
      personName: "Elena Duarte",
      personId: "sus-elena",
      date: "15 de agosto, 2026",
      time: "10:10",
      location: "Villa Alborada — Habitación principal",
      content:
        "\"Estuve con Augusto hasta las diez y media, después me retiré a descansar. Los somníferos son míos, los uso hace años para dormir, pero no le di ninguno a nadie ni noté que faltaran hasta que ustedes lo mencionaron.\"",
      clues: [
        "Fue la última en reconocer haber estado con la víctima antes de su muerte.",
        "No puede explicar la diferencia entre las pastillas compradas y las restantes.",
      ],
    },
    {
      id: "test-04",
      personName: "Tomás Ferro",
      personId: "sus-tomas",
      date: "15 de agosto, 2026",
      time: "10:40",
      location: "Villa Alborada — Biblioteca",
      content:
        "\"Pasé toda la noche acá, en la biblioteca, revisando unos contratos con Marisa. Ella puede confirmarlo, estuvimos juntos hasta pasada la medianoche.\"",
      clues: [
        "Ubica su coartada en la biblioteca, no en el estudio ni en el jardín.",
        "Depende enteramente de la confirmación de Marisa.",
      ],
      contradicts: [
        {
          testimonyId: "test-05",
          note: "Marisa no confirma haber estado con él en la biblioteca; ubica su propia noche en la cocina, sola.",
        },
      ],
    },
    {
      id: "test-05",
      personName: "Marisa Colque",
      date: "15 de agosto, 2026",
      time: "08:20",
      location: "Villa Alborada — Cocina",
      content:
        "\"Estuve en la cocina preparando una infusión para la señora Elena y ordenando la vajilla hasta pasada la medianoche. No estuve en la biblioteca en ningún momento de la noche.\"",
      clues: [
        "Contradice de forma directa la coartada que da Tomás.",
        "Ubica su actividad en la cocina, coherente con la carta hallada allí.",
      ],
      contradicts: [
        {
          testimonyId: "test-04",
          note: "Contradice la coartada de Tomás, quien afirma que pasaron la noche juntos en la biblioteca.",
        },
      ],
    },
    {
      id: "test-06",
      personName: "Ricardo Salgado",
      date: "15 de agosto, 2026",
      time: "11:15",
      location: "Villa Alborada — Sala principal",
      content:
        "\"Soy socio de Augusto desde hace años, me había invitado a pasar la noche por el tema del testamento. Cerca de las once escuché voces alzadas que venían del estudio, pero no distinguí de quién se trataba ni qué decían.\"",
      clues: [
        "Confirma una discusión audible desde el estudio alrededor de las 23:00.",
        "No puede identificar las voces involucradas.",
      ],
    },
    {
      id: "test-07",
      personName: "Bruno Aguirre",
      date: "15 de agosto, 2026",
      time: "08:00",
      location: "Villa Alborada — Garaje",
      content:
        "\"Soy el chofer de la familia, esa noche me quedé en el garaje por la tormenta. Cerca de las once y media vi, desde la ventana, una figura cruzar el jardín hacia el estudio. Con la lluvia no pude reconocer quién era.\"",
      clues: [
        "El horario coincide con la huella de barro hallada bajo la ventana del estudio.",
        "No puede confirmar dirección: si la figura entraba o salía del estudio.",
      ],
    },
  ],

  timeline: [
    {
      id: "tl-01",
      time: "21:00",
      title: "La familia se reúne para la cena",
      description:
        "Augusto reúne a hijos, esposa, sobrino y personal de confianza en Villa Alborada para anunciar cambios en su testamento tras la cena.",
      certainty: "confirmed",
    },
    {
      id: "tl-02",
      time: "21:45",
      title: "Augusto se retira al estudio",
      description:
        "Anuncia que revisará los detalles finales del testamento a solas antes de comunicarlos formalmente al día siguiente.",
      locationId: "loc-estudio",
      relatedEvidenceIds: ["ev-01"],
      certainty: "confirmed",
    },
    {
      id: "tl-03",
      time: "22:30",
      title: "Elena se retira a su habitación",
      description: "Según su propio testimonio, es la última en reconocer haber estado con Augusto antes de su muerte.",
      locationId: "loc-habitacion-elena",
      certainty: "confirmed",
    },
    {
      id: "tl-04",
      time: "23:00",
      title: "Se escuchan voces alzadas desde el estudio",
      description:
        "Un invitado de la familia reporta una discusión audible, sin poder identificar a los involucrados.",
      locationId: "loc-estudio",
      certainty: "unconfirmed",
    },
    {
      id: "tl-05",
      time: "23:30",
      title: "Valentina asegura ver a Rodrigo entrar al estudio",
      description:
        "Según su testimonio, Rodrigo ingresa al estudio pasadas las once y media. Rodrigo niega haber salido de su habitación en algún momento de la noche.",
      locationId: "loc-estudio",
      relatedEvidenceIds: ["ev-04"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-06",
      time: "23:35",
      title: "Una figura cruza el pasillo de servicio",
      description:
        "La cámara de seguridad registra a alguien dirigiéndose hacia la puerta trasera. El rostro no es identificable en la imagen.",
      locationId: "loc-pasillo",
      relatedEvidenceIds: ["ev-08"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-07",
      time: "23:52",
      title: "Se detiene el reloj de la víctima",
      description:
        "El reloj de pulsera de Augusto queda detenido en este horario, posible indicio del momento del incidente.",
      locationId: "loc-estudio",
      relatedEvidenceIds: ["ev-11"],
      certainty: "unconfirmed",
    },
    {
      id: "tl-08",
      time: "07:15",
      title: "Marisa encuentra el cuerpo",
      description:
        "Al llevar el desayuno al estudio, Marisa encuentra a Augusto sin vida y da aviso inmediato al resto de la familia.",
      locationId: "loc-estudio",
      certainty: "confirmed",
    },
  ],

  solution: {
    guiltySuspectId: "sus-tomas",
    keyEvidenceIds: ["ev-12", "ev-09", "ev-02", "ev-10"],
    explanation:
      "Augusto había descubierto irregularidades en las cuentas que Tomás administraba y, un día antes de morir, pidió una auditoría independiente a un estudio externo. Esa noche, Tomás sedó el whisky de Augusto con pastillas sustraídas del baño de Elena — de ahí el frasco vacío que parecía incriminarla a ella. Forzó la ventana del estudio desde adentro para simular un ingreso externo, aunque las marcas quedaron mal orientadas para sostener esa versión ante un análisis atento. Su coartada de haber pasado la noche en la biblioteca con Marisa era falsa: ella misma lo desmiente. El recibo de la casa de empeños confirma que necesitaba encubrir un faltante de fondos antes de que la auditoría lo expusiera.",
  },
};
