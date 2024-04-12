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
