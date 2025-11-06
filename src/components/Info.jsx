import About from "./About";
import Interest from "./Interest";

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
          <a href="https://mon711.github.io/aboutMe/" className="card-link">
            mon711.aboutme
          </a>

          <div className="card-buttons">
            <button className="btn email">
              <i class="bi bi-envelope-at-fill"></i>
              <span className="btn-text">Email</span>
            </button>
            <button className="btn linkedin">
              <i className="bi bi-linkedin"></i>
              <span className="btn-text">LinkedIn</span>
            </button>
          </div>

          <div className="card-section">
            <About />
          </div>

          <div className="card-section">
            <Interest />
          </div>

        </div>
      </div>
    </>
  );
}