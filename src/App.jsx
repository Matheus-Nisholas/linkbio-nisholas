import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRocket,
  FaJava
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiReact,
  SiDocker
} from "react-icons/si";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-900/80 backdrop-blur-md p-6 rounded-3xl w-full max-w-sm space-y-6 shadow-xl hover:shadow-purple-500/30 transition-all duration-500"
      >
        {/* Perfil */}
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D4D03AQH_zWi5X3h51Q/profile-displayphoto-scale_400_400/B4DZgwIpgXGgAg-/0/1753154231727?e=1756944000&v=beta&t=1BnMFKcjnfQ8Ibc7BXjdjCqhLPidzkJpUlPWHoLWxRE"
            alt="Nisholas"
            className="w-16 h-16 rounded-full border-2 border-purple-500"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div>
            <h1 className="text-xl font-bold leading-tight">Matheus Nísholas</h1>
            <p className="text-sm text-zinc-400">Desenvolvedor Java</p>
          </div>
        </div>

        {/* Hard Skills */}
        <div className="bg-zinc-800 p-4 rounded-2xl">
          <h2 className="text-purple-500 font-semibold text-sm mb-3 tracking-wide">
            Hard Skills
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl justify-start items-center text-white">
            <FaJava title="Java" className="hover:text-orange-400 transition-transform hover:scale-110" />
            <SiJavascript title="JavaScript" className="hover:text-yellow-400 transition-transform hover:scale-110" />
            <SiHtml5 title="HTML5" className="hover:text-orange-500 transition-transform hover:scale-110" />
            <SiCss3 title="CSS3" className="hover:text-blue-400 transition-transform hover:scale-110" />
            <SiReact title="React" className="hover:text-cyan-400 transition-transform hover:scale-110" />
            <SiAngular title="Angular" className="hover:text-red-500 transition-transform hover:scale-110" />
            <SiPostgresql title="PostgreSQL" className="hover:text-blue-300 transition-transform hover:scale-110" />
            <SiDocker title="Docker" className="hover:text-sky-500 transition-transform hover:scale-110" />
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="grid grid-cols-3 gap-4 sm:gap-3">
          {[
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/onisholas_",
              color: "hover:text-pink-400 hover:shadow-[0_0_15px_#ec4899]"
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/nisholas-dev",
              color: "hover:text-gray-300 hover:shadow-[0_0_15px_#9ca3af]"
            },
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/nisholas-dev",
              color: "hover:text-blue-400 hover:shadow-[0_0_15px_#60a5fa]"
            }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              className={`bg-zinc-800 rounded-xl p-3 flex justify-center items-center text-2xl text-white transition duration-300 hover:scale-110 hover:-translate-y-1 ${item.color}`}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Portfólio */}
        <motion.a
          href="https://seu-link-do-portfolio.com"
          target="_blank"
          className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-purple-500/60"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRocket className="text-2xl animate-pulse" />
          <span className="text-lg tracking-wide">Portfólio</span>
        </motion.a>
      </motion.div>
    </div>
  );
}
