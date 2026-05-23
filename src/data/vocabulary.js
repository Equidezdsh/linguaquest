// src/data/vocabulary.js
// Banco de palabras para la Vocabulary Quest
// Estructura de cada palabra:
//   id        → identificador único
//   word      → palabra en inglés
//   phonetic  → pronunciación aproximada
//   type      → tipo de palabra (verb, noun, adj, adv)
//   translation → traducción al español
//   example   → oración de ejemplo en inglés
//   exampleEs → traducción del ejemplo

export const VOCABULARY = [
  {
    id: 1,
    word: 'achieve',
    phonetic: '/əˈtʃiːv/',
    type: 'verb',
    translation: 'lograr / alcanzar',
    example: 'She worked hard to achieve her goals.',
    exampleEs: 'Ella trabajó duro para lograr sus metas.',
  },
  {
    id: 2,
    word: 'available',
    phonetic: '/əˈveɪləbl/',
    type: 'adjective',
    translation: 'disponible',
    example: 'Is the manager available right now?',
    exampleEs: '¿Está disponible el gerente ahora mismo?',
  },
  {
    id: 3,
    word: 'require',
    phonetic: '/rɪˈkwaɪər/',
    type: 'verb',
    translation: 'requerir / necesitar',
    example: 'This job requires at least two years of experience.',
    exampleEs: 'Este trabajo requiere al menos dos años de experiencia.',
  },
  {
    id: 4,
    word: 'significant',
    phonetic: '/sɪɡˈnɪfɪkənt/',
    type: 'adjective',
    translation: 'significativo / importante',
    example: 'There has been a significant improvement in his work.',
    exampleEs: 'Ha habido una mejora significativa en su trabajo.',
  },
  {
    id: 5,
    word: 'implement',
    phonetic: '/ˈɪmplɪment/',
    type: 'verb',
    translation: 'implementar / aplicar',
    example: 'We need to implement the new strategy immediately.',
    exampleEs: 'Necesitamos implementar la nueva estrategia inmediatamente.',
  },
  {
    id: 6,
    word: 'ensure',
    phonetic: '/ɪnˈʃʊər/',
    type: 'verb',
    translation: 'asegurar / garantizar',
    example: 'Please ensure the report is ready by Friday.',
    exampleEs: 'Por favor asegúrate de que el reporte esté listo el viernes.',
  },
  {
    id: 7,
    word: 'regarding',
    phonetic: '/rɪˈɡɑːrdɪŋ/',
    type: 'preposition',
    translation: 'con respecto a / sobre',
    example: 'I am writing regarding your job application.',
    exampleEs: 'Escribo con respecto a tu solicitud de empleo.',
  },
  {
    id: 8,
    word: 'challenge',
    phonetic: '/ˈtʃælɪndʒ/',
    type: 'noun',
    translation: 'desafío / reto',
    example: 'Learning a new language is a great challenge.',
    exampleEs: 'Aprender un nuevo idioma es un gran desafío.',
  },
  {
    id: 9,
    word: 'opportunity',
    phonetic: '/ˌɒpəˈtjuːnɪti/',
    type: 'noun',
    translation: 'oportunidad',
    example: 'This is a great opportunity to grow professionally.',
    exampleEs: 'Esta es una gran oportunidad para crecer profesionalmente.',
  },
  {
    id: 10,
    word: 'approach',
    phonetic: '/əˈprəʊtʃ/',
    type: 'noun / verb',
    translation: 'enfoque / aproximarse',
    example: 'We need a different approach to solve this problem.',
    exampleEs: 'Necesitamos un enfoque diferente para resolver este problema.',
  },
  {
    id: 11,
    word: 'currently',
    phonetic: '/ˈkɜːrəntli/',
    type: 'adverb',
    translation: 'actualmente / en este momento',
    example: 'I am currently working on a new project.',
    exampleEs: 'Actualmente estoy trabajando en un nuevo proyecto.',
  },
  {
    id: 12,
    word: 'improve',
    phonetic: '/ɪmˈpruːv/',
    type: 'verb',
    translation: 'mejorar',
    example: 'I want to improve my English skills.',
    exampleEs: 'Quiero mejorar mis habilidades en inglés.',
  },
  {
    id: 13,
    word: 'reliable',
    phonetic: '/rɪˈlaɪəbl/',
    type: 'adjective',
    translation: 'confiable / fiable',
    example: 'She is a very reliable team member.',
    exampleEs: 'Ella es una integrante del equipo muy confiable.',
  },
  {
    id: 14,
    word: 'deadline',
    phonetic: '/ˈdedlaɪn/',
    type: 'noun',
    translation: 'fecha límite / plazo',
    example: 'The deadline for this task is next Monday.',
    exampleEs: 'La fecha límite para esta tarea es el próximo lunes.',
  },
  {
    id: 15,
    word: 'collaborate',
    phonetic: '/kəˈlæbəreɪt/',
    type: 'verb',
    translation: 'colaborar / trabajar juntos',
    example: 'Our teams collaborate on every major project.',
    exampleEs: 'Nuestros equipos colaboran en cada proyecto importante.',
  },
  {
    id: 16,
    word: 'feedback',
    phonetic: '/ˈfiːdbæk/',
    type: 'noun',
    translation: 'retroalimentación / comentarios',
    example: 'Can you give me feedback on my presentation?',
    exampleEs: '¿Puedes darme retroalimentación sobre mi presentación?',
  },
  {
    id: 17,
    word: 'estimate',
    phonetic: '/ˈestɪmɪt/',
    type: 'noun / verb',
    translation: 'estimación / calcular',
    example: 'Can you give me an estimate for the project?',
    exampleEs: '¿Puedes darme una estimación del proyecto?',
  },
  {
    id: 18,
    word: 'schedule',
    phonetic: '/ˈskedʒuːl/',
    type: 'noun / verb',
    translation: 'horario / programar',
    example: 'Let\'s schedule a meeting for tomorrow.',
    exampleEs: 'Programemos una reunión para mañana.',
  },
  {
    id: 19,
    word: 'efficient',
    phonetic: '/ɪˈfɪʃnt/',
    type: 'adjective',
    translation: 'eficiente',
    example: 'We need a more efficient process for testing.',
    exampleEs: 'Necesitamos un proceso más eficiente para las pruebas.',
  },
  {
    id: 20,
    word: 'priority',
    phonetic: '/praɪˈɒrɪti/',
    type: 'noun',
    translation: 'prioridad',
    example: 'Learning English is my top priority right now.',
    exampleEs: 'Aprender inglés es mi máxima prioridad ahora mismo.',
  },
];

// Palabras agrupadas por tipo (útil para filtros futuros)
export const WORD_TYPES = ['verb', 'noun', 'adjective', 'adverb', 'preposition'];

// XP que se gana por respuesta correcta
export const XP_PER_CORRECT = 10;
export const XP_PER_SESSION_BONUS = 20; // bonus al terminar el mazo
