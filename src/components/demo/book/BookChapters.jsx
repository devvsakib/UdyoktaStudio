export default function BookChapters({ chapters }) {
    return (
        <main className="py-16 px-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
                What is Inside This Book?
            </h3>
            <div className="space-y-3">
                {chapters.map((chapter, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-xl border border-white/5 bg-slate-900/20 text-xs sm:text-sm font-medium text-slate-300 hover:bg-slate-900/50 transition-all"
                    >
                        {chapter}
                    </div>
                ))}
            </div>
        </main>
    );
}