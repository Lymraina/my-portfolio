import './App.css'

const technicalSkills = ['Python', 'C++', 'SQL', 'HTML', 'CSS', 'Cybersecurity']
const tools = ['Canva', 'CapCut']
const softSkills = ['Analytical Thinking', 'Communication', 'Team Collaboration', 'Problem Solving']
const languages = ['English', 'Hindi', 'Konkani', 'Marathi', 'Kannada (intermediate)', 'Japanese (Basics)']
const education = [
  {
    title: 'NMAM Institute of Technology, Nitte',
    subtitle: 'B.Tech in Cybersecurity',
    detail: 'CGPA: 8.92 (3rd Year, 6th Semester)',
  },
  {
    title: 'Poornaprajna College (PPC), Udupi',
    subtitle: '12th Grade',
    detail: 'Percentage: 93%',
  },
]
const certifications = [
  'Salesforce Certification — CRM, cloud computing, and business process automation',
  'Oracle Cloud Infrastructure 2025 Certified — AI Foundations Associate',
  'Google Cybersecurity Certification — SIEM tools and Intrusion Detection Systems (IDS)',
  'Hedera Blockchain Certification — blockchain fundamentals and smart contracts',
]
const projects = [
  {
    title: 'Human-Centric Adaptive Cryptography System',
    date: 'Dec 2025',
    highlights: [
      'Adaptive AES-128/256 encryption based on behavioural risk analysis',
      'Achieved 92% detection accuracy with only 7% false positives',
      'Continuous authentication using keystroke dynamics and system metrics',
      'Built with Python, Pynput, Psutil, NumPy, and PyCryptodome',
    ],
  },
  {
    title: 'Responsive Flower E-Commerce Web Application',
    date: 'Nov 2025',
    highlights: [
      'Created a React + Vite + Tailwind CSS storefront with client-side routing',
      'Implemented a real-time shopping cart for seamless navigation',
    ],
  },
  {
    title: 'Hotel Network with VLANs, Inter-VLAN Routing, NAT, and Firewall',
    date: 'Aug 2024',
    highlights: [
      'Engineered segmented VLAN design to reduce broadcast traffic',
      'Deployed Inter-VLAN routing, NAT, and firewall rules for secure network isolation',
    ],
  },
]
const participation = [
  {
    title: 'Branch Captain — PROTON',
    detail: 'Led branch activities, managed social media, designed digital campaigns, and produced cyber scam awareness videos.',
  },
  {
    title: 'NSS Volunteer',
    detail: 'Supported community outreach events and public assistance programs.',
  },
]
const achievements = [
  {
    title: 'Flinders AI Competition 2026',
    detail: 'Presented an AI-powered website during a hackathon hosted by Flinders University.',
  },
  {
    title: 'Herathon Hackathon — Top 10 Finalist',
    detail: 'Built She Finance Hub, a full-stack platform for monetizing skills and supporting income sustainability.',
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Cybersecurity Engineering Student</p>
          <h1>LYMRAINA VIJAY RICHARD DSOUZA</h1>
          <p className="hero-description">
            B.Tech Cybersecurity student with strong programming, networking, and analytical skills. Passionate about building secure systems,
            solving technical problems, and applying cybersecurity knowledge to technology projects.
          </p>
          <div className="hero-links">
            <a href="mailto:lymrainadsouza10@gmail.com">lymrainadsouza10@gmail.com</a>
            <a href="tel:+917400351980">+91 7400351980</a>
            <a
              href="https://linkedin.com/in/lymraina-dsouza-b36085323"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Lymraina" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">8.92</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">93%</span>
            <span className="stat-label">12th Grade</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">4+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card summary-card">
          <h2>Summary</h2>
          <p>
            Cybersecurity Engineering student specializing in computer science with a strong foundation in Python,
            C++, SQL, networking, and security principles. Experienced in technical leadership, awareness campaigns,
            and applied cybersecurity projects. Motivated to contribute to secure technology initiatives and continue mastering complex systems.
          </p>
        </section>

        <section className="section-grid">
          <article className="card">
            <h3>Skills</h3>
            <div className="tag-group">
              {technicalSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
            <div className="tag-group">
              {tools.map((tool) => (
                <span key={tool} className="tag secondary">
                  {tool}
                </span>
              ))}
            </div>
            <div className="tag-group">
              {softSkills.map((skill) => (
                <span key={skill} className="tag tertiary">
                  {skill}
                </span>
              ))}
            </div>
            <div className="tag-group">
              {languages.map((lang) => (
                <span key={lang} className="tag outline">
                  {lang}
                </span>
              ))}
            </div>
          </article>

          <article className="card">
            <h3>Education</h3>
            {education.map((item) => (
              <div key={item.title} className="detail-block">
                <h4>{item.title}</h4>
                <p className="subtle">{item.subtitle}</p>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>
        </section>

        <section className="card">
          <h3>Certifications</h3>
          <ul className="list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h3>Projects</h3>
          {projects.map((project) => (
            <div key={project.title} className="project-block">
              <div className="project-header">
                <h4>{project.title}</h4>
                <span>{project.date}</span>
              </div>
              <ul className="list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section-grid">
          <article className="card">
            <h3>Participation</h3>
            {participation.map((item) => (
              <div key={item.title} className="detail-block">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>

          <article className="card">
            <h3>Achievements</h3>
            {achievements.map((item) => (
              <div key={item.title} className="detail-block">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>Ready to contribute to cybersecurity and technology projects with a focus on secure development and strong teamwork.</p>
      </footer>
    </div>
  )
}

export default App
