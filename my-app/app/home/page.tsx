import Image from "next/image";
import HomeStyle from "./home.module.css";
import Header from "@/components/header/header";

export default function CV() {
  return (
    <div className="cv-container">
      <Header />
      <div className="cv-content">
        {/* Profile Section */}
        <div className="profile-header">
          <div>
            <h1 className="profile-name">ENGR.MEHNAZAR SYED</h1>
            <p className="profile-title">Electronics Engineer (ELECTRO/9153)</p>
            <p className="profile-subtitle">Full Stack Developer</p>
          </div>
          <div className="profile-image-container">
            <Image
              src="/images/image.jpg"
              alt="Profile"
              className="profile-image"
              width={400}
              height={200}
            />
          </div>
        </div>

        {/* Profile Description */}
        <div className="profile-description">
          <h2 className="section-title">Profile:</h2>
          <p className="description-text">
            Welcome to my portfolio! I am an accomplished Electronics Engineer with a Master's degree from Mehran University of Engineering & Technology, Jamshoro, and a Full Stack Developer with expertise in modern web and app development. With over a decade of experience in engineering and a passion for technology, I blend analytical problem-solving skills with advanced coding abilities to deliver innovative solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Skills:</h2>
          <ul className="skills-list">
            <li>Typescript</li>
            <li>Javascript</li>
            <li>TailwindCSS</li>
            <li>HTML & CSS</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
            <li>Adobe PhotoShop</li>
            <li>Adobe Illustrator</li>
            <li>Matlab</li>
            <li>Electronics Workbench</li>
          </ul>
        </div>

        {/* Publications */}
        <div className="publications-section">
          <h2 className="section-title">Publications:</h2>
          <ul className="publications-list">
            <li>Lab Book of "Embedded System Design" for Undergraduate and Postgraduate Levels. ISBN: 978-969-8680-31-2</li>
            <li>Lab Book of "Microprocessor Based System Design" for Postgraduate Level. ISBN: 978-969-8680-31-2</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="projects-section">
          <h2 className="section-title">Projects:</h2>
          <div className="project-item">
            <h3 className="project-title">"Efficient way of controlling Electricity theft And Improving Distribution system"</h3>
            <p className="project-description">
              Electricity plays an essential role in developing a country's economic order. Unfortunately, Pakistan is currently facing endemic energy crises, a significant part of which results from electricity theft and inappropriate resource management. This work proposes an efficient method based on current controllers to reduce non-technical losses incurred by customers. The system protects the electricity supply from illegal use through an automatic current-controlled circuit installed at poles, adjustable per user needs for accurate billing and reduced power wastage.
            </p>
          </div>
          <div className="project-item">
            <h3 className="project-title">"Online ATM Machine system"</h3>
            <p className="project-description">
              An ATM Machine system is deployed using NextJs and TailwindCSS. The prototype maintains a customer's balance record, allowing them to check their balance, withdraw funds, and access quick cash.
              <a href="https://mehnazar.github.io/online-ATM-Machine/" className="project-link">ATM link</a>
            </p>
          </div>
          <div className="project-item">
            <h3 className="project-title">"Educational Pedia"</h3>
            <p className="project-description">
              Educational Pedia is a website created using TailwindCSS and NextJs, designed for educational purposes.
              <a href="https://assignment-no-3-3en2g9ihm-mehnazar-umairs-projects.vercel.app/" className="project-link">link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
