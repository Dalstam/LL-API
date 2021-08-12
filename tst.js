// const { timeStamp } = require('console');
const fetch = require('node-fetch');
// let auth; 
fetch("https://www.linkedin.com/oauth/v2/accessToken", {
  body: "grant_type=client_credentials&client_id=787dp3bafex2kk&client_secret=17m5MJUUCEai1vRp",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(response => response.json())
.then(data => Req2(data));

const Req2 = (data) => {

    console.log(data);
    // console.log(data.access_token);
    // timeStamp = new Date();
    fetch("https://api.linkedin.com/v2/learningActivityReports?q=criteria&contentSource=EXTERNAL&timeOffset.unit=DAY&aggregationCriteria.primary=CONTENT&start=1&count=1&assetType=COURSE&startedAt=1552652108993&=&sortBy.engagementMetricQualifier=TOTAL&timeOffset.duration=1&sortBy.engagementMetricType=SECONDS_VIEWED", {
        headers: {
          Authorization:  `Bearer ${data.access_token}`
        }
      }).then(response => response.json())
      .then(data => console.log(data))
};

// /https://kigiri.github.io/fetch/

