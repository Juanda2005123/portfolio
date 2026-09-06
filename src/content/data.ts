import { PortfolioContent, Language } from './types';

export const portfolioData: Record<Language, PortfolioContent> = {
  es: {
    nav: {
      items: [
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
      ],
      contactCta: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Juan David Quintero',
      headline: 'Software Engineer & Builder.',
      subtitle:
        'Transformo problemas de negocio en arquitecturas limpias, modulares y listas para producción.',
      badge: 'Software Engineer',
      primaryCta: {
        text: 'Ver Proyectos',
        targetId: 'projects',
      },
      secondaryCta: {
        text: 'Descargar CV',
        url: '/HV_JUAN_DAVID_QUINTERO_ES.pdf',
      },
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/juan-david-quintero-software-engineer-full-stack-automation-ai/',
          icon: 'linkedin',
          ariaLabel: 'Perfil de LinkedIn de Juan David Quintero',
        },
        {
          name: 'Email',
          url: 'mailto:juandavidquintero49@gmail.com',
          icon: 'email',
          ariaLabel: 'Enviar correo a Juan David Quintero',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/573225197962',
          icon: 'whatsapp',
          ariaLabel: 'Conversar por WhatsApp corporativo',
        },
      ],
      profileAlt: 'Juan David Quintero Peña frente a la Estatua de la Libertad, NYC',
      sidebarItems: [
        { icon: 'code', label: 'Software Engineer' },
        { icon: 'graduation', label: 'Icesi University' },
        { icon: 'map', label: 'Cali, Colombia' },
        { icon: 'typescript', label: 'TypeScript' },
        { icon: 'puzzle', label: 'Solving Complex Problems' },
        { icon: 'rocket', label: 'Building Scalable Apps' },
        { icon: 'brain', label: 'AI & Automation' },
      ],
      profileCardName: 'Juan David Quintero',
      profileCardRole: 'Software Engineer & Builder',
    },
    about: {
      title: 'Sobre Mí',
      manifestoParagraphs: [
        'No concibo el desarrollo de software como una simple transcripción de requerimientos a código.',
        'Mi enfoque está en entender a fondo el problema de negocio, anticipar los cuellos de botella de escalabilidad y diseñar sistemas que reduzcan la fricción operativa.',
        'Me especializo en el ecosistema TypeScript (Next.js 15, NestJS), backend en Java y bases de datos relacionales, integrando flujos de inteligencia artificial donde realmente aportan eficiencia tangible.',
      ],
    },
    featuredProjects: {
      chip: 'Proyectos Destacados',
      headlineFirst: 'Arquitectura para escalar.',
      headlineSecond: 'Diseñada para impacto real.',
      subtitle:
        'Sistemas en producción respaldados por aislamiento estricto de datos, resiliencia distribuida y automatización pragmática con IA.',
      links: {
        viewProject: 'Detalles Técnicos',
        viewCode: 'Repositorio',
        liveDemo: 'Demo en Vivo',
      },
      projects: [
        {
          id: 'b2b-saas',
          category: 'ARQUITECTURA & SAAS',
          title: 'B2B Multi-Tenant SaaS Automation Platform',
          tagline:
            'Plataforma modular de automatización operativa y gestión empresarial sin dispersión de código.',
          description:
            'Diseñada para resolver la variabilidad de integraciones en empresas B2B. Implementé aislamiento estricto de clientes mediante middleware dinámico y políticas Row Level Security (RLS) en PostgreSQL. Estructuré patrones Adapter y Strategy que permiten conectar desde APIs REST hasta cargas SFTP personalizadas sin tocar el código base de los módulos.',
          stack: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Adapter Pattern'],
          metric:
            'Aislamiento 100% garantizado a nivel de base de datos y despliegues modulares controlados por configuración JSONB.',
          metricLabel: 'Impacto en Producción',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'real-estate-crm',
          category: 'PRODUCTO EN PRODUCCIÓN & IA',
          title: 'Plataforma Inmobiliaria y CRM Automatizado',
          tagline:
            'Solución comercial integral con precalificación automatizada de prospectos y sincronización publicitaria.',
          description:
            'Desarrollo de portal web y CRM interno para centralizar la prospección y catálogo de inmuebles. Orquesté un agente conversacional en n8n que interactúa de manera natural para precalificar clientes (presupuesto, ubicación, método de pago) antes de pasarlos a un asesor, complementado con generación de contenido asistida por IA y publicación hacia Meta.',
          stack: ['Next.js 15', 'Supabase', 'n8n', 'Meta Graph API', 'Agentes IA'],
          metric:
            'Ahorro de ~16 horas semanales en tareas operativas manuales y más de 140 clientes potenciales calificados procesados.',
          metricLabel: 'Eficiencia Operativa',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'distributed-voting',
          category: 'SISTEMAS DISTRIBUIDOS & RESILIENCIA',
          title: 'High-Availability Distributed Voting Infrastructure',
          tagline:
            'Arquitectura distribuida tolerante a fallos para procesamiento seguro de votaciones masivas.',
          description:
            'Infraestructura diseñada en Java 11 comunicada a través de middleware ZeroC ICE sobre servidores institucionales independientes. Implementé el patrón Reliable Messaging con persistencia transaccional y reintentos automáticos con UUID único para impedir pérdidas o duplicaciones de votos durante interrupciones en los enlaces.',
          stack: ['Java 11', 'ZeroC ICE', 'Reliable Messaging', 'Sistemas Distribuidos', 'JUnit'],
          metric:
            'Cero pérdida de registros bajo pruebas de estrés de +100.000 votos y recuperación automática tras caídas forzadas de red de 30 segundos.',
          metricLabel: 'Tolerancia a Fallos',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'intelligent-electives',
          category: 'IA APLICADA & RECUPERACIÓN HÍBRIDA',
          title: 'Intelligent Electives Navigation Assistant',
          tagline:
            'Motor conversacional con búsqueda semántica y filtros relacionales para catálogo universitario.',
          description:
            'Diseñado para solucionar las limitaciones de los sistemas RAG puramente vectoriales ante restricciones exactas. Combina embeddings semánticos en pgvector con búsquedas textuales SQL para resolver consultas que cruzan intenciones subjetivas de estudiantes con horarios y prerrequisitos estrictos de más de 120 cursos.',
          stack: ['Python', 'n8n', 'Supabase (pgvector)', 'Hybrid Search', 'LLMs'],
          metric:
            'Precisión consistente en consultas combinadas (tema de interés + restricción de día/hora).',
          metricLabel: 'Precisión RAG Híbrido',
          demoUrl: '#',
          githubUrl: '#',
        },
      ],
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      tagline: 'Construido con Next.js, Tailwind CSS y Framer Motion.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    nav: {
      items: [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      contactCta: 'Contact',
    },
    hero: {
      greeting: "Hey, I'm",
      name: 'Juan David Quintero',
      headline: 'Software Engineer & Builder.',
      subtitle:
        'Transforming business problems into clean, modular, production-ready architectures.',
      badge: 'Software Engineer',
      primaryCta: {
        text: 'See Projects',
        targetId: 'projects',
      },
      secondaryCta: {
        text: 'Download CV',
        url: '/HV_JUAN_DAVID_QUINTERO_EN.pdf',
      },
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/juan-david-quintero-software-engineer-full-stack-automation-ai/',
          icon: 'linkedin',
          ariaLabel: "Juan David Quintero's LinkedIn Profile",
        },
        {
          name: 'Email',
          url: 'mailto:juandavidquintero49@gmail.com',
          icon: 'email',
          ariaLabel: 'Send email to Juan David Quintero',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/573225197962',
          icon: 'whatsapp',
          ariaLabel: 'Direct WhatsApp Chat',
        },
      ],
      profileAlt: 'Juan David Quintero Peña at the Statue of Liberty, NYC',
      sidebarItems: [
        { icon: 'code', label: 'Software Engineer' },
        { icon: 'graduation', label: 'Icesi University' },
        { icon: 'map', label: 'Cali, Colombia' },
        { icon: 'typescript', label: 'TypeScript' },
        { icon: 'puzzle', label: 'Solving Complex Problems' },
        { icon: 'rocket', label: 'Building Scalable Apps' },
        { icon: 'brain', label: 'AI & Automation' },
      ],
      profileCardName: 'Juan David Quintero',
      profileCardRole: 'Software Engineer & Builder',
    },
    about: {
      title: 'About Me',
      manifestoParagraphs: [
        'I do not conceive software development as a mere transcription of requirements into code.',
        'My focus lies in deeply grasping the underlying business challenge, anticipating scalability bottlenecks, and engineering systems that eliminate operational friction.',
        'I specialize in the TypeScript ecosystem (Next.js 15, NestJS), backend in Java, and relational databases, embedding AI workflows only where they unlock tangible, measurable efficiency.',
      ],
    },
    featuredProjects: {
      chip: 'Featured Projects',
      headlineFirst: 'Architected for scale.',
      headlineSecond: 'Built for real-world impact.',
      subtitle:
        'Production architectures backed by proven scalability, multi-tenant isolation, and pragmatic AI automation.',
      links: {
        viewProject: 'Technical Specs',
        viewCode: 'Source Code',
        liveDemo: 'Live Demo',
      },
      projects: [
        {
          id: 'b2b-saas',
          category: 'ARCHITECTURE & SAAS',
          title: 'B2B Multi-Tenant SaaS Automation Platform',
          tagline:
            'Modular operational automation and enterprise management platform without code sprawl.',
          description:
            'Engineered to resolve integration variability in B2B enterprises. Implemented strict tenant isolation through dynamic middleware and PostgreSQL Row Level Security (RLS) policies. Structured Adapter and Strategy patterns to connect REST APIs through custom SFTP batches without touching core modules.',
          stack: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Adapter Pattern'],
          metric:
            '100% database-enforced multi-tenant isolation and modular deployments driven by JSONB config.',
          metricLabel: 'Production Impact',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'real-estate-crm',
          category: 'PRODUCTION PRODUCT & AI',
          title: 'Automated Real Estate & CRM Platform',
          tagline:
            'Comprehensive commercial solution with automated lead qualification and advertising sync.',
          description:
            'Development of public portal and internal CRM centralizing property listings and lead flows. Orchestrated conversational n8n agent for natural lead qualification (budget, location, payment method) before routing to human brokers, with AI-assisted creative generation and Meta Graph sync.',
          stack: ['Next.js 15', 'Supabase', 'n8n', 'Meta Graph API', 'AI Agents'],
          metric:
            '~16 hours saved weekly on manual qualification workflows and 140+ qualified leads processed.',
          metricLabel: 'Operational Efficiency',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'distributed-voting',
          category: 'DISTRIBUTED SYSTEMS & RESILIENCE',
          title: 'High-Availability Distributed Voting Infrastructure',
          tagline:
            'Fault-tolerant distributed architecture for high-concurrency secure ballot processing.',
          description:
            'Java 11 distributed infrastructure leveraging ZeroC ICE RPC middleware across independent institutional servers. Implemented Reliable Messaging pattern with transactional disk persistence and idempotent retry policies with unique UUIDs to prevent dropped or duplicate ballots during network splits.',
          stack: ['Java 11', 'ZeroC ICE', 'Reliable Messaging', 'Distributed Systems', 'JUnit'],
          metric:
            'Zero dropped ballots under stress testing of 100,000+ votes and automated self-healing after 30-second forced network partitions.',
          metricLabel: 'Fault Tolerance',
          demoUrl: '#',
          githubUrl: '#',
        },
        {
          id: 'intelligent-electives',
          category: 'APPLIED AI & HYBRID RETRIEVAL',
          title: 'Intelligent Electives Navigation Assistant',
          tagline:
            'Conversational search engine combining semantic retrieval and relational constraints for academic course catalogs.',
          description:
            'Engineered to overcome pure vector RAG degradation when evaluating hard constraints. Combines pgvector semantic embeddings with relational SQL filtering to satisfy complex student prompts cross-referencing subjective learning interests with strict schedule and prerequisite constraints across 120+ courses.',
          stack: ['Python', 'n8n', 'Supabase (pgvector)', 'Hybrid Search', 'LLMs'],
          metric:
            'Consistent deterministic accuracy on multi-variable queries (interest topic + schedule constraints).',
          metricLabel: 'Hybrid RAG Accuracy',
          demoUrl: '#',
          githubUrl: '#',
        },
      ],
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Crafted with Next.js, Tailwind CSS, and Framer Motion.',
      backToTop: 'Back to top',
    },
  },
};
