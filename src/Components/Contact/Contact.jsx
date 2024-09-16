import './Contact.modules.css'

function Contact() {
    return ( 
        <>
        <div className="container">
            <div className="contact">
            <h1>Contact Us</h1>
            <div className="SkillsprogressBar"></div>
            </div>
  
        <div className="contact-container">
        <div className="image-section">
            <div className="imgCard">
            <img src="img/image-removebg-preview (30) 1.png" alt="Profile Image"/>
            </div>
          
        </div>
        <div className="form-section">
            <form>
   
                <input type="text" id="name" placeholder="Name*" required/>

                <input type="email" id="email" placeholder="Email ID*" required/>

                <input id="message" placeholder="Message*" rows="4" required/>

                <button className='Submit' type="submit">Send</button>
            </form>
        </div>
    </div>
        </div>
        </>
     );
}

export default Contact;