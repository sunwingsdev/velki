import PageHeader from "@/components/shared/PageHeader";
import { useState } from "react";

const Settings = () => {
  const [highlightOdds, setHighlightOdds] = useState(true);
  const [showInMarkets, setShowInMarkets] = useState(true);
  return (
    <div className="mt-16 h-svh">
      <PageHeader title="Setting" />

      <div className="bg-white m-4">
        {/* Odds Section */}
        <div className="mb-6">
          <h2 className="text-gray-700 font-bold mb-2">Odds</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Highlight when odds change</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={highlightOdds}
                onChange={() => setHighlightOdds(!highlightOdds)}
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-yellow-400 transition duration-300"></div>
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 transform ${
                  highlightOdds ? "translate-x-6" : "translate-x-0"
                } transition duration-300`}
              ></div>
            </label>
          </div>
        </div>

        {/* Events Widget Section */}
        <div>
          <h2 className="text-gray-700 font-bold mb-2">Events Widget</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Show in Full-Markets</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={showInMarkets}
                onChange={() => setShowInMarkets(!showInMarkets)}
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-yellow-400 transition duration-300"></div>
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 transform ${
                  showInMarkets ? "translate-x-6" : "translate-x-0"
                } transition duration-300`}
              ></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
