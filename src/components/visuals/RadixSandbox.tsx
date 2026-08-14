import React, { useState } from 'react';
import { RefreshCw, Play } from 'lucide-react';

export const RadixSandbox: React.FC = () => {
  const [decimalVal, setDecimalVal] = useState<number>(10);
  const [binaryBits, setBinaryBits] = useState<number[]>(() => {
    // 8-bit default representation for 10 is 00001010
    return [0, 0, 0, 0, 1, 0, 1, 0];
  });

  const handleDecimalChange = (val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num)) return;
    
    // Clamp to 8-bit signed range (-128 to 127)
    const clamped = Math.max(-128, Math.min(127, num));
    setDecimalVal(clamped);

    // Convert to binary bits (2's complement for negatives)
    const bits: number[] = [];
    let unsignedVal = clamped;
    if (clamped < 0) {
      unsignedVal = 256 + clamped; // wrap around for 8-bit complement
    }

    for (let i = 7; i >= 0; i--) {
      bits.push((unsignedVal >> i) & 1);
    }
    setBinaryBits(bits);
  };

  const handleBitToggle = (index: number) => {
    const newBits = [...binaryBits];
    newBits[index] = newBits[index] === 0 ? 1 : 0;
    setBinaryBits(newBits);

    // Convert bits back to decimal (treating as 8-bit signed 2's complement)
    let unsignedVal = 0;
    newBits.forEach((bit, i) => {
      unsignedVal += bit * Math.pow(2, 7 - i);
    });

    let signedVal = unsignedVal;
    if (newBits[0] === 1) {
      signedVal = unsignedVal - 256; // convert from MSB signed bit
    }
    setDecimalVal(signedVal);
  };

  // Calculations for Hex, 1's Complement
  let unsignedVal = decimalVal >= 0 ? decimalVal : 256 + decimalVal;
  const hexVal = unsignedVal.toString(16).toUpperCase().padStart(2, '0');
  
  // 1's complement representation: flip positive bits, or for negative it is 2's complement minus 1
  const onesComplementBits = binaryBits.map((b) => (b === 0 ? 1 : 0));

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">Radix & 2's Complement Sandbox</h4>
          <p className="text-xs text-[var(--text-muted)]">Toggle bits or type a decimal to see real-time base representations.</p>
        </div>
        <span className="badge badge-cyan text-[10px]">8-Bit System</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Decimal Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[var(--text-secondary)]">Decimal Value</label>
          <input
            type="number"
            min="-128"
            max="127"
            value={decimalVal}
            onChange={(e) => handleDecimalChange(e.target.value)}
            className="trace-input"
          />
          <span className="text-[10px] text-[var(--text-muted)]">Signed Range: -128 to 127</span>
        </div>

        {/* Hex representation */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg text-center border border-[var(--border-color)]">
          <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Hexadecimal</span>
          <span className="text-xl font-extrabold text-[var(--accent-cyan)] font-mono">0x{hexVal}</span>
        </div>

        {/* 1's Complement */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg text-center border border-[var(--border-color)]">
          <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">1's Complement Bits</span>
          <span className="text-base font-bold text-[var(--text-secondary)] font-mono">
            {onesComplementBits.join('')}
          </span>
        </div>
      </div>

      {/* Interactive Bit Toggler */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[var(--text-secondary)] block">
          Binary Bits (Click individual cells to toggle)
        </span>
        <div className="grid grid-cols-8 gap-1.5">
          {binaryBits.map((bit, idx) => {
            const placeValue = Math.pow(2, 7 - idx);
            const isMSB = idx === 0;
            return (
              <button
                key={idx}
                onClick={() => handleBitToggle(idx)}
                className={`p-3 rounded-lg border text-center font-mono font-bold text-sm transition-all ${
                  bit === 1
                    ? 'bg-[var(--accent-emerald)]/15 border-[var(--accent-emerald)] text-[var(--accent-emerald)] shadow-sm'
                    : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--border-hover)]'
                }`}
              >
                <div>{bit}</div>
                <div className="text-[8px] text-[var(--text-muted)] mt-1 font-sans">
                  {isMSB ? '-128' : `+${placeValue}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RadixSandbox;
