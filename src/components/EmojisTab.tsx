import { useAtom } from "jotai";
import { emojiColorsAtom, selectedEmojiAtom } from "../utils/atoms";
import { useEffect } from "react";
import emojiss from "../constants/emojis.json";
import { generateRandomColors } from "../utils/randomColors";

const EmojiTab = () => {
  const [, setSelectedEmoji] = useAtom(selectedEmojiAtom);
  const [emojiColors, setEmojiColors] = useAtom(emojiColorsAtom);
  const { emojis } = emojiss;

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  useEffect(() => {
    setEmojiColors(generateRandomColors());
  }, [setEmojiColors]);

  return (
    <div>
      <div className="grid grid-cols-6 gap-2 mt-8">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
            style={{
              background: emojiColors[index],
            }}
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiTab;
