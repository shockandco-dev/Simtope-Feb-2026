import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, Loader2, Minimize2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am the Simtope Connectivity Architect. How can I assist with your network requirements today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await generateChatResponse(userMsg.text, history);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all hover:scale-105 group"
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
          Ask an Expert
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] flex flex-col glass-panel rounded-xl shadow-2xl border border-brand-border overflow-hidden font-sans">
      <div className="bg-brand-primary p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">Simtope AI Architect</span>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white transition-colors"
        >
          <Minimize2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-brand-primary text-white rounded-br-none'
                  : 'bg-brand-surface text-brand-text-primary rounded-bl-none border border-brand-border'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-brand-surface p-3 rounded-lg rounded-bl-none flex items-center gap-2 border border-brand-border">
              <Loader2 className="w-4 h-4 animate-spin text-brand-accent" />
              <span className="text-xs text-brand-text-secondary">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-brand-surface border-t border-brand-border flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about eSIM, coverage..."
          className="flex-1 bg-brand-dark border border-brand-border rounded-md px-3 py-2 text-sm text-brand-text-primary focus:outline-none focus:border-brand-primary"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2 bg-brand-primary text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};