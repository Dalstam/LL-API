// const fetch = require('node-fetch');
// let auth; 
fetch("https://www.linkedin.com/oauth/v2/accessToken", {
  body: "grant_type=client_credentials&client_id=787dp3bafex2kk&client_secret=17m5MJUUCEai1vRp",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(response => response.json())
// .then(data => console.log(data))
.then(data => Req2(data));

const Req2 = (data) => {
   let  url =   'https://api.linkedin.com/v2/learningActivityReports?q=criteria&start=1&count=1&startedAt=1552652108993&timeOffset.duration=2&aggregationCriteria.primary=INDIVIDUAL&timeOffset.unit=WEEK&sortBy.engagementMetricType=LOGINS' ;
    console.log(data);
    console.log(data.access_token);
    fetch(url, {
        headers: {
          Authorization:  `Bearer ${data.access_token}`
        }
      }).then(response => response.json())
      .then(data => console.log(data))
};



//https://kigiri.github.io/fetch/

