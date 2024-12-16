
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';
// import ProductGrid from './components/ProductGrid';
// import FeaturedSection from './components/FeaturedSection';
// import DontMissSection from './components/DontMissSection';
// import IconsSection from './components/IconsSection';
// import Footer from './components/Footer';


const Home = () => {
    const products = [
         {image:'/shoe.png', name:'Nike Air Max Pulse', price:'13 995', gender:"Women's Shoes"},
         {image:'/shoe.png', name:'Nike Air Max Pulse', price:'13 995', gender:"Men's Shoes"},
          {image:'/shoe.png', name:'Nike Air Max 97 SE', price:'16 995', gender:"Men's Shoes"},
       ];
    return (
        <div>
            <Header/>
             <HeroSection/>
             {/* <ProductGrid title='Best of Air Max' items={products}/>
             <FeaturedSection/>
                <DontMissSection/>
               <IconsSection/>
               <Footer/> */}
        </div>
    );
};

export default Home;