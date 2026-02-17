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
                {/* Envelope */}
                <motion.div
                    className="w-96 h-64 bg-rose-400 rounded-2xl shadow-xl relative overflow-hidden flex items-center justify-center"
                    onClick={() => setOpen(!open)}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Flap */}
                    <motion.div
                        animate={{ rotateX: open ? 180 : 0 }}
                        transition={{ duration: 0.9 }}
                        className="absolute top-0 left-0 w-full h-32 bg-rose-500 origin-top"
                        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                    />

                    {/* Letter */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="w-80 bg-white rounded-xl shadow-lg p-7 text-center border border-rose-100"
                            >
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl font-semibold tracking-wide text-rose-500 mb-4"
                                >
                                    3rd Anniversary
                                </motion.h2>

                                <p className="text-gray-600 text-sm leading-relaxed min-h-[90px] font-light">
                                    {displayed}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-6 text-rose-400 text-sm tracking-widest"
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
