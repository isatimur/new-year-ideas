'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';

function NotFoundContent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="w-full bg-blue-500 hover:bg-blue-600"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
} 