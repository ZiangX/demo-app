// Using context api to get global token
const getDataFromSpreadsheet = async (token, spreadsheetId) => {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Activities!A1:E`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    let { values } = await res.json();
    // Remove the first element
    values.shift();
    return values;
  }
  return [];
};

// https://cors-anywhere.herokuapp.com/
const getGoogleApiAccessTokenByRefreshToken = async () => {
  const res = await fetch(
    "https://oauth2.googleapis.com/token?client_id=735001424008-cseikg1urk24ihdcbcr2cir85gm3jgi5.apps.googleusercontent.com&client_secret=DFNvgdLNdPB06RDZLLKUgNy3&grant_type=refresh_token&refresh_token=1//0dXPC1b6oSTP9CgYIARAAGA0SNwF-L9IrSW6AUOFNhgxNubhNyIyif711644aqiDNPILwc836yCVDp-lrLnPRfSysk3hSo5Lzuls",
    { method: "POST" }
  );
  if (res.ok) {
    let { access_token } = await res.json();
    console.log("access_token", access_token);
    return access_token;
  }
  return null;
};

export { getDataFromSpreadsheet, getGoogleApiAccessTokenByRefreshToken };
