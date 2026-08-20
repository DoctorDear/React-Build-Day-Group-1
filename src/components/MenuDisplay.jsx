export default function MenuDisplay({ item, isShuffling }) {
  if (!item) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl bg-stone-100 px-6 text-center text-stone-500">
        <span className="mb-3 text-4xl" aria-hidden="true">
          🍽️
        </span>
        <p className="text-sm font-medium">เลือกโหมดเพื่อเริ่มสุ่มเมนู</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
        <img
          src={item.imageUrl || item.image}
          alt={item.name}
          className={`h-full w-full object-cover transition duration-300 ${
            isShuffling ? "scale-105 blur-sm" : "scale-100"
          }`}
        />
        {isShuffling && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-950/10">
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-stone-700 shadow-sm">
              กำลังสุ่มเมนู...
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
          {item.category}
        </p>
        <h2 className="text-2xl font-black leading-tight text-stone-900">
          {item.name}
        </h2>
      </div>
    </div>
  );
}
