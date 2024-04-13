export async function FetchData(url, options) {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch {
    throw new Error("the request has been rejected");
  }
}
export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eed38a9c65msh43afb7d0cd01b7ep13b833jsn726452adb7a7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const searchYoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5abd34c871mshdb21a8bf66bcebfp1cc38fjsn06cf274c069c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
