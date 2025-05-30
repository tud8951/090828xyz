const BOT_TOKEN = '7590517262:AAFCY3tP4MejrwPL-zLgp1V3jEAxLIBlu_M';
const CHANNEL_ID = '-1002346064337';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.message && data.message.text) {
      const msg = data.message.text;
      const sender = data.message.from.username || data.message.from.first_name || '匿名';

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const payload = {
        chat_id: CHANNEL_ID,
        text: `📨 来自 @${sender}：\n${msg}`
      };

      const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload)
      };

      UrlFetchApp.fetch(url, options);
    }

    return ContentService.createTextOutput("ok");
  } catch (err) {
    Logger.log(err.toString());
    return ContentService.createTextOutput("error: " + err.message);
  }
}
