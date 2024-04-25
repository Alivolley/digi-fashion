// Components
import Footer from '../footer/footer';
import Header from '../header/header';

function PagesLayout({ children }) {
   return (
      <div className="overflow-hidden font-jakartaTextRegular">
         <Header />

         <main>{children}</main>

         <Footer />
      </div>
   );
}

export default PagesLayout;
