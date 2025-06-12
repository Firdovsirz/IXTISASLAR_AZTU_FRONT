import { Link } from 'react-router';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Subjects() {
    const text = 'Azərbaycan Texniki Universitetində tədris olunan ixtisaslar';
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
    const subjects = [
        'Kompüter texnologiyaları (ITT)',
        'Mühəndis riyaziyyatı və süni intellekt (ITT)',
        'Radiotexnika və Telekommunikasiya (ITT)',
        'Kibertəhlükəsizlik (ITT)'
    ];
    return (
        <section className="w-full flex flex-col justify-center py-10 px-20">
            <h1
                style={{
                    fontSize: 30,
                    color: "rgb(20, 30, 79)",
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
            <div className='w-full'>
                <ul className='w-[40%]'>
                    {subjects.map((subject, subjectId) => {
                        return (
                            <Link to={`/subjects/${subject}`} className='w-full'>
                                <li
                                    key={subjectId}
                                    className="flex justify-between items-center w-full my-10 rounded-[10px] border border-gray-300 p-4 transition-colors duration-300 text-l hover:bg-[rgb(20,30,79)] hover:text-white cursor-pointer"
                                >
                                    <p>
                                        {subject}
                                    </p>
                                    <ArrowOutwardIcon />
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}