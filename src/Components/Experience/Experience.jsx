import './Experience.modules.css'

function Experience() {
    return ( 
        <>
        <div className="container">
        <div className="Experience">
            <h1>Experience</h1>
            <div className="SkillsprogressBar"></div>
            <div className="tabs">
                <button className="tab active">Experience</button>
                <button className="tab">Education</button>
            </div>
        </div>
        <div className="card-Container">
        <div className="Experiencecard">
    <h1 className="title">Technical Content Writer</h1>
    <p className="company">GeeksforGeeks | 11-2023 – 02-2024</p>
    <p className="Experiencepara">
      As a content creator, Ive authored and published numerous articles on technical topics like Power BI, Python, Data Science, and Machine Learning. My focus is on simplifying complex concepts, ensuring accessibility for all audiences. Each article is carefully crafted to translate intricate jargon into easily understandable terms, fostering a deep understanding. I stay current with the latest developments in these fields, delivering up-to-date content that empowers readers to navigate and excel in the ever-evolving landscape of technology.
    </p>
  </div>
  <div className="card-One">
    <h1 className="title">Technical Content Writer</h1>
    <p className="company">GeeksforGeeks | 11-2023 – 02-2024</p>
    <p className="Experiencepara">
      As a content creator, Ive authored and published numerous articles on technical topics like Power BI, Python, Data Science, and Machine Learning. My focus is on simplifying complex concepts, ensuring accessibility for all audiences. Each article is carefully crafted to translate intricate jargon into easily understandable terms, fostering a deep understanding. I stay current with the latest developments in these fields, delivering up-to-date content that empowers readers to navigate and excel in the ever-evolving landscape of technology.
    </p>
  </div>
  </div>
        </div>
        </>
     );
}

export default Experience;