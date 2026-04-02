const baseUrlDev = import.meta.env.BASE_URL_DEV;

export async function postUrl() {
  const url = baseUrlDev + "/url/create";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: "url" }),
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

/* 
Current Output: 5:05PM
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (create, line 0)
[Error] There was a problem with the fetch operation: – Error: Network response was not ok — urlFetch.ts:15
Error: Network response was not ok — urlFetch.ts:15
	error
    I think the problem is in line 10...?
*/
