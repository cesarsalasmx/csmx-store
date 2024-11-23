const Footer = () => {
    return (
      <footer className="text-white bg-gray-800">
        <div className="container px-4 py-6 mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} César Salas. All rights reserved.
          </p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/privacy" className="text-sm hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  