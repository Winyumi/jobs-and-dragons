export const api = {
  async addUserInfo(userInfo) {
    const res = await fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (res.ok) {
      const jsonRes = await res.json();
      console.log(jsonRes);
      return jsonRes;
    }
  },
  async getUserInfo(userEmail) {
    console.log(userEmail);
    const res = await fetch(`/api/v1/users/${userEmail}`);

    const jsonRes = await res.json();
    console.log(jsonRes);
    return jsonRes;
  }
};
