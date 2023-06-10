import axios from "axios";

export const getData = async () => {
  return axios
    // .get("https://sourcestack-api.com/companies?name=SourceStack", {
    .post(
      //TEMP as API is not avalable atm
      "https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs",
      {
        headers: {
          "X-API-KEY": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("RESPONSE", response.data);
      localStorage.setItem("jobs", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.warn("Error", error);
    });
};
