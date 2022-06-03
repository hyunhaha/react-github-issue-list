export const fetchData = async () => {
  const requestOptions = {
    method: "GET",
  };
  const res = await fetch(
    "https://api.github.com/repos/facebook/create-react-app/issues",
    requestOptions
  );
  const json = await res.json();
  return json;
};
