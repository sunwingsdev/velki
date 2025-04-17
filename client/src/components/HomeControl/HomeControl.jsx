import LogoSelection from "../dashboard/LogoSelection";
import LogoUpload from "../dashboard/LogoUpload";
import NoticeSelectionSection from "../dashboard/NoticeSelectionSection";
import NoticeUploadSection from "../dashboard/NoticeUploadSection";
import SliderSelectionSection from "../dashboard/SliderSelectionSection";
import SliderUploadSection from "../dashboard/SliderUploadSection";

const HomeControl = () => {
  return (
    <div className="bg-adminBackground min-h-screen">
      <h1 className="text-center text-xl font-bold bg-yellow-500 h-10">
        Home Control
      </h1>
      <div className="mx-4 bg-white">
        <LogoUpload />
        <LogoSelection />
        <SliderUploadSection />
        <SliderSelectionSection />
        <NoticeUploadSection />
        <NoticeSelectionSection />
        {/* <TitleUploadSection /> */}
        {/* <TitleSelectionSection /> */}
        {/* <LoginImageUploadSection /> */}
        {/* <LoginImageSelectionSection /> */}
        {/* <MotherAdminImgUploadSection /> */}
        {/* <MotherAdminImgSelection /> */}
      </div>
    </div>
  );
};

export default HomeControl;
