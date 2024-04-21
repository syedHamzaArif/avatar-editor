import emojis from "../constants/emojis.json";

export const generateRandomColors = () => {
  const colors = [];
  for (let i = 0; i < emojis.emojis.length; i++) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return colors;
};
