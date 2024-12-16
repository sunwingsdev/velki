import PageHeader from "@/components/shared/PageHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ImSpinner8 } from "react-icons/im";
import BetsHistorySelectOption from "./BetsHistorySelectOption";

const BetsHistory = () => {
  return (
    <div className="mt-16">
      <PageHeader title="Bets History" />
      <div>
        <Tabs>
          <TabList className="flex flex-row items-center justify-center gap-4 py-1 font-bold">
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              All
            </Tab>
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              Exchange
            </Tab>
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              Casino
            </Tab>
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              Fancybet
            </Tab>
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              Bookmaker
            </Tab>
            <Tab
              selectedClassName="border-b-4 border-black text-black px-2 py-2"
              className="px-2 py-2"
            >
              SportsBook
            </Tab>
          </TabList>

          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <BetsHistorySelectOption />
            <div className="bg-[#eef6fb] h-[45rem] flex items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-xl">
                <ImSpinner8 className="text-4xl text-gray-300" />
                <h1 className="text-lg text-gray-500">No Data</h1>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BetsHistory;
