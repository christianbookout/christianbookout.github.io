const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center flex justify-center p-5 shadow-inner">
      <div className="w-1/3 flex flex-row items-center justify-between">
        <a href="https://github.com/christianbookout" target="_blank">
          <img
            src={"/svgs/github.svg"}
            alt="GitHub"
            className="inline-block w-6 h-6 mx-2 text-light"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-bookout/"
          target="_blank"
        >
          <img
            src={"/svgs/linkedin.svg"}
            alt="LinkedIn"
            className="inline-block w-6 h-6 mx-2"
          />
        </a>
        <a href="mailto:christianmbookout@gmail.com">
          <img
            src={"/svgs/email.svg"}
            alt="Email"
            className="inline-block w-6 h-6 mx-2"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
