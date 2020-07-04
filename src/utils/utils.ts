const randomColors = [
  "Aqua",
  "DarkCyan",
  "Beige",
  "Browm",
  "Coral",
  "Cyan",
  "DarkCyan",
  "FloralWhite",
  "DarkSalmon",
  "DarkSeaGreen"
]

export const randomColor = () => {  
  return randomColors[Math.floor(Math.random() * 10)];
}