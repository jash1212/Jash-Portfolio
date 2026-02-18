import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden z-20 bg-[#E6E6E6]">
            {/* Static Background - No Animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Optional: Add static grid lines if desired, or just keep it clean as requested "not live" */}
                {/* For now, just the background color as per "remove live bg" */}
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-black leading-none"
                style={{ whiteSpace: 'nowrap' }}
            >
                Jash Solanki
            </motion.h1>
        </section>
    );
};

export default Footer;
