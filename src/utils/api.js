import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer your auth token ",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
                 url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: "",
    headers: {
        Authorization: "bearer your auth token",
    },
});
