import DynamicCompColor from "@/components/dashboard/DynamicCompColor";
import DynamicCompHoverColor from "@/components/dashboard/DynamicCompHoverColor";

const ColorControl = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {/* <DynamicGradientColor
        title={"Home page header color control"}
        section={"home-header"}
      /> */}
        <DynamicCompColor
          title={"Home page navbar color control"}
          section={"home-navbar"}
        />
        <DynamicCompColor
          title={"Home page banner title color control"}
          section={"home-banner-title"}
        />
        <DynamicCompColor
          title={"Home page banner count color control"}
          section={"home-banner-count"}
        />
        {/* <DynamicCompColor
          title={"Home page category select color control"}
          section={"home-category-select"}
        /> */}

        {/* <DynamicCompColor
        title={"Home page game play button color control"}
        section={"home-game-button"}
      /> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <DynamicCompHoverColor
          title={"Home page category select color control"}
          section={"home-category-select"}
        />
        <DynamicCompHoverColor
          title={"Home page subcategory select color control"}
          section={"home-subcategory-select"}
        />
        {/* <DynamicCompColor
        title={"Home page game play button color control"}
        section={"home-game-button"}
      /> */}
      </div>
    </div>
  );
};

export default ColorControl;
