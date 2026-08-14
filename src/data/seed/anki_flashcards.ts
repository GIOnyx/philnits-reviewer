import { AnkiFlashcard } from '../../types/exam';

export const SEED_ANKI_FLASHCARDS: AnkiFlashcard[] = [
  {
    id: 'anki-001',
    topic: 'Computer Systems',
    front: 'What is the primary difference between SRAM and DRAM?',
    back: 'SRAM (Static RAM) uses flip-flops, is faster, does not require refreshing, and is used for CPU cache. DRAM (Dynamic RAM) uses capacitors, requires continuous refreshing, is denser, and is used for main memory.'
  },
  {
    id: 'anki-002',
    topic: 'Basic Theory of Information',
    front: 'What is the difference between RGB and CMYK color representations?',
    back: 'RGB (Red, Green, Blue) is an additive color model used for digital displays (combines to white). CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used for physical printing (combines to dark brown/black).'
  },
  {
    id: 'anki-003',
    topic: 'Networking',
    front: 'Which OSI layer handles routing, logical IP addressing, and packet forwarding?',
    back: 'Network Layer (Layer 3). Example protocols: IP, ICMP, ARP, OSPF.'
  },
  {
    id: 'anki-004',
    topic: 'Information Security',
    front: 'What is the key characteristic of a Cryptographic Salt in password hashing?',
    back: 'A salt is a random string added to a password prior to hashing to defend against rainbow table attacks and ensure identical passwords produce unique hash digests.'
  },
  {
    id: 'anki-005',
    topic: 'Databases',
    front: 'What is the difference between INNER JOIN and LEFT OUTER JOIN in SQL?',
    back: 'INNER JOIN returns only rows with matching values in both tables. LEFT OUTER JOIN returns all rows from the left table and matching rows from the right table (filling NULL for unmatched right-side attributes).'
  },
  {
    id: 'anki-006',
    topic: 'Software Development',
    front: 'In Jackson / Warnier module design, what are the three basic structure types used to map data structures to program structures?',
    back: '1. Sequence (ordered execution)\n2. Selection (conditional branching)\n3. Iteration (repetition/looping)'
  },
  {
    id: 'anki-007',
    topic: 'Operating Systems',
    front: 'What is a Deadlock and what are its four necessary conditions?',
    back: 'A state where a set of processes are blocked waiting for resources held by each other. Conditions: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait.'
  },
  {
    id: 'anki-008',
    topic: 'IT Service Management',
    front: 'What is the purpose of a Service Level Agreement (SLA)?',
    back: 'A formal negotiated agreement between an IT service provider and a customer defining performance metrics (e.g., uptime, response times, throughput) and consequences of non-compliance.'
  }
];
