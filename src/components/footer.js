const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>6281 90th Ave. North, Pinellas Park, FL 33682</p>
      <p>
        2009-{currentYear} All Right Reserved @ Tampabay Chinese Baptist Church
      </p>
    </footer>
  );
};

export default Footer;
