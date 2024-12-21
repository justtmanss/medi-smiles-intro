import React from 'react';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
        <h3 className="text-xl font-playfair font-semibold mb-2 text-[#0F4C81]">
          Thank You!
        </h3>
        <p className="text-[#4A4A4A] mb-4">
          You've been added to our notification list. We'll keep you updated on our launch!
        </p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-[#EBCE71] text-[#0F3D38] rounded-lg hover:bg-[#EBCE71]/90 transition-colors font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}