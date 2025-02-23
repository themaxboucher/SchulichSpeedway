export function combineLatLng(latitudes, longitudes) {
  if (latitudes.length !== longitudes.length) {
    throw new Error("Latitude and Longitude arrays must have the same length.");
  }

  return latitudes.map((lat, index) => ({
    lat: lat,
    lng: longitudes[index],
  }));
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const timeParts = [];

  if (minutes > 0) {
    timeParts.push(`${minutes} min`);
  }
  if (remainingSeconds > 0 || minutes === 0) {
    timeParts.push(`${remainingSeconds} s`);
  }

  return timeParts.join(" ");
}
