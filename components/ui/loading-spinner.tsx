export function LoadingSpinner() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      role="status"
      aria-label="Loading"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 animate-spin border-t-blue-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full border-4 border-purple-200 animate-spin border-t-purple-500 animation-delay-150"></div>
        </div>
      </div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
} 