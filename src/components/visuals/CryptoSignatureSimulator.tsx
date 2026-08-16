import React, { useState } from 'react';
import { Key, ShieldAlert, CheckCircle2, ChevronRight, Lock, Unlock } from 'lucide-react';

export const CryptoSignatureSimulator: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [plaintext, setPlaintext] = useState<string>('SEND_AMOUNT=1000USD');
  const [hash, setHash] = useState<string>('e3b0c442...98fc');
  const [signature, setSignature] = useState<string>('');
  const [verified, setVerified] = useState<boolean | null>(null);

  const calculateHash = (text: string) => {
    // Basic mock hash generator for visual demo
    let val = 0;
    for (let i = 0; i < text.length; i++) {
      val += text.charCodeAt(i) * Math.pow(31, text.length - 1 - i);
    }
    return 'sha256_' + Math.abs(val).toString(16).padEnd(8, '0').slice(0, 12);
  };

  const handleTextChange = (text: string) => {
    setPlaintext(text);
    setHash(calculateHash(text));
    setStep(0);
    setSignature('');
    setVerified(null);
  };

  const handleStepForward = () => {
    if (step === 0) {
      // Step 1: Encrypt hash with Sender's Private Key to produce Signature
      setSignature('sig_' + hash.split('_')[1] + '_encrypted_privkey');
      setStep(1);
    } else if (step === 1) {
      // Step 2: Transmission phase
      setStep(2);
    } else if (step === 2) {
      // Step 3: Decrypt signature with Sender's Public Key to retrieve HASH
      const decryptedHash = 'sha256_' + signature.split('_')[1];
      const recalculatedHash = calculateHash(plaintext);
      setVerified(decryptedHash === recalculatedHash);
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(0);
    setSignature('');
    setVerified(null);
  };

  return (
    <div className="glass-panel p-5 space-y-4 my-4 font-sans text-xs">
      
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-[var(--accent-cyan)]" />
          <div>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">Digital Signature Cryptographic Simulator</h4>
            <p className="text-xs text-[var(--text-muted)]">Step through signature signing (Private Key) and verification (Public Key) for non-repudiation.</p>
          </div>
        </div>
        <span className="badge badge-cyan text-[10px]">RSA & SHA256</span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-[var(--text-secondary)]">Message Text (Plaintext)</label>
        <input
          type="text"
          value={plaintext}
          onChange={(e) => handleTextChange(e.target.value)}
          className="trace-input font-mono"
          disabled={step > 0}
        />
      </div>

      {/* Steps indicators */}
      <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-bold text-[var(--text-secondary)]">
        {['1. Hash Message', '2. Sign (PrivKey)', '3. Send Data', '4. Verify (PubKey)'].map((label, idx) => (
          <div
            key={idx}
            className={`p-1.5 rounded border transition-colors ${
              step === idx
                ? 'bg-[var(--accent-cyan)]/15 border-[var(--accent-cyan)] text-[var(--accent-cyan)]'
                : step > idx
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-muted)]'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Simulator view pane */}
      <div className="p-4 rounded-xl bg-[var(--bg-sidebar)] border border-[var(--border-color)] space-y-3 font-mono text-[11px] min-h-[120px] flex flex-col justify-center">
        
        {step === 0 && (
          <div className="space-y-1.5">
            <span className="text-[10px] text-white font-bold uppercase font-sans">Step 1: Hashing Plaintext</span>
            <div>Message: <span className="text-[var(--text-primary)] font-bold">"{plaintext}"</span></div>
            <div>SHA256 Hash Digest: <span className="text-[var(--accent-cyan)] font-bold">{hash}</span></div>
            <p className="text-[10px] text-[var(--text-muted)] font-sans italic mt-1">
              * A hash is a one-way mathematical function. Any change in plaintext produces a completely different hash digest.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-1.5">
            <span className="text-[10px] text-[var(--accent-cyan)] font-bold uppercase font-sans">Step 2: Encrypting Hash (Signing)</span>
            <div>Hash digest: <span className="text-[var(--text-secondary)]">{hash}</span></div>
            <div className="flex items-center gap-1.5 text-[var(--accent-cyan)]">
              <Lock className="w-3.5 h-3.5" /> Encrypting using Sender's Private Key...
            </div>
            <div>Resulting Signature: <span className="text-[var(--accent-emerald)] font-bold break-all">{signature}</span></div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-1.5">
            <span className="text-[10px] text-purple-400 font-bold uppercase font-sans">Step 3: Transmitting Packet</span>
            <div className="p-2 border border-purple-500/20 bg-purple-500/5 rounded text-[10px]">
              <div>📦 Packet Payload:</div>
              <div className="ml-3 text-[var(--text-secondary)]">"message": "{plaintext}"</div>
              <div className="ml-3 text-[var(--text-secondary)]">"signature": "{signature}"</div>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] font-sans mt-1">
              * The signature is attached to the message. If an attacker tampers with the message in transit, the signature verification will fail.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2">
            <span className="text-[10px] text-[var(--accent-emerald)] font-bold uppercase font-sans">Step 4: Signature Verification</span>
            <div className="flex items-center gap-1.5 text-[var(--accent-cyan)]">
              <Unlock className="w-3.5 h-3.5" /> Decrypting signature using Sender's Public Key...
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] mt-1">
              <div className="p-1.5 bg-[var(--bg-card-hover)] border border-[var(--border-color)] rounded">
                Decrypted Hash: {hash}
              </div>
              <div className="p-1.5 bg-[var(--bg-card-hover)] border border-[var(--border-color)] rounded">
                Recalculated Hash: {calculateHash(plaintext)}
              </div>
            </div>

            {verified ? (
              <div className="p-2 bg-emerald-500 border border-emerald-600 text-white font-bold rounded flex items-center gap-1.5 mt-2 text-xs">
                <CheckCircle2 className="w-4 h-4" /> Signature Valid! Message integrity and authenticity verified (Non-Repudiation).
              </div>
            ) : (
              <div className="p-2 bg-rose-500 border border-rose-600 text-white font-bold rounded flex items-center gap-1.5 mt-2 text-xs">
                <ShieldAlert className="w-4 h-4" /> Signature Invalid! Message tampered or wrong keys.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action controls */}
      <div className="flex justify-end gap-2">
        <button onClick={handleReset} className="btn-secondary py-1 text-xs">
          Reset Simulator
        </button>
        {step < 3 && (
          <button onClick={handleStepForward} className="btn-primary py-1 text-xs flex items-center gap-1">
            Next step <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
export default CryptoSignatureSimulator;
