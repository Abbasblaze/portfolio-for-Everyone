import './MyProjects.modules.css'

function MyProjects() {
    return ( 
        <>
     <div className="container">
        <div className="MyProjects">
        <h1>Projects</h1>
        <div className="progress-bar"></div>

        <div className="tabs">
            <a href="#" className="tab active">Contact</a>
            <a href="#" className="tab">Resume</a>
            <a href="#" className="tab">About</a>
        </div>

        <div className="content">
            <div className="sidebar">
                <img src="img/koshish.png" alt="Brain" className="circle-image"/>
                <img src="img/Rectangle 62.png" alt="Smartphone" className="circle-image"/>
                <img src="img/Rectangle 62 (1).png" alt="Hardware" className="circle-image"/>
            </div>
            <div className="main-content">
                <div className="card">
                    <img src="img/Rectangle 65.png" alt="Content Analyzer" className="card-image"/>
                    <h3 className="card-title">Content Analyzer</h3>
                    <p className="card-description">A robust tool designed for content creators, bloggers, and writers</p>
                    <a href="https://github.com" className="github-icon"/>
                        <img src="img/Vector.png" alt="GitHub"/><a/>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
        </>
     );
}

export default MyProjects;