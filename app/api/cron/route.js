
export async function GET(request) {

  var settings = {
    "url": `https://savitarna.smsbiuras.lt/api?uid=2874&apikey=${process.env.SMS_API_KEY}&from=VB-studija&to=37067532865&message=sms siuncia`,
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Accept": "application/json"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
  return new Response({success: true})

}
