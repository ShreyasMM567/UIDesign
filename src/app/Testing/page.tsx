// pages/index.js
export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="relative grid grid-cols-12 gap-4 w-full max-w-6xl px-4">
          {/* Element 1 */}
          <div className="col-span-12 bg-blue-500 p-8 text-white rounded-lg">
            Element 1
          </div>
  
          {/* Element 2 */}
          <div className="col-span-12 bg-red-500 p-8 text-white rounded-lg">
            Element 2
          </div>
  
          {/* Element 3 (col-span-5) */}
          <div className="col-span-5 bg-green-500 p-8 text-white rounded-lg">
            Element 3
          </div>
  
          {/* Element 4 (Initially col-span-7, but will overlap Element 3 and expand beyond its width) */}
          <div className="relative col-span-7 bg-yellow-500 p-8 text-white rounded-lg">
            {/* Element 4 - Overlapping over Element 3 */}
            <div className="absolute top-0 transform right-[100px] w-[100%] bg-yellow-700 p-8 text-white rounded-lg z-10">
              Element 4 (Overlapping)
            </div>
          </div>
        </div>
      </div>
    );
  }
  