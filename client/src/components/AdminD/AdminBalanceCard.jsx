const AdminBalanceCard = ({ text, amount }) => {
  return (
    <div className="space-y-1 py-4 px-3 w-full border-r border-black border-opacity-10 text-white bg-black text-center rounded-md">
      <p className="font-bold whitespace-nowrap">{text}</p>
      <h3 className="px-2 bg-yellow-500 text-black text-sm font-bold rounded-lg">
        {amount}
      </h3>
    </div>
  );
};

export default AdminBalanceCard;
