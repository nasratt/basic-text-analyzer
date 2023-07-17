import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-elements">
          <p>
            UI & styling by{' '}
            <a href="https://twitter.com/Basit_Miyanji" target="_blank" rel="noreferrer">
              Abdul Basit
            </a>
            , compeleted by{' '}
            <a href="https://github.com/nasratt" target="_blank" rel="noreferrer">
              Nasratullah Talash
            </a>
          </p>
          <ul className="other-pages">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
