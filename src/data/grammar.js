// src/data/grammar.js
// Banco de datos de los 12 tiempos verbales en inglés
// Agrupados en 3 categorías: present, past, future

export const GRAMMAR_TENSES = [

  // ═══════════════════ PRESENT (4) ═══════════════════
  {
    id: 1,
    group: 'present',
    name: 'Present Simple',
    nameEs: 'Presente Simple',
    formula: 'Subject + verb (+s para he/she/it)',
    uses: [
      'Hábitos y rutinas',
      'Hechos generales o verdades',
      'Horarios fijos (transporte, eventos)',
    ],
    examples: [
      { en: 'She works at a hospital every day.', es: 'Ella trabaja en un hospital todos los días.' },
      { en: 'The train leaves at 9 AM.', es: 'El tren sale a las 9 AM.' },
    ],
    questions: [
      {
        id: 't1-q1',
        question: 'She ___ to the gym every morning.',
        options: ['go', 'goes', 'going', 'went'],
        correctIndex: 1,
        explanation: 'Con he/she/it se agrega "-s" en presente simple.',
      },
      {
        id: 't1-q2',
        question: '¿Cuál oración describe un hecho general?',
        options: ['I am eating breakfast', 'Water boils at 100°C', 'I have visited Spain', 'She was sleeping'],
        correctIndex: 1,
        explanation: 'El presente simple se usa para hechos generales o verdades universales.',
      },
      {
        id: 't1-q3',
        question: '___ you speak French?',
        options: ['Do', 'Does', 'Are', 'Did'],
        correctIndex: 0,
        explanation: 'Con "you" se usa "Do" para preguntas en presente simple.',
      },
      {
        id: 't1-q4',
        question: "He doesn't ___ coffee.",
        options: ['like', 'likes', 'liked', 'liking'],
        correctIndex: 0,
        explanation: 'Después de "doesn\'t" siempre va el verbo base, sin "-s".',
      },
    ],
  },

  {
    id: 2,
    group: 'present',
    name: 'Present Continuous',
    nameEs: 'Presente Continuo',
    formula: 'Subject + am/is/are + verb-ing',
    uses: [
      'Acción sucediendo ahora mismo',
      'Planes futuros ya organizados',
      'Situaciones temporales',
    ],
    examples: [
      { en: 'I am studying English right now.', es: 'Estoy estudiando inglés en este momento.' },
      { en: 'We are meeting them tomorrow at 5pm.', es: 'Nos reuniremos con ellos mañana a las 5pm.' },
    ],
    questions: [
      {
        id: 't2-q1',
        question: 'Look! It ___ outside.',
        options: ['rains', 'rained', 'is raining', 'has rained'],
        correctIndex: 2,
        explanation: 'Para acciones ocurriendo en este momento se usa presente continuo.',
      },
      {
        id: 't2-q2',
        question: 'She ___ dinner right now.',
        options: ['cooks', 'is cooking', 'cooked', 'cook'],
        correctIndex: 1,
        explanation: 'Acción en progreso ahora = am/is/are + verbo-ing.',
      },
      {
        id: 't2-q3',
        question: '¿Qué tipo de verbo normalmente NO se usa en forma continua?',
        options: ['run', 'know', 'eat', 'write'],
        correctIndex: 1,
        explanation: 'Verbos de estado como "know" generalmente no se usan en forma continua.',
      },
      {
        id: 't2-q4',
        question: 'We ___ to the beach this weekend (ya está planeado).',
        options: ['go', 'went', 'are going', 'have gone'],
        correctIndex: 2,
        explanation: 'Presente continuo también expresa planes futuros ya organizados.',
      },
    ],
  },

  {
    id: 3,
    group: 'present',
    name: 'Present Perfect',
    nameEs: 'Presente Perfecto',
    formula: 'Subject + have/has + past participle',
    uses: [
      'Experiencias de vida (sin tiempo específico)',
      'Acciones que empezaron en el pasado y continúan',
      'Resultados de acciones recientes',
    ],
    examples: [
      { en: 'I have visited Japan twice.', es: 'He visitado Japón dos veces.' },
      { en: 'She has just finished her homework.', es: 'Ella acaba de terminar su tarea.' },
    ],
    questions: [
      {
        id: 't3-q1',
        question: 'I ___ never ___ sushi before.',
        options: ['have / eat', 'have / eaten', 'has / eaten', 'had / eaten'],
        correctIndex: 1,
        explanation: 'Con "I" se usa "have" + participio pasado.',
      },
      {
        id: 't3-q2',
        question: '¿Qué expresión de tiempo va comúnmente con Present Perfect?',
        options: ['yesterday', 'last week', 'already', 'in 1990'],
        correctIndex: 2,
        explanation: '"already" se usa comúnmente con presente perfecto, no fechas específicas.',
      },
      {
        id: 't3-q3',
        question: 'She ___ lived here for ten years.',
        options: ['has', 'have', 'is', 'was'],
        correctIndex: 0,
        explanation: 'Con "she" se usa "has" en presente perfecto.',
      },
      {
        id: 't3-q4',
        question: "¿Cuál es el past participle de 'go'?",
        options: ['went', 'gone', 'going', 'goed'],
        correctIndex: 1,
        explanation: '"go" es irregular: go - went - gone.',
      },
    ],
  },

  {
    id: 4,
    group: 'present',
    name: 'Present Perfect Continuous',
    nameEs: 'Presente Perfecto Continuo',
    formula: 'Subject + have/has + been + verb-ing',
    uses: [
      'Acción continua que empezó en el pasado y sigue ahora',
      'Enfatiza la duración de la acción',
    ],
    examples: [
      { en: 'I have been studying English for three years.', es: 'He estado estudiando inglés durante tres años.' },
      { en: 'It has been raining since morning.', es: 'Ha estado lloviendo desde la mañana.' },
    ],
    questions: [
      {
        id: 't4-q1',
        question: 'I ___ for two hours.',
        options: ['have been waiting', 'have wait', 'am waiting', 'was waiting'],
        correctIndex: 0,
        explanation: 'Acción continua hasta ahora = have/has + been + verbo-ing.',
      },
      {
        id: 't4-q2',
        question: '¿Qué palabra suele señalar duración en este tiempo?',
        options: ['yesterday', 'for', 'ago', 'last'],
        correctIndex: 1,
        explanation: '"for" indica duración, típico de present perfect continuous.',
      },
      {
        id: 't4-q3',
        question: 'She ___ been working here since 2020.',
        options: ['have', 'has', 'is', 'was'],
        correctIndex: 1,
        explanation: 'Con "she" se usa "has".',
      },
      {
        id: 't4-q4',
        question: 'Present Perfect Continuous enfatiza principalmente:',
        options: ['una acción completada única', 'la duración de una acción en curso', 'un plan futuro', 'un hábito'],
        correctIndex: 1,
        explanation: 'Este tiempo enfatiza cuánto tiempo lleva pasando algo.',
      },
    ],
  },

  // ═══════════════════ PAST (4) ═══════════════════
  {
    id: 5,
    group: 'past',
    name: 'Past Simple',
    nameEs: 'Pasado Simple',
    formula: 'Subject + verb-ed (o forma irregular)',
    uses: [
      'Acciones terminadas en un momento específico del pasado',
    ],
    examples: [
      { en: 'I visited my grandmother last weekend.', es: 'Visité a mi abuela el fin de semana pasado.' },
      { en: 'They went to Cancún in 2021.', es: 'Ellos fueron a Cancún en 2021.' },
    ],
    questions: [
      {
        id: 't5-q1',
        question: 'She ___ to the store yesterday.',
        options: ['go', 'goes', 'went', 'gone'],
        correctIndex: 2,
        explanation: '"go" en pasado simple es "went".',
      },
      {
        id: 't5-q2',
        question: '¿Qué marcador de tiempo encaja con Past Simple?',
        options: ['now', 'already', 'last year', 'since'],
        correctIndex: 2,
        explanation: '"last year" indica un momento específico y terminado del pasado.',
      },
      {
        id: 't5-q3',
        question: 'Did you ___ the email?',
        options: ['send', 'sent', 'sending', 'sends'],
        correctIndex: 0,
        explanation: 'Después de "did" siempre va el verbo en forma base.',
      },
      {
        id: 't5-q4',
        question: "Past simple de 'eat' es:",
        options: ['eated', 'ate', 'eaten', 'eating'],
        correctIndex: 1,
        explanation: '"eat" es irregular: eat - ate - eaten.',
      },
    ],
  },

  {
    id: 6,
    group: 'past',
    name: 'Past Continuous',
    nameEs: 'Pasado Continuo',
    formula: 'Subject + was/were + verb-ing',
    uses: [
      'Acción en progreso en un momento específico del pasado',
      'A menudo interrumpida por otra acción',
    ],
    examples: [
      { en: 'I was watching TV when she called.', es: 'Estaba viendo TV cuando ella llamó.' },
      { en: 'They were playing soccer at 5pm yesterday.', es: 'Ellos estaban jugando fútbol a las 5pm de ayer.' },
    ],
    questions: [
      {
        id: 't6-q1',
        question: 'I ___ dinner when the phone rang.',
        options: ['cook', 'cooked', 'was cooking', 'have cooked'],
        correctIndex: 2,
        explanation: 'Acción en progreso interrumpida por otra = was/were + verbo-ing.',
      },
      {
        id: 't6-q2',
        question: '¿Qué palabra suele conectar dos acciones pasadas (una interrumpiendo a otra)?',
        options: ['since', 'when', 'for', 'already'],
        correctIndex: 1,
        explanation: '"when" conecta la acción continua con la que la interrumpe.',
      },
      {
        id: 't6-q3',
        question: 'They ___ studying at 8pm last night.',
        options: ['was', 'were', 'are', 'is'],
        correctIndex: 1,
        explanation: 'Con "they" se usa "were".',
      },
      {
        id: 't6-q4',
        question: 'Past continuous describe:',
        options: ['una acción terminada', 'una acción en progreso en el pasado', 'un plan futuro', 'un hábito'],
        correctIndex: 1,
        explanation: 'Se usa para acciones que estaban sucediendo en un momento pasado.',
      },
    ],
  },

  {
    id: 7,
    group: 'past',
    name: 'Past Perfect',
    nameEs: 'Pasado Perfecto',
    formula: 'Subject + had + past participle',
    uses: [
      'Acción que ocurrió antes de otra acción pasada',
    ],
    examples: [
      { en: 'I had finished my homework before dinner.', es: 'Había terminado mi tarea antes de la cena.' },
      { en: 'She had already left when I arrived.', es: 'Ella ya se había ido cuando llegué.' },
    ],
    questions: [
      {
        id: 't7-q1',
        question: 'By the time we arrived, the movie ___ already started.',
        options: ['has', 'had', 'have', 'was'],
        correctIndex: 1,
        explanation: 'Past Perfect siempre usa "had" sin importar el sujeto.',
      },
      {
        id: 't7-q2',
        question: 'Past Perfect se usa para mostrar una acción que pasó:',
        options: ['después de otra acción pasada', 'antes de otra acción pasada', 'en el futuro', 'ahora mismo'],
        correctIndex: 1,
        explanation: 'Past Perfect señala la acción "más antigua" entre dos eventos pasados.',
      },
      {
        id: 't7-q3',
        question: 'I ___ never ___ such a beautiful place before that trip.',
        options: ['have / seen', 'had / seen', 'has / seen', 'was / seeing'],
        correctIndex: 1,
        explanation: '"had" + participio pasado, sin importar el sujeto.',
      },
      {
        id: 't7-q4',
        question: '¿Cuál oración usa Past Perfect correctamente?',
        options: ['She had ate breakfast before leaving.', 'She had eaten breakfast before leaving.', 'She has eaten breakfast before leaving.', 'She eat breakfast before leaving.'],
        correctIndex: 1,
        explanation: '"eaten" es el participio pasado correcto de "eat".',
      },
    ],
  },

  {
    id: 8,
    group: 'past',
    name: 'Past Perfect Continuous',
    nameEs: 'Pasado Perfecto Continuo',
    formula: 'Subject + had + been + verb-ing',
    uses: [
      'Acción continua que ocurrió antes de otra acción pasada',
      'Enfatiza la duración',
    ],
    examples: [
      { en: 'I had been waiting for an hour when the bus arrived.', es: 'Había estado esperando una hora cuando llegó el autobús.' },
      { en: 'She had been working there for five years before she resigned.', es: 'Ella había estado trabajando ahí durante cinco años antes de renunciar.' },
    ],
    questions: [
      {
        id: 't8-q1',
        question: 'They ___ for three hours before the rain stopped.',
        options: ['had been playing', 'have been playing', 'were playing', 'had play'],
        correctIndex: 0,
        explanation: '"had been" + verbo-ing para duración antes de otra acción pasada.',
      },
      {
        id: 't8-q2',
        question: 'Este tiempo se usa principalmente para enfatizar:',
        options: ['una acción súbita', 'la duración antes de otra acción pasada', 'un resultado futuro', 'un hábito presente'],
        correctIndex: 1,
        explanation: 'Past Perfect Continuous enfatiza cuánto tiempo había durado algo.',
      },
      {
        id: 't8-q3',
        question: 'I ___ been studying for two hours when she called.',
        options: ['have', 'has', 'had', 'was'],
        correctIndex: 2,
        explanation: '"had" se usa con todos los sujetos en este tiempo.',
      },
      {
        id: 't8-q4',
        question: '¿Cuál es correcta?',
        options: ['She had been study English.', 'She had been studying English.', 'She has been studying English.', 'She was study English.'],
        correctIndex: 1,
        explanation: 'La forma correcta es "had been" + verbo-ing.',
      },
    ],
  },

  // ═══════════════════ FUTURE (4) ═══════════════════
  {
    id: 9,
    group: 'future',
    name: 'Future Simple',
    nameEs: 'Futuro Simple',
    formula: 'Subject + will + verb',
    uses: [
      'Predicciones',
      'Decisiones espontáneas',
      'Promesas',
    ],
    examples: [
      { en: 'I will call you tomorrow.', es: 'Te llamaré mañana.' },
      { en: 'It will probably rain later.', es: 'Probablemente lloverá más tarde.' },
    ],
    questions: [
      {
        id: 't9-q1',
        question: 'I think it ___ rain tomorrow.',
        options: ['will', 'is', 'was', 'has'],
        correctIndex: 0,
        explanation: 'Predicciones usan "will".',
      },
      {
        id: 't9-q2',
        question: '¿Cuál uso NO corresponde a Future Simple?',
        options: ['predicción', 'promesa', 'decisión espontánea', 'acción en progreso ahora'],
        correctIndex: 3,
        explanation: 'Una acción en progreso ahora es Presente Continuo, no Futuro Simple.',
      },
      {
        id: 't9-q3',
        question: 'She ___ help you with the project.',
        options: ['will', 'would', 'is', 'was'],
        correctIndex: 0,
        explanation: '"will" + verbo base para futuro simple.',
      },
      {
        id: 't9-q4',
        question: 'La forma negativa de Future Simple es:',
        options: ["will not / won't", 'don\'t will', 'not will', "willn't"],
        correctIndex: 0,
        explanation: '"will not" se contrae como "won\'t".',
      },
    ],
  },

  {
    id: 10,
    group: 'future',
    name: 'Future Continuous',
    nameEs: 'Futuro Continuo',
    formula: 'Subject + will be + verb-ing',
    uses: [
      'Acción que estará en progreso en un momento específico del futuro',
    ],
    examples: [
      { en: 'I will be working at 9pm tonight.', es: 'Estaré trabajando a las 9pm esta noche.' },
      { en: 'This time next week, we will be traveling to Cancún.', es: 'A esta hora la próxima semana, estaremos viajando a Cancún.' },
    ],
    questions: [
      {
        id: 't10-q1',
        question: 'At 8pm tonight, I ___ dinner.',
        options: ['will cook', 'will be cooking', 'cook', 'cooked'],
        correctIndex: 1,
        explanation: 'Acción en progreso en un momento futuro = will be + verbo-ing.',
      },
      {
        id: 't10-q2',
        question: 'Future Continuous describe:',
        options: ['una acción en progreso en un momento futuro específico', 'una acción futura terminada', 'un hábito pasado', 'un hecho general'],
        correctIndex: 0,
        explanation: 'Se usa para visualizar una acción "en pleno desarrollo" en el futuro.',
      },
      {
        id: 't10-q3',
        question: 'This time tomorrow, they ___ flying to Mexico.',
        options: ['will', 'will be', 'are', 'were'],
        correctIndex: 1,
        explanation: '"will be" + verbo-ing.',
      },
      {
        id: 't10-q4',
        question: '¿Cuál oración es correcta?',
        options: ['I will be study at 7pm.', 'I will be studying at 7pm.', 'I am will studying at 7pm.', 'I will studying at 7pm.'],
        correctIndex: 1,
        explanation: 'La estructura correcta es "will be" + verbo-ing.',
      },
    ],
  },

  {
    id: 11,
    group: 'future',
    name: 'Future Perfect',
    nameEs: 'Futuro Perfecto',
    formula: 'Subject + will have + past participle',
    uses: [
      'Acción que se habrá completado antes de un momento específico en el futuro',
    ],
    examples: [
      { en: 'I will have finished the project by Friday.', es: 'Habré terminado el proyecto para el viernes.' },
      { en: 'By next year, she will have graduated.', es: 'Para el próximo año, ella se habrá graduado.' },
    ],
    questions: [
      {
        id: 't11-q1',
        question: 'By 2027, I ___ this certification.',
        options: ['will have completed', 'will complete', 'have completed', 'will completing'],
        correctIndex: 0,
        explanation: '"will have" + participio pasado para acciones completadas antes de un punto futuro.',
      },
      {
        id: 't11-q2',
        question: 'Future Perfect se usa típicamente con la expresión:',
        options: ['now', 'by the time', 'yesterday', 'ago'],
        correctIndex: 1,
        explanation: '"by the time" / "by + fecha" son típicos de Future Perfect.',
      },
      {
        id: 't11-q3',
        question: 'She ___ have finished her report by tomorrow.',
        options: ['will', 'is', 'was', 'has'],
        correctIndex: 0,
        explanation: '"will have" + participio pasado.',
      },
      {
        id: 't11-q4',
        question: '¿Cuál oración usa correctamente Future Perfect?',
        options: ['By June, he will have finish the course.', 'By June, he will have finished the course.', 'By June, he has finished the course.', 'By June, he will finished the course.'],
        correctIndex: 1,
        explanation: '"finished" es el participio pasado correcto.',
      },
    ],
  },

  {
    id: 12,
    group: 'future',
    name: 'Future Perfect Continuous',
    nameEs: 'Futuro Perfecto Continuo',
    formula: 'Subject + will have been + verb-ing',
    uses: [
      'Acción continua que habrá durado hasta un momento específico en el futuro',
    ],
    examples: [
      { en: 'By next year, I will have been working here for five years.', es: 'Para el próximo año, habré estado trabajando aquí durante cinco años.' },
      { en: 'By December, she will have been studying English for two years.', es: 'Para diciembre, ella habrá estado estudiando inglés durante dos años.' },
    ],
    questions: [
      {
        id: 't12-q1',
        question: 'By 2028, I ___ here for ten years.',
        options: ['will have been working', 'will have work', 'have been working', 'will be working'],
        correctIndex: 0,
        explanation: '"will have been" + verbo-ing para duración hasta un punto futuro.',
      },
      {
        id: 't12-q2',
        question: 'Este tiempo enfatiza principalmente:',
        options: ['un evento futuro súbito', 'la duración de una acción hasta un punto futuro', 'un hecho pasado', 'un hábito presente'],
        correctIndex: 1,
        explanation: 'Future Perfect Continuous se enfoca en cuánto tiempo habrá durado algo.',
      },
      {
        id: 't12-q3',
        question: 'By the time you arrive, we ___ for three hours.',
        options: ['will have been waiting', 'will be waiting', 'have been waiting', 'had been waiting'],
        correctIndex: 0,
        explanation: '"will have been" + verbo-ing.',
      },
      {
        id: 't12-q4',
        question: '¿Cuál oración es gramaticalmente correcta?',
        options: ['She will have been study for 5 years.', 'She will have been studying for 5 years.', 'She has been studying for 5 years.', 'She will be studying for 5 years.'],
        correctIndex: 1,
        explanation: 'La estructura correcta es "will have been" + verbo-ing.',
      },
    ],
  },

];

// XP por respuesta correcta y bono por dominar un tiempo verbal
export const XP_PER_CORRECT_GRAMMAR = 15;
export const XP_TENSE_MASTERED_BONUS = 50;

// Porcentaje mínimo de aciertos para considerar el tiempo "dominado"
export const PASS_THRESHOLD = 0.75; // 3 de 4 preguntas