import type { Case } from "@/types/case";

// Third demo case: a lighter, academic-setting mystery. Smaller cast and
// evidence set than case-002, used as a pacing contrast. Fictional in every detail.
export const case003: Case = {
  id: "case-003",
  caseNumber: "CASO #003",
  title: "La fórmula robada",
  status: "unsolved",
  difficulty: "low",
  incidentDate: "2 de septiembre, 2026",
  location: "Instituto de Investigación Biomédica del Sur (IIBS)",
  victim: {
    name: "Dra. Helena Marchetti",
    age: 47,
    occupation: "Bióloga molecular, directora de proyecto de terapia génica",
  },
  leadInvestigator: "Insp. R. Suárez",
  summary:
    "La noche antes de presentar los resultados de años de investigación, la Dra. Marchetti apareció sin vida en su propio laboratorio. Su cuaderno de trabajo y su notebook personal desaparecieron.",
  description:
    "El 2 de septiembre, la Dra. Helena Marchetti se quedó trabajando sola en su laboratorio del Instituto de Investigación Biomédica del Sur, según confirma el registro de seguridad. Al día siguiente debía presentar ante un comité internacional los resultados de una investigación que llevaba cinco años desarrollando. El personal de limpieza la encontró sin vida a la mañana siguiente. Su cuaderno de laboratorio y su computadora personal no aparecieron en la escena. En un ambiente marcado por la competencia por fondos, el prestigio académico y viejas disputas de autoría, varias personas del instituto tenían motivos para querer detener, retrasar o apropiarse de su trabajo.",
  objective: "Determine qué ocurrió realmente y quién es responsable.",

  locations: [
    {
      id: "loc-laboratorio",
      name: "Laboratorio de la Dra. Marchetti",
      description: "Escena del hallazgo. Mesadas de trabajo, freezers de muestras y el escritorio personal de la víctima.",
      position: { x: 50, y: 45 },
      relatedEvidenceIds: ["ev-01", "ev-04", "ev-07"],
    },
    {
      id: "loc-oficina-pablo",
      name: "Oficina de Pablo Ibarra",
      description: "Despacho del investigador a cargo del laboratorio contiguo, en el mismo piso.",
      position: { x: 20, y: 25 },
      relatedEvidenceIds: ["ev-06"],
    },
    {
      id: "loc-sala-becarios",
      name: "Sala de becarios",
      description: "Espacio de trabajo compartido por los estudiantes de doctorado, incluida Julieta Fernández.",
      position: { x: 78, y: 25 },
      relatedEvidenceIds: [],
    },
    {
      id: "loc-direccion",
      name: "Dirección del instituto",
      description: "Oficina de Marcos Bianchi, director del IIBS.",
      position: { x: 78, y: 70 },
      relatedEvidenceIds: [],
    },
    {
      id: "loc-entrada",
      name: "Entrada y control de acceso",
      description: "Recepción del instituto, con el sistema de tarjetas magnéticas y la cámara de seguridad del pasillo principal.",
      position: { x: 22, y: 70 },
      relatedEvidenceIds: ["ev-03", "ev-05"],
    },
  ],

  evidences: [
    {
      id: "ev-01",
      code: "EVIDENCIA #01",
      title: "Página arrancada del cuaderno de laboratorio",
      category: "document",
      description:
        "Un fragmento de página quedó atascado en la espiral del cuaderno de repuesto de Helena. La numeración indica que faltan las últimas veinte hojas del cuaderno principal, que no fue hallado.",
      foundAt: "3 de septiembre, 08:10",
      locationId: "loc-laboratorio",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-02",
      code: "EVIDENCIA #02",
      title: "Correo sobre una disputa de autoría",
      category: "communication",
      description:
        "Intercambio de hace tres años entre Helena y Renata Ostrowski, donde esta última reclama no haber sido incluida como coautora de una publicación clave.",
      foundAt: "Archivo institucional, 2023",
      locationId: "loc-entrada",
      discovered: true,
      importance: "medium",
      relatedSuspectIds: ["sus-renata"],
    },
    {
      id: "ev-03",
      code: "EVIDENCIA #03",
      title: "Fotograma de la cámara del pasillo",
      category: "photo",
      description:
        "Imagen de la cámara de la entrada principal: una persona con guardapolvo ingresa al ala de laboratorios a las 20:40. La resolución no permite identificar el rostro con certeza.",
      foundAt: "2 de septiembre, 20:40",
      locationId: "loc-entrada",
      discovered: true,
      importance: "high",
      relatedSuspectIds: [],
    },
    {
      id: "ev-04",
      code: "EVIDENCIA #04",
      title: "Vaso con restos de ansiolítico",
      category: "forensic",
      description:
        "Vaso hallado en el escritorio de Helena con trazas de un ansiolítico de venta bajo receta, no perteneciente a su medicación habitual conocida.",
      foundAt: "3 de septiembre, 08:00",
      locationId: "loc-laboratorio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-05",
      code: "EVIDENCIA #05",
      title: "Registro de acceso fuera de horario",
      category: "document",
      description:
        "El sistema de tarjetas magnéticas registra el ingreso de la credencial de Pablo Ibarra a las 20:40, dos horas después de su horario habitual de salida.",
      foundAt: "2 de septiembre, 20:40",
      locationId: "loc-entrada",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: ["sus-pablo"],
    },
    {
      id: "ev-06",
      code: "EVIDENCIA #06",
      title: "Informe de auditoría filtrado",
      category: "document",
      description:
        "Copia impresa, hallada entre los papeles de Pablo Ibarra, de un informe interno que señala irregularidades en los datos de una de sus publicaciones recientes.",
      foundAt: "3 de septiembre, 10:30",
      locationId: "loc-oficina-pablo",
      discovered: true,
      importance: "high",
      relatedSuspectIds: ["sus-pablo"],
    },
    {
      id: "ev-07",
      code: "EVIDENCIA #07",
      title: "USB escondido bajo el escritorio",
      category: "object",
      description:
        "Memoria USB adherida con cinta bajo el cajón del escritorio de Helena, con una copia de respaldo de sus datos originales y el informe de auditoría mencionado.",
      foundAt: "3 de septiembre, 11:15",
      locationId: "loc-laboratorio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
    {
      id: "ev-08",
      code: "EVIDENCIA #08",
      title: "Borrador de un correo sin enviar",
      category: "communication",
      description:
        "Borrador guardado en la cuenta institucional de Helena, dirigido al comité de ética, donde anuncia su intención de reportar irregularidades en una investigación ajena antes de su presentación del día siguiente.",
      foundAt: "2 de septiembre, 19:20",
      locationId: "loc-laboratorio",
      discovered: true,
      importance: "critical",
      relatedSuspectIds: [],
    },
  ],

  suspects: [
    {
      id: "sus-pablo",
      name: "Dr. Pablo Ibarra",
      age: 51,
      avatarInitials: "PI",
      occupation: "Investigador principal, laboratorio contiguo",
      relationToVictim: "Colega y rival académico directo",
      description:
        "Compite con Helena por la misma línea de financiamiento desde hace dos años. Sus últimas publicaciones fueron clave para renovar su subsidio.",
      alibi: "Asegura haber estado en su casa desde las 18:30 y haber perdido su tarjeta de acceso días antes.",
      interestLevel: "medium",
      knownInfo: [
        "Su tarjeta de acceso registra un ingreso al instituto a las 20:40 esa noche.",
        "Un informe de auditoría interna cuestiona la validez de datos en una publicación reciente suya.",
        "El guardia de seguridad asegura que el sistema no muestra ningún reporte de tarjeta extraviada esa semana.",
      ],
    },
    {
      id: "sus-julieta",
      name: "Julieta Fernández",
      age: 26,
      avatarInitials: "JF",
      occupation: "Becaria doctoral",
      relationToVictim: "Trabajaba bajo su dirección desde hace tres años",
      description:
        "Realizaba gran parte del trabajo experimental del proyecto. Su beca dependía directamente de la continuidad de la investigación de Helena.",
      alibi: "Dice haberse retirado del laboratorio a las 19:30, dejando a Helena sola trabajando.",
      interestLevel: "medium",
      knownInfo: [
        "Fue la última persona en ver a Helena antes de quedar sola en el laboratorio.",
        "Menciona que Helena estaba inusualmente tensa esa tarde.",
        "Su futuro académico depende en gran parte de que el proyecto continúe.",
      ],
    },
    {
      id: "sus-marcos",
      name: "Dr. Marcos Bianchi",
      age: 58,
      avatarInitials: "MB",
      occupation: "Director del instituto",
      relationToVictim: "Superior jerárquico directo",
      description:
        "Responsable de gestionar el financiamiento del IIBS. El proyecto de Helena representaba tanto una oportunidad de prestigio como un riesgo si los resultados no se confirmaban a tiempo.",
      alibi: "Afirma haber estado en una cena institucional con financistas hasta pasada la medianoche.",
      interestLevel: "low",
      knownInfo: [
        "Su alibi coincide con los registros de reserva del restaurante y testigos externos.",
        "Reconoce presión de los financistas por resultados concretos antes de fin de año.",
        "No tenía acceso directo a los datos técnicos del proyecto de Helena.",
      ],
    },
    {
      id: "sus-renata",
      name: "Dra. Renata Ostrowski",
      age: 44,
      avatarInitials: "RO",
      occupation: "Investigadora en otra institución",
      relationToVictim: "Ex colaboradora, disputa de autoría sin resolver",
      description:
        "Trabajó junto a Helena hace varios años en una publicación que impulsó la carrera de ambas. La relación se quebró cuando Renata quedó fuera de los créditos finales.",
      alibi: "Confirma haber visitado el instituto esa tarde por una conferencia, pero asegura haberse retirado antes de las 18:00.",
      interestLevel: "high",
      knownInfo: [
        "Mantiene un reclamo abierto y nunca resuelto sobre la autoría de una publicación conjunta.",
        "Su presencia en el instituto esa misma tarde es confirmada por varios testigos.",
        "El registro de salida del edificio coincide con la hora que declara.",
      ],
    },
  ],

  testimonies: [
    {
      id: "test-01",
      personName: "Dr. Pablo Ibarra",
      personId: "sus-pablo",
      date: "3 de septiembre, 2026",
      time: "09:15",
      location: "IIBS — Oficina de dirección",
      content:
        "\"Esa noche me fui temprano a casa, como siempre. Debo haber perdido la tarjeta de acceso en algún momento de la semana, no le di importancia hasta ahora.\"",
      clues: [
        "No puede precisar cuándo ni dónde habría perdido la tarjeta.",
        "No menciona el informe de auditoría sobre su propia publicación.",
      ],
      contradicts: [
        {
          testimonyId: "test-05",
          note:
            "El guardia de seguridad confirma que el sistema no registra ningún reporte de tarjeta extraviada esa semana, algo que contradice la explicación de Pablo.",
        },
      ],
    },
    {
      id: "test-02",
      personName: "Julieta Fernández",
      personId: "sus-julieta",
      date: "3 de septiembre, 2026",
      time: "09:45",
      location: "IIBS — Sala de becarios",
      content:
        "\"Me fui a eso de las siete y media. Helena se quedó terminando unos gráficos para la presentación de mañana... digo, de hoy. Estaba nerviosa, pero pensé que era por la presentación.\"",
      clues: [
        "Confirma que Helena permaneció sola en el laboratorio después de las 19:30.",
        "Describe un estado de ánimo tenso, sin precisar la causa.",
      ],
    },
    {
      id: "test-03",
      personName: "Dr. Marcos Bianchi",
      personId: "sus-marcos",
      date: "3 de septiembre, 2026",
      time: "11:00",
      location: "IIBS — Oficina de dirección",
      content:
        "\"Estuve toda la noche en una cena con financistas del instituto, hasta después de las doce. Cualquiera de los presentes puede confirmarlo, incluido el propio restaurante.\"",
      clues: [
        "Ofrece testigos externos verificables para toda la franja horaria relevante.",
        "Reconoce presión institucional por resultados, sin vincularla directamente al hecho.",
      ],
    },
    {
      id: "test-04",
      personName: "Dra. Renata Ostrowski",
      personId: "sus-renata",
      date: "3 de septiembre, 2026",
      time: "12:20",
      location: "IIBS — Sala de conferencias",
      content:
        "\"Vine para una conferencia esa tarde, nada más. Vi a Helena un momento en el pasillo, apenas nos saludamos. Me fui antes de las seis, tengo el registro de salida si hace falta.\"",
      clues: [
        "Reconoce haber visto a Helena brevemente esa tarde.",
        "Su horario de salida está confirmado por el sistema de acceso del instituto.",
      ],
    },
    {
      id: "test-05",
      personName: "Guardia de seguridad",
      date: "3 de septiembre, 2026",
      time: "08:30",
      location: "IIBS — Entrada principal",
      content:
        "\"La doctora Marchetti salió de mi vista después de las ocho, seguía en el laboratorio. El sistema marca el ingreso de la tarjeta del doctor Ibarra a las 20:40; no hay ningún reporte de extravío cargado esa semana, lo revisé yo mismo esta mañana.\"",
      clues: [
        "Confirma de forma directa e independiente el horario del registro de acceso.",
        "Descarta la posibilidad de que la tarjeta haya sido reportada como perdida antes del hecho.",
      ],
      contradicts: [
        {
          testimonyId: "test-01",
          note:
            "Contradice la explicación de Pablo Ibarra, quien asegura haber extraviado su tarjeta días antes sin haberlo reportado.",
        },
      ],
    },
  ],

  timeline: [
    {
      id: "tl-01",
      time: "18:30",
      title: "El instituto entra en horario reducido de guardia",
      description: "La mayoría del personal se retira. Solo queda un guardia en la entrada principal.",
      locationId: "loc-entrada",
      certainty: "confirmed",
    },
    {
      id: "tl-02",
      time: "19:20",
      title: "Helena redacta un correo dirigido al comité de ética",
      description:
        "Guarda un borrador sin enviar en el que anuncia su intención de reportar irregularidades en una investigación ajena.",
      locationId: "loc-laboratorio",
      relatedEvidenceIds: ["ev-08"],
      certainty: "confirmed",
    },
    {
      id: "tl-03",
      time: "19:30",
      title: "Julieta se retira del laboratorio",
      description: "Deja a Helena trabajando sola, terminando material para la presentación del día siguiente.",
      locationId: "loc-laboratorio",
      certainty: "confirmed",
    },
    {
      id: "tl-04",
      time: "20:40",
      title: "Se registra un ingreso con la tarjeta de Pablo Ibarra",
      description:
        "El sistema de acceso marca el ingreso de su credencial al ala de laboratorios, dos horas después de su salida habitual.",
      locationId: "loc-entrada",
      relatedEvidenceIds: ["ev-03", "ev-05"],
      certainty: "confirmed",
    },
    {
      id: "tl-05",
      time: "21:15",
      title: "Última actividad registrada en la computadora del laboratorio",
      description: "El equipo de escritorio del laboratorio no vuelve a mostrar actividad después de este horario.",
      locationId: "loc-laboratorio",
      certainty: "unconfirmed",
    },
    {
      id: "tl-06",
      time: "07:45",
      title: "Personal de limpieza encuentra el cuerpo",
      description: "Dan aviso inmediato a la dirección del instituto, que a su vez notifica a la policía.",
      locationId: "loc-laboratorio",
      certainty: "confirmed",
    },
  ],

  solution: {
    guiltySuspectId: "sus-pablo",
    keyEvidenceIds: ["ev-06", "ev-05", "ev-04", "ev-08"],
    explanation:
      "Helena había detectado irregularidades en los datos de una publicación reciente de Pablo Ibarra y esa misma tarde redactó un borrador dirigido al comité de ética para reportarlo antes de su propia presentación. Pablo, que ya sabía o sospechaba lo que se avecinaba, ingresó al instituto esa noche con su propia tarjeta —pese a asegurar que la había perdido, algo que el guardia desmiente— y le administró un ansiolítico. Se llevó el cuaderno de laboratorio y su notebook buscando cualquier registro del hallazgo, sin saber que Helena ya había escondido una copia de respaldo en un USB bajo su escritorio.",
  },
};
