import { SubjectAQuestion } from '../../types/exam';

export const SEED_SUBJECT_A_QUESTIONS: SubjectAQuestion[] = [
  {
    id: 'am-2024-q01',
    category: 'Technology',
    subdomain: 'Basic Theory of Information',
    examYear: 2024,
    questionText: 'An 8-bit digital audio signal is sampled at 44.1 kHz in stereo (2 channels). What is the approximate uncompressed data rate in kilobytes per second (KB/s)?',
    options: [
      '88.2 KB/s',
      '176.4 KB/s',
      '352.8 KB/s',
      '705.6 KB/s'
    ],
    correctIndex: 0,
    explanation: 'Calculation: Data rate = Sample Rate × Bits per sample × Channels = 44,100 Hz × 8 bits × 2 = 705,600 bits/s. Converting to bytes per second: 705,600 / 8 = 88,200 B/s = 88.2 KB/s.',
    difficultyWeight: 1.0
  },
  {
    id: 'am-2024-q02',
    category: 'Technology',
    subdomain: 'Computer Systems',
    examYear: 2024,
    questionText: 'In a 5-stage CPU pipeline (Fetch, Decode, Execute, Memory Access, Write Back), each stage takes 1 clock cycle (10 ns). Assuming no pipeline hazards, how long does it take to execute 100 instructions?',
    options: [
      '1040 ns',
      '5000 ns',
      '1000 ns',
      '500 ns'
    ],
    correctIndex: 0,
    explanation: 'Formula for execution time: Time = (k + n - 1) × Clock Cycle Time, where k = 5 stages, n = 100 instructions, Cycle = 10 ns. Time = (5 + 100 - 1) × 10 ns = 104 × 10 ns = 1040 ns.',
    difficultyWeight: 1.2
  },
  {
    id: 'am-2024-q03',
    category: 'Technology',
    subdomain: 'Basic Software and OS',
    examYear: 2024,
    questionText: 'Which virtual memory page replacement algorithm replaces the page that has not been referenced for the longest period of time?',
    options: [
      'FIFO (First-In, First-Out)',
      'LRU (Least Recently Used)',
      'LFU (Least Frequently Used)',
      'OPT (Optimal Replacement)'
    ],
    correctIndex: 1,
    explanation: 'LRU (Least Recently Used) keeps track of page usage over time and evicts the page that has not been referenced for the longest duration.',
    difficultyWeight: 1.0
  },
  {
    id: 'am-2024-q04',
    category: 'Technology',
    subdomain: 'Technical Elements (Databases)',
    examYear: 2024,
    questionText: 'In relational database design, which normal form (NF) is satisfied if all non-key attributes are fully functionally dependent on the primary key (eliminating partial dependencies)?',
    options: [
      'First Normal Form (1NF)',
      'Second Normal Form (2NF)',
      'Third Normal Form (3NF)',
      'Boyce-Codd Normal Form (BCNF)'
    ],
    correctIndex: 1,
    explanation: '2NF requires 1NF compliance and that all non-prime attributes depend fully on the primary key, eliminating partial dependencies.',
    difficultyWeight: 1.1
  },
  {
    id: 'am-2024-q05',
    category: 'Technology',
    subdomain: 'Information Security',
    examYear: 2024,
    questionText: 'Which public-key cryptographic operation ensures non-repudiation and authenticity of a transmitted document?',
    options: [
      'Encrypting the message with the sender\'s public key',
      'Encrypting the hash of the message with the sender\'s private key',
      'Encrypting the message with the receiver\'s private key',
      'Hashing the message with a secret symmetric key'
    ],
    correctIndex: 1,
    explanation: 'A digital signature is created by hashing the message and encrypting the hash with the sender\'s private key. Anyone with the sender\'s public key can verify it.',
    difficultyWeight: 1.0
  },
  {
    id: 'am-2024-q06',
    category: 'Management',
    subdomain: 'Project Management',
    examYear: 2024,
    questionText: 'In a PERT network diagram, Activity A (duration 3 days) leads to Activity B (4 days) and Activity C (6 days). Both B and C must finish before Activity D (2 days) can start. What is the critical path length?',
    options: [
      '9 days',
      '11 days',
      '13 days',
      '15 days'
    ],
    correctIndex: 1,
    explanation: 'Path 1: A -> B -> D = 3 + 4 + 2 = 9 days. Path 2: A -> C -> D = 3 + 6 + 2 = 11 days. The critical path is the longest path, which is 11 days.',
    difficultyWeight: 1.1
  },
  {
    id: 'am-2024-q07',
    category: 'Management',
    subdomain: 'IT Service Management',
    examYear: 2024,
    questionText: 'According to ITIL framework guidelines, what is the primary objective of Incident Management?',
    options: [
      'To eliminate the root cause of recurring technical errors',
      'To restore normal service operation as quickly as possible and minimize adverse impact',
      'To approve and schedule infrastructure changes with minimal risk',
      'To negotiate service level agreements (SLAs) with customers'
    ],
    correctIndex: 1,
    explanation: 'Incident Management focuses on rapid restoration of normal service operation, whereas Problem Management focuses on finding root causes.',
    difficultyWeight: 1.0
  },
  {
    id: 'am-2024-q08',
    category: 'Strategy',
    subdomain: 'Business Strategy',
    examYear: 2024,
    questionText: 'Which strategic analysis framework evaluates an organization by examining Strengths, Weaknesses, Opportunities, and Threats?',
    options: [
      'Porter\'s Five Forces',
      'SWOT Analysis',
      'PPM (Product Portfolio Management)',
      'BSC (Balanced Scorecard)'
    ],
    correctIndex: 1,
    explanation: 'SWOT analysis maps internal Strengths & Weaknesses alongside external Opportunities & Threats.',
    difficultyWeight: 1.0
  }
];
