const SelectOption = () => {
  return (
    <div className="bg-[#262c32] p-4">
      <select className="w-full p-2 text-yellow-500 bg-[#1f252b] border border-yellow-500 rounded outline-none">
        <option value="all">All</option>
        <option value="unmatched">Unmatched</option>
        <option value="matched">Matched</option>
      </select>

      <div className="mt-4 flex flex-row items-center justify-end">
        <div className="flex flex-row items-center gap-1">
          <label htmlFor="betPlaced" className="ml-2 text-lg text-yellow-500">
            Order By
          </label>
          <input
            type="checkbox"
            id="betPlaced"
            className="w-4 h-4 text-blue-500 bg-yellow-700 border-yellow-600 rounded "
          />
        </div>
        <div className="flex flex-row items-center gap-1">
          <label htmlFor="betWon" className="ml-2 text-lg text-white">
            Bet Placed
          </label>
          <input
            type="checkbox"
            id="betWon"
            className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
