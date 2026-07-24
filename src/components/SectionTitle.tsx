import { motion } from "framer-motion";

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  const words = title.split(" ");

  return (
    <div>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-[#B5B5B5]"
        >
          <span className="mr-2 inline-block h-px w-8 align-middle bg-[#E10600]" />
          {kicker}
        </motion.p>
      )}
      <h2 className="max-w-full overflow-visible font-display text-[clamp(2.8rem,10vw,4.75rem)] font-semibold leading-[0.95] md:text-7xl">
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="inline-block align-top">
            {Array.from(word).map((ch, i) => (
              <motion.span
                key={`${word}-${wordIndex}-${i}`}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: wordIndex * 0.35 + i * 0.025, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && <span className="inline-block w-[0.35em]" />}
          </span>
        ))}
      </h2>
    </div>
  );
}
