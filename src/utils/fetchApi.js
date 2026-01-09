const URL =  "https://chatbot.mn/api";

const fetchWithTimeout = (url, options, timeout = 10000) => {
  let {
    headerCallback = null,
    ignoreSSL = false,
    debug = false,
    ...rest
  } = options || {};
  if (!url.startsWith("http") || !url.startsWith("https")) {
    url = URL + url;
  }

  return Promise.race([
    fetch(url, rest)
      .then((res) => {
        if (headerCallback && typeof headerCallback === "function") {
          headerCallback(res.headers.raw());
        }
        let contentType = res.headers.get("Content-Type");

        if (debug) {
          return res.text().then((text) => {
            console.log("fetchWithTimeout debug text", text);
            return JSON.parse(text);
          });
        } else {
          return res.json();
        }
      })
      // .then((res) => res.json())
      .then((json) => {
        return { code: 1000, message: "success", result: json };
      })
      .catch((err) => {
        return { code: 1001, message: err.message, error: true };
      }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Сервер хариу өгсөнгүй!")), timeout)
    ).catch((err) => {
      return { code: 1001, message: err.message, error: true };
    }),
  ]);
};

export default fetchWithTimeout;
