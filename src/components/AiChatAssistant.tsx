import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { PhilnitsApiService } from '../services/api';
import { MarkdownContent } from './MarkdownContent';

interface Message {
  role: 'user' | 'model';
  parts: string[];
}

interface AiChatAssistantProps {
  activeContext: string;
  hide: boolean;
}

export const AiChatAssistant: React.FC<AiChatAssistantProps> = ({ activeContext, hide }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Resizable Window State
  const [size, setSize] = useState({ width: 380, height: 480 });
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const dragStart = useRef({ x: 0, y: 0, w: 0, h: 0 });
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Clear or notify conversation when topic context shifts
  useEffect(() => {
    if (activeContext) {
      setMessages([
        {
          role: 'model',
          parts: [`Greetings. I am your academic tutor for the PhilNITS FE Exam. I am currently locked onto the topic: **"${activeContext}"**. Ask me any conceptual questions, derivations, or tracing steps related to it.`]
        }
      ]);
    }
  }, [activeContext]);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Resize Mouse Event Handlers
  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      w: size.width,
      h: size.height
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      // Moving mouse left (dx < 0) expands width to the left (w_new = w_old - dx)
      // Moving mouse up (dy < 0) expands height upward (h_new = h_old - dy)
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      
      setSize({
        width: Math.max(320, Math.min(800, dragStart.current.w - dx)),
        height: Math.max(350, Math.min(750, dragStart.current.h - dy))
      });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  if (hide || !activeContext) return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    
    // Add User message
    const userMsg: Message = { role: 'user', parts: [userText] };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Pass the updated messages history (excluding the greeting message)
      const apiHistory = updatedMessages.slice(1).map(msg => ({
        role: msg.role,
        parts: msg.parts
      }));

      // Request response from Windmill AI Chat endpoint
      const responseText = await PhilnitsApiService.askAiChat(
        activeContext,
        userText,
        apiHistory
      );

      // Add Model Response
      setMessages((prev) => [...prev, { role: 'model', parts: [responseText] }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', parts: ['System Error: Unable to retrieve tutor response. Check connection.'] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'model',
        parts: [`Tutor thread reset. Ask me anything about the active topic: **"${activeContext}"**.`]
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--accent-emerald)] to-[var(--accent-cyan)] text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 animate-fade-in"
        title="Consult Academic AI Assistant"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>

      {/* Floating Chat Window */}
      {isOpen && (
        <div 
          style={isMaximized ? {} : { width: `${size.width}px`, height: `${size.height}px` }}
          className={`fixed z-50 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl ${
            isMaximized 
              ? 'inset-4 sm:inset-6 md:inset-8' 
              : 'bottom-22 right-6'
          } ${
            isResizing ? 'select-none' : 'transition-all duration-200'
          }`}
        >
          {/* Top-Left Drag Resize Handle (Only visible when not maximized) */}
          {!isMaximized && (
            <div
              onMouseDown={startResize}
              className="absolute top-0 left-0 w-5 h-5 cursor-nw-resize z-50 flex items-center justify-center group"
              title="Drag to resize window"
            >
              <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--text-muted)] group-hover:border-[var(--accent-cyan)] transition-colors rounded-tl-sm" />
            </div>
          )}
          
          {/* Header */}
          <div className={`p-4 bg-[var(--bg-nav)] border-b border-[var(--border-color)] flex items-center justify-between ${
            isMaximized ? 'pl-4' : 'pl-7'
          }`}>
            <div className="flex items-center gap-2 overflow-hidden">
              <Sparkles className="w-4 h-4 text-[var(--accent-cyan)] shrink-0 animate-pulse" />
              <div className="overflow-hidden">
                <h3 className="text-xs font-bold text-[var(--text-primary)]">Tutor Mode (Gemini 3.5 Lite)</h3>
                <div className="text-[10px] text-[var(--accent-cyan)] font-mono truncate">
                  Locked: {activeContext}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              <button 
                onClick={handleResetChat}
                className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                title="Reset session"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                title={isMaximized ? "Restore window size" : "Maximize to full screen"}
              >
                {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-[var(--text-muted)] hover:text(--text-primary) hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[var(--bg-sidebar)]/30 font-sans text-xs">
            {messages.map((msg, index) => {
              const isModel = msg.role === 'model';
              return (
                <div key={index} className={`flex gap-2.5 items-start ${isModel ? '' : 'flex-row-reverse'}`}>
                  {/* Avatar */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                    isModel 
                      ? 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--accent-cyan)]' 
                      : 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)] text-[var(--accent-emerald)]'
                  }`}>
                    {isModel ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  
                  {/* Bubble */}
                  <div className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                    isModel 
                      ? 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-tl-none' 
                      : 'bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-tr-none'
                  }`}>
                    <MarkdownContent
                      content={msg.parts.join('\n')}
                      className="text-xs text-[var(--text-secondary)]"
                    />
                  </div>
                </div>
              );
            })}
            
            {isLoading && (
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--accent-cyan)] animate-spin">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] italic animate-pulse rounded-tl-none">
                  Tutor is typing conceptual breakdown...
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-nav)] flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about this topic..."
              className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] px-3 py-2 rounded-lg focus:outline-none focus:border-[var(--accent-cyan)] focus:bg-[var(--bg-card-hover)] transition-all font-sans"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2 rounded-lg bg-[var(--accent-emerald)] text-white hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all cursor-pointer flex items-center justify-center shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
