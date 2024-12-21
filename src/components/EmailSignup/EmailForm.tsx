import React, { useState } from 'react';
import { SuccessDialog } from './SuccessDialog';
import { saveEmail } from '../../utils/supabase';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setError(null);
      await saveEmail(email);
      setEmail('');
      setIsDialogOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-[#4A4A4A]/20 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] font-roboto"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#EBCE71] text-[#0F3D38] rounded-lg hover:bg-[#EBCE71]/90 transition-colors font-medium disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Notify Me'}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-600 text-sm font-medium">{error}</p>
        )}
      </form>

      <SuccessDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
}