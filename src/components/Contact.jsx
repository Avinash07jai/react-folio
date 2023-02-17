import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className='c-left'>
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/phone-talk-4371907-3626670.png" alt="" className="c-icon" />
                            +91 97027 33894
                        </div>
                        <div className="c-info-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Email_Shiny_Icon.svg" alt="" className="c-icon" />
                            avinash07.j@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="https://www.freeiconspng.com/thumbs/location-icon-png/map-location-25.png" alt="" className="c-icon" />
                            90 Feet Road , PantNagar , Ghatkopar East , Mumbai-400075
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <form>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea rows={7} placeholder="Message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
