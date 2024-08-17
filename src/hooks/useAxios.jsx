import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://y-virid-alpha.vercel.app"
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;