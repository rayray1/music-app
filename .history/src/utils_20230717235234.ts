export const formatTime = (seconds: number) => {
  if (seconds === Infinity) {
    return "--";
  }
  const floored = math.floor(seconds);
  let from = 14;
  let length = 5;
  if (floored >= 3600) {
    
  }
}