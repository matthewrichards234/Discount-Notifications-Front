//const baseUrlDev = import.meta.env.BASE_URL_DEV;
const baseUrlDev = "http://localhost:3000";

export async function postUrl(website: string) {
  const url = baseUrlDev + "/url/create";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: website }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error),
    );
}
