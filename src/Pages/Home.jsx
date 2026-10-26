import HeroSection from "../Components/HeroSection"
import CategoryCards from "../Components/CategoryCards"
import CategorySection from "../Components/CategorySection"
const Home = ({allProducts, addToCart, cartquantity}) => {
    return(
        <>
            <CategoryCards/>
            <HeroSection/>

            <CategorySection
                allProducts={allProducts}
                addToCart={addToCart}
            />

        </>
    )
}
export default Home;