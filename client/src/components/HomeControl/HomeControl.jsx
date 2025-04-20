import DynamicSingleSelection from "../dashboard/DynamicSingleSelection";
import DynamicSingleUpload from "../dashboard/DynamicSingleUpload";
import LogoSelection from "../dashboard/LogoSelection";
import LogoUpload from "../dashboard/LogoUpload";
import NoticeSelectionSection from "../dashboard/NoticeSelectionSection";
import NoticeUploadSection from "../dashboard/NoticeUploadSection";
import SliderSelectionSection from "../dashboard/SliderSelectionSection";
import SliderUploadSection from "../dashboard/SliderUploadSection";
import TitleSelectionSection from "../dashboard/TitleSelectionSection";
import TitleUploadSection from "../dashboard/TitleUploadSection";

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
        <TitleUploadSection />
        <TitleSelectionSection />
        <DynamicSingleUpload
          title={"Upload Login Image"}
          page="login"
          section="banner"
          category="login-image"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"login-image"} />
        <DynamicSingleUpload
          title={"Upload Mother Admin Image"}
          page="mother-admin"
          section="banner"
          category="motheradmin-image"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"motheradmin-image"} />
        <DynamicSingleUpload
          title={"Upload Banner All"}
          page="home"
          section="banner"
          category="banner-all"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"banner-all"} />
        <DynamicSingleUpload
          title={"Upload Banner Cricket"}
          page="home"
          section="banner"
          category="banner-cricket"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"banner-cricket"} />
        <DynamicSingleUpload
          title={"Upload Banner Soccer"}
          page="home"
          section="banner"
          category="banner-soccer"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"banner-soccer"} />
        <DynamicSingleUpload
          title={"Upload Banner Tennis"}
          page="home"
          section="banner"
          category="banner-tennis"
          successMsg={"Image added successfully"}
          errorMsg={"Failed to upload image"}
        />
        <DynamicSingleSelection category={"banner-tennis"} />
      </div>
    </div>
  );
};

export default HomeControl;
