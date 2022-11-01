import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      Copyright {new Date().getFullYear()} by Besik Kavzharadze as the
      assignment. All Rights Reserved.
    </footer>
  );
};

export default Footer;
