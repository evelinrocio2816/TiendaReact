import Logo from "../Logo/Logo"
import "./Footer.css"

const Footer = () => {
  return (
   <footer>
  <p className="copyRight">  &copy;Copyright 2023 - EvelinRocio2816</p>

<div className="imgFooter">
   <img className="image-footer" src="../img/whatsapp.png" alt="Whatsapp" />
   <img className="image-footer" src="../img/instagram.png" alt="Instagram" />
   <img className="image-footer" src="../img/gmail.png" alt="Gmail" />
   <img className="image-footer" src="../img/facebook.png" alt="Facebook" />
   </div>
   <Logo/>
   
   
   </footer>
  )
}

export default Footer