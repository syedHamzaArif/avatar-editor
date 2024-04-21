import { useAtom } from "jotai";
import { Link, useLocation } from "react-router-dom";
import { selectedColorAtom, selectedEmojiAtom } from "../utils/atoms";

const Sidebar = () => {
  const [emojiInput, setEmojiInput] = useAtom(selectedEmojiAtom);
  const [selectedColor] = useAtom(selectedColorAtom);
  const location = useLocation();

  const handleEmojiInputChange = (event: any) => {
    const value = event.target.value.toUpperCase();
    if (/^[A-Z]{0,3}$/.test(value)) {
      setEmojiInput(value);
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4">
        <ul className="mt-4">
          <Link to="/">
            <li
              className={`py-2 border-radius rounded-md p-2 cursor-pointer transition duration-300  ${
                location.pathname === "/" ? "bg-blue-500" : "hover:bg-blue-400"
              }`}
            >
              📋 emoji
            </li>
          </Link>
          <Link to="/monogram">
            <li
              className={`py-2 border-radius rounded-md p-2 cursor-pointer transition duration-300  ${
                location.pathname === "/monogram"
                  ? "bg-blue-500"
                  : "hover:bg-blue-400"
              }`}
            >
              📋 monogram
            </li>
          </Link>
          <Link to="/photos">
            <li
              className={`py-2 border-radius rounded-md p-2 cursor-pointer transition duration-300  ${
                location.pathname === "/photos"
                  ? "bg-blue-500"
                  : "hover:bg-blue-400"
              }`}
            >
              📋 photos
            </li>
          </Link>
        </ul>
      </div>
      <div className="absolute bottom-0 justify-center p-8">
        <div
          className="w-36 h-36 rounded-full flex items-center justify-center text-3xl"
          style={{ background: selectedColor }}
        >
          <input
            type="text"
            className="w-full bg-transparent text-white p-2 text-center rounded border-none focus:outline-none text-6xl"
            value={emojiInput}
            maxLength={3}
            onChange={handleEmojiInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
