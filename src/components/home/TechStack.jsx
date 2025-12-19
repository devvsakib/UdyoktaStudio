import { motion } from "motion/react";
import { useApp } from "@/hooks/useApp";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";

function TechStack() {
    const { theme, t } = useApp();

    return (
        <section className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid gap-10 text-center"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                        <div className="flex justify-center mb-6">
                            <Code size={48} className="text-purple-500" />
                        </div>

                        {t.tech.title}

                    </h2>

                    <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        {t.tech.note}
                    </p>

                    <div className="relative w-full grid gap-10 items-start pl-10">
                        <div className={cn(
                            "absolute top-12 left-6 w-1 h-10/12 bg-linear-0",
                            theme === 'dark'
                                ? 'from-purple-800 via-purple-600 to-purple-300'
                                : 'bg-slate-200'
                        )} />

                        {/* Category nodes */}
                        {Object.entries(t.tech.stack).map(([category, data], i) => {
                            return (
                                <motion.div
                                    key={i}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 100, delay: i * 0.2 }}
                                    className={cn(
                                        "flex items-center gap-2 p-4 rounded-2xl",
                                        theme === 'dark'
                                            ? 'bg-slate-900 text-purple-300'
                                            : 'bg-white text-purple-700'
                                    )}
                                >
                                    <div className={cn(
                                        "w-5 h-5 rounded-full -ml-10 mr-10 z-10 border-2 border-purple-400",
                                        theme === 'dark' ? 'bg-purple-800' : 'bg-purple-200'
                                    )} />

                                    <div className="flex flex-col items-start">
                                        <div className="flex gap-2 mb-2">
                                            {/* Category icon */}
                                            {data.icon && <span className="text-2xl mb-1">{data.icon}</span>}
                                            {/* Category title */}
                                            <h3 className="font-bold text-2xl uppercase">{category}</h3>
                                        </div>
                                        {/* Tech pills with logos */}
                                        <div className="flex flex-wrap justify-center gap-2 mt-1">
                                            {data.techs.map((tech, j) => (
                                                <motion.div
                                                    key={j}
                                                    whileHover={{ scale: 1.1 }}
                                                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${theme === 'dark'
                                                        ? 'bg-purple-800 text-purple-200'
                                                        : 'bg-purple-100 text-purple-800'
                                                        }`}
                                                >
                                                    {tech.icon && (
                                                        <img
                                                            src={tech.icon}
                                                            alt={tech.name}
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                    )}
                                                    <span className="text-lg">{tech.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
export default TechStack;