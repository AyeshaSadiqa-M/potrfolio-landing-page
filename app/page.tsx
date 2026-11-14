const skills = [
  { icon: "</>", title: "HTML5 & CSS3", description: "Building accessible, responsive interfaces with semantic markup and thoughtful styling." },
  { icon: "JS", title: "JavaScript", description: "Bringing useful interactions and dynamic experiences to the web." },
  { icon: "Py", title: "Python Programming", description: "Writing clean scripts and practical solutions to everyday problems." },
  { icon: "⚛", title: "React.js", description: "Creating reusable components and modern, component-driven applications." },
  { icon: "⌁", title: "Cybersecurity", description: "Exploring network security, threat detection, and safer digital systems." },
]

const projects = [
  {
    number: "01",
    category: "CYBERSECURITY · PYTHON",
    title: "AI-Assisted Real-Time Network Intrusion Monitoring System",
    description: "A real-time network monitoring system built with Python, Raspberry Pi, and Scapy. It observes traffic, identifies suspicious activity, and surfaces security alerts through a monitoring dashboard.",
    tags: ["Python", "Raspberry Pi", "Scapy"],
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT · FRONTEND",
    title: "Personal Portfolio Website",
    description: "A responsive portfolio crafted with HTML5 and CSS3. Semantic structure, flexible layouts, and considered responsive details make the experience feel at home on every screen.",
    tags: ["HTML5", "CSS3", "Responsive design"],
  },
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function Page() {
  return (
    <>
      <header className="site-header" id="top">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Ayesha Sadiqa home"><span className="brand-mark">A</span><span>Ayesha Sadiqa<span className="brand-period">.</span></span></a>
          <div className="nav-links"><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
        </nav>
      </header>
      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1 id="hero-title">Ayesha<br /><span>Sadiqa.</span></h1>
            <p className="hero-role">Computer Science Graduate <span>·</span> Aspiring Software Developer</p>
            <p className="hero-intro">I&apos;m a curious builder who loves turning ideas into thoughtful digital experiences. I&apos;m exploring the intersection of web development, cybersecurity, and AI.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a><a className="button button-secondary" href="#contact">Get in touch</a></div>
            <div className="hero-note"><span className="note-line" /> Based in Pakistan <span className="note-separator">/</span> Available worldwide</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><div className="portrait-art" aria-hidden="true"><span className="portrait-shape portrait-shape-one" /><span className="portrait-shape portrait-shape-two" /><span className="monogram"><span>A</span><span>S</span></span><span className="portrait-caption">COMPUTER SCIENCE · 2026</span></div><div className="portrait-label"><span className="label-icon">✳</span><span><strong>Curious by nature</strong><small>Building with purpose</small></span></div></div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="float-card"><span className="float-card-icon">✦</span><span><strong>Always learning</strong><small>One project at a time</small></span></div>
            <span className="visual-caption">01 <span>—</span> A LITTLE INTRODUCTION</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /> A LITTLE ABOUT ME</div>
          <div className="about-grid"><h2 id="about-title">A foundation in code.<br /><span>A mind for what&apos;s next.</span></h2><div className="about-copy"><p>I&apos;m a Computer Science graduate with a genuine interest in building software that solves real problems. From the first sketch to the final detail, I enjoy the process of making ideas work.</p><p>My interests span web development, cybersecurity, and artificial intelligence and machine learning. I love tackling a new problem, learning a technology I haven&apos;t used before, and putting that knowledge into a practical project.</p><a className="text-link" href="#contact">A little more about working together <ArrowIcon /></a></div></div>
          <div className="about-stats"><div><strong>03<span>+</span></strong><small>Areas I&apos;m exploring</small></div><div><strong>∞</strong><small>Things left to learn</small></div><div className="stat-note">Thoughtful work,<br />one line at a time.</div></div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title"><div className="section-wrap"><div className="section-kicker"><span>02</span><span className="kicker-rule" /> MY TOOLKIT</div><div className="section-heading-row"><div><h2 id="skills-title">Curiosity, meet <span>capability.</span></h2><p className="section-subtitle">A growing toolkit for building useful things.</p></div><span className="heading-index">A–E / 05</span></div><div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.title}><div className="skill-top"><span className="skill-icon" aria-hidden="true">{skill.icon}</span><span className="skill-number">0{index + 1}</span></div><h3>{skill.title}</h3><p>{skill.description}</p><span className="skill-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title"><div className="section-kicker"><span>03</span><span className="kicker-rule" /> SELECTED WORK</div><div className="section-heading-row"><div><h2 id="projects-title">Ideas into <span>something real.</span></h2><p className="section-subtitle">A couple of projects that brought learning to life.</p></div><span className="heading-index">2024 — 2026</span></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-art"><div className={`art-visual art-${project.number}`} aria-hidden="true">{project.number === "01" ? <><span className="pulse-ring ring-a" /><span className="pulse-ring ring-b" /><span className="pulse-ring ring-c" /><span className="radar-core">⌁</span><span className="radar-point point-a" /><span className="radar-point point-b" /><span className="radar-point point-c" /><span className="radar-scan" /></> : <><span className="browser-bar"><i /><i /><i /></span><span className="browser-layout"><i /><i /><i /><i /><i /></span><span className="browser-cursor">↗</span></>}</div><span className="project-number">{project.number}</span></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-bottom"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="github-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label={`Add GitHub repository link for ${project.title}`}>GitHub <ArrowIcon /></a></div></div></article>)}</div><p className="github-note">GitHub links are placeholders — replace them with your project repository URLs.</p></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-wrap"><div className="section-kicker section-kicker-light"><span>04</span><span className="kicker-rule" /> THE NEXT CHAPTER</div><div className="contact-grid"><div><p className="contact-overline">HAVE A PROJECT IN MIND?</p><h2 id="contact-title">Let&apos;s make<br />something <em>matter.</em></h2><p className="contact-intro">I&apos;m always happy to talk about technology, opportunities, or an interesting idea. My inbox is open.</p><a className="contact-email" href="mailto:your.email@example.com">your.email@example.com <ArrowIcon /></a><p className="placeholder-note">Replace with your email address</p></div><div className="contact-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span>LinkedIn</span><span className="contact-placeholder">Add your profile URL</span><ArrowIcon /></a><a href="https://github.com/" target="_blank" rel="noreferrer"><span>GitHub</span><span className="contact-placeholder">Add your profile URL</span><ArrowIcon /></a><a href="mailto:your.email@example.com"><span>Email</span><span className="contact-placeholder">Say hello, anytime</span><ArrowIcon /></a><div className="contact-availability"><span className="status-dot" /> OPEN TO INTERNSHIPS &amp; OPPORTUNITIES</div></div></div><div className="contact-bottom"><span>GOOD THINGS START WITH A CONVERSATION.</span><span>PAKISTAN · AVAILABLE WORLDWIDE</span></div></div></section>
      </main>
      <footer className="site-footer"><div className="footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">A</span><span>Ayesha Sadiqa<span className="brand-period">.</span></span></a><p>© 2026 Ayesha Sadiqa. All Rights Reserved.</p><div className="footer-right"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a className="back-top" href="#top">Back to top ↑</a></div></div></footer>
    </>
  )
}
