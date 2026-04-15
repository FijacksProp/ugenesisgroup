import AmbientBackground from "./AmbientBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex min-h-screen flex-col overflow-hidden">
    <AmbientBackground />
    <Navbar />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
