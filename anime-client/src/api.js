const API_URL = "https://api.example.com/animes";

export const fetchAnimes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const addAnime = async (newAnime) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnime),
  });
  const data = await response.json();
  return data;
};
