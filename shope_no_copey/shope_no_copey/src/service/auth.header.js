export default function authHeader() {
try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
} catch (error) {
    console.log(error)
}
  }