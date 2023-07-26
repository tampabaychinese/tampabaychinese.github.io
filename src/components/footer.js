import data from "../data/Footer.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>{data.address}</p>
      <p>
        2009-{currentYear} {data.copyright}
      </p>
    </footer>
  );
};

export default Footer;
