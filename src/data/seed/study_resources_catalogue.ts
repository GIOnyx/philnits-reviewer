import { CuratedResource, StudyDomainSection } from '../../types/exam';

export const CURATED_RESOURCES: CuratedResource[] = [
  // --- PROJECT MANAGEMENT & ENGINEERING ECONOMICS ---
  {
    id: 'res-1',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'Integrating Scheduling and Earned Value Management (EVM) Metrics',
    resource_type: 'PDF',
    embed_url: 'https://www.wcu.edu/pmi/2002/Colleg05.pdf',
    summary_of_content: 'A detailed mathematical analysis of Earned Value Management and its integration with the Critical Path Method.',
    badge: 'Core Reading'
  },
  {
    id: 'res-2',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'PERT 21: PERT/CPM for the 21st Century',
    resource_type: 'PDF',
    embed_url: 'http://mba.tuck.dartmouth.edu/pss/Notes/PERT21.pdf',
    summary_of_content: 'Explores the theoretical history and structural differences between the stochastic PERT engine and the deterministic Critical Path Method (CPM).'
  },
  {
    id: 'res-3',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'PMP Formula Cheat Sheet',
    resource_type: 'PDF',
    embed_url: 'https://extnag.tacc.utexas.edu/default.aspx/s38B81/244330/Pmp%20Formula%20Cheat%20Sheet.pdf',
    summary_of_content: 'A high-yield reference sheet for deterministic scheduling models, float calculations, and EVM efficiency indices.',
    badge: 'Cheat Sheet'
  },

  // --- SOFTWARE ENGINEERING & SYSTEM ARCHITECTURES ---
  {
    id: 'lec-1',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '1. Software Products Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/1. Software Products.pdf',
    summary_of_content: 'Engineering software products introductory lecture covering modern software engineering paradigms.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-2',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '2. Agile Software Engineering Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/2. Agile Software Engineering.pdf',
    summary_of_content: 'Covers Scrum, Kanban, iterative development cycles, and user story mapping.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-3',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '3. Features, Scenarios and Stories Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/3. Features, scenarios and stories.pdf',
    summary_of_content: 'Detailed methodology on capturing software requirements through scenarios and user stories.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-4',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '4. Software Architecture Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/4. Software Architecture.pdf',
    summary_of_content: 'Monolithic vs distributed patterns, layered architectures, and design principles.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-5',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '5. Cloud-based Software Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/5. Cloud-based software.pdf',
    summary_of_content: 'Cloud native computing, SaaS, PaaS, IaaS, and scalability fundamentals.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-6',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '6. Microservices Architecture Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/6. Microservices architecture.pdf',
    summary_of_content: 'Decoupled services, API gateways, service discovery, and inter-service communication.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-7',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '7. Security and Privacy Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/7. Security and Privacy.pdf',
    summary_of_content: 'Threat modeling, encryption, authentication, authorization, and secure coding standards.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-8',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '8. Reliable Programming Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/8. Reliable Programming.pdf',
    summary_of_content: 'Error handling, defensive programming, fault tolerance, and software reliability metrics.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-9',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '9. Testing Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/9. Testing.pdf',
    summary_of_content: 'Unit testing, integration testing, test-driven development (TDD), and coverage metrics.',
    badge: 'Lecture PDF'
  },
  {
    id: 'lec-10',
    category: 'Strategy',
    subtopic: 'Software Engineering',
    resource_title: '10. DevOps and Code Management Lecture',
    resource_type: 'PDF',
    embed_url: '/Lectures/10. DevOps and Code Management.pdf',
    summary_of_content: 'CI/CD pipelines, Git workflows, automated deployments, and infrastructure as code.',
    badge: 'Lecture PDF'
  },
  {
    id: 'res-5',
    category: 'Strategy',
    subtopic: 'ITPEC Curriculum',
    resource_title: 'Fundamental Information Technology Engineer Examination Syllabus',
    resource_type: 'PDF',
    embed_url: 'https://www.ipa.go.jp/shiken/syllabus/nl10bi0000007smr-att/youkou_ver5_4.pdf',
    summary_of_content: 'The official outline and curriculum specification for the FE exam governed by the IPA.',
    badge: 'Official'
  },
  {
    id: 'res-6',
    category: 'Strategy',
    subtopic: 'ITPEC Curriculum',
    resource_title: 'ITEE-FE-Exam-Preparation Repository',
    resource_type: 'GitHub Repo',
    embed_url: 'https://github.com/mashukgit/ITEE-FE-Exam-Preparation',
    summary_of_content: 'A curated study plan and question bank tracking past ITPEC/PhilNITS examination questions and solutions.',
    badge: 'Repository'
  },
  {
    id: 'res-7',
    category: 'Strategy',
    subtopic: 'ITPEC Curriculum',
    resource_title: 'FE and IT Exam Changes 2024',
    resource_type: 'Web Article',
    embed_url: 'https://philnits.org/common-body-79/',
    summary_of_content: 'Official breakdown of the syllabus realignment into the modern Subject A and Subject B formats.'
  },

  // --- RELATIONAL DATABASE NORMALIZATION & TRANSACTIONS ---
  {
    id: 'res-8',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Relational Normalization Theory and BCNF Decomposition',
    resource_type: 'PDF',
    embed_url: 'https://www3.cs.stonybrook.edu/~pfodor/courses/CSE532/ch_06_extra.pdf',
    summary_of_content: 'A mathematical walkthrough of calculating minimal covers, 3NF synthesis, and the recursive BCNF decomposition algorithm.'
  },
  {
    id: 'res-9',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Relational Database Design (Silberschatz)',
    resource_type: 'SlideDeck',
    embed_url: 'https://www.db-book.com/slides-dir/PDF-dir/ch28.pdf',
    summary_of_content: 'Comprehensive overview of relational database design, schema quality, and functional dependencies.'
  },
  {
    id: 'res-10',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Normalization for XML Documents',
    resource_type: 'PDF',
    embed_url: 'https://marceloarenas.cl/publications/xnf_tods04.pdf',
    summary_of_content: 'Extends traditional Codd/Boyce-Codd relational normalization paradigms to semi-structured XML data.'
  },
  {
    id: 'res-11',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Transactions and Concurrency II: Locks and Deadlocks',
    resource_type: 'PDF',
    embed_url: 'https://cs186berkeley.net/fa22/resources/static/notes/n12-Xact2.pdf',
    summary_of_content: 'An exhaustive walkthrough of lock managers, Two-Phase Locking (2PL), and lock compatibility matrices.'
  },
  {
    id: 'res-12',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Two-Phase Locking (CMU 15-445)',
    resource_type: 'SlideDeck',
    embed_url: 'https://15445.courses.cs.cmu.edu/spring2026/slides/18-twophaselocking.pdf',
    summary_of_content: 'Deep dive into Strict 2PL, Strong Strict 2PL, and deadlock prevention algorithms like Wait-Die and Wound-Wait.'
  },
  {
    id: 'res-13',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'CMU Database Systems: Crash Recovery & WAL',
    resource_type: 'SlideDeck',
    embed_url: 'https://15445.courses.cs.cmu.edu/fall2025/slides/25-potpourri.pdf',
    summary_of_content: 'Explores the mechanics of Write-Ahead Logging (WAL) under STEAL/NO-FORCE buffer pool management policies.'
  },
  {
    id: 'res-14',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Transaction Processing & ARIES (Duke CPS 116)',
    resource_type: 'PDF',
    embed_url: 'https://courses.cs.duke.edu/fall06/cps116/lectures/23-tx-notes.pdf',
    summary_of_content: 'Explains transaction atomicity, durability, and the three chronological passes of the ARIES recovery protocol.'
  },
  {
    id: 'res-15',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Transaction Server Architectures and System Processes',
    resource_type: 'PDF',
    embed_url: 'https://db-book.com/slides-dir/PDF-dir/ch20.pdf',
    summary_of_content: 'Examines the underlying architecture of transaction servers operating on shared memory structures.'
  },
  {
    id: 'vid-db-1',
    category: 'Technology',
    subtopic: 'Database',
    resource_title: 'Database Normalization & Functional Dependencies Tutorial (1NF, 2NF, 3NF)',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/UrYLYV7WSHM',
    summary_of_content: 'Visual guide to 1NF, 2NF, 3NF, and BCNF normalization steps.',
    badge: 'Video Tutorial'
  },

  // --- NETWORKING: SUBNETTING AND CIDR ---
  {
    id: 'res-16',
    category: 'Technology',
    subtopic: 'Networking',
    resource_title: 'Understanding IP Addressing',
    resource_type: 'PDF',
    embed_url: 'https://www.kiv.zcu.cz/~ledvina/UPS-E/0088-understanding-ip-addressing-tutorial.pdf',
    summary_of_content: 'Details the historical transition from Classful IP scaling problems to Variable Length Subnet Masks (VLSM) and CIDR.'
  },
  {
    id: 'res-17',
    category: 'Technology',
    subtopic: 'Networking',
    resource_title: 'Lecture on IP Addressing and Subnetting',
    resource_type: 'PDF',
    embed_url: 'https://myethiolectures.files.wordpress.com/2015/02/lecture-on-ip-addressing-subnetting.pdf',
    summary_of_content: 'Presents derivations for the 3-layer address hierarchy (network, subnet, host).'
  },
  {
    id: 'res-18',
    category: 'Technology',
    subtopic: 'Networking',
    resource_title: 'Cisco CCNA: IPv4 Addressing and Subnetting',
    resource_type: 'PDF',
    embed_url: 'https://elhacker.info/Cursos/Learning%20Path%20Cisco%20CCNA%20200-301/1.Networking%20Fundamentals/4.IPv4%20Addressing%20Subnetting/IPv4-Addressing-Subnetting.pdf',
    summary_of_content: 'A comprehensive guide on network prefixes, host spaces, and binary calculations for IPv4 networks.'
  },
  {
    id: 'res-19',
    category: 'Technology',
    subtopic: 'Networking',
    resource_title: 'Network Cheat Sheet: IPv4, IPv6, CIDR, and Subnetting',
    resource_type: 'PDF',
    embed_url: 'https://cloudzy.com/wp-content/uploads/Network-Cheat-Sheet-_-IPv4-IPv6-CIDR-and-Subnetting.pdf',
    summary_of_content: 'A fast-reference guide for calculating subnet boundaries, supernetting, and route summarization.'
  },

  // --- COMPUTER ARCHITECTURE & INFORMATION THEORY ---
  {
    id: 'res-20',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Principles of Discrete Applied Mathematics: Hamming Codes',
    resource_type: 'PDF',
    embed_url: 'https://math.mit.edu/~shor/435-LN/Lecture_29.pdf',
    summary_of_content: 'Deep mathematical analysis of classical Hamming codes. Details the exact Generator Matrix and Parity Check Matrix.'
  },
  {
    id: 'res-21',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Information and Entropy: Channel Coding and Parity',
    resource_type: 'PDF',
    embed_url: 'https://ocw.mit.edu/courses/6-050j-information-and-entropy-spring-2008/71667aa5e13663096278c6617fca34e5_MIT6_050JS08_chapter4.pdf',
    summary_of_content: 'Introduces physical bit redundancy algorithms and the theoretical bounds of the Hamming Distance.'
  },
  {
    id: 'res-22',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Coping with Bit Errors using Error Correction Codes (MIT)',
    resource_type: 'PDF',
    embed_url: 'https://ocw.mit.edu/courses/6-02-introduction-to-eecs-ii-digital-communication-systems-fall-2012/1cc286051b660feded4d17650bd21d61_MIT6_02F12_chap05.pdf',
    summary_of_content: 'Analyzes the inefficiency of repetition codes and details the spatial separation required to correct binary vectors.'
  },
  {
    id: 'res-23',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Lecture 19: Error-Correcting Codes—Hamming Codes',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/N81pBt3KUWI',
    summary_of_content: 'MIT video lecture on transmitting information over noisy channels and Hamming error correction.',
    badge: 'Video Tutorial'
  },
  // --- EMBEDDED VIDEO RESOURCES ---
  // Project Management
  {
    id: 'vid-pm-1',
    category: 'Management',
    subtopic: 'Schedule Variance (SV)',
    resource_title: 'Schedule Variance (SV) and Cost Variance (CV) in Earned Value Management',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/btg7rofzUoY',
    summary_of_content: 'Earned Value Management breakdown of schedule and cost variances by projectcubicle.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-pm-2',
    category: 'Management',
    subtopic: 'Schedule Variance (SV)',
    resource_title: 'Cost Variance vs Schedule Variance in Microsoft Project',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/Uca0pS2-Kag',
    summary_of_content: 'Practical tutorial on cost and schedule variance metrics by ITsEasyTraining1st.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-pm-3',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'Project Scheduling - PERT/CPM | Finding Critical Path',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/-TDh-5n90vk',
    summary_of_content: 'Step-by-step PERT/CPM network schedule and critical path calculation by Joshua Emmanuel.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-pm-4',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'Critical Path Method (CPM) Made Simple: A Complete Guide',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/ijZ8AISuYZo',
    summary_of_content: 'Comprehensive and accessible guide to Critical Path Method by PM Aspirant.',
    badge: 'Video Tutorial'
  },
  // Software Engineering
  {
    id: 'vid-se-1',
    category: 'Strategy',
    subtopic: 'Agile & DevOps',
    resource_title: 'What Is Agile Methodology?',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/8eVXTyIZ1Hs',
    summary_of_content: 'Clear conceptual overview of Agile principles and methodologies by Simplilearn.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-se-2',
    category: 'Strategy',
    subtopic: 'Agile & DevOps',
    resource_title: 'DevOps vs Agile - Are they really different?',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/kBKuXEBP7ho',
    summary_of_content: 'Detailed comparison of DevOps and Agile paradigms by in28minutes.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-se-3',
    category: 'Strategy',
    subtopic: 'Microservices',
    resource_title: 'What Are Microservices Really All About?',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/lTAcCNbJ7KE',
    summary_of_content: 'Architectural breakdown of microservices patterns and trade-offs by ByteByteGo.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-se-4',
    category: 'Strategy',
    subtopic: 'System Design',
    resource_title: 'System Design Course – APIs, Databases, Caching, CDNs, Load Balancing',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/C842vFY5kRo',
    summary_of_content: 'Full system design foundations course by freeCodeCamp.org.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-se-5',
    category: 'Strategy',
    subtopic: 'Testing',
    resource_title: 'Software Testing Explained in 100 Seconds',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/u6QfIXgjwGQ',
    summary_of_content: 'Quick overview of unit, integration, and end-to-end testing by Fireship.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-se-6',
    category: 'Strategy',
    subtopic: 'Security',
    resource_title: 'What is Security Testing?',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/qCZ5bw-f-Zo',
    summary_of_content: 'Introduction to security testing concepts and vulnerability assessment by freeCodeCamp Concepts.',
    badge: 'Video Tutorial'
  },
  // Relational Databases
  {
    id: 'vid-db-2',
    category: 'Technology',
    subtopic: '1NF, 2NF, 3NF',
    resource_title: 'Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/GFQaEYEc8_8',
    summary_of_content: 'In-depth normalization walkthrough covering 1NF through 5NF by Decomplexify.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-db-3',
    category: 'Technology',
    subtopic: '1NF, 2NF, 3NF',
    resource_title: 'What is Normalization in SQL?',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/ABwD8IYByfk',
    summary_of_content: 'Structured explanation of normalization fundamentals in SQL by edureka!.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-db-4',
    category: 'Technology',
    subtopic: 'Functional Dependencies',
    resource_title: 'Functional dependency in DBMS',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/dR-jJimWWHA',
    summary_of_content: 'Core tutorial on functional dependency calculation rules by Jenny\'s Lectures CS IT.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-db-5',
    category: 'Technology',
    subtopic: 'Functional Dependencies',
    resource_title: 'Lecture 3: Functional Dependency & Normalization',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/GYHVkvK-tCo',
    summary_of_content: 'Academic lecture on functional dependencies and decomposition by College Wallah.',
    badge: 'Video Tutorial'
  },
  // Transactions & Concurrency
  {
    id: 'vid-tx-1',
    category: 'Technology',
    subtopic: 'Transactions',
    resource_title: 'Transactions and Concurrency Control Patterns',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/onYjxRcToto',
    summary_of_content: 'Expert examination of transaction isolation levels and concurrency control patterns by Vlad Mihalcea.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-tx-2',
    category: 'Technology',
    subtopic: 'Transactions',
    resource_title: 'Transaction and Concurrency Control | Learn DBMS in 8 Days',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/EzGdW4NTTaM',
    summary_of_content: 'Comprehensive DBMS transaction management guide by Riti Kumari.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-tx-3',
    category: 'Technology',
    subtopic: 'Two-Phase Locking',
    resource_title: '2 Phase Locking(2PL) Protocol in Transaction Concurrency Control',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/1pUaEDNLWi4',
    summary_of_content: 'Detailed explanation of 2PL protocols and serializability by Gate Smashers.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-tx-4',
    category: 'Technology',
    subtopic: 'Crash Recovery',
    resource_title: '22: Recovery Phase of ARIES',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/iVBlnYEmHII',
    summary_of_content: 'University lecture on the recovery phase of the ARIES protocol by Immanuel Trummer.',
    badge: 'Video Tutorial'
  },
  // Networking & Subnetting
  {
    id: 'vid-net-1',
    category: 'Technology',
    subtopic: 'CIDR & Subnetting',
    resource_title: 'IP Subnetting from CIDR Notations',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/POPoAjWFkGg',
    summary_of_content: 'Practical guide to calculating IPv4 subnet masks from CIDR notation by Joshua Butcher.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-net-2',
    category: 'Technology',
    subtopic: 'IPv4 Addressing',
    resource_title: 'IPv4 Addressing, CIDR Notation and Subnet Mask',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/G1azmL5-eQI',
    summary_of_content: 'Tutorial on IPv4 addressing schemes and subnet masks by Tech Tutorials with Piyush.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-net-3',
    category: 'Technology',
    subtopic: 'Route Summarization',
    resource_title: 'Supernetting, IP Aggregation, and IP Summarization',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/Q4MArJTbUwk',
    summary_of_content: 'In-depth explanation of route summarization and supernetting by Practical Networking.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-net-4',
    category: 'Technology',
    subtopic: 'Route Summarization',
    resource_title: 'Router Hierarchies and Route Summarization',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/zmxLg4jV0ts',
    summary_of_content: 'Advanced routing and summarization principles by Practical Networking.',
    badge: 'Video Tutorial'
  },
  // Information Theory & Error Correction
  {
    id: 'vid-info-1',
    category: 'Technology',
    subtopic: 'Hamming Codes',
    resource_title: 'But what are Hamming codes? The origin of error correction',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/X8jsijhllIA',
    summary_of_content: 'Visual mathematical intuition for Hamming error-correcting codes by 3Blue1Brown.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-info-2',
    category: 'Technology',
    subtopic: 'Error Correction',
    resource_title: 'Hamming Code | Error Detection',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/1A_NcXxdoCc',
    summary_of_content: 'Step-by-step calculation of parity bits and error correction by Neso Academy.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-info-3',
    category: 'Technology',
    subtopic: 'Channel Coding',
    resource_title: 'Introduction to Channel Coding',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/gr1UpinRpNs',
    summary_of_content: 'Fundamental concepts in channel coding and error control by Dr. Sarika Panwar.',
    badge: 'Video Tutorial'
  },
  {
    id: 'vid-info-4',
    category: 'Technology',
    subtopic: 'Channel Coding',
    resource_title: 'Noisy Channel Theorem | Information Theory',
    resource_type: 'VideoEmbed',
    embed_url: 'https://www.youtube.com/embed/jO2NxbKeIfk',
    summary_of_content: 'Explanation of Shannon capacity and noisy channel theorems by Simon Oz.',
    badge: 'Video Tutorial'
  },

  // --- POWERPOINT SLIDE DECKS ---
  // Project Management & Engineering Economics
  {
    id: 'ppt-pm-1',
    category: 'Management',
    subtopic: 'Critical Path Method',
    resource_title: 'The Critical Path Method (PPTX) – Graham Leach',
    resource_type: 'PDF',
    embed_url: 'https://www.graham-leach.com/SD5953/SD5953-H2-The-Critical-Path-Method.pptx',
    summary_of_content: 'Comprehensive presentation on the Critical Path Method (CPM) and network diagram calculations.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-pm-2',
    category: 'Management',
    subtopic: 'Project Management',
    resource_title: 'Functions of Administration & Project Management (PPT)',
    resource_type: 'PDF',
    embed_url: 'https://nursingppt.wordpress.com/wp-content/uploads/2012/06/function-of-admi-nistration.ppt',
    summary_of_content: 'Overview of administrative functions, organizational structures, and project management principles.',
    badge: 'PowerPoint'
  },

  // Software Engineering & System Architectures
  {
    id: 'ppt-se-1',
    category: 'Strategy',
    subtopic: 'Agile & DevOps',
    resource_title: 'Agile Software Engineering: Agile methods, Scrum, and Extreme Programming (PPTX) – NTPU',
    resource_type: 'PDF',
    embed_url: 'https://web.ntpu.edu.tw/~myday/teaching/1122/SE/1122SE04_Software_Engineering.pptx',
    summary_of_content: 'Lecture slides on Agile methodologies, Scrum ceremonies, and Extreme Programming practices.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-se-2',
    category: 'Strategy',
    subtopic: 'Microservices',
    resource_title: 'Circuit Breakers, Discovery, and API Gateways in Microservices (PPTX) – CCU',
    resource_type: 'PDF',
    embed_url: 'https://mainlab.cs.ccu.edu.tw/presentation/ppt/20201005_presentation.pptx',
    summary_of_content: 'Advanced architecture presentation on resilient microservices design patterns.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-se-3',
    category: 'Strategy',
    subtopic: 'Testing',
    resource_title: 'Object-Oriented Software Testing & Project Management (PPTX) – DePaul University',
    resource_type: 'PDF',
    embed_url: 'https://condor.depaul.edu/dgrant2/360/powerpt/ch12.pptx',
    summary_of_content: 'Detailed slide deck covering software testing strategies and quality assurance frameworks.',
    badge: 'PowerPoint'
  },

  // Relational Database Normalization Theory
  {
    id: 'ppt-db-1',
    category: 'Technology',
    subtopic: 'BCNF Decomposition',
    resource_title: 'Schema Refinement and Normalization (PPT) – UC Berkeley',
    resource_type: 'PDF',
    embed_url: 'https://dsf.berkeley.edu/dbcourse/lecs/19Norm2.ppt',
    summary_of_content: 'UC Berkeley lecture slides on schema refinement, functional dependencies, 3NF, and BCNF.',
    badge: 'PowerPoint'
  },

  // Transaction Management & Concurrency Control
  {
    id: 'ppt-tx-1',
    category: 'Technology',
    subtopic: 'Two-Phase Locking',
    resource_title: 'Chapter 14: Concurrency Control & Two-Phase Locking (PPT) – University of Amsterdam',
    resource_type: 'PDF',
    embed_url: 'https://staff.fnwi.uva.nl/y.venema/teaching/rdb/ppt-files/ch16.ppt',
    summary_of_content: 'Academic presentation covering transaction serializability and two-phase locking protocols.',
    badge: 'PowerPoint'
  },

  // Networking Architecture: Subnetting and CIDR
  {
    id: 'ppt-net-1',
    category: 'Technology',
    subtopic: 'CIDR & Subnetting',
    resource_title: 'DHCP, NAT, and Subnetting Architecture (PPTX) – NYCU',
    resource_type: 'PDF',
    embed_url: 'https://people.cs.nycu.edu.tw/~wangth/course/netadm/slides/02_DHCP_NAT.pptx',
    summary_of_content: 'Network administration lecture slides on DHCP, Network Address Translation, and Subnetting.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-net-2',
    category: 'Technology',
    subtopic: 'IPv4 Addressing',
    resource_title: 'Lookups, Classification, and IP Addressing (PPT) – HKUST',
    resource_type: 'PDF',
    embed_url: 'https://cse.hkust.edu.hk/~hamdi/Class/COMP680E/Notes-06/IP-Addressing.ppt',
    summary_of_content: 'Detailed presentation on IP address classes, packet forwarding, and routing lookups.',
    badge: 'PowerPoint'
  },

  // Information Theory and Error-Correcting Codes
  {
    id: 'ppt-info-1',
    category: 'Technology',
    subtopic: 'Hamming Codes',
    resource_title: 'Error Correcting Codes and Hamming Code Theory (PPT) – Duke University',
    resource_type: 'PDF',
    embed_url: 'https://courses.cs.duke.edu/spring16/compsci590.6/ecc1.ppt',
    summary_of_content: 'Duke University lecture on linear block codes, error detection, and Hamming codes.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-info-2',
    category: 'Technology',
    subtopic: 'Error Correction',
    resource_title: 'Games, Hats, and Codes (PPT) – Williams College',
    resource_type: 'PDF',
    embed_url: 'https://web.williams.edu/Mathematics/sjmiller/public_html/342/handouts/GamesHatsCodes_MBernstein_SUMS.ppt',
    summary_of_content: 'Mathematical presentation on error-correcting codes through combinatorial puzzle formulations.',
    badge: 'PowerPoint'
  },

  // Core Study Topics (Operating Systems & Memory)
  {
    id: 'ppt-os-1',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Demand Paging and Page Replacement (PPTX) – University of Waterloo',
    resource_type: 'PDF',
    embed_url: 'https://ece.uwaterloo.ca/~smzahedi/crs/se350/slides/12-demand-paging.pptx',
    summary_of_content: 'University lecture on virtual memory, demand paging, and page replacement algorithms.',
    badge: 'PowerPoint'
  },
  {
    id: 'ppt-os-2',
    category: 'Technology',
    subtopic: 'Computer Architecture',
    resource_title: 'Memory Hierarchy and Virtual Memory (PPSX) – Indian Institute of Science',
    resource_type: 'PDF',
    embed_url: 'http://cds.iisc.ac.in/faculty/simmhan/SE292/lectures/06-MemoryHierarchy.ppsx',
    summary_of_content: 'IISc presentation on multi-level memory hierarchies and virtual memory management.',
    badge: 'PowerPoint'
  }
];

export const STUDY_DOMAINS: StudyDomainSection[] = [
  {
    id: 'project-mgmt',
    title: 'Project Management and Engineering Economics',
    description: 'Master project planning, Critical Path Method (CPM), PERT stochastic estimates, float calculations, and Earned Value Management (EVM) variances.',
    iconName: 'Briefcase',
    widgetType: 'evm',
    subtopics: ['Project Management', 'Schedule Variance (SV)', 'Cost Variance (CV)', 'Critical Path Method']
  },
  {
    id: 'software-eng',
    title: 'Software Engineering and System Architectures',
    description: 'Explore modern software engineering principles, Agile methodologies, microservices, DevOps practices, and architectural design patterns.',
    iconName: 'Code',
    subtopics: ['Software Engineering', 'Agile & DevOps', 'Microservices', 'System Design', 'Testing', 'Security']
  },
  {
    id: 'relational-db',
    title: 'Relational Database Normalization Theory',
    description: 'Understand functional dependencies, Armstrong axioms, minimal covers, and systematic decomposition from 1NF through BCNF.',
    iconName: 'Database',
    widgetType: 'normalization',
    subtopics: ['Database', '1NF, 2NF, 3NF', 'BCNF Decomposition', 'Functional Dependencies', 'XML Documents']
  },
  {
    id: 'transaction-mgmt',
    title: 'Transaction Management and Concurrency Control',
    description: 'Study ACID properties, Two-Phase Locking (2PL), deadlock prevention (Wait-Die, Wound-Wait), Write-Ahead Logging (WAL), and ARIES recovery.',
    iconName: 'Layers',
    subtopics: ['Transactions', 'Concurrency Control', 'Two-Phase Locking', 'Crash Recovery', 'Database']
  },
  {
    id: 'networking-cidr',
    title: 'Networking Architecture: Subnetting and CIDR',
    description: 'Calculate IP addresses, network prefixes, subnet masks, and host capacities using Variable Length Subnet Masking (VLSM) and CIDR notation.',
    iconName: 'Globe',
    widgetType: 'subnet',
    subtopics: ['Networking', 'CIDR & Subnetting', 'IPv4 Addressing', 'Route Summarization']
  },
  {
    id: 'info-theory',
    title: 'Information Theory and Error-Correcting Codes',
    description: 'Examine channel capacity, entropy, Hamming distance, parity check matrices, and single-error correcting Hamming codes.',
    iconName: 'Cpu',
    widgetType: 'hamming',
    subtopics: ['Computer Architecture', 'Hamming Codes', 'Error Correction', 'Channel Coding']
  }
];
