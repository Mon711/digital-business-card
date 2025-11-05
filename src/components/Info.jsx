export default function Info(){
    return (
        <>
            <div className="card">

                <img src="src/assets/my_pic.jpeg" alt="authors profile pic" className="card-img"/>

                <div className="card-body">
                    <h2 className="card-name">Mrinal Sood</h2>
                    <p2 className="card-title">Full-Stack Developer</p2>
                    <a href="https://mon711.github.io/aboutMe/" className="card-link">mon711.aboutme</a>

                    <div className="card-buttons">
                        <button className="btn email">📧 Email</button>
                        <button className="btn linkedin">LinkedIn</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}