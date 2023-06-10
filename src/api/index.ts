import axios from "axios";

export const getData = async () => {
  return axios
    .post(
        //MOCK API
      "https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs",
      {
        headers: {
          "X-API-KEY": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      localStorage.setItem("jobs", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.warn("Error", error);
    });
};
