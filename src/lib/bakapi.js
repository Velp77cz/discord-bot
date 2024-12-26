import "dotenv/config";

const url = "https://gcfm.bakalari.cz/login"
const head = {"content-type": "application/x-www-form-urlencoded"}
const body = `client_id=WIN&grant_type=password&username=Krivy19o2&password=${process.env.BAKALARI_PASSWORD}`
async function getToken() {
  var response = await fetch(url, {
    method: "POST",
    headers: head,
    body: body
  })
  console.log(response)

  //var responseJson = await response.json()
  //return responseJson.access_token
}
await getToken()
/*
podle mne to ted funguje pres ipnu
*/