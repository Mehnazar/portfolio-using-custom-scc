import Header from "@/components/header/header";
import AboutStyle from "./about.module.css"; // Import your custom CSS file

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <div className="about-container">
        <div>
          <h2 className="about-section-title">About me:</h2>
          <p className="about-description">
            I completed my bachelor's in Electronics Engineering in 2007 and earned my master's degree in 2017 with a strong academic record (CGPA 3.57). My engineering background has equipped me with a deep understanding of electronic systems, circuit design, and complex problem-solving.
          </p>
        </div>

        <div className="education-section">
          <h2 className="about-section-title">Education:</h2>
          <div className="education-list">
            <div className="education-item">
              <h3 className="education-title">MEHRAN UET, JAMSHORO</h3>
              <p className="education-detail">Master Degree Graduate (2017)</p>
              <p className="education-subtext">
                Masters in Electronics System Engineering with CGPA: 3.57
              </p>
            </div>
            <div className="education-item">
              <h3 className="education-title">MEHRAN UET, JAMSHORO</h3>
              <p className="education-detail">Bachelor Degree Graduate (2007)</p>
              <p className="education-subtext">
                B.E, Electronics Engineering with 1st Div
              </p>
            </div>
            <div className="education-item">
              <h3 className="education-title">GIAIC</h3>
              <p className="education-detail">GIAIC (2023)</p>
              <p className="education-subtext">
                Currently studying in Governor Sindh Initiative for IT
              </p>
            </div>
            <div className="certifications-section">
              <h3 className="certifications-title">Other Certifications:</h3>
              <ul className="certifications-list">
                <li>Wireless Local Loop</li>
                <li>Auto CAD</li>
                <li>Primavera Project Planner</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages and Hobbies */}
        <div className="languages-hobbies-section">
          <div className="languages-section">
            <h2 className="about-section-title">Languages:</h2>
            <ul className="languages-list">
              <li>English</li>
              <li>Urdu</li>
              <li>Sindhi</li>
            </ul>
          </div>
          <div className="hobbies-section">
            <h2 className="about-section-title">Hobbies:</h2>
            <ul className="hobbies-list">
              <li>Travel</li>
              <li>Gaming</li>
              <li>Gyming</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
