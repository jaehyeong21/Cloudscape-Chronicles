import dfs_xy_conv from "./XY";

export const getGeolocation = async () => {
  try {
    const { latitude, longitude } = await new Promise((resolve, reject) => {
      const success = (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      };
      const error = (error) => {
        reject(error);
      };
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(success, error);
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
    const XY = dfs_xy_conv("toXY", latitude, longitude);
    return XY;
  } catch (error) {
    console.error("Error getting geolocation:", error);
    return null;
  }
};
