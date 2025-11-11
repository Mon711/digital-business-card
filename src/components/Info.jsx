import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Info() {
  return (
    <>
      <div className="card">
        <img
          src="src/assets/my_pic.jpeg"
          alt="authors profile pic"
          className="card-img"
        />

        <div className="card-body">
          <h2 className="card-name">Mrinal Sood</h2>
          <p className="card-title">Budding Web Devleoper</p>
          <a
            href="https://mon711.github.io/aboutMe/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            mon711.aboutme
          </a>

          <div className="card-buttons">
            <a href="mailto:mrinalsood711@gmail.com">
              <button className="btn email">
                <i class="bi bi-envelope-at-fill btn-icon"></i>
                <span className="btn-text">Email</span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/mrinal-sood-879889257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn linkedin">
                <i className="bi bi-linkedin btn-icon"></i>
                <span className="btn-text">LinkedIn</span>
              </button>
            </a>
          </div>

          <div className="card-section">
            <About />
          </div>

          <div className="card-section">
            <Interest />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
