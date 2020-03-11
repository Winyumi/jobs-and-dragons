export const api = {
  addUserInfo(userInfo) {
    fetch('/api/v1/users', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  },
  getUserInfo() {
    fetch('/api/v1/user/:email')
      .then(res => res.json())
      .catch(err => console.log(err));
  }
};
