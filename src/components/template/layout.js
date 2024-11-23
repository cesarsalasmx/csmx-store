import Header from "./header";
import Footer from "./footer";

export default function Layout  ({ children }){
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow px-4 py-6 mx-auto">{children}</main>
        <Footer />
      </div>
    );
  };
