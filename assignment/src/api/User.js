const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";

export const getAllUsers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[0]);
  return data.results[0];
};
