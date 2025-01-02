import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Service from "../components/service/Service";
import NoAuthRoutes from "../routes/NoAuthRoutes";

export default function Layouts() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="templateWidth my-3 px-2 xl:p-0 lg:p-0">
          <NoAuthRoutes />
        </div>
      </div>

      <div className="fixed bottom-5 right-5">
        <Service />
      </div>
      <Footer />
    </>
  );
}
