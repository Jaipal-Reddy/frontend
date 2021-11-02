import axios from "axios";

const LOGIN_API_BASE_URL =
  "http://ec2-18-224-17-221.us-east-2.compute.amazonaws.com:9102/rest/users";
class LoginService {
  validateUser(emailId, password) {
    return axios.get(
      LOGIN_API_BASE_URL + "/rest/users/login/" + emailId + "/" + password
    );
  }
  validate(user) {
    return axios.post(LOGIN_API_BASE_URL + "/validate", user);
  }
}
export default new LoginService();
