export default function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  );
}