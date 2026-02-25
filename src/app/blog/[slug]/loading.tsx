export default function Loading() {
  return (
    <div className="bg-white p-8 rounded-xl shadow animate-pulse">
      {/* Fake date bar */}
      <div className="h-3 w-24 bg-gray-200 rounded mb-4"></div>
      
      {/* Fake title */}
      <div className="h-8 w-3/4 bg-gray-200 rounded mb-6"></div>
      
      {/* Fake content lines */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}