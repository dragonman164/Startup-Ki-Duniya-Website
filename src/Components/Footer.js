const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="container-fluid bg-light  text-dark sticky-bottom">
      {/* <div style={{ height: "20px" }} />
      <h4 className="text-center">All Rights Reserved</h4>
      <p className="mb-0 text-center">
        &copy; {year}-{year + 1} Startup Ki Duniya
      </p> */}
    </footer>
  );
};

export default Footer;
