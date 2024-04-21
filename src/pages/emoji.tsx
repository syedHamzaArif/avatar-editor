import EmojiTab from "../components/EmojisTab";
import ColorsTab from "../components/ColorsTab";
import { useAtom } from "jotai";
import { selectedTabAtom } from "../utils/atoms";
import BottomButtons from "../components/BottomButtons";

const Emoji = () => {
  const [activeTab, setActiveTab] = useAtom(selectedTabAtom);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-900 text-white flex-1 min-h-screen">
      <div className="p-8 max-w-screen-lg mx-auto">
        <div className="flex justify-center mb-4">
          <button
            className={`py-1 px-4 rounded-md flex-1 ${
              activeTab === "tab1"
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            Emoji
          </button>
          <button
            className={`py-1 px-4 rounded-md flex-1 ${
              activeTab === "tab2"
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            Colors
          </button>
        </div>
        {activeTab === "tab1" ? <EmojiTab /> : <ColorsTab />}
        
      </div>
      <BottomButtons />
    </div>
  );
};

export default Emoji;
