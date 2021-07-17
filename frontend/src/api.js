/**Our connection to the back-end */
import axios from "axios";

const createHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

const serverURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL
    : `http://localhost:5000/api`;

const actions = {

  // USER LOGIN/AUTHENTICATION
  getUser: async () => {
    let profile = await axios.get(`${serverURL}/user`, createHeaders());
    console.log(profile);
    return profile.data;
  },
  logIn: async (profile) => {
    let res = await axios.post(`${serverURL}/logMeIn`, profile.profileObj, createHeaders()
    );
    //Set JWT token to localStorage
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  },

// SERVER MANIPULATION
  createServer: async (server) => {
    return await axios.post(`${serverURL}/createServer`, server, createHeaders()
    );
  },
  getServers: async () => {
    return await axios.get(`${serverURL}/getServers`, createHeaders());
  },
  sendInput: async (id, data) => {
    console.log('message data sent is', data)
    return await axios.post(`${serverURL}/server/${id}/sendInput`, { data }, createHeaders())
  },
  getServerThread: async (id) => {
    return await axios.get(`${serverURL}/server/${id}`, createHeaders());
  },
  // MESSAGE MANIPULATION
  getMessages: async () => {
    return await axios.get(`${serverURL}/getMessages`, createHeaders());
  },
  sendMessage: async (message) => {
    return await axios.post(`${serverURL}/sendMessage`, message, createHeaders())
  },
  // USER MANIPULATION
  getUsers: async () => {
    return await axios.get(`${serverURL}/getUsers`, createHeaders());
  },

};

export default actions;

// CONNECTION TO BACKEND, GOOGLE AUTHORIZATION, API ACTIONS USABLE IN FRONTEND...