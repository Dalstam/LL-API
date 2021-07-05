// const fetch = require('node-fetch');
// let auth; 
fetch("https://www.linkedin.com/oauth/v2/accessToken", {
  body: "grant_type=client_credentials&client_id=787dp3bafex2kk&client_secret=17m5MJUUCEai1vRp",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  mode: 'no-cors' // 'cors' by default
}).then(response => response.json())
// .then(data => console.log(data))
.then(data => Req2(data));

const Req2 = (data) => {
    console.log(data);
    console.log(data.access_token);
    fetch("https://api.linkedin.co/v2/learningActivityReports?aggregationCriteria.secondary=CONTENT&q=criteria&count=1&contentSource=INTERNAL&startedAt=1562699900247&timeOffset.unit=DAY&timeOffset.duration=7&aggregationCriteria.primary=INDIVIDUAL&sortBy.engagementMetricType=MARKED_AS_DONE", {
        headers: {
          Authorization:  `Bearer ${data.access_token}`
        },
        mode: 'no-cors' // 'cors' by default
      }).then(response => response.json())
      .then(data => console.log(data))
};



//https://kigiri.github.io/fetch/

