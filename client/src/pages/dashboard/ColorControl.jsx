import DynamicCompColor from "@/components/dashboard/DynamicCompColor";

const ColorControl = () => {
  return (
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
        title={"Home page category select color control"}
        section={"home-category-select"}
      />
      {/* <DynamicCompColor
        title={"Home page game play button color control"}
        section={"home-game-button"}
      /> */}
    </div>
  );
};

export default ColorControl;
