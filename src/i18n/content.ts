import type { Project } from '../data/site';
import type { Locale } from './config';

type Capability = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  icon: 'window' | 'layers' | 'spark';
};
type CareerEntry = { period: string; job: string; organization: string; summary: string };
type Labels = {
  navigation: string; navProjects: string; navExpertise: string; navAbout: string;
  navContact: string; home: string; language: string; theme: string;
  openMenu: string; closeMenu: string; skipToContent: string;
  heroKicker: string; heroRole: string; heroLineOne: string; heroLineTwo: string; heroSolution: string;
  exploreProjects: string; workTogether: string; scrollToExplore: string; heroHighlights: string; heroLanguages: string;
  codeDesign: string; codeIntent: string; codeBuild: string; codeJudgment: string;
  ticker: string; architecture: string; digitalProduct: string;
  selectedWork: string; projectsTitle: string; projectsEmphasis: string;
  projectsIntro: string; filterProjects: string; all: string;
  categories: Record<'institutional' | 'product' | 'concept', string>;
  projectsNote: string; whatIDo: string; expertiseTitle: string; expertiseEmphasis: string;
  aLittleAbout: string; aboutTitle: string; aboutEmphasis: string;
  aboutLead: string; career: string; myApproach: string; approachTitle: string;
  approachEmphasis: string; principleClarity: string; principleClarityText: string;
  principleQuality: string; principleQualityText: string; principleDelivery: string;
  principleDeliveryText: string; contact: string; contactTitle: string;
  contactEmphasis: string; contactIntro: string; sendEmail: string; emailSubject: string;
  exploreGithub: string; copyEmail: string; downloadResume: string;
  letsMakeItWork: string; contactTagline: string; footerMotto: string;
  backToTop: string; footerPortfolio: string; builtWith: string;
  viewProject: string; caseBack: string; caseStatus: string; casePeriod: string;
  caseRole: string; caseOverview: string; caseOverviewText: string;
  caseVisitSite: string; caseChallenge: string; caseChallengeTitle: string;
  caseApproach: string; caseApproachTitle: string; caseContribution: string;
  caseContributionTitle: string; nextProject: string;
  notFoundTitle: string; notFoundMessage: string; returnHome: string;
  pageTitle: string; casePageTitle: string; copiedEmail: string; socialNetworks: string;
  workflowReceived: string; portalGovernment: string; portalHero: string;
  financeSummary: string; financeIncome: string; financeExpenses: string;
  loansTitle: string; loansHero: string; loan: string; loanActive: string;
  loanCurrent: string; heroArtLabel: string; visualProject: string; codeStatus: string; monogramTagline: string; workLabel: string;
};
export type PortfolioContent = {
  profile: { role: string; location: string; description: string; about: string; availability: string };
  labels: Labels;
  projects: Project[];
  capabilities: Capability[];
  career: CareerEntry[];
  highlights: string[];
};

export const content: Record<Locale, PortfolioContent> = {
  en: {
    profile: {
      role: 'Full-stack developer · Web architecture',
      location: 'Peru · Remote work',
      description: 'I design and build web platforms, management tools, and digital products with a focus on performance, clarity, and scalability.',
      about: 'I work at the intersection of software engineering, processes, and product design. I focus on solving practical problems: from simplifying administrative workflows to shipping useful web applications.',
      availability: 'Available for selected projects',
    },
    labels: {
      navigation: 'Main navigation', navProjects: 'Projects', navExpertise: 'Expertise', navAbout: 'About',
      navContact: 'Let’s talk', home: 'Go to home', language: 'Select language', theme: 'Toggle light or dark theme',
      openMenu: 'Open menu', closeMenu: 'Close menu', skipToContent: 'Skip to content',
      heroKicker: 'HI, I’M', heroRole: 'FULL-STACK DEVELOPER', heroLineOne: 'I shape ideas', heroLineTwo: 'I build', heroSolution: 'solutions.',
      exploreProjects: 'Explore projects', workTogether: 'Work with me', scrollToExplore: 'SCROLL TO EXPLORE', heroHighlights: 'Portfolio overview', heroLanguages: 'Languages',
      codeDesign: 'DESIGN', codeIntent: 'WITH INTENTION', codeBuild: 'BUILD', codeJudgment: 'WITH PURPOSE',
      ticker: 'Technologies and areas of work', architecture: 'ARCHITECTURE', digitalProduct: 'DIGITAL PRODUCTS',
      selectedWork: 'SELECTED WORK', projectsTitle: 'Projects that', projectsEmphasis: 'solve problems.',
      projectsIntro: 'A selection of products and platforms. Each case identifies its actual stage: published, personal, or still being planned.',
      filterProjects: 'Filter projects', all: 'All',
      categories: { institutional: 'Institutional', product: 'Product', concept: 'Concept' },
      projectsNote: 'Each project describes its scope and current status. Private repositories and institutional data are not disclosed.',
      whatIDo: 'WHAT I DO', expertiseTitle: 'From an idea to a', expertiseEmphasis: 'working product.',
      aLittleAbout: 'A LITTLE ABOUT ME', aboutTitle: 'Technology with', aboutEmphasis: 'purpose.',
      aboutLead: 'It is not just about writing code. It is about understanding the problem before building a solution.',
      career: 'EXPERIENCE', myApproach: 'MY APPROACH', approachTitle: 'Less noise.', approachEmphasis: 'More impact.',
      principleClarity: 'Clarity', principleClarityText: 'Understand the context and what users actually need first.',
      principleQuality: 'Quality', principleQualityText: 'Make technical decisions that support maintainability, security, and future growth.',
      principleDelivery: 'Delivery', principleDeliveryText: 'Prioritize useful solutions instead of visually impressive prototypes alone.',
      contact: 'CONTACT', contactTitle: 'Let’s build', contactEmphasis: 'something meaningful.',
      contactIntro: 'Need a web platform, a better process, or a way to turn an idea into a product? Let’s talk.',
      sendEmail: 'Send an email', emailSubject: 'Web project inquiry', exploreGithub: 'Explore my GitHub', copyEmail: 'Copy email', downloadResume: 'Download résumé',
      letsMakeItWork: 'LET’S MAKE IT WORK.', contactTagline: 'WEB DEVELOPMENT / SYSTEMS / PRODUCT',
      footerMotto: 'Thoughtful software. Practical solutions.', backToTop: 'Back to top', footerPortfolio: 'Personal portfolio.', builtWith: 'Built with',
      viewProject: 'View project', caseBack: 'Back to projects', caseStatus: 'STATUS', casePeriod: 'PERIOD', caseRole: 'ROLE',
      caseOverview: 'PROJECT OVERVIEW', caseOverviewText: 'The thinking, scope, and technical decisions behind this initiative.',
      caseVisitSite: 'Visit website', caseChallenge: '01 / THE CHALLENGE', caseChallengeTitle: 'Understand the problem.',
      caseApproach: '02 / THE APPROACH', caseApproachTitle: 'Design the solution.',
      caseContribution: '03 / MY CONTRIBUTION', caseContributionTitle: 'Build with purpose.', nextProject: 'NEXT PROJECT',
      notFoundTitle: 'PAGE NOT FOUND', notFoundMessage: 'This page does not exist or has moved.', returnHome: 'Return home',
      pageTitle: 'Yemis Paredez — Software Developer', casePageTitle: 'Project case study', copiedEmail: 'Email copied to clipboard', socialNetworks: 'Social media profiles',
      workflowReceived: 'DOCUMENT RECEIVED', portalGovernment: 'DIGITAL GOVERNMENT', portalHero: 'Connecting people.',
      financeSummary: 'SUMMARY · DEMO', financeIncome: 'INCOME', financeExpenses: 'EXPENSES',
      loansTitle: 'MY LOANS', loansHero: 'Stay on top of it.', loan: 'Loan', loanActive: 'ACTIVE', loanCurrent: 'ON TIME',
      heroArtLabel: 'Abstract illustration of software engineering and development',
      visualProject: 'PROJECT', codeStatus: 'SYSTEM ONLINE', monogramTagline: 'ENGINEERED TO MATTER.', workLabel: 'WORK',
    },
    projects: [
      {
        slug: 'workflow-platform', order: '01', name: 'Workflow Platform', eyebrow: 'Document management platform',
        shortDescription: 'Web application for managing documents, departments, routing, and administrative request tracking within an organization.',
        category: 'institutional', status: 'In implementation', period: '2026', role: 'Software development & engineering',
        stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma'], tone: 'lime', url: 'https://workflow.munipuertobermudez.gob.pe',
        challenge: 'Document management needs traceability, consistent business rules, and an interface that supports work across different departments.',
        approach: 'Design workflows with multiple destinations, tracking, authentication, and modular organization of operations.',
        contribution: 'Technical work on developing and evolving the platform, with emphasis on data integrity, user experience, and validation.',
        caveat: 'Institutional project: source code and internal or confidential information are not made public.',
      },
      {
        slug: 'municipal-portal', order: '02', name: 'Municipal Portal', eyebrow: 'Digital citizen experience',
        shortDescription: 'Institutional website providing access to public services, municipal information, and citizen-oriented navigation.',
        category: 'institutional', status: 'Published', period: '2026', role: 'Web development & integrations',
        stack: ['Frontend', 'Responsive Design', 'UX', 'Integrations'], tone: 'sky', url: 'https://munipuertobermudez.gob.pe',
        challenge: 'Make public services and institutional information accessible across devices and screen sizes.',
        approach: 'Use clear content structures, responsive layouts, and prominent access points for online citizen services.',
        contribution: 'Worked on the website experience, visual organization, and integration of access to digital services.',
        caveat: 'Institutional information, services, and assets belong to the respective public entity.',
      },
      {
        slug: 'personal-finance', order: '03', name: 'Personal Finance', eyebrow: 'Personal web product',
        shortDescription: 'A web app for tracking income, expenses, and recurring payments through a streamlined mobile-first interface.',
        category: 'product', status: 'Personal project', period: '2026', role: 'Full-stack design & development',
        stack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'], tone: 'violet',
        challenge: 'Provide a clear view of financial activity and upcoming obligations without cumbersome data entry.',
        approach: 'Organize transactions and recurring charges with a mobile-first user experience.',
        contribution: 'Conceptualized and developed a personal tool aimed at practical day-to-day money management.',
        caveat: 'Personal application; no public demo is available at this time.',
      },
      {
        slug: 'loan-tracker', order: '04', name: 'Loan Tracker', eyebrow: 'Mobile product concept',
        shortDescription: 'A proposed app to manage clients, multiple loans, installments, due dates, and payment reminders.',
        category: 'concept', status: 'In planning', period: '2026', role: 'Architecture & product discovery',
        stack: ['Node.js', 'Prisma', 'PostgreSQL', 'Mobile UX'], tone: 'coral',
        challenge: 'A lender needs a reliable way to monitor obligations across clients and avoid missing important dates.',
        approach: 'Model clients with multiple debts, repayment deadlines, and scheduled reminders, with straightforward mobile navigation.',
        contribution: 'Defined functional requirements, an initial data model, and usability guidelines.',
        caveat: 'Conceptual project: inclusion here does not mean the application has been released.',
      },
    ],
    capabilities: [
      { index: '01', title: 'Web Development', description: 'Fast, accessible, responsive interfaces built around real business needs.', tags: ['React', 'Astro', 'TypeScript', 'Responsive Design'], icon: 'window' },
      { index: '02', title: 'Backend & Data', description: 'Well-structured APIs and data models for reliable, maintainable operations.', tags: ['Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'], icon: 'layers' },
      { index: '03', title: 'Systems & Product', description: 'Turn business problems and workflows into digital solutions people can actually use.', tags: ['Architecture', 'Processes', 'UX', 'Automation'], icon: 'spark' },
    ],
    career: [
      { period: '2026 — Present', job: 'Head of IT & Communications (USTIC)', organization: 'District Municipality of Puerto Bermúdez', summary: 'Information technology, systems, and projects related to institutional digital transformation.' },
      { period: '2024 — Present', job: 'Co-founder & CTO', organization: 'Arxatec', summary: 'Technology solutions development and technical direction for digital products.' },
    ],
    highlights: [
      'First place at the Sundai Latam hackathon',
      'Experience delivering solutions for the public sector',
      'Full-stack focus: from frontend to data architecture',
    ],
  },
  es: {
    profile: {
      role: 'Desarrollador full stack · Arquitectura web',
      location: 'Perú · Trabajo remoto',
      description: 'Diseño y construyo plataformas web, herramientas de gestión y productos digitales con enfoque en rendimiento, claridad y escalabilidad.',
      about: 'Trabajo en la intersección entre ingeniería de software, procesos y producto. Me interesa resolver problemas reales: desde mejorar trámites y operaciones hasta lanzar aplicaciones web simples y útiles.',
      availability: 'Disponible para proyectos seleccionados',
    },
    labels: {
      navigation: 'Navegación principal', navProjects: 'Proyectos', navExpertise: 'Especialidades', navAbout: 'Sobre mí',
      navContact: 'Hablemos', home: 'Ir al inicio', language: 'Seleccionar idioma', theme: 'Cambiar entre tema claro y oscuro',
      openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', skipToContent: 'Saltar al contenido',
      heroKicker: 'HOLA, SOY', heroRole: 'DESARROLLADOR FULL STACK', heroLineOne: 'Diseño ideas', heroLineTwo: 'Construyo', heroSolution: 'soluciones.',
      exploreProjects: 'Explorar proyectos', workTogether: 'Trabajemos juntos', scrollToExplore: 'DESLIZA PARA EXPLORAR', heroHighlights: 'Resumen del portafolio', heroLanguages: 'Idiomas',
      codeDesign: 'DISEÑAR', codeIntent: 'CON INTENCIÓN', codeBuild: 'CONSTRUIR', codeJudgment: 'CON CRITERIO',
      ticker: 'Tecnologías y áreas de trabajo', architecture: 'ARQUITECTURA', digitalProduct: 'PRODUCTO DIGITAL',
      selectedWork: 'TRABAJO SELECCIONADO', projectsTitle: 'Proyectos que', projectsEmphasis: 'resuelven.',
      projectsIntro: 'Una selección de productos y plataformas. Cada caso indica su estado real: publicado, personal o en planificación.',
      filterProjects: 'Filtrar proyectos', all: 'Todos',
      categories: { institutional: 'Institucional', product: 'Producto', concept: 'Exploración' },
      projectsNote: 'Los casos muestran el alcance y el estado de cada iniciativa; no se exponen repositorios privados ni datos institucionales.',
      whatIDo: 'QUÉ HAGO', expertiseTitle: 'De la necesidad al', expertiseEmphasis: 'producto funcional.',
      aLittleAbout: 'UN POCO SOBRE MÍ', aboutTitle: 'Tecnología con', aboutEmphasis: 'propósito.',
      aboutLead: 'No se trata solo de escribir código. Se trata de entender el problema antes de construir la solución.',
      career: 'TRAYECTORIA', myApproach: 'MI ENFOQUE', approachTitle: 'Menos ruido.', approachEmphasis: 'Más impacto.',
      principleClarity: 'Claridad', principleClarityText: 'Primero comprender el contexto y lo que realmente necesita el usuario.',
      principleQuality: 'Calidad', principleQualityText: 'Decisiones técnicas que favorecen mantenimiento, seguridad y evolución.',
      principleDelivery: 'Entrega', principleDeliveryText: 'Priorizar soluciones utilizables, no solo prototipos visualmente atractivos.',
      contact: 'CONTACTO', contactTitle: '¿Construimos', contactEmphasis: 'algo importante?',
      contactIntro: 'Si necesitas desarrollar una plataforma, mejorar un proceso o convertir una idea en producto, conversemos.',
      sendEmail: 'Enviar un correo', emailSubject: 'Consulta sobre proyecto web', exploreGithub: 'Explorar mi GitHub', copyEmail: 'Copiar correo', downloadResume: 'Descargar CV',
      letsMakeItWork: 'HAGAMOS QUE FUNCIONE.', contactTagline: 'DESARROLLO WEB / SISTEMAS / PRODUCTO',
      footerMotto: 'Software bien pensado. Soluciones que funcionan.', backToTop: 'Volver arriba', footerPortfolio: 'Portafolio personal.', builtWith: 'Construido con',
      viewProject: 'Ver proyecto', caseBack: 'Volver a proyectos', caseStatus: 'ESTADO', casePeriod: 'PERIODO', caseRole: 'ROL',
      caseOverview: 'UNA VISTA DEL PROYECTO', caseOverviewText: 'El enfoque, el alcance y las decisiones que dan forma a esta iniciativa.',
      caseVisitSite: 'Visitar sitio web', caseChallenge: '01 / EL RETO', caseChallengeTitle: 'Entender el problema.',
      caseApproach: '02 / LA ESTRATEGIA', caseApproachTitle: 'Diseñar la solución.',
      caseContribution: '03 / MI PARTICIPACIÓN', caseContributionTitle: 'Convertirlo en producto.', nextProject: 'SIGUIENTE PROYECTO',
      notFoundTitle: 'PÁGINA NO ENCONTRADA', notFoundMessage: 'Esta ruta no existe o ha cambiado de lugar.', returnHome: 'Volver al inicio',
      pageTitle: 'Yemis Paredez — Desarrollador de Software', casePageTitle: 'Caso de proyecto', copiedEmail: 'Correo copiado al portapapeles', socialNetworks: 'Redes sociales',
      workflowReceived: 'DOCUMENTO RECIBIDO', portalGovernment: 'GOBIERNO DIGITAL', portalHero: 'Conectamos personas.',
      financeSummary: 'RESUMEN · DEMO', financeIncome: 'INGRESOS', financeExpenses: 'GASTOS',
      loansTitle: 'MIS PRÉSTAMOS', loansHero: 'Todo bajo control.', loan: 'Préstamo', loanActive: 'ACTIVO', loanCurrent: 'AL DÍA',
      heroArtLabel: 'Ilustración abstracta de ingeniería y desarrollo de software',
      visualProject: 'PROYECTO', codeStatus: 'SISTEMA ACTIVO', monogramTagline: 'CREADO CON PROPÓSITO.', workLabel: 'TRABAJO',
    },
    projects: [
      {
        slug: 'workflow-platform', order: '01', name: 'Workflow Platform', eyebrow: 'Plataforma de gestión documental',
        shortDescription: 'Sistema web para gestionar documentos, áreas, recorridos y seguimiento de trámites dentro de una organización.',
        category: 'institutional', status: 'En implementación', period: '2026', role: 'Desarrollo e ingeniería de software',
        stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma'], tone: 'lime', url: 'https://workflow.munipuertobermudez.gob.pe',
        challenge: 'La gestión documental necesita trazabilidad, reglas de negocio coherentes y una interfaz que facilite el trabajo entre diferentes áreas.',
        approach: 'Diseño de flujos con múltiples destinos, seguimiento, autenticación y organización de las operaciones por módulos.',
        contribution: 'Trabajo técnico en el desarrollo y evolución de una plataforma web, con atención a integridad de datos, experiencia de uso y validaciones.',
        caveat: 'Proyecto institucional: no se publica el código fuente ni información interna o confidencial.',
      },
      {
        slug: 'municipal-portal', order: '02', name: 'Portal institucional', eyebrow: 'Experiencia digital para ciudadanos',
        shortDescription: 'Sitio web institucional con acceso a servicios, información municipal y una navegación pensada para los ciudadanos.',
        category: 'institutional', status: 'Publicado', period: '2026', role: 'Desarrollo web e integración',
        stack: ['Frontend', 'Diseño responsive', 'UX', 'Integraciones'], tone: 'sky', url: 'https://munipuertobermudez.gob.pe',
        challenge: 'Facilitar el acceso a los servicios e información institucional desde dispositivos con diferentes tamaños de pantalla.',
        approach: 'Estructura de contenidos clara, diseño adaptable y puntos de acceso a servicios ciudadanos en línea.',
        contribution: 'Participación en la construcción de la experiencia web, su organización visual y la integración de accesos digitales.',
        caveat: 'La información, los servicios y los recursos institucionales pertenecen a la entidad correspondiente.',
      },
      {
        slug: 'personal-finance', order: '03', name: 'Finanzas personales', eyebrow: 'Producto web de uso personal',
        shortDescription: 'Aplicación para llevar registro de ingresos, gastos y pagos recurrentes desde una interfaz sencilla y móvil primero.',
        category: 'product', status: 'Proyecto personal', period: '2026', role: 'Diseño y desarrollo full stack',
        stack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'], tone: 'violet',
        challenge: 'Dar visibilidad a movimientos y compromisos financieros sin exigir un proceso de registro complicado.',
        approach: 'Organización por transacciones y recurrencias, interfaz priorizada para pantallas compactas y enfoque en usabilidad.',
        contribution: 'Conceptualización y construcción de una herramienta personal enfocada en control cotidiano del dinero.',
        caveat: 'Aplicación personal; por ahora no se ofrece una demostración pública.',
      },
      {
        slug: 'loan-tracker', order: '04', name: 'Control de préstamos', eyebrow: 'Diseño de producto móvil',
        shortDescription: 'Propuesta de aplicación para administrar clientes, múltiples préstamos, cuotas, vencimientos y recordatorios.',
        category: 'concept', status: 'En planificación', period: '2026', role: 'Arquitectura y definición de producto',
        stack: ['Node.js', 'Prisma', 'PostgreSQL', 'Mobile UX'], tone: 'coral',
        challenge: 'Un prestamista necesita visualizar obligaciones de diferentes clientes y evitar la pérdida de fechas importantes.',
        approach: 'Modelo de clientes con múltiples deudas, fechas de devolución y notificaciones planificadas, con una experiencia móvil directa.',
        contribution: 'Definición de requerimientos funcionales, estructura de datos y criterios de experiencia de uso.',
        caveat: 'Caso conceptual: su inclusión no implica que el producto ya esté publicado.',
      },
    ],
    capabilities: [
      { index: '01', title: 'Desarrollo web', description: 'Interfaces rápidas, accesibles y adaptables, conectadas con necesidades reales del negocio.', tags: ['React', 'Astro', 'TypeScript', 'Diseño responsive'], icon: 'window' },
      { index: '02', title: 'Backend y datos', description: 'APIs y modelos de datos organizados para que las operaciones sean confiables y mantenibles.', tags: ['Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'], icon: 'layers' },
      { index: '03', title: 'Sistemas y producto', description: 'Del problema y sus reglas de negocio a una solución digital que se pueda usar de verdad.', tags: ['Arquitectura', 'Procesos', 'UX', 'Automatización'], icon: 'spark' },
    ],
    career: [
      { period: '2026 — Actualidad', job: 'Jefatura USTIC', organization: 'Municipalidad Distrital de Puerto Bermúdez', summary: 'Tecnología, sistemas de información y proyectos vinculados con la transformación digital institucional.' },
      { period: '2024 — Actualidad', job: 'Co-Founder & CTO', organization: 'Arxatec', summary: 'Desarrollo de soluciones tecnológicas y definición técnica de productos digitales.' },
    ],
    highlights: [
      'Primer lugar en hackathon Sundai Latam',
      'Experiencia en soluciones para el sector público',
      'Enfoque full stack: de la interfaz a los datos',
    ],
  },
};

export function getContent(locale: Locale): PortfolioContent {
  return content[locale];
}
