import './Header.modules.css'

function Header() {
    return ( 
        <>
         <div className="container">
        <div className="profile">
            <img src="img/Frame 3762.png" alt="Priti Jadhav" className="profile-pic"/>
            <div className="intro-text">
                <p className='Hey'>Hey</p>
                <h1>Im Abbas Raza</h1>
                <h2><span>Associate Software</span> <span className="highlight">Engineer</span></h2>
                <p className="description">
                    A highly motivated student studying Artificial Intelligence and Machine Learning.
                    Actively seeking opportunities to apply my skills and knowledge to real-world projects
                    and contribute to the advancement of the industry.
                </p>
                <div className="Leanbutton">
                    <button className="btns learn-more">Learn More</button>
                    <button className="btns contact-me">Contact Me</button>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}

export default Header;