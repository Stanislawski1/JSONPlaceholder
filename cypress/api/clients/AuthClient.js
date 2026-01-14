import BaseApi from "../base/BaseApi";

class AuthClient extends BaseApi {
    login(username, password) {
        return this.sendRequest({
            method: 'POST',
            url: '/login',
            body: { username, password }
        });
    }
}
export default new AuthClient();