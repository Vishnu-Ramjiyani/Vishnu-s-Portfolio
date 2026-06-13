import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
    const textItems = [
        "JAVA FULL STACK DEVELOPER",
        "SPRING BOOT SPECIALIST",
        "REACT DEVELOPER",
        "REST API DESIGNER",
        "POSTGRESQL & DATABASES"
    ];

    // Double the array to create a seamless loop
    const loopedItems = [...textItems, ...textItems, ...textItems];

    return (
        <div className="w-full bg-brand-primary py-4 overflow-hidden relative -rotate-1 mt-10 z-20">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-primary to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-primary to-transparent z-10" />
            
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {loopedItems.map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <span className="text-white font-black text-2xl md:text-4xl uppercase tracking-widest mix-blend-overlay opacity-90 font-serif">
                            {item}
                        </span>
                        <span className="mx-8 text-white/50 text-2xl">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
