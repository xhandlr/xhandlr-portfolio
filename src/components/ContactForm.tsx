
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * Formulario de contacto funcional via Web3Forms.
 * Envía name, email y message a la API y muestra feedback de estado.
 */
const ContactForm: React.FC = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
        <CheckCircle className="w-12 h-12 text-green-400" />
        <p className="text-white font-bold text-lg">¡Mensaje enviado!</p>
        <p className="text-gray-400 text-sm">Te responderé pronto.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-xs text-gray-500 hover:text-white underline transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[12px] font-mono text-gray-400 uppercase tracking-[0.2em]">Nombre</label>
          <input
            type="text"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-mono text-gray-400 uppercase tracking-[0.2em]">Correo Electrónico</label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[12px] font-mono text-gray-400 uppercase tracking-[0.2em]">Mensaje</label>
        <textarea
          rows={4}
          placeholder="Hola, me gustaría hablar sobre..."
          required
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Ocurrió un error al enviar. Intenta de nuevo.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
      >
        {status === 'loading' ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Enviar Mensaje</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
