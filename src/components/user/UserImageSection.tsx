import { motion } from 'framer-motion';

export default function UserImageSection() {
    const text = 'Azərbaycan Texniki Universiteti ixtisas informasiya sistemi';
    const letters = text.split('');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.01, delayChildren: 0.01 * i },
        }),
    };

    const child = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 150,
            },
        },
    };
    return (
        <section
            className="w-full h-[600px] bg-cover bg-center relative flex items-center justify-center z-1"
            style={{ backgroundImage: "url('https://www.aztu.edu.az/web_admin/upload/files/aztu.edu.az/news/aztuyti.jpg')" }}
        >
            {/* Colored blur overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(20, 30, 79, 0.4)' }} />
            {/* Centered text */}
            <div className="relative flex flex-col items-center justify-center h-full w-full">
                {/* <h1 className="text-white text-4xl font-bold text-center">Welcome to AZTU</h1> */}
                <h1
                style={{
                    fontSize: 30,
                    color: "#fff",
                    marginBottom: 10
                }}
                className="flex justify-center items-center"
            >
                <motion.div
                    style={{ display: 'flex', fontSize: '2rem', fontWeight: 'bold' }}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((char, index) => (
                        <motion.span key={index} variants={child}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.div>
            </h1>
            </div>
        </section>
    )
}
