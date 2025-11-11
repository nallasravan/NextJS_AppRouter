export default function Home() {
  return (
    
    <div className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
        Welcome Home!
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Zero inline styles. Pure Tailwind CSS magic.
      </p>
      <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition">
        Get Started
      </button>
    </div>
  );
}