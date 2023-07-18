export function LoadingSkeleton() {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-2xl flex flex-col sm:flex-row gap-5 select-none">
      <div className="sm:w-72 rounded-xl bg-gray-200 animate-pulse h-[96vh]">
        <div className="class">
        </div>
      </div>
    </div>
   
 )
}