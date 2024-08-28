import NavBar from '@/app/components/NavBar/NavBar';
import MainContainer from '@/app/components/container/MainContainer';
import Hero from '@/app/sections/home/Hero';
import Promotions from '@/app/sections/home/Promotions';
import BackGround from '../sections/home/BackGround';
import CatalogDescription from '../sections/home/CatalogDescription';
import Contact from '../sections/home/Contact';
import About from '../sections/home/About';
import Footer from '../components/Footer/Footer';
import MapLocalization from '../sections/home/MapLocalization';
import Information from '../sections/home/Information';

const Home = () => {
  return (
    <section className=' font-mainGilroy font-light'>
      <MainContainer>
        <NavBar />
        <BackGround />
        <Hero />
        <Information />
        <Promotions />
        <CatalogDescription />
        <Contact />
        <About />
        <Footer />
      </MainContainer>
    </section>
  );
};

export default Home;
