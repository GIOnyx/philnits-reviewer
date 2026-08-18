# Architecture & Implementation Plan: Study Area & Resource Hub Revamp

This architectural plan outlines the complete revamp of the PhilNITS FE reviewer application's **Study Area** (StudyHub / StudyResources) to transform it into an interactive resource hub with native embedding and four advanced visualization widgets.

---

## 1. Component & Directory Structure

```
src/
├── types/
│   └── exam.ts                           # Add ResourceItem types & JSON schema definitions
├── data/
│   ├── seed/
│   │   └── study_resources_catalogue.ts  # Curated Resource Catalogue JSON data from source PDF
│   └── seed/
│       └── study_topics.ts               # Expanded study topics for the 6 theoretical pillars
└── components/
    ├── StudyResources.tsx                # Revamped resource dashboard with dynamic grid & filters
    ├── StudyHub.tsx                      # Revamped study area structured around the 6 theoretical pillars
    ├── modals/
    │   └── ResourceEmbedModal.tsx        # Native embedding modal for PDFs (iframe/object), SlideDecks, and YouTube
    └── visuals/
        ├── HammingCodeVisualizer.tsx     # 1. Bitwise & Hamming Code Visualizer (Galois Fields, XOR, bit flips)
        ├── SubnetCalculator.tsx          # 2. CIDR & Subnetting Sandbox (32-bit logical split, host capacity)
        ├── DbNormalizationFlowchart.tsx  # 3. Database Normalization Flowchart (1NF through BCNF & FDs)
        └── EvmGraphVisualizer.tsx        # 4. EVM (Earned Value Management) Graph (PV, AC, EV, SV, CV)
```

---

## 2. Curated Resource Catalogue JSON Schema & Data

We will extract and structure the JSON catalogue from **"PhilNITS FE Study Materials.pdf"** with the following TypeScript interface:

```typescript
export interface CuratedResource {
  id: string;
  title: string;
  category: 'Management' | 'Strategy' | 'Technology' | 'Database' | 'Networking' | 'Information Theory';
  subtopic: string;
  type: 'pdf' | 'video' | 'slidedeck' | 'cheatsheet';
  embedUrl: string;
  description: string;
  badge?: string;
  fileSize?: string;
}
```

---

## 3. Native Embed Modal (`ResourceEmbedModal.tsx`)

A unified modal component supporting:
- **PDFs**: Rendered via `<iframe src={url} className="w-full h-[70vh]" />` or object tags.
- **YouTube / Video**: Rendered via responsive 16:9 iframe (`aspect-video`).
- **SlideDecks / External docs**: Rendered via iframe or responsive container.

---

## 4. Four Interactive Visualization Widgets

### A. HammingCodeVisualizer (`src/components/visuals/HammingCodeVisualizer.tsx`)
- **Inputs**: User binary string input (e.g., 4-bit data like `1011`).
- **Features**:
  - Automatically calculates Hamming $(7,4)$ or $(12,8)$ parity bits using modulo-2 XOR sum.
  - Interactive **Bit Flip Simulator**: Click bits to simulate transmission noise.
  - Syndrome calculation matrix multiplication in Galois Fields ($\mathbb{GF}(2)$).
  - Single-error correction demonstration highlighting the exact error position.

### B. SubnetCalculator (`src/components/visuals/SubnetCalculator.tsx`)
- **Inputs**: IPv4 address input + CIDR slider (`/8` to `/30`).
- **Features**:
  - Instant 32-bit binary visualizer split into Network Prefix (cyan) and Host Suffix (emerald).
  - Dynamic calculation of Subnet Mask, Network Address, Broadcast Address, and Usable Host Capacity ($2^{32-cidr} - 2$).

### C. DbNormalizationFlowchart (`src/components/visuals/DbNormalizationFlowchart.tsx`)
- **Features**:
  - Step-by-step interactive workflow stages: **1NF** (Atomic values) $\rightarrow$ **2NF** (Remove partial functional dependencies) $\rightarrow$ **3NF** (Remove transitive dependencies) $\rightarrow$ **BCNF** (Determinant is superkey).
  - Live table transformation view showing sample tables at each stage with highlighted violations and resolutions.

### D. EvmGraphVisualizer (`src/components/visuals/EvmGraphVisualizer.tsx`)
- **Inputs**: Sliders or input fields for **Planned Value (PV)**, **Actual Cost (AC)**, and **Earned Value (EV)**.
- **Features**:
  - Dynamic SVG / Chart rendering the variance metrics.
  - Automatic calculation and display of:
    - Schedule Variance ($\text{SV} = \text{EV} - \text{PV}$)
    - Cost Variance ($\text{CV} = \text{EV} - \text{AC}$)
    - Schedule Performance Index ($\text{SPI}$) & Cost Performance Index ($\text{CPI}$).
    - Color-coded status badges (Under budget/Ahead of schedule vs Over budget/Behind schedule).

---

## 5. Integration into `StudyHub.tsx` & `StudyResources.tsx`

- **StudyResources.tsx**: Features the resource catalogue grid with category/subtopic filters and instant "Preview / Embed" triggers.
- **StudyHub.tsx**: Directly houses the 6 theoretical pillars with embedded inline visualizer components (`[[VISUALIZER: HammingCodeVisualizer]]`, etc.).
