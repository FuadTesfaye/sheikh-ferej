'use client';
import { useState, use } from 'react';
import { submitQuestion } from '@/lib/api/questions';
import { Loader2, CheckCircle } from 'lucide-react';

export default function AskPage(props: { params: Promise<{ locale: string }> }) {
  const params = use(props.params);
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<{id: string} | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (question.length < 10) {
       setError('Question must be at least 10 characters long.');
       return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const res = await submitQuestion({
        body: question,
        askerName: isAnonymous ? undefined : name,
        askerEmail: isAnonymous ? undefined : email,
        locale: params.locale
      });
      setSuccess({ id: res.id || 'REF-' + Math.random().toString(36).substring(2, 9).toUpperCase() });
    } catch (err) {
      setError('An error occurred while submitting your question. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading text-charcoal font-bold tracking-tight mb-4">
          Ask the Sheikh
        </h1>
        <p className="text-lg md:text-xl text-secondary font-body max-w-2xl mx-auto">
          Submit your questions regarding Islamic jurisprudence, creed, or spiritual guidance.
        </p>
      </header>

      {success ? (
        <div className="bg-ivory border-2 border-accent/20 rounded-lg p-8 md:p-12 text-center">
           <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
           <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Question Received</h2>
           <p className="text-lg text-secondary mb-6">
             Your question has been received. Reference: <strong className="text-charcoal">#{success.id}</strong>.
           </p>
           <p className="text-secondary font-body">
             The Sheikh's office reviews inquiries in due course. Thank you for reaching out.
           </p>
           <button 
             onClick={() => { setSuccess(null); setQuestion(''); }}
             className="mt-8 px-6 py-2 border border-border rounded-md text-charcoal hover:bg-white transition-colors"
           >
             Submit Another Question
           </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-6 md:p-10 shadow-sm">
          <div className="mb-6">
            <label htmlFor="question" className="block text-sm font-bold text-charcoal mb-2">
              Your Question <span className="text-red-500">*</span>
            </label>
            <textarea
              id="question"
              required
              minLength={10}
              maxLength={4000}
              rows={6}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-ivory/50"
              placeholder="Type your question here (max 4000 characters)..."
            />
            <div className="flex justify-between mt-1 text-xs text-secondary">
               <span>Minimum 10 characters</span>
               <span>{question.length} / 4000</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
              />
              <span className="ml-2 text-sm font-medium text-charcoal">Submit anonymously</span>
            </label>
          </div>

          {!isAnonymous && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-ivory/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-ivory/50"
                  placeholder="For follow-up (optional)"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || question.length < 10}
              className="bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Question'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
