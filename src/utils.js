let URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  URL = "http://localhost:8000/api";
} else {
  // production code
  URL = "https://quizio-ie5h.onrender.com/api";
}

export const ROOT_URL = URL;
