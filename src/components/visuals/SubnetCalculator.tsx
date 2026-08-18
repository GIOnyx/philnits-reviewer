import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export const SubnetCalculator: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('192.168.10.50');
  const [cidr, setCidr] = useState<number>(24);

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  const ipOctets = ipAddress.split('.').map(o => parseInt(o) || 0);
  const safeOctets = [
    ipOctets[0] ?? 192,
    ipOctets[1] ?? 168,
    ipOctets[2] ?? 10,
    ipOctets[3] ?? 50
  ];

  const ipBinary32 = safeOctets
    .map(oct => oct.toString(2).padStart(8, '0'))
    .join('');

  const maskBinary32 = ''.padEnd(cidr, '1').padEnd(32, '0');
  const maskOctets = [
    parseInt(maskBinary32.slice(0, 8), 2),
    parseInt(maskBinary32.slice(8, 16), 2),
    parseInt(maskBinary32.slice(16, 24), 2),
    parseInt(maskBinary32.slice(24, 32), 2),
  ];
  const subnetMaskStr = maskOctets.join('.');

  const netBinary32 = ipBinary32.split('').map((bit, i) => (bit === '1' && maskBinary32[i] === '1' ? '1' : '0')).join('');
  const netOctets = [
    parseInt(netBinary32.slice(0, 8), 2),
    parseInt(netBinary32.slice(8, 16), 2),
    parseInt(netBinary32.slice(16, 24), 2),
    parseInt(netBinary32.slice(24, 32), 2),
  ];
  const networkAddressStr = netOctets.join('.');

  const broadBinary32 = netBinary32.split('').map((bit, i) => (maskBinary32[i] === '0' ? '1' : bit)).join('');
  const broadOctets = [
    parseInt(broadBinary32.slice(0, 8), 2),
    parseInt(broadBinary32.slice(8, 16), 2),
    parseInt(broadBinary32.slice(16, 24), 2),
    parseInt(broadBinary32.slice(24, 32), 2),
  ];
  const broadcastAddressStr = broadOctets.join('.');

  const hostBits = 32 - cidr;
  const totalHosts = Math.pow(2, hostBits);
  const usableHosts = cidr >= 31 ? (cidr === 32 ? 1 : 2) : totalHosts - 2;

  const prefixBinary = ipBinary32.slice(0, cidr);
  const suffixBinary = ipBinary32.slice(cidr);

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-lg">
              <Globe className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">CIDR & Subnetting Sandbox</h3>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Explore 32-bit logical IP splitting, subnet masks, network prefixes, and host capacities (<i>2<sup>n</sup> - 2</i>).
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <label className="block text-[10px] uppercase font-semibold text-[var(--text-secondary)] mb-1">IPv4 Address</label>
            <input
              type="text"
              value={ipAddress}
              onChange={handleIpChange}
              className="w-36 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-3 py-1.5 text-[var(--text-primary)] font-mono text-sm focus:outline-none focus:border-[var(--accent-cyan)]"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-semibold text-[var(--text-secondary)] mb-1">CIDR: /{cidr}</label>
            <select
              value={cidr}
              onChange={(e) => setCidr(parseInt(e.target.value))}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-3 py-1.5 text-[var(--text-primary)] font-mono text-sm focus:outline-none focus:border-[var(--accent-cyan)]"
            >
              {Array.from({ length: 25 }, (_, i) => i + 8).map(c => (
                <option key={c} value={c}>/{c} ({Math.max(0, Math.pow(2, 32 - c) - 2)} hosts)</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4">
        <div className="flex justify-between text-xs font-semibold text-[var(--text-primary)]">
          <span>Network Prefix Slider (/{cidr})</span>
          <span className="text-[var(--accent-cyan)] font-mono">{hostBits} host bits ({totalHosts.toLocaleString()} total IP addresses)</span>
        </div>
        <input
          type="range"
          min={8}
          max={30}
          value={cidr}
          onChange={(e) => setCidr(parseInt(e.target.value))}
          className="w-full accent-[var(--accent-cyan)] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
          <span>/8 (Class A)</span>
          <span>/16 (Class B)</span>
          <span>/24 (Class C)</span>
          <span>/30 (WAN)</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[var(--text-primary)]">32-Bit Logical Identifier Split</span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[var(--accent-cyan)]"><span className="w-3 h-3 bg-[var(--accent-cyan)] rounded-sm inline-block"></span> Network Prefix ({cidr} bits)</span>
            <span className="flex items-center gap-1.5 text-[var(--accent-emerald)]"><span className="w-3 h-3 bg-[var(--accent-emerald)] rounded-sm inline-block"></span> Host Suffix ({hostBits} bits)</span>
          </div>
        </div>
        <div className="w-full h-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden flex font-mono text-xs shadow-inner">
          <div
            style={{ width: `${(cidr / 32) * 100}%` }}
            className="bg-[var(--accent-cyan)]/20 border-r border-[var(--accent-cyan)] text-[var(--accent-cyan)] flex items-center justify-center font-bold overflow-hidden px-2 whitespace-nowrap"
            title="Network Prefix"
          >
            Prefix: {prefixBinary}
          </div>
          <div
            style={{ width: `${(hostBits / 32) * 100}%` }}
            className="bg-[var(--accent-emerald)]/20 text-[var(--accent-emerald)] flex items-center justify-center font-bold overflow-hidden px-2 whitespace-nowrap"
            title="Host Suffix"
          >
            Host: {suffixBinary}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3.5 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Subnet Mask</div>
          <div className="text-sm font-mono font-bold text-[var(--text-primary)]">{subnetMaskStr}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3.5 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Network Address</div>
          <div className="text-sm font-mono font-bold text-[var(--accent-cyan)]">{networkAddressStr}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3.5 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Broadcast Address</div>
          <div className="text-sm font-mono font-bold text-amber-500 dark:text-amber-400">{broadcastAddressStr}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3.5 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Usable Host Capacity</div>
          <div className="text-sm font-mono font-bold text-[var(--accent-emerald)]">{usableHosts.toLocaleString()} hosts</div>
        </div>
      </div>
    </div>
  );
};
