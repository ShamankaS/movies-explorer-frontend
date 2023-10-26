export const durationConverter = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  let time;
  if (hours === 0) {
    time = `${minutes}м`;
  } else {
    time = `${hours}ч ${minutes}м`;
  }

  return time;
};
