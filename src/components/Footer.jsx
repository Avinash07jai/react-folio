import React from 'react';
import "./contact.css";

const Footer = () => {
  return (
    <div className='footer' style={{backgroundColor:'#83BA43', height:50,marginTop:50,textAlign:'center',padding:40}}>
      <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png" alt="" height={50} />
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="" height={50} style={{ paddingLeft: 20 }} />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" height={50} style={{paddingLeft:20}} />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" height={50} style={{ paddingLeft: 20 }} />
    </div>
  )
}

export default Footer;
