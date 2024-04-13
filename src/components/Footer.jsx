import logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <footer className="text-center py-3 page-footer">
      <img
        src={logo}
        alt="logo img"
        height={30}
      />
      <div className="fs-6 text-capitalize text-center mt-3 fw-bold">
        made with ❤️ by omar alrifai
      </div>
    </footer>
  );
};

export default Footer;
