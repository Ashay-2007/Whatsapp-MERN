import axios from "axios";

const instance = axios.create({
	baseURL: "https://mern-whatsapp-backend12.herokuapp.com/",
});

export default instance;