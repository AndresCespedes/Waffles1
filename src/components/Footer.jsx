import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import socialMedia from "@/utils/socialMedia";
import "@/css/footer.css";

const Contact = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-links">
              <h4>Compañia</h4>
              <ul>
                <li>
                  <a href="">Dirección: Diagonal 15b# 104-45, Casa 208</a>
                </li>
                <li>
                  <a href="">Correo: sportscars10012022@gmail.com</a>
                </li>
                <li>
                  <a href="">Teléfono de contacto: 321-4740617</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Sobre Nosotros</h4>
              <ul>
                <li>
                  <a href="">Misión</a>
                </li>
                <li>
                  <a href="">Visión</a>
                </li>
                <li>
                  <a href="">Idea de negocio</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Redes Sociales</h4>

              <div className="social-link">
                <div className="social-link-item">
                  <a
                    className="social-link-text"
                    href={socialMedia.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="wa-icon" /> WhatsApp
                  </a>
                </div>

                <div className="socil-link-item">
                  <a
                    className="social-link-text"
                    href={socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="in-icon" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Waffles Snack's - {year}</p>
      </footer>
    </>
  );
};

export default Contact;
