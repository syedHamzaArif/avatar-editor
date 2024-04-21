import BottomButtons from "../components/BottomButtons";
import ColorsTab from "../components/ColorsTab";

const Monogram = () => {
  return (
    <div className="bg-gray-900 text-white flex-1 min-h-screen">
      <div className="p-8 max-w-screen-lg mx-auto">
        <ColorsTab />
      </div>
      <BottomButtons />
    </div>
  );
};

export default Monogram;
