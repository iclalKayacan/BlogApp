import HeroSection from "../components/home/HeroSection";
import RandomPosts from "../components/home/RandomPosts";
import LatestPosts from "../components/home/LatestPosts";
import NewsletterSection from "../components/home/NewsletterSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RandomPosts />
      <LatestPosts />
      <NewsletterSection />

    </div>
  );
};

export default Home;
