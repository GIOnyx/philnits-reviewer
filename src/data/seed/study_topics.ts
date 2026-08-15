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
    title: 'Discrete Mathematics, Logic Gates & Radix Conversion',
    summary: 'First-principles review of positional base systems, 2\'s complement arithmetic, Boolean algebra logic gates, and Nyquist/Shannon communication capacities.',
    takeaways: [
      'Radix Representation: A number in base r represents positional weights as powers of r. Decimal values are derived via sum of digits multiplied by r^position.',
      '2\'s Complement Negation: flip all bits and add 1. Subtraction A - B is calculated in ALU hardware as addition: A + (~B + 1) to eliminate subtraction circuitry.',
      'Logic Gates & ALUs: AND, OR, NOT, XOR, and NAND. A Half Adder yields Sum = A XOR B, Carry = A AND B.',
      'Nyquist Sampling Rate: Fs >= 2 * Fmax. If Fs is below this threshold, signal folding occurs, resulting in irreversible aliasing.',
      'Shannon Capacity: C = B * log2(1 + SNR). Restricts maximum error-free transmission rate over noisy channels.'
    ],
    markdownContent: `
### 1. Radix Conversion Mechanics & Non-Terminating Fractions
A positional number system in base $r$ represents any real number as:
$$N = (d_{n-1}d_{n-2}\\dots d_0.d_{-1}d_{-2}\\dots d_{-m})_r$$
The decimal equivalent is derived via the weighted expansion:
$$\\text{Value} = \\sum_{i=-m}^{n-1} d_i \\cdot r^i$$

#### Successive Multiplication for Fractions
To convert a decimal fraction to binary, multiply the fractional part by 2. The integer part of the product is the binary digit. Repeat with the remaining fraction.
- **Example**: Convert $0.1_{10}$ to binary:
  - $0.1 \\times 2 = 0.2 \\rightarrow 0$
  - $0.2 \\times 2 = 0.4 \\rightarrow 0$
  - $0.4 \\times 2 = 0.8 \\rightarrow 0$
  - $0.8 \\times 2 = 1.6 \\rightarrow 1$
  - $0.6 \\times 2 = 1.2 \\rightarrow 1$ (loop repeats $0.2 \\rightarrow 0.4 \\rightarrow 0.8 \\rightarrow 1.6$)
  - Result: $0.0001100110011\\dots_2$ (a non-terminating recurring fraction).

[[VISUALIZER: RadixSandbox]]

---

### 2. Digital Logic Circuits & Logic Gates
CPU Arithmetic Logic Units (ALUs) utilize combinational logic gates to execute operations.
- **AND** ($A \\land B$): Output is 1 if both inputs are 1.
- **OR** ($A \\lor B$): Output is 1 if at least one input is 1.
- **XOR** ($A \\oplus B$): Output is 1 if inputs differ. Mathematically represents single-bit addition without carry: $A \\oplus B = (A \\land \\neg B) \\lor (\\neg A \\land B)$.
- **NAND** ($\\neg(A \\land B)$): Universal gate. Any Boolean function can be constructed using only NAND gates.

[[VISUALIZER: LogicGatePanel]]

:::deep-dive Half Adder vs Full Adder Architecture
A **Half Adder** takes two bits $A$ and $B$, producing:
- $\\text{Sum} = A \\oplus B$
- $\\text{CarryOut} = A \\land B$
A **Full Adder** incorporates a carry-in ($C_{in}$), producing:
- $\\text{Sum} = A \\oplus B \\oplus C_{in}$
- $\\text{CarryOut} = (A \\land B) \\lor (C_{in} \\land (A \\oplus B))$
To add $N$-bit numbers, $N$ full adders are cascaded (Ripple Carry Adder), introducing propagation delays proportional to $N$.
:::

---

### 3. Signed Integer Arithmetic: 2's Complement
To represent negative numbers without separate subtraction circuits, modern CPUs utilize 2's complement.
1. Write the positive representation of the number in binary.
2. Invert all bits (1's complement).
3. Add 1 to the least significant bit (2's complement).

$$\\text{Negation Formula}: -X = \\sim X + 1$$

Subtracting $B$ from $A$ is processed in hardware as:
$$A - B = A + (-B) = A + (\\sim B + 1)$$

:::deep-dive Signed Arithmetic Overflow Edge Case
An **overflow** occurs when adding two numbers of the same sign produces a result with the opposite sign. In binary, overflow is detected by checking the Carry-In and Carry-Out of the sign bit:
$$\\text{Overflow} = C_{in} \\oplus C_{out}$$
If the carry into the sign bit does not match the carry out of the sign bit, the arithmetic result is corrupted.
:::

---

### 4. Nyquist Rate & Shannon Channel Capacity
Analog-to-digital converters (ADC) must satisfy the **Nyquist-Shannon Sampling Theorem**:
$$f_s \\geq 2 \\cdot f_{max}$$
If sampling is done below the Nyquist rate, frequencies fold back into the spectrum, causing **aliasing**.

To calculate the maximum theoretical data rate over a noisy communication channel, we use **Shannon's Theorem**:
$$C = B \\log_2\\left(1 + \\text{SNR}\\right)$$
Where $C$ is capacity in bits/second, $B$ is bandwidth in Hertz, and $\\text{SNR}$ is the Signal-to-Noise ratio (represented as power ratio, not decibels. Note: $\\text{SNR}_{dB} = 10 \\log_{10}(\\text{SNR})$).

---

### 5. Euclidean Algorithm & Traversal Walkthroughs
In the Afternoon session, you will be asked to manually trace algorithms. Below are two interactive tracers.

[[WALKTHROUGH: EuclideanGCD]]

[[WALKTHROUGH: TreeTraversal]]

:::deep-dive Common Failure Modes / Exam Traps
- **Decimals to Binary**: Converting fractions that do not terminate in binary leads to rounding errors. E.g., $0.1_{10}$ cannot be represented exactly in IEEE 754 float, resulting in arithmetic drift.
- **Shannon Capacity SNR Units**: The exam often provides SNR in decibels ($dB$). You MUST convert decibels to a ratio before using Shannon's equation: $\\text{SNR} = 10^{\\frac{\\text{SNR}_{dB}}{10}}$.
:::
`,
    formula: 'C = B * log2(1 + SNR)'
  },
  {
    id: 'cpu-pipeline',
    domainId: 'systems',
    domainName: 'Computer Systems',
    title: 'Processor Pipeline Architectures, Hazard Mitigation & Cache EAT',
    summary: 'Hardware-level analysis of instruction pipelining, pipeline hazard categories, CPI stall mathematics, and multi-level caching average memory access times.',
    takeaways: [
      'Pipeline Stages: Fetch (IF), Decode (ID), Execute (EX), Memory (MEM), and Write-Back (WB) running concurrently.',
      'Pipeline Hazards: Structural (hardware port conflicts), Data (instruction dependencies like RAW), and Control (branch instruction delays).',
      'CPI stalls: Stalls block execution. Effective CPI = Ideal CPI + Stall Cycles per Instruction. Decreases throughput.',
      'Speedup Ratio: S = (N * k) / (k + N - 1) * (1 / (1 + stall_rate)). Measures efficiency of pipeline over single cycle execution.',
      'Average Access Time (EAT): EAT = H * Tc + (1 - H) * Tm. Adding caches (SRAM) bridges the CPU-RAM speed gap.'
    ],
    markdownContent: `
### 1. 5-Stage CPU Pipeline Execution
Modern CPUs execute instructions by overlapping stages:
1. **IF (Instruction Fetch)**: Retrieve instruction from the instruction cache.
2. **ID (Instruction Decode)**: Decode instruction and read source registers from register file.
3. **EX (Execute)**: Perform ALU calculations, address computation, or branch target calculation.
4. **MEM (Memory Access)**: Read or write data to data cache (only for Load/Store instructions).
5. **WB (Write Back)**: Write the execution or loaded result back to register file.

Without pipelining, execution time for $N$ instructions on a $k$-stage processor is $T = N \\cdot k \\cdot T_{cycle}$. 
With pipelining, the ideal time is:
$$\\text{Time}_{ideal} = (k + N - 1) \\cdot T_{cycle}$$

[[VISUALIZER: CpuPipelineVisualizer]]

---

### 2. Pipeline Hazards & Stalls
Hazards prevent the next instruction from executing in the designated clock cycle.
- **Structural Hazard**: Multiple instructions demand the same hardware resource. For example, a single-port memory read during IF and MEM stages simultaneously. Solved by separating Instruction and Data caches.
- **Data Hazard**: An instruction depends on the result of a prior instruction that has not completed its Write-Back.
  - **RAW (Read-After-Write)**: Instruction B tries to read a register before Instruction A writes to it.
  - **WAR (Write-After-Read)**: Instruction B tries to write to a register before Instruction A reads it.
  - **WAW (Write-After-Write)**: Instruction B tries to write to a register before Instruction A writes it.
- **Control Hazard**: Caused by branches. The CPU does not know the next instruction address (IF) until the branch execution completes (EX).

:::deep-dive RAW Hazard Resolution Techniques
1. **Forwarding/Bypassing**: Hardware paths feed the ALU output directly to the ALU input for the next instruction, bypassing the register file write-back.
2. **Pipeline Stall (Bubble)**: Interlocking hardware freezes the IF/ID stages for 1 or 2 cycles until the data is written back.
3. **Branch Prediction**: The CPU guesses the branch direction. If incorrect, the pipeline is **flushed** (all instructions in IF/ID/EX are cleared), causing a penalty of multiple cycles.
:::

---

### 3. Caching & Effective Access Time (EAT)
To prevent the CPU from stalling on slow Main Memory (DRAM) accesses, high-speed SRAM Caches are integrated.
The Average Memory Access Time / Effective Access Time (EAT) is:
$$\\text{EAT} = h \\cdot T_c + (1 - h) \\cdot T_m$$
Where:
- $h$ = Cache Hit Ratio (percentage of references resolved in cache).
- $T_c$ = Cache Access Latency.
- $T_m$ = Main Memory Latency (miss penalty).

For multi-level caches (L1 and L2):
$$\\text{EAT} = T_{L1} + (1 - h_{L1}) \\cdot \\left[ T_{L2} + (1 - h_{L2}) \\cdot T_m \\right]$$
Where $h_{L1}$ is local L1 hit rate, and $h_{L2}$ is local L2 hit rate.

---

### 4. Interactive Bubble Sort Walkthrough
Tracing array manipulation algorithms is critical for the Afternoon exam. Walk through Bubble Sort:

[[WALKTHROUGH: BubbleSort]]

:::deep-dive Common Failure Modes / Exam Traps
- **Structural Hazard Confusion**: Assuming a system has structural hazards because it accesses memory twice. In modern Harvard architectures, Instruction and Data memory are separate, eliminating this hazard.
- **Branch Stalls Calculation**: If a branch is taken, the instruction stream suffers a penalty. If it is NOT taken, execution proceeds normally. Ensure you multiply the branch frequency by the penalty only for the branches taken.
- **Local vs Global Hit Rates**: Ensure L2 hit rate calculations use the remaining misses from L1 ($1 - h_{L1}$) as the input stream, not the total CPU instructions.
:::
`,
    formula: 'EAT = Hit_Rate * T_cache + (1 - Hit_Rate) * T_memory'
  },
  {
    id: 'memory-management',
    domainId: 'os',
    domainName: 'Basic Software and OS',
    title: 'Virtual Memory, Page Replacement Policies & Address Translation',
    summary: 'Prose and mathematical breakdown of physical page mapping, TLB translation, page fault EAT, and cache page eviction algorithms.',
    takeaways: [
      'Virtual Memory: Maps Virtual Addresses (Virtual Page Number + Offset) to Physical Addresses (Physical Frame Number + Offset) using Page Tables.',
      'TLB (Translation Lookaside Buffer): A small associative hardware cache of page mappings. Speeds up page table lookups.',
      'Page Fault: Occurs when a page table entry indicates the page is not in RAM (Present bit = 0), forcing disk I/O.',
      'Eviction Policies: FIFO (evicts oldest loaded), LRU (evicts least recently accessed), LFU (evicts least frequently accessed), and Optimal.',
      'Belady\'s Anomaly: Certain page replacement policies (like FIFO) display more page faults when physical memory frames increase. LRU is immune.'
    ],
    markdownContent: `
### 1. Virtual Address Translation
The Operating System and the Memory Management Unit (MMU) map virtual program space to physical RAM.
- **Page Size ($S_{page}$)**: Determines the offset bits. For a page size of $4\\text{ KB} = 2^{12}$ bytes, the lowest 12 bits of the address represent the offset.
- **Virtual Page Number (VPN)**: The high-order bits of the virtual address, used as an index into the Page Table.
- **Physical Frame Number (PFN)**: The physical memory frame address mapping.

$$\\text{Virtual Address} = \\text{VPN} \\mathbin{\\Vert} \\text{Offset}$$
$$\\text{Physical Address} = \\text{PFN} \\mathbin{\\Vert} \\text{Offset}$$
*(The offset remains identical during translation).*

---

### 2. Page Faults & Effective Access Time (EAT)
When the CPU requests a page not loaded in RAM, a **Page Fault Exception** is raised. The OS must swap a frame out to disk and read the target page in.
The overall Effective Access Time is dominated by the page fault rate $p$:
$$\\text{EAT} = (1 - p) \\cdot T_{memory} + p \\cdot T_{fault}$$
Where:
- $p$ = Page Fault Rate ($0 \\leq p \\leq 1$).
- $T_{memory}$ = DRAM access time (approx. $100\\text{ ns}$).
- $T_{fault}$ = Disk swap time (approx. $8\\text{ ms} = 8,000,000\\text{ ns}$).
Even a tiny page fault rate (e.g., $p = 0.001$) can double or triple EAT because $T_{fault} \\gg T_{memory}$.

#### TLB Speedup Calculation
If translation uses a TLB (latency $T_{TLB}$):
$$\\text{EAT} = h_{TLB} \\cdot (T_{TLB} + T_{mem}) + (1 - h_{TLB}) \\cdot (T_{TLB} + 2 \\cdot T_{mem})$$
*(Since a TLB miss requires looking up the page table in RAM first, taking one access, then accessing the actual memory, taking a second access).*

[[VISUALIZER: PagingSimulator]]

---

### 3. Page Eviction Policies & Belady's Anomaly
When RAM is full, the OS must choose which page to swap out.
- **FIFO (First-In, First-Out)**: Evicts the page loaded earliest. Simple but prone to **Belady's Anomaly**.
- **LRU (Least Recently Used)**: Evicts the page unaccessed for the longest duration. Requires hardware tracking.
- **Optimal (MIN)**: Evicts the page that will not be used for the longest time in the future (unimplementable, used as benchmark).

:::deep-dive Belady's Anomaly Mechanics
**Belady's Anomaly** occurs when increasing the number of physical frames results in an increase in the number of page faults. This occurs in FIFO because the set of pages in memory does not necessarily contain the pages that would be in memory with a smaller frame size. In contrast, **Stack Algorithms** (like LRU) maintain the inclusion property:
$$M(n) \\subset M(n+1)$$
The set of pages in an $n$-frame memory is always a subset of pages in an $(n+1)$-frame memory, ensuring page faults never increase with more space.
:::

---

### 4. Interactive Data Structures & Traversal Traces
Managing stacks, queues, and searching arrays are vital OS operations. Use the step tracers below:

[[WALKTHROUGH: BinarySearch]]

[[WALKTHROUGH: StackOps]]

[[WALKTHROUGH: QueueOps]]

:::deep-dive Common Failure Modes / Exam Traps
- **Offset Mismatch**: Confusing bits vs bytes. If memory is byte-addressable and pages are $4\\text{ KB}$, the offset is 12 bits. If address is 32-bit, the VPN is $32 - 12 = 20$ bits, meaning there are $2^{20}$ page table entries.
- **Memory References Count**: Remember that a standard memory access on a page-table system without TLB requires TWO memory lookups: one to read the PTE from RAM, and one to read the actual target byte.
:::
`,
    formula: 'EAT = (1-p)*T_mem + p*T_page_fault'
  },
  {
    id: 'networking',
    domainId: 'networks',
    domainName: 'Technical Elements',
    title: 'OSI/TCP-IP Stack, IP Addressing & CIDR Subnetting Capacity',
    summary: 'Thorough networking review of packet encapsulation, CIDR network/broadcast bitwise arithmetic, and assignable subnets.',
    takeaways: [
      'OSI 7-Layers: Application, Presentation, Session, Transport, Network, Data Link, and Physical. Encapsulates header headers.',
      'CIDR (Classless Inter-Domain Routing): IP address divided into Network prefix and Host portion by a 32-bit subnet mask.',
      'Subnet Host Capacity: 2^(32 - Prefix) - 2. Always subtract 2 for the Network ID and the Broadcast Address.',
      'Network Address: calculated as IP bitwise AND Subnet Mask. Broadcast Address: IP bitwise OR (NOT Subnet Mask).'
    ],
    markdownContent: `
### 1. OSI 7-Layer Model & Encapsulation
Data generated at the Application layer is encapsulated down the network stack:
- **L7: Application**: HTTP, FTP, DNS. (Data)
- **L4: Transport**: TCP (reliable connection, segments) and UDP (connectionless, datagrams). Ports direct traffic to specific processes.
- **L3: Network**: IP (routing, packets). Translates logical IPs to network pathways.
- **L2: Data Link**: Ethernet (switches, frames). Directs frames using Physical MAC addresses.
- **L1: Physical**: Copper, fiber, wireless (bits). Translates data to electromagnetic waves.

---

### 2. IP Addressing & Subnet Masking
An IPv4 address consists of 32 bits. Under Classless Inter-Domain Routing (CIDR) notation (e.g., $192.168.10.130/26$):
- **Prefix ($C$)**: The first 26 bits are the Network ID. The remaining $32 - 26 = 6$ bits are the Host ID.
- **Subnet Mask**: 26 consecutive 1s followed by 6 zeros:
  $$\\text{Mask} = 11111111.11111111.11111111.11000000_2 = 255.255.255.192$$
- **Network ID Calculation**: Bitwise AND the IP with the Mask:
  $$A_{network} = \\text{IP} \\land \\text{Mask}$$
- **Broadcast Address Calculation**: Set all Host bits to 1 (Bitwise OR with inverted Mask):
  $$A_{broadcast} = \\text{IP} \\lor (\\sim\\text{Mask})$$

[[VISUALIZER: SubnetCalculator]]

:::deep-dive Subnet Division Walkthrough
To divide a $/24$ network ($256$ IPs) into four equal subnets:
1. We need $4 = 2^2$ subnets. This requires borrowing 2 bits from the host portion.
2. New prefix: $24 + 2 = /26$.
3. Host bits remaining: $32 - 26 = 6$. Usable hosts per subnet: $2^6 - 2 = 62$.
4. Subnet Ranges:
   - Subnet 0: $.0$ to $.63$ (Net: $.0$, Broadcast: $.63$)
   - Subnet 1: $.64$ to $.127$ (Net: $.64$, Broadcast: $.127$)
   - Subnet 2: $.128$ to $.191$ (Net: $.128$, Broadcast: $.191$)
   - Subnet 3: $.192$ to $.255$ (Net: $.192$, Broadcast: $.255$)
:::

---

### 3. Common Failure Modes / Exam Traps
> [!WARNING]
> - **Forgetting the Host Exclusion (-2)**: When calculating assignable hosts, you MUST exclude the Network ID (all host bits 0) and the Broadcast ID (all host bits 1). Formula: $2^{32-C} - 2$.
> - **First/Last Usable IP Address**:
>   - First Usable IP = Network ID + 1
>   - Last Usable IP = Broadcast Address - 1
> - **CIDR Subnet Subdivisions**: Pay close attention to whether the question asks for the total subnets or the subnets derived from a specific sub-range.
`,
    formula: 'Hosts = 2^(32 - Prefix) - 2'
  },
  {
    id: 'database-theory',
    domainId: 'databases',
    domainName: 'Technical Elements',
    title: 'Database Normalization Theory, Anomalies & SQL Query Joins',
    summary: 'Rigorous exploration of relational database schema design, functional dependency attributes closure, normal forms (1NF-BCNF), and relational algebra joins.',
    takeaways: [
      'Relational Anomalies: Redundancy causes Insert (cannot add partial records), Update (data mismatch drift), and Delete (accidental data loss) bugs.',
      'Partial Dependency: A non-prime attribute depends on a subset of a composite primary key. Violates 2NF.',
      'Transitive Dependency: A non-prime attribute depends on another non-prime attribute. Violates 3NF.',
      'BCNF (Boyce-Codd NF): Strict form where every determinant must be a candidate key.',
      'SQL Joins: Inner Join computes coordinate overlap. Outer Joins preserve missing rows, replacing un-matched columns with NULL values.'
    ],
    markdownContent: `
### 1. Functional Dependencies & Normalization
Normalization systematically organizes attributes to eliminate redundancy and maintain integrity.
- **Functional Dependency ($X \\rightarrow Y$)**: $X$ uniquely determines $Y$. If two rows have the same value for $X$, they must have the same value for $Y$.
- **Prime Attribute**: An attribute that is part of a candidate key.
- **Candidate Key**: A minimal set of attributes that uniquely identifies a row.

#### Step-by-Step Normal Forms:
1. **1NF (First Normal Form)**: All column values must be atomic (no arrays, lists, or composite values).
2. **2NF (Second Normal Form)**: Satisfies 1NF, and **no partial dependencies** exist. All non-prime attributes must depend on the *entire* primary key. (Only relevant when the primary key is composite!).
3. **3NF (Third Normal Form)**: Satisfies 2NF, and **no transitive dependencies** exist. Non-prime attributes must not depend on other non-prime attributes:
   $$\\text{If } X \\rightarrow Y \\text{ and } Y \\rightarrow Z \\text{ (where } Y \\not\\rightarrow X \\text{), then } X \\rightarrow Z \\text{ is a transitive dependency.}$$
4. **BCNF (Boyce-Codd Normal Form)**: A relation is in BCNF if for every non-trivial functional dependency $X \\rightarrow Y$, $X$ is a **superkey**.

[[VISUALIZER: ErdVisualizer]]

:::deep-dive Attribute Closure Algorithm
To find all candidate keys, compute the attribute closure $X^+$:
1. Initialize $X^+ = X$.
2. For each functional dependency $A \\rightarrow B$, if $A \\subseteq X^+$, then add $B$ to $X^+$.
3. Repeat step 2 until $X^+$ stops expanding.
If $X^+$ contains all attributes of the relation, $X$ is a **superkey**. If no subset of $X$ is a superkey, $X$ is a **candidate key**.
:::

---

### 2. SQL Joins & Relational Algebra
SQL Joins combine data from tables based on matching keys:
- **Inner Join ($A \\bowtie B$)**: Returns only rows where the join condition is satisfied in both tables.
- **Left Outer Join ($A \\mathbin{\\text{LEFT OUTER JOIN}} B$)**: Returns all rows from Table A, plus matched rows from Table B. Unmatched rows from B are filled with \`NULL\`.
- **Right Outer Join ($A \\mathbin{\\text{RIGHT OUTER JOIN}} B$)**: Opposite of Left Join.
- **Full Outer Join**: Returns all rows from both tables, with matches where possible.

[[VISUALIZER: SqlJoinVisualizer]]

---

### 3. Common Failure Modes / Exam Traps
> [!CAUTION]
> - **2NF Dependency Trap**: Students often search for partial dependencies in tables with single-column primary keys. A table with a single-column primary key is AUTOMATICALLY in 2NF, because a partial dependency can only exist if the key is composite (multi-column).
> - **Candidate Key Identification**: A candidate key must be minimal. A superkey is unique, but it can contain extra unnecessary attributes.
`,
    formula: 'FD: X -> Y requires X to be a superkey for BCNF'
  },
  {
    id: 'information-security',
    domainId: 'security',
    domainName: 'Technology',
    title: 'Information Security, Symmetric/Asymmetric Encryption & PKI',
    summary: 'Deep-dive security review of symmetric algorithms, public-key authentication, digital signatures, and RSA modular arithmetic.',
    takeaways: [
      'Symmetric Encryption: Single shared key for encryption and decryption. Fast, but requires secure key exchange (e.g. AES).',
      'Asymmetric Encryption: Public Key is shared; Private Key remains secret. Solves the key exchange problem.',
      'Digital Signatures: Message hash is encrypted with Sender\'s Private Key. Provides integrity, authenticity, and non-repudiation.',
      'Confidentiality: Data is encrypted with the Receiver\'s Public Key. Only the Receiver\'s Private Key can decrypt it.',
      'Non-Repudiation: Proves identity since only the owner\'s private key could generate the matching signature.'
    ],
    markdownContent: `
### 1. Symmetric vs Asymmetric Cryptography
Security protocols combine symmetric and asymmetric cryptography.
- **Symmetric Cryptography**: AES, DES, 3DES. Highly efficient, used for bulk data encryption. However, sharing the key securely (Key Distribution Problem) is difficult.
- **Asymmetric Cryptography**: RSA, ECC. Uses a key pair. The Public Key is distributed, and the Private Key is kept secret. Excellent for authentication but computationally expensive.

---

### 2. Digital Signatures & Non-Repudiation
A digital signature ensures authenticity, integrity, and non-repudiation.
- **Confidentiality Flow**:
  $$\\text{Ciphertext} = E_{\\text{Receiver\\_Public}}(\\text{Plaintext})$$
  $$\\text{Plaintext} = D_{\\text{Receiver\\_Private}}(\\text{Ciphertext})$$
- **Digital Signature Flow**:
  1. Sender hashes message: $H = \\text{Hash}(M)$.
  2. Sender encrypts hash with **Sender's Private Key**:
     $$\\text{Signature} = E_{\\text{Sender\\_Private}}(H)$$
  3. Receiver decrypts signature with **Sender's Public Key**:
     $$H' = D_{\\text{Sender\\_Public}}(\\text{Signature})$$
  4. Receiver hashes the message $H'' = \\text{Hash}(M)$ and verifies if $H' = H''$.

[[VISUALIZER: CryptoSignatureSimulator]]

:::deep-dive RSA Mathematical Proof
RSA relies on the mathematical difficulty of factoring the product of two large prime numbers.
1. Select two large primes $p$ and $q$. Calculate their product $n = p \\cdot q$.
2. Compute Euler's Totient function:
   $$\\phi(n) = (p - 1)(q - 1)$$
3. Choose an integer $e$ (public exponent) such that $1 < e < \\phi(n)$ and $\\gcd(e, \\phi(n)) = 1$.
4. Calculate $d$ (private exponent) such that:
   $$e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$$
5. Encryption of message $m$:
   $$c = m^e \\bmod n$$
6. Decryption of ciphertext $c$:
   $$m = c^d \\bmod n$$
:::

---

### 3. Common Failure Modes / Exam Traps
> [!IMPORTANT]
> - **Key Pair Confusion**: Do not confuse signature keys and encryption keys.
>   - To encrypt for **confidentiality**: use **Receiver's Public Key**.
>   - To create a **signature**: use **Sender's Private Key**.
>   - To verify a **signature**: use **Sender's Public Key**.
> - **Hash Modification**: A hash function provides integrity, but a raw hash does not prevent modification unless it is encrypted (as a signature) or uses a key (HMAC). An attacker can intercept, modify the message, and recalculate a new raw hash.
`,
    formula: 'RSA Encryption: C = M^e mod n, Decryption: M = C^d mod n'
  },
  {
    id: 'project-management',
    domainId: 'management',
    domainName: 'Project Management',
    title: 'Project Management, PERT-CPM Diagrams & Slack Boundaries',
    summary: 'rigorous review of schedule network diagrams, forward/backward passes, total and free slack, and PERT probability statistics.',
    takeaways: [
      'Critical Path: The longest continuous path of dependent tasks. Tasks on the critical path have zero Slack Time.',
      'Slack (Float): LS - ES = LF - EF. Delaying a task within its slack limit does not delay the project completion date.',
      'PERT Estimation: expected duration t = (O + 4M + P) / 6. Variance = ((P - O) / 6)^2.',
      'Project Variance: Sum of variances of critical path tasks. Standard deviation = sqrt(Sum(variances)).'
    ],
    markdownContent: `
### 1. Critical Path Method (CPM)
The Critical Path Method determines the minimum project duration and scheduling boundaries for each task.
- **Duration ($d$)**: The active task execution time.
- **Early Start (ES)**: The earliest possible time a task can begin once all predecessors finish:
  $$ES_i = \\max(EF_{\\text{predecessors}})$$
- **Early Finish (EF)**: The earliest a task can complete:
  $$EF_i = ES_i + d_i$$
- **Late Finish (LF)**: The latest a task can finish without delaying successors:
  $$LF_i = \\min(LS_{\\text{successors}})$$
- **Late Start (LS)**: The latest a task can start without delaying successors:
  $$LS_i = LF_i - d_i$$
- **Total Float (Slack)**: The time a task can be delayed from its ES without extending the project duration:
  $$\\text{Slack}_i = LS_i - ES_i = LF_i - EF_i$$

[[VISUALIZER: PertCpmVisualizer]]

---

### 2. PERT Three-Point Estimations
PERT accommodates project uncertainties by using three duration estimates:
- **Optimistic ($O$)**: Best-case duration.
- **Most Likely ($M$)**: Normal-case duration.
- **Pessimistic ($P$)**: Worst-case duration.

The **Expected Duration ($\\mu$)** assumes a Beta distribution:
$$\\mu = \\frac{O + 4M + P}{6}$$

The **Standard Deviation ($\\sigma$)** and **Variance ($\\sigma^2$)** are calculated as:
$$\\sigma = \\frac{P - O}{6}$$
$$\\sigma^2 = \\left(\\frac{P - O}{6}\\right)^2$$

:::deep-dive Project Variance Probability Traps
When calculating the probability of finishing a project within a target date:
1. Find the Critical Path.
2. Sum the EXPECTED durations of tasks along the critical path to find project mean: $\\mu_{project} = \\sum \\mu_{critical}$.
3. Sum the VARIANCES of critical path tasks to find project variance:
   $$\\sigma^2_{project} = \\sum \\sigma^2_{critical}$$
4. The standard deviation of the project is:
   $$\\sigma_{project} = \\sqrt{\\sigma^2_{project}}$$
   *(WARNING: You CANNOT sum the standard deviations directly! $\\sum \\sigma_i \\neq \\sqrt{\\sum \\sigma_i^2}$).*
5. Compute the $Z$-score for the target date $D$:
   $$Z = \\frac{D - \\mu_{project}}{\\sigma_{project}}$$
   Refer to a standard normal distribution table to find the probability.
:::

---

### 3. Common Failure Modes / Exam Traps
> [!CAUTION]
> - **Adding Standard Deviations**: A common mistake is summing the standard deviations of critical tasks: $\\sigma_{total} = \\sigma_1 + \\sigma_2 + \\dots$. This violates probability theory. You must sum the variances first, and then take the square root of that sum.
> - **Multiple Critical Paths**: If a project has two critical paths, both must be tracked. A delay on either path delays the project. The path with the larger variance determines the overall project risk.
`
  }
];
