import axios from "axios";
const USERS_API_BASE_URL =
  "http://ec2-18-224-17-221.us-east-2.compute.amazonaws.com:9102/rest/users";
class UserService {
  ValidateLogin() {
    return axios.get(USERS_API_BASE_URL);
  }
  createUser(addUser) {
    return axios.post(USERS_API_BASE_URL + "/addUser", addUser);
  }
  getUserById(userId) {
    return axios.get(USERS_API_BASE_URL + "/" + userId);
  }
  updateUser(user, userId) {
    return axios.put(USERS_API_BASE_URL + "/" + userId, user);
  }
}
export default new UserService();
