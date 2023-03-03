const Header = ({ title, motto }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p className="header-motto">{motto}</p>
    </header>
  );
};

export default Header;
