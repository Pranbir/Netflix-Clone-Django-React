import LangSelect from "../HomePage/subComponents/LangSelect";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text-first">
        Questions? Call <a href="tel:000-800-040-1843">000-800-040-1843</a>
      </p>
      <ul className="footer-links">
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">Investor Relations</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
        <li>
          <a href="/">Speed Test</a>
        </li>
        <li>
          <a href="/">Help Centre</a>
        </li>
        <li>
          <a href="/">Jobs</a>
        </li>
        <li>
          <a href="/">Cookie Preferences</a>
        </li>
        <li>
          <a href="/">Legal Notices</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Ways to Watch</a>
        </li>
        <li>
          <a href="/">Corporate Information</a>
        </li>
        <li>
          <a href="/">Netflix Originals</a>
        </li>
        <li>
          <a href="/">Media Centre</a>
        </li>
        <li>
          <a href="/">Terms of Use</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <div className="footer-lang-select-wrapper">
        <LangSelect />
      </div>
      <p className="footer-text-last">Netflix India</p>
      <p className="footer-text-msg">&copy; FSD NETFLIX CLONE @2021</p>
    </footer>
  );
};

export default Footer;
