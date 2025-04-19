import { SelectCategory } from "@/components/Home/SelectCategory/SelectCategory";
import BannerSlider from "@/components/shared/BannerSlider";
const Home = () => {
  return (
    <div className="mt-14">
      <BannerSlider />
      <SelectCategory />
    </div>
  );
};

export default Home;
