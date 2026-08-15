import React, { useState } from 'react';

export const SubnetCalculator: React.FC = () => {
  const [ipInput, setIpInput] = useState<string>('192.168.1.100');
  const [prefix, setPrefix] = useState<number>(26);

  const calculateSubnet = () => {
    // Validate IP input
    const ipParts = ipInput.split('.').map((p) => parseInt(p, 10));
    if (ipParts.length !== 4 || ipParts.some((p) => isNaN(p) || p < 0 || p > 255)) {
      return null;
    }

    // Convert IP to 32-bit integer
    let ipNum = 0;
    ipParts.forEach((part, idx) => {
      ipNum += part * Math.pow(256, 3 - idx);
    });

    // Create netmask
    let mask = 0;
    for (let i = 31; i >= 32 - prefix; i--) {
      mask |= (1 << i);
    }
    // Convert mask to positive integer representation
    mask = mask >>> 0;

    // Netmask string representation
    const maskParts = [
      (mask >>> 24) & 255,
      (mask >>> 16) & 255,
      (mask >>> 8) & 255,
      mask & 255
    ];
    const maskStr = maskParts.join('.');

    // Network Address
    const netNum = (ipNum & mask) >>> 0;
    const netStr = [
      (netNum >>> 24) & 255,
      (netNum >>> 16) & 255,
      (netNum >>> 8) & 255,
      netNum & 255
    ].join('.');

    // Broadcast Address
    const broadcastNum = (netNum | ~mask) >>> 0;
    const broadcastStr = [
      (broadcastNum >>> 24) & 255,
      (broadcastNum >>> 16) & 255,
      (broadcastNum >>> 8) & 255,
      broadcastNum & 255
    ].join('.');

    // Host Bounds
    const firstHostStr = [
      (netNum >>> 24) & 255,
      (netNum >>> 16) & 255,
      (netNum >>> 8) & 255,
      (netNum & 255) + 1
    ].join('.');

    const lastHostStr = [
      (broadcastNum >>> 24) & 255,
      (broadcastNum >>> 16) & 255,
      (broadcastNum >>> 8) & 255,
      (broadcastNum & 255) - 1
    ].join('.');

    const totalHosts = Math.pow(2, 32 - prefix) - 2;

    return {
      maskStr,
      netStr,
      broadcastStr,
      firstHostStr,
      lastHostStr,
      totalHosts
    };
  };

  const results = calculateSubnet();

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">IP Subnet Mask & Network Boundary Calculator</h4>
          <p className="text-xs text-[var(--text-muted)]">Input an IP and select CIDR prefix to calculate host address bounds.</p>
        </div>
        <span className="badge badge-emerald text-[10px]">IPv4 Netmasks</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* IP Address Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[var(--text-secondary)]">IP Address</label>
          <input
            type="text"
            value={ipInput}
            onChange={(e) => setIpInput(e.target.value)}
            className="trace-input"
            placeholder="e.g. 192.168.1.100"
          />
        </div>

        {/* CIDR Prefix Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-bold text-[var(--text-secondary)]">
            <span>CIDR Prefix Mask</span>
            <span className="text-[var(--accent-cyan)] font-mono">/{prefix}</span>
          </div>
          <input
            type="range"
            min="24"
            max="30"
            value={prefix}
            onChange={(e) => setPrefix(parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-cyan)]"
          />
          <div className="flex justify-between text-[9px] text-[var(--text-muted)] font-mono">
            <span>/24 (254 hosts)</span>
            <span>/27</span>
            <span>/30 (2 hosts)</span>
          </div>
        </div>
      </div>

      {/* Results grid */}
      {results ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          
          <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] text-xs font-mono">
            <span className="text-[9px] text-[var(--text-muted)] uppercase block font-sans font-bold">Subnet Mask</span>
            <span className="text-xs text-[var(--text-primary)] font-bold">{results.maskStr}</span>
          </div>

          <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] text-xs font-mono">
            <span className="text-[9px] text-[var(--text-muted)] uppercase block font-sans font-bold">Network ID</span>
            <span className="text-xs text-[var(--accent-cyan)] font-bold">{results.netStr}</span>
          </div>

          <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] text-xs font-mono">
            <span className="text-[9px] text-[var(--text-muted)] uppercase block font-sans font-bold">Broadcast IP</span>
            <span className="text-xs text-rose-500 font-bold">{results.broadcastStr}</span>
          </div>

          <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] text-xs font-mono col-span-2">
            <span className="text-[9px] text-[var(--text-muted)] uppercase block font-sans font-bold">Assignable Host Bounds</span>
            <span className="text-[11px] text-[var(--text-primary)]">
              {results.firstHostStr} <span className="text-[var(--text-muted)]">to</span> {results.lastHostStr}
            </span>
          </div>

          <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] text-xs font-mono">
            <span className="text-[9px] text-[var(--text-muted)] uppercase block font-sans font-bold">Total Host Capacity</span>
            <span className="text-xs text-[var(--accent-emerald)] font-bold">{results.totalHosts} Hosts</span>
          </div>

        </div>
      ) : (
        <p className="text-xs text-rose-500 font-mono">Invalid IP Address Format. Enter 4 octets separated by dots (0-255).</p>
      )}
    </div>
  );
};
export default SubnetCalculator;
