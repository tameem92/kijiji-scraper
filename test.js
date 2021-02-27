const kijiji = require("./dist/index");

async function test() {
  ad = await kijiji.Ad.Get(
    "https://www.kijiji.ca/v-view-details.html?adId=1532120153"
  );

  console.log(ad);
}

test();
