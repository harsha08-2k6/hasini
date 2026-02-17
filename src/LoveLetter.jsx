import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Professional Anniversary Letter + Polaroids coming OUT from letter
// Updated: Photos move further away so they are clearly visible

export default function LoveLetterProfessional() {
    const [open, setOpen] = useState(false);
    const [showText, setShowText] = useState(false);
    const [displayed, setDisplayed] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    const message =
        "Three years of fire and fights, but you're still the only person I want to come home to. Happy 3rd anniversary nanna ❤️♾️.";

    const photos = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
    ];

    // Envelope opens only on click, not automatically

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!open) return;
        const t = setTimeout(() => setShowText(true), 500);
        return () => clearTimeout(t);
    }, [open]);

    useEffect(() => {
        if (!showText) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(message.slice(0, i));
            i++;
            if (i > message.length) clearInterval(interval);
        }, 28);
        return () => clearInterval(interval);
    }, [showText]);

    // Show desktop-only message on mobile
    if (isMobile) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-neutral-100 p-6">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
                    <div className="text-6xl mb-6">💻</div>
                    <h2 className="text-2xl font-bold text-rose-500 mb-4">Desktop Required</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This special anniversary experience is designed for desktop viewing only.
                        Please open this page on a desktop or laptop computer to view the full interactive love letter.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-neutral-100 relative overflow-hidden">

            {/* BACKGROUND PATTERN */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10">❤️</div>
                <div className="absolute top-32 left-1/4">💕</div>
                <div className="absolute top-20 right-1/3">💖</div>
                <div className="absolute top-48 right-20">💗</div>
                <div className="absolute bottom-20 left-1/3">❤️</div>
                <div className="absolute bottom-40 right-1/4">💕</div>
                <div className="absolute top-1/3 left-20">💖</div>
                <div className="absolute bottom-1/3 right-32">💗</div>
            </div>

            {/* ANIMATED FLOATING PARTICLES */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [-20, -100],
                        opacity: [0, 0.4, 0],
                        x: [0, Math.sin(i) * 30]
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut"
                    }}
                    className="absolute bottom-0 text-rose-300 text-sm"
                    style={{ left: `${10 + i * 12}%` }}
                >
                    {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '✨' : '🌸'}
                </motion.div>
            ))}

            {/* DECORATIVE BORDER CORNERS */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-rose-300/30 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-pink-300/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-rose-300/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-pink-300/30 rounded-br-3xl"></div>

            {/* ADDITIONAL NATURE ELEMENTS */}
            <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-1/4 text-5xl opacity-25"
            >
                🌺
            </motion.div>

            <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-1/4 text-4xl opacity-25"
            >
                🌷
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-12 text-3xl opacity-20"
            >
                🍃
            </motion.div>

            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 right-16 text-3xl opacity-20"
            >
                🌿
            </motion.div>

            {/* GRADIENT OVERLAY FOR DEPTH */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-rose-200/20"></div>

            {/* FLOATING HEARTS DECORATION */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-20 text-rose-300 text-4xl opacity-40"
            >
                ❤️
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-40 right-32 text-pink-300 text-3xl opacity-30"
            >
                💕
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-32 left-40 text-rose-400 text-3xl opacity-35"
            >
                💖
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 8, 0],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-40 right-28 text-pink-400 text-2xl opacity-30"
            >
                💗
            </motion.div>

            {/* SPARKLES */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 text-yellow-300 text-2xl"
            >
                ✨
            </motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-1/3 right-1/4 text-yellow-200 text-xl"
            >
                ✨
            </motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-1/4 left-1/3 text-amber-200 text-xl"
            >
                ⭐
            </motion.div>

            {/* DECORATIVE CORNER ELEMENTS */}
            <div className="absolute top-10 left-10 text-rose-200 text-6xl opacity-20">
                🌹
            </div>

            <div className="absolute bottom-10 right-10 text-pink-200 text-5xl opacity-20">
                🌸
            </div>

            {/* POLAROIDS — ONLY SHOW AFTER OPEN */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* LEFT TOP */}
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.8 }}
                            animate={{ x: -340, y: -180, opacity: 1, rotate: -10, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute w-28 bg-white p-2 shadow-xl rounded-md z-0"
                            style={{ top: "50%", left: "50%" }}
                        >
                            <div className="w-full h-32 overflow-hidden rounded">
                                <img src={photos[0]} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-3" />
                        </motion.div>

                        {/* LEFT BOTTOM */}
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.8 }}
                            animate={{ x: -380, y: 160, opacity: 1, rotate: -6, scale: 1 }}
                            transition={{ duration: 1.1, delay: 0.1 }}
                            className="absolute w-28 bg-white p-2 shadow-xl rounded-md z-0"
                            style={{ top: "50%", left: "50%" }}
                        >
                            <div className="w-full h-32 overflow-hidden rounded">
                                <img src={photos[1]} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-3" />
                        </motion.div>

                        {/* RIGHT TOP */}
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.8 }}
                            animate={{ x: 320, y: -200, opacity: 1, rotate: 10, scale: 1 }}
                            transition={{ duration: 1.1, delay: 0.2 }}
                            className="absolute w-28 bg-white p-2 shadow-xl rounded-md z-0"
                            style={{ top: "50%", left: "50%" }}
                        >
                            <div className="w-full h-32 overflow-hidden rounded">
                                <img src={photos[2]} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-3" />
                        </motion.div>

                        {/* RIGHT BOTTOM */}
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.8 }}
                            animate={{ x: 360, y: 170, opacity: 1, rotate: 6, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="absolute w-28 bg-white p-2 shadow-xl rounded-md z-0"
                            style={{ top: "50%", left: "50%" }}
                        >
                            <div className="w-full h-32 overflow-hidden rounded">
                                <img src={photos[3]} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-3" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="relative z-10">
                {/* Envelope - Enhanced with better shadows and glow */}
                <motion.div
                    className="w-96 h-64 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center"
                    style={{
                        boxShadow: '0 20px 60px rgba(244, 63, 94, 0.3), 0 0 40px rgba(251, 113, 133, 0.2)'
                    }}
                    onClick={() => setOpen(!open)}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 25px 70px rgba(244, 63, 94, 0.4), 0 0 50px rgba(251, 113, 133, 0.3)'
                    }}
                >
                    {/* Flap - Enhanced gradient */}
                    <motion.div
                        animate={{ rotateX: open ? 180 : 0 }}
                        transition={{ duration: 0.9 }}
                        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-rose-500 to-rose-600 origin-top"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                            boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.1)'
                        }}
                    />

                    {/* Letter */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="w-80 bg-gradient-to-br from-white to-rose-50/30 rounded-xl shadow-2xl p-7 text-center border-2 border-rose-200/50"
                                style={{
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
                                }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4"
                                    style={{
                                        fontFamily: '"Playfair Display", Georgia, serif',
                                        textShadow: '0 2px 10px rgba(244, 63, 94, 0.1)'
                                    }}
                                >
                                    3rd Anniversary
                                </motion.h2>

                                <p className="text-gray-700 text-base leading-relaxed min-h-[90px] font-normal" style={{ fontFamily: '"Lora", Georgia, serif' }}>
                                    {displayed}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="mt-6 text-rose-500 text-sm tracking-widest font-semibold"
                                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                                >
                                    With Love
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
