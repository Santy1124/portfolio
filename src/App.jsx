import { useState } from "react";
import "./App.css";

const sections = ["About", "Projects", "Resume"];

function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [selectedProject, setSelectedProject] = useState("diohelios");
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <main>
      <nav className="navbar">
        <div className="brand">
          <div className="logo">Santhosh Kumar Ravi Kumar</div>
          <div className="subtitle">
            Machine Learning • Computer Vision • Software Development
          </div>
        </div>

        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section}
              className={activeSection === section ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      <section className="page-card">
        {activeSection === "About" && (
        <>
          <div className="about-layout">
            <div className="profile-card">
              <img src="/profile.png" alt="Santhosh Kumar Ravi Kumar" />
            </div>

            <div className="about-center">
              <h2>About Me</h2>

              <p className="demo-description">
                I build machine learning applications for scientific, biomedical, and
                real-world data problems. I enjoy turning complex research workflows into usable software
                products.
              </p>


              <div className="tech-stack about-skills">
                <span>Machine Learning</span>
                <span>Computer Vision</span>
                <span>Scientific Software</span>
                <span>Data Visualization</span>
                <span>Digital Health</span>
                <span>Generative AI</span>
                <span>MLOps</span>
                <span>Research Engineering</span>
                <span>Full-Stack Development</span>
                <span>Product Thinking</span>
                <span>Team Collaboration</span>
                <span>Football</span>
                <span>Fitness</span>
              </div>
            </div>

            <div className="contact-card about-contact">
              <h3>Contact</h3>

              <div className="contact-item">
                <img src="/icons/location.png" alt="Location" />
                <span>Berlin, Germany</span>
              </div>

              <div className="contact-item">
                <img src="/icons/email.png" alt="Email" />
                <a href="mailto:santhoshkumarrk98@gmail.com">
                  santhoshkumarrk98@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <img src="/icons/linkedin.png" alt="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/santhosh-kumar-ravi-kumar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Experience</h3>

          <div className="section-grid">
            <div
              className="card"
              onClick={() => {
                setSelectedProject("diohelios");
                setActiveSection("Projects");
              }}
            >
              <h3>Ferdinand Braun Institute</h3>
              <p>Scientific Assistant</p>
              <span>Mar 2025 – Present</span>
            </div>

            <div className="card"
              onClick={() => {
                setSelectedProject("carlos");
                setActiveSection("Projects");
              }}
              >
              <h3>Boehringer Ingelheim</h3>
              <p>Data Science Intern</p>
              <span>Jun 2024 – Sep 2024</span>
            </div>

            <div className="card"
              onClick={() => {
                setSelectedProject("calopy");
                setActiveSection("Projects");
              }}
              >
              <h3>Helmholtz Munich</h3>
              <p>Software Developer & Master Thesis</p>
              <span>Oct 2022 – May 2024</span>
            </div>
          </div>

          <h3 className="subsection-title">Featured Projects</h3>

          <div className="featured-projects">
            <div
              className="featured-card"
              onClick={() => {
                setSelectedProject("diohelios");
                setActiveSection("Projects");
              }}
            >
              <p className="demo-label">Computer Vision • ML • Flask</p>
              <h3>DioHelios</h3>
              <p>
                End-to-end inspection platform for AI-assisted laser diode quality control.
              </p>
            </div>

            <div
              className="featured-card"
              onClick={() => {
                setSelectedProject("carlos");
                setActiveSection("Projects");
              }}
            >
              <p className="demo-label">VLMs • NLP • Clinical Documents</p>
              <h3>CARLOS</h3>
              <p>
                Document-AI platform for extracting unstructured information and tables from clinical trial reports.
              </p>
            </div>

            <div
              className="featured-card"
              onClick={() => {
                setSelectedProject("calopy");
                setActiveSection("Projects");
              }}
            >
              <p className="demo-label">Data Visualization • Shiny • Python</p>
              <h3>Calopy / Calimera</h3>
              <p>
                Scientific software platform for visualization and analysis of indirect calorimetry data.
              </p>
            </div>
          </div>
        </>
      )}


        {activeSection === "Projects" && (
        <>
          <h2>Projects</h2>

          <div className="project-tabs">

            <button
              className={selectedProject === "diohelios" ? "project-tab active" : "project-tab"}
              onClick={() => setSelectedProject("diohelios")}
            >
              DioHelios
            </button>

            <button
              className={selectedProject === "calopy" ? "project-tab active" : "project-tab"}
              onClick={() => setSelectedProject("calopy")}
            >
              Calopy
            </button>


            <button
              className={selectedProject === "carlos" ? "project-tab active" : "project-tab"}
              onClick={() => setSelectedProject("carlos")}
            >
              CARLOS
            </button>

            

            <button
              className={selectedProject === "pathoai" ? "project-tab active" : "project-tab"}
              onClick={() => setSelectedProject("pathoai")}
            >
              PathoAI Cockpit
            </button>

            <button
              className={selectedProject === "thesis" ? "project-tab active" : "project-tab"}
              onClick={() => setSelectedProject("thesis")}
            >
              Master's Thesis
            </button>

          </div>

          {selectedProject === "diohelios" && (
          <div className="project-detail">

            <div className="project-hero-card">

              <div className="project-hero-text">

                <p className="demo-label">
                  Computer Vision • AI • Quality Control • Flask 
                </p>

                <h3>DioHelios - AI</h3>

                <p>
                  End-to-end platform for laser diode inspection,
                  defect detection, and quality reporting.
                </p>

                <p>
                  Combines preprocessing, AI-assisted defect detection,
                  expert inspection workflows, and automated reporting
                  in a unified application.
                </p>

                <div className="tech-stack compact-stack">
                  <span>PyQt5</span>
                  <span>Flask</span>
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>TensorFlow</span>
                  <span>OpenCV</span>
                  <span>Deep Learning models</span>
                  <span>OpenSeadragon</span>
                  <span>SQLite</span>
                </div>

              </div>

              <div className="project-hero-preview">

                <h4>Preprocessing</h4>

                <img
                  src="/projects/diohelios/preprocessing.png"
                  alt="DioHelios preprocessing"
                  className="clickable-image"
                  onClick={() =>
                    setZoomImage("/projects/diohelios/preprocessing.png")
                  }
                />

                <p>
                  Extracts metadata, detects edges, computes diode and ROI regions,
                  and generates defect predictions.
                </p>

              </div>

            </div>

            <div className="project-section">
              <h4>Frontend Inspection</h4>

              <div className="project-gallery">
                <div>
                  <img
                    src="/projects/diohelios/frontend_inspection.png"
                    alt="Frontend inspection"
                    className="clickable-image"
                    onClick={() =>
                      setZoomImage("/projects/diohelios/frontend_inspection.png")
                    }
                  />

                  <p>
                    Select inspection folders and images, visualize diode/ROI overlays, and assign quality codes.
                  </p>
                </div>

                <div>
                  <img
                    src="/projects/diohelios/combined.png"
                    alt="Combined diode bar view"
                    className="clickable-image"
                    onClick={() =>
                      setZoomImage("/projects/diohelios/combined.png")
                    }
                  />

                  <p>
                    Compare front-side, top-side, and back-side visualizations for combined defect analysis.
                  </p>
                </div>

                <div>
                  <img
                    src="/projects/diohelios/excel_export.png"
                    alt="Inspection report export"
                    className="clickable-image"
                    onClick={() =>
                      setZoomImage("/projects/diohelios/excel_export.png")
                    }
                  />

                  <p>
                    Group inspection results and export them to the required inspection protocol template.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h4>Future Development</h4>

              <div className="project-gallery two-column">

                <div>
                  <img
                    src="/projects/diohelios/reclassification.png"
                    alt="Reclassification tool"
                    className="clickable-image"
                    onClick={() =>
                      setZoomImage("/projects/diohelios/reclassification.png")
                    }
                  />

                  <p>
                    Review and correct uncertain defect labels to improve future training datasets.
                  </p>
                </div>

                <div>
                  <img
                    src="/projects/diohelios/maskrcnn.png"
                    alt="MaskRCNN"
                    className="clickable-image"
                    onClick={() =>
                      setZoomImage("/projects/diohelios/maskrcnn.png")
                    }
                  />

                  <p>
                    Dataset expansion, Mask R-CNN evaluation, and workflow integration are currently in progress.
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

          {selectedProject === "carlos" && (
          <div className="project-detail">

            <div className="project-hero-card">

              <div className="project-hero-text">
                <p className="demo-label">
                  VLMs • NLP • Clinical Documents
                </p>

                <h3>CARLOS</h3>

                <p>
                  Document-AI platform for extracting structured clinical
                  trial data from PDFs.
                </p>

                <p>
                  Developed at Boehringer Ingelheim using Azure AI,
                  GPT-4o, and document-processing pipelines to automate
                  clinical data extraction workflows.
                </p>

                <div className="tech-stack compact-stack">
                  <span>Python</span>
                  <span>Shiny</span>
                  <span>Azure AI GPT-4o</span>
                  <span>Document AI</span>
                  <span>Unstructured Data</span>
                  <span>Clinical Data</span>
                  <span>JSON</span>
                  <span>XML export</span>
                </div>
              </div>

              <div className="project-hero-preview">
                <h4>Main Application</h4>

                <img
                  src="/projects/carlos/app.png"
                  alt="CARLOS application"
                  className="clickable-image"
                  onClick={() => setZoomImage("/projects/carlos/app.png")}
                />

                <p>
                  Upload clinical trial reports, navigate relevant tables,
                  and generate structured outputs.
                </p>
              </div>

            </div>

            <div className="project-section">
            <div className="feature-inline">

              <h4>Key Features</h4>

              <p>
                Participant Flow • Baseline Characteristics • Outcome Measures •
                Adverse Events • XML Export
              </p>

            </div>

          </div>

            <div className="project-section azure-section">

              <h4>Azure AI & GPT-4o Evaluation</h4>

              <img
                src="/projects/carlos/azure_gpt4o.png"
                alt="Azure AI GPT-4o evaluation"
                className="clickable-image"
                onClick={() =>
                  setZoomImage("/projects/carlos/azure_gpt4o.png")
                }
              />

              <p>
                Evaluated Azure AI GPT-4o and multiple extraction approaches for
                converting clinical trial reports into structured machine-readable formats.
              </p>

            </div>

          </div>

        )}

          {selectedProject === "calopy" && (
          <div className="project-detail">

            <div className="project-hero-card">

              <div className="project-hero-text">
                <p className="demo-label">
                  Scientific Software • Data Visualization • Python
                </p>

                <h3>Calopy</h3>

                <p>
                  Web-based platform for integration, visualization, and analysis
                  of indirect calorimetry data.
                </p>

                <p>
                  Developed at Helmholtz Munich to simplify metabolic data analysis
                  through interactive visualizations and reproducible research workflows.
                </p>

                <p className="project-note">
                  The project evolved from Calimera into the published Calopy framework.
                </p>

                <div className="tech-stack compact-stack">
                  <span>Python</span>
                  <span>Shiny</span>
                  <span>Data Visualization</span>
                  <span>Scientific Software</span>
                  <span>Indirect Calorimetry</span>
                </div>
              </div>

              <div className="project-hero-preview">
                <h4>Application Preview</h4>

                <img
                  src="/projects/calopy.png"
                  alt="Calopy application"
                  className="clickable-image"
                  onClick={() => setZoomImage("/projects/calopy.png")}
                />

                <p>
                  Interactive dashboards support exploration, visualization, and
                  analysis of indirect calorimetry experiments.
                </p>
              </div>

            </div>

            <div className="project-links">
              <a
                href="https://www.calopy.io/"
                target="_blank"
                rel="noreferrer"
              >
                View Application
              </a>

              <a
                href="https://www.nature.com/articles/s42255-025-01316-8"
                target="_blank"
                rel="noreferrer"
              >
                Nature Publication
              </a>
            </div>
            </div>
            )}

            {selectedProject === "pathoai" && (
            <div className="project-detail">
              <div className="project-hero-card">
                <div className="project-hero-text">
                  <p className="demo-label">
                    Digital Pathology • Computer Vision • Quality Control
                  </p>

                  <h3>PathoAI Cockpit</h3>

                  <p>
                     Unified dashboard for pathology slide quality assessment and AI-powered artifact detection.
                  </p>

                  <div className="tech-stack compact-stack">
                  <span>Python</span>
                  <span>Angular</span>
                  <span>Flask</span>
                  <span>Computer Vision</span>
                  <span>Image Processing</span>
                  <span>Digital Pathology</span>
                  <span>WSI Analysis</span>
                  <span>Artifact Detection</span>
                  <span>REST API</span>
                  <span>Quality Control</span>
                </div>
                </div>

                <div className="project-keypoints">
                  <h4>Key Highlights</h4>

                  <ul>
                    <li>Built for Whole Slide Image quality control</li>
                    <li>Integrated artifact detection results into one dashboard</li>
                    <li>Detected blur, dust, air bubbles, tissue folds, stripes, and missing coverslips</li>
                    <li>Backend generated JSON outputs from classifier pipelines</li>
                    <li>REST API delivered results to the frontend application</li>
                    <li>Designed for quick review, rescanning decisions, and slide-level inspection</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedProject === "thesis" && (
          <div className="project-detail">
            <div className="project-hero-card">
              <div className="project-hero-text">
                <p className="demo-label">
                  Machine Learning • Time Series • Anomaly Detection
                </p>

                <h3>Master's Thesis</h3>

                <p>
                  Autoencoder-based anomaly detection and phenotype matching on large-scale metabolic time-series data from IMPC mouse studies.
                </p>

                <div className="tech-stack compact-stack">
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>Autoencoders</span>
                  <span>LSTM</span>
                  <span>Variational Autoencoders</span>
                  <span>Time Series Analysis</span>
                  <span>Anomaly Detection</span>
                  <span>Predictive Modeling</span>
                </div>
              </div>

              <div className="project-keypoints">
                <h4>Key Highlights</h4>

                <ul>
                  <li>Analyzed metabolic time-series data from IMPC studies</li>
                  <li>Implemented Vanilla, Sparse, Contractive, Variational and LSTM Autoencoders</li>
                  <li>Benchmarked models for anomaly detection and phenotype matching</li>
                  <li>Identified metabolic patterns associated with genetic variations</li>
                  <li>Evaluated reconstruction-error based disease prediction approaches</li>
                  <li>Found Variational Autoencoders most effective for phenotype matching</li>
                </ul>
              </div>
            </div>
          </div>
        )}

          
        </>
      )}

        {activeSection === "Resume" && (
          <>

            <div className="resume-actions">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="download-btn">
                Open Resume
              </a>

              <a href="/resume.pdf" download className="download-btn">
                Download Resume
              </a>
            </div>

            <div className="resume-viewer">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
                title="Resume"
              />
            </div>
          </>
        )}

      </section>

      <footer className="footer">
        © 2026 Santhosh Kumar Ravi Kumar
      </footer>

      {zoomImage && (
        <div className="image-modal" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Expanded project view" />
        </div>
      )}
    </main>
  );
}

export default App;