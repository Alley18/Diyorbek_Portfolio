import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --white:   #ffffff;
      --off:     #f9f9f7;
      --border:  #e8e8e4;
      --muted:   #a0a09a;
      --text:    #1a1a18;
      --accent:  #1a1a18;
      --green:   #16a34a;
      --sans:    'Syne', sans-serif;
      --mono:    'Syne Mono', monospace;
    }
    html { scroll-behavior: smooth; }
    body { background: var(--white); color: var(--text); font-family: var(--sans); overflow-x: hidden; }
    ::selection { background: var(--text); color: var(--white); }
    ::-webkit-scrollbar { width: 2px; }
    ::-webkit-scrollbar-thumb { background: var(--border); }
    a { color: inherit; text-decoration: none; }
  `}</style>
);

/* ── Nav ── */
const Nav = () => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const fn = () => setTop(window.scrollY < 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.25rem 2.5rem",
        background: top ? "transparent" : "rgba(255,255,255,0.92)",
        backdropFilter: top ? "none" : "blur(12px)",
        borderBottom: top ? "none" : "1px solid var(--border)",
        transition: "all 0.3s",
      }}>
      <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
        Diyorbek<span style={{ color: "var(--muted)" }}>.dev</span>
      </span>
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Projects", "Skills", "About", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: "var(--sans)", fontSize: "0.82rem", fontWeight: 500,
            color: "var(--muted)", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "var(--text)"}
          onMouseLeave={e => e.target.style.color = "var(--muted)"}
          >{l}</a>
        ))}
      </nav>
    </motion.header>
  );
};

/* ── Hero ── */
const Hero = () => (
  <section style={{
    minHeight: "100vh", display: "flex", flexDirection: "column",
    justifyContent: "center", padding: "0 2.5rem",
    maxWidth: 800, margin: "0 auto", width: "100%",
  }}>
    {/* Available badge */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem" }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", display: "block" }} />
      <span style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--muted)" }}>
        Available for internship · Seoul, Korea
      </span>
    </motion.div>

    {/* Name + title */}
    <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
      {["Diyorbek", "Mirzaakbarov"].map((word, i) => (
        <motion.div key={word} initial={{ y: "100%" }} animate={{ y: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h1 style={{
            fontFamily: "var(--sans)", fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.0,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>{word}</h1>
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.6 }}>
      <p style={{
        fontFamily: "var(--sans)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        fontWeight: 400, color: "var(--muted)", lineHeight: 1.6,
        maxWidth: 520, marginBottom: "2.5rem",
      }}>
        Mobile App Developer & CS student at Sejong University.
        I build clean, fast apps — focused on Flutter and modern frontend.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a href="#projects" style={{
          fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.85rem",
          background: "var(--text)", color: "var(--white)",
          padding: "0.75rem 1.75rem", borderRadius: "0.5rem",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >See my work →</a>
        <a href="#contact" style={{
          fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.85rem",
          background: "transparent", color: "var(--text)",
          padding: "0.75rem 1.75rem", borderRadius: "0.5rem",
          border: "1.5px solid var(--border)",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--text)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
        >Get in touch</a>
      </div>
    </motion.div>
  </section>
);

/* ── Projects ── */
const projects = [
  {
    name: "Project One",
    desc: "A short one-liner about what this app does and what problem it solves.",
    tags: ["Flutter", "Firebase", "Mobile"],
    link: "https://github.com/Alley18",
    linkLabel: "View on GitHub",
    status: "demo",
  },
  {
    name: "Project Two",
    desc: "A short one-liner about what this app does and what problem it solves.",
    tags: ["React", "Node.js", "REST API"],
    link: "https://github.com/Alley18",
    linkLabel: "View on GitHub",
    status: "demo",
  },
  {
    name: "Project Three",
    desc: "A short one-liner about what this app does and what problem it solves.",
    tags: ["Flutter", "Dart", "UX Design"],
    link: "https://github.com/Alley18",
    linkLabel: "View on GitHub",
    status: "demo",
  },
  {
    name: "Project Four",
    desc: "A short one-liner about what this app does and what problem it solves.",
    tags: ["React Native", "JavaScript", "API"],
    link: "https://github.com/Alley18",
    linkLabel: "View on GitHub",
    status: "demo",
  },
];

const ProjectCard = ({ p, i }) => {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "var(--off)" : "var(--white)",
        border: "1.5px solid",
        borderColor: hov ? "var(--text)" : "var(--border)",
        borderRadius: "0.75rem",
        padding: "1.75rem 2rem",
        transition: "all 0.25s ease",
        display: "flex", flexDirection: "column", gap: "1rem",
      }}>
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h3 style={{
            fontFamily: "var(--sans)", fontWeight: 700,
            fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--text)",
            marginBottom: "0.4rem",
          }}>{p.name}</h3>
          <p style={{
            fontFamily: "var(--sans)", fontSize: "0.85rem",
            color: "var(--muted)", lineHeight: 1.55,
          }}>{p.desc}</p>
        </div>
        {/* Arrow */}
        <motion.span animate={{ x: hov ? 0 : -4, opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem", marginTop: "0.1rem" }}>
          ↗
        </motion.span>
      </div>

      {/* Tags + link */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontFamily: "var(--mono)", fontSize: "0.65rem",
              padding: "0.2rem 0.6rem", borderRadius: "2rem",
              background: "var(--border)", color: "var(--muted)",
            }}>{t}</span>
          ))}
        </div>
        <a href={p.link} target="_blank" rel="noreferrer" style={{
          fontFamily: "var(--mono)", fontSize: "0.68rem",
          color: "var(--text)", fontWeight: 500,
          display: "flex", alignItems: "center", gap: "0.3rem",
          borderBottom: "1px solid var(--border)", paddingBottom: "1px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--text)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
        >
          {p.status === "demo" && (
            <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem",
              background: "#fef3c7", color: "#92400e",
              padding: "0.15rem 0.45rem", borderRadius: "2rem", marginRight: "0.3rem" }}>
              demo
            </span>
          )}
          {p.linkLabel} →
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" style={{ padding: "7rem 2.5rem", maxWidth: 800, margin: "0 auto" }}>
    <SectionLabel label="Projects" />
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2.5rem" }}>
      {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
    </div>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--muted)",
        marginTop: "1.5rem", textAlign: "center" }}>
      More projects on{" "}
      <a href="https://github.com/Alley18" target="_blank" rel="noreferrer"
        style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}>
        github.com/Alley18
      </a>
    </motion.p>
  </section>
);

/* ── Skills ── */
const skillCols = [
  { label: "Mobile", items: ["Flutter", "Dart", "React Native"] },
  { label: "Frontend", items: ["React.js", "JavaScript", "TypeScript", "HTML / CSS"] },
  { label: "Backend", items: ["Node.js", "REST APIs", "Firebase"] },
  { label: "Other", items: ["Git & GitHub", "Figma", "Python", "Java", "C++"] },
];

const Skills = () => (
  <section id="skills" style={{
    padding: "7rem 2.5rem",
    background: "var(--off)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
  }}>
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <SectionLabel label="Skills" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "2.5rem",
        marginTop: "2.5rem",
      }}>
        {skillCols.map((col, ci) => (
          <motion.div key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.55 }}>
            <p style={{
              fontFamily: "var(--mono)", fontSize: "0.65rem",
              textTransform: "uppercase", letterSpacing: "0.15em",
              color: "var(--muted)", marginBottom: "1rem",
            }}>{col.label}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {col.items.map(s => (
                <span key={s} style={{
                  fontFamily: "var(--sans)", fontWeight: 500,
                  fontSize: "0.9rem", color: "var(--text)",
                }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── About ── */
const About = () => (
  <section id="about" style={{ padding: "7rem 2.5rem", maxWidth: 800, margin: "0 auto" }}>
    <SectionLabel label="About" />
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
      style={{ marginTop: "2.5rem", display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      {/* Photo */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flexShrink: 0 }}>
        <div style={{
          width: 180, height: 220,
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1.5px solid var(--border)",
          background: "var(--off)",
        }}>
          <img
            src="/mnt/user-data/uploads/photo_2025-05-19_16-37-39.jpg"
            alt="Diyorbek Mirzaakbarov"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", color: "var(--muted)",
          textAlign: "center", marginTop: "0.6rem", letterSpacing: "0.1em" }}>
          @ Sejong University
        </p>
      </motion.div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 220 }}>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "1.1rem",
          lineHeight: 1.8, color: "var(--text)", marginBottom: "1.2rem",
          fontWeight: 400,
        }}>
          I'm a Computer Science student at Sejong University in Seoul, originally from Uzbekistan.
          I love building things people actually use — clean interfaces, smooth apps, code that makes sense.
        </p>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "1rem",
          lineHeight: 1.8, color: "var(--muted)",
        }}>
          I'm comfortable across the full stack but most passionate about frontend and mobile —
          especially Flutter, which I'm currently going deep on. I pick up new languages and
          frameworks fast, and I care a lot about how things feel to the person using them.
          Right now I'm looking for an internship where I can build real things and keep learning.
        </p>
      </div>
    </motion.div>
  </section>
);

/* ── Contact ── */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "diyorbek8140@gmail.com";
  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: "GitHub", url: "https://github.com/Alley18" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/diyorbek-mirzaakbarov-2517a7210/" },
  ];

  return (
    <section id="contact" style={{
      padding: "7rem 2.5rem",
      background: "var(--text)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{
            fontFamily: "var(--mono)", fontSize: "0.68rem",
            textTransform: "uppercase", letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem",
          }}>Contact</p>
          <h2 style={{
            fontFamily: "var(--sans)", fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.03em", color: "var(--white)",
            lineHeight: 1.1, marginBottom: "1.5rem",
          }}>Let's work together.</h2>
          <p style={{
            fontFamily: "var(--sans)", fontSize: "1rem",
            color: "rgba(255,255,255,0.5)", lineHeight: 1.6,
            maxWidth: 420, marginBottom: "2.5rem",
          }}>
            Open to internships and collaborations. Drop me an email or connect on LinkedIn.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
          {/* Email */}
          <button onClick={copy} style={{
            fontFamily: "var(--mono)", fontSize: "0.9rem",
            background: "rgba(255,255,255,0.07)",
            color: "var(--white)",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "0.85rem 1.5rem", borderRadius: "0.5rem",
            cursor: "pointer", transition: "background 0.2s",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
          >
            {copied ? "✓ Copied!" : email}
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>
              {copied ? "" : "click to copy"}
            </span>
          </button>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.25rem", marginTop: "0.5rem" }}>
            {links.map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={{
                fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.85rem",
                color: "rgba(255,255,255,0.5)", transition: "color 0.2s",
                display: "flex", alignItems: "center", gap: "0.3rem",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >{l.label} ↗</a>
            ))}
          </div>
        </motion.div>

        {/* Footer line */}
        <div style={{
          marginTop: "5rem", paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem",
        }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)" }}>
            Diyorbek Mirzaakbarov
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
};

/* ── Section Label ── */
const SectionLabel = ({ label }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
    style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <p style={{
      fontFamily: "var(--mono)", fontSize: "0.65rem",
      textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)",
    }}>{label}</p>
    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
  </motion.div>
);

/* ── App ── */
export default function App() {
  return (
    <>
      <G />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}