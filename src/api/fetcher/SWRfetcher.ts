export function GETRequestFetcher(url: string) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export function POSTRequestFetcher(url: string, body: unknown) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export function PUTRequestFetcher(url: string, body: unknown) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export function DELETERequestFetcher(url: string) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
