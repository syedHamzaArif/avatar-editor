import { useAtom } from "jotai";
import { selectedColorAtom, selectedEmojiAtom } from "../utils/atoms";
import colors from "../constants/colors.json";

const ColorsTab = () => {
  const [, setSelectedColor] = useAtom(selectedColorAtom);
  const { normalColors, gradientColors } = colors;
  const [selectedEmoji] = useAtom(selectedEmojiAtom);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="text-md mt-8">Monoton</div>
      <div className="grid grid-cols-6 gap-2 mt-4">
        {normalColors.map((color, index) => (
          <button
            key={index}
            className="w-24 h-24 rounded-full text-4xl"
            style={{ background: color }}
            onClick={() => handleColorClick(color)}
          >
            {selectedEmoji}
          </button>
        ))}
      </div>
      <div className="text-md mt-8">Gradient</div>
      <div className="grid grid-cols-6 gap-2 mt-4">
        {gradientColors.map((color, index) => (
          <button
            key={index}
            className="w-24 h-24 rounded-full text-4xl"
            style={{
              background: color,
            }}
            onClick={() => handleColorClick(color)}
          >
            {selectedEmoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorsTab;
