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
    const res = await fetch(`/api/v1/users/${userEmail}`);

    const jsonRes = await res.json();
    console.log(jsonRes);
    return jsonRes;
  },

  async getJobListing(){
      let app_id='a69247c0';
      let app_key='24fc9762a9d2f3a031f002f7afe14f75';
      const res = await fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id='+app_id+'&app_key='+app_key+'&results_per_page=10');
      const jsonRes = await res.json();
      console.log(jsonRes);
      return jsonRes;


    }
  

};
