export interface StudyTopic {
  id: string;
  domainId: string;
  domainName: string;
  title: string;
  summary: string;
  takeaways: string[];
  markdownContent: string;
  formula?: string;
  codeExample?: {
    language: string;
    code: string;
    annotation?: string;
  };
}

export const SEED_STUDY_TOPICS: StudyTopic[] = [
  {
    id: 'discrete-math',
    domainId: 'theory',
    domainName: 'Basic Theory of Information',
    title: 'Information Theory, Radix & IP Subnetting',
    summary: 'Exhaustive textbook review of base-conversions, signed 2\'s complement operations, Nyquist sampling frequencies, and CIDR subnet divisions.',
    takeaways: [
      'Radix (Base): Defines the number of unique digits. Value is determined by position (weights represented as Radix^position).',
      '2\'s Complement Shortcut: Scan from right to left, keep the first \'1\' and all preceding \'0\'s unchanged, then flip all remaining bits.',
      'Nyquist Sampling Rate: Fs >= 2 * Fmax. If sampling is too slow, aliasing distortion occurs.',
      'CIDR Network Boundaries: Network Address = IP AND Subnet Mask. Broadcast Address = Network Address OR NOT Subnet Mask.'
    ],
    markdownContent: `
### 1. Radix Conversion Mechanics
A number in base $r$ (radix) is represented as a sequence of digits:
$$N = (d_{n-1}d_{n-2}\\dots d_0.d_{-1}\\dots d_{-m})_r$$
Its equivalent decimal value is:
$$\\text{Value} = \\sum_{i=-m}^{n-1} d_i \\cdot r^i$$

#### Decimal to Binary and Hexadecimal
- **Method**: Successive Division. Divide the decimal value by the target base, noting the remainders. Read remainders in reverse order (bottom-to-top) to construct the result.
- **Conversion to Hex**: Group bits by 4 from the decimal boundary:
  - \`0010 1111\` $\\rightarrow$ \`2\` and \`F\` $\\rightarrow$ \`0x2F\`

---

### 2. Signed Integer Representation: 2's Complement
To represent signed negative values on CPUs without adding complex subtraction hardware:
1. Write the positive representation of the number in binary.
2. Invert all bits (0 $\\rightarrow$ 1, 1 $\\rightarrow$ 0) to get the 1's complement.
3. Add 1 to the result to get the 2's complement.

#### Why 2's Complement is mathematically elegant:
It allows addition and subtraction to be processed through a single adder circuit:
$$A - B = A + (-B) = A + (\\sim B + 1)$$

---

### 3. IP Subnetting & Network Boundaries
An IPv4 address contains 32 bits. Under CIDR notation (e.g. \`192.168.1.100/26\`):
- **Network ID Mask**: The first 26 bits are set to 1, remaining 6 bits to 0. Mask: \`255.255.255.192\` (since \`11000000_2 = 192\`).
- **Network IP**: Derived by bitwise ANDing the IP with the Subnet Mask.
- **Broadcast IP**: Derived by setting all host bits (the remaining 6 bits) to 1.
- **Assignable Hosts**: $2^{\\text{HostBits}} - 2$ (excluding the network ID and the broadcast ID).

---

### 4. Nyquist-Shannon Sampling Theorem
To convert analog sound to digital data:
1. **Sampling Frequency ($F_s$)**: Must be at least twice the maximum frequency component ($f_{max}$) present in the analog signal:
   $$F_s \\geq 2 \\cdot f_{max}$$
2. **Data Rate**:
   $$\\text{Data Rate (Bytes/s)} = \\frac{\\text{Sampling Rate (Hz)} \\times \\text{Resolution (Bits)} \\times \\text{Channels}}{8}$$
`,
    formula: 'Assignable Host Range = [Network Address + 1] to [Broadcast Address - 1]'
  },
  {
    id: 'cpu-pipeline',
    domainId: 'systems',
    domainName: 'Computer Systems',
    title: '5-Stage CPU Pipelines, Hazards & Memory Access Time',
    summary: 'Textbook analysis of clock-cycle pipelines, hazard bubbles, branch penalties, and cache memory hierarchies.',
    takeaways: [
      'Pipeline Stages: Fetch (IF), Decode (ID), Execute (EX), Memory (MEM), and Write Back (WB).',
      'Structural Hazard: Multiple instructions require the same hardware asset (e.g. single port memory conflict) simultaneously.',
      'Data Hazard: An instruction depends on register values not yet written back by previous instructions (solved by Forwarding or Stalls).',
      'Control Hazard: Conditional branches modify the program counter, causing pipeline flushes.'
    ],
    markdownContent: `
### 1. 5-Stage Pipeline Execution model
CPU Pipelining splits instruction execution into five concurrent steps:
1. **IF (Instruction Fetch)**: Read instruction from instruction cache.
2. **ID (Instruction Decode)**: Decode opcode and read register values.
3. **EX (Execute)**: Run ALU operations or calculate branch target.
4. **MEM (Memory Access)**: Read/write memory for load/store commands.
5. **WB (Write Back)**: Write execution results back to register file.

#### Mathematical Execution Time:
Assuming a pipeline with $k$ stages, executing $N$ instructions with a clock cycle time $T_{cycle}$:
$$\\text{Total Time} = (k + N - 1) \\cdot T_{cycle}$$
*(Assuming no stalls/hazards).*

---

### 2. Caching Hierarchy & Hit Ratios
Memory access speed is optimized by inserting high-speed Cache memory (SRAM) between the CPU and Main Memory (DRAM):
- **Cache Hit Ratio ($h$)**: The percentage of memory requests resolved in cache.
- **Cache Access Time ($T_c$)**: Fast access time.
- **Main Memory Access Time ($T_m$)**: Slower access time.
- **Average Memory Access Time ($T_{avg}$)**:
  $$T_{avg} = h \\cdot T_c + (1 - h) \\cdot T_m$$
`,
    formula: 'T_avg = (HitRate * T_cache) + ((1 - HitRate) * T_memory)'
  },
  {
    id: 'db-normalization',
    domainId: 'databases',
    domainName: 'Technical Elements (Databases)',
    title: 'Database Normalization & Paging Replacement',
    summary: 'Deep analysis of relational database anomalies, functional dependencies (1NF-3NF), and virtual memory paging replacement.',
    takeaways: [
      'Update Anomalies occur when redundant data is updated in one location but not another, leaving inconsistencies.',
      'Partial Dependency: A non-key column depends on only part of a composite primary key. Violates 2NF.',
      'Transitive Dependency: X -> Y and Y -> Z, where Z is a non-key column depending on another non-key column Y. Violates 3NF.',
      'Page Fault: Occurs when a page requested by the CPU is not present in physical RAM frames, requiring disk fetching.'
    ],
    markdownContent: `
### 1. Database Normalization Theory
Normalization structures tables to eliminate redundancy and prevent insert/update/delete anomalies.

#### Functional Dependencies
- **Full Dependency**: $X \\rightarrow Y$, meaning $Y$ is determined by the complete primary key $X$.
- **Partial Dependency**: $X \\rightarrow Y$ where $X$ is composite, and $Y$ depends on only a subset of $X$.
- **Transitive Dependency**: $X \\rightarrow Y$ and $Y \\rightarrow Z$, meaning $Z$ is determined by $X$ *via* $Y$.

#### Normal Form (NF) Rules:
- **1NF**: Ensure cells are atomic (no arrays or comma-separated fields).
- **2NF**: Satify 1NF + remove partial functional dependencies.
- **3NF**: Satisfy 2NF + remove transitive functional dependencies.

---

### 2. Virtual Memory & Page Replacement
Operating Systems map virtual addresses to physical RAM frames:
- **Page Fault**: Triggered when the requested page is not in RAM.
- **FIFO (First-In, First-Out)**: Evicts the page that has been in memory the longest.
- **LRU (Least Recently Used)**: Evicts the page that has not been referenced for the longest duration of time.
`,
    formula: 'Miss Ratio = Page Faults / Total Page Requests'
  },
  {
    id: 'network-security',
    domainId: 'networks',
    domainName: 'Networking & Security',
    title: 'OSI 7-Layers, Encryption & Digital Signatures',
    summary: 'Textbook analysis of OSI encapsulation, TCP/UDP structures, public-key cryptosystems, and digital signatures.',
    takeaways: [
      'OSI Encapsulation: Application (Data) -> Transport (Segment) -> Network (Packet) -> Data Link (Frame) -> Physical (Bits).',
      'Asymmetric Cryptography: Private Key is kept secret; Public Key is distributed. Solving key exchange issues.',
      'Digital Signature Mechanics: Sender encrypts message digest (hash) with their own Private Key.',
      'Non-Repudiation: Proves the sender transmitted the message since only their Public Key can decrypt the signature.'
    ],
    markdownContent: `
### 1. OSI 7-Layer Encapsulation Walkthrough
Network communication encapsulates protocol headers:
- **L7: Application**: Interface (HTTP, SMTP, DNS).
- **L4: Transport**: End-to-end reliability (TCP/UDP, port mappings).
- **L3: Network**: Routing and addressing (IP, packets).
- **L2: Data Link**: Local framing and hardware addressing (MAC, switches).
- **L1: Physical**: Electrical signals (cables, bits).

---

### 2. Cryptographic Security Standards
- **Confidentiality (Asymmetric Encryption)**:
  - Sender encrypts data with **Receiver's Public Key**.
  - Only **Receiver's Private Key** can decrypt it.
- **Authenticity (Digital Signature)**:
  - Sender hashes message and encrypts the hash with **Sender's Private Key**.
  - Receiver decrypts using **Sender's Public Key** and compares it to the message hash.
  - Proves the message was sent by the owner of the key pair (**Non-repudiation**).
`
  },
  {
    id: 'project-management',
    domainId: 'management',
    domainName: 'Project Management',
    title: 'PERT/CPM Network Diagrams & Critical Path Analysis',
    summary: 'Textbook review of activity-on-node schedules, early/late finishes, slack times, and project acceleration techniques.',
    takeaways: [
      'Critical Path: The sequence of dependent tasks with zero Slack Time. Determines the minimum project duration.',
      'Forward Pass: Computes Early Start (ES) and Early Finish (EF) from left to right.',
      'Backward Pass: Computes Late Start (LS) and Late Finish (LF) from right to left.',
      'Slack (Float) Time: LS - ES = LF - EF. Delaying a float task within its slack limit does not delay the project.'
    ],
    markdownContent: `
### 1. Critical Path Method (CPM) Calculations
PERT diagrams model project schedules using Activity-on-Node networks:
- **Duration ($d$)**: Time required to complete a task.
- **Predecessor**: Task that must finish before this task can start.

#### Mathematical Rules for Scheduling:

##### 1. Forward Pass (Left to Right)
- **Early Start (ES)**:
  $$ES_i = \\max(EF_{\\text{predecessors}})$$
- **Early Finish (EF)**:
  $$EF_i = ES_i + d_i$$

##### 2. Backward Pass (Right to Left)
- **Late Finish (LF)**:
  $$LF_i = \\min(LS_{\\text{successors}})$$
- **Late Start (LS)**:
  $$LS_i = LF_i - d_i$$

##### 3. Slack Time (Float)
The slack of task $i$ determines how long it can be delayed without affecting successor starts:
$$\\text{Slack}_i = LS_i - ES_i = LF_i - EF_i$$
`
  }
];
