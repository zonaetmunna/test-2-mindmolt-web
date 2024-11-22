import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Loader className="animate-spin text-gray-800" size={48} />
    </div>
  );
}
