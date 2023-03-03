const Footer = ({ amount }) => {
  return (
    <footer>
      <p>
        {amount} List {amount === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
