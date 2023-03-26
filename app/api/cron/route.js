import axios from "axios";
import  prisma  from "../../../lib/prisma";
// export async function GET(request) {

//     const visits = await prisma.visits.findMany();
//     // return JSON.parse(JSON.stringify(visits));
//     return new Response(JSON.stringify({visits}), {
//       headers: {
//         "Content-Type": "application/json",
//         },
//         });

import { NextResponse } from "next/server";

export async function GET() {
  const visits = await prisma.visits.findMany();
  const data = await visits.json();

  return NextResponse.json({ data });
}
// var settings = {
//   url: `https://savitarna.smsbiuras.lt/api?uid=2874&apikey=${process.env.SMS_API_KEY}&from=VB-studija&to=37067532865&message=sms siuncia`,
//   method: "GET",
//   timeout: 0,
//   headers: {
//     Accept: "application/json",
//   },
// };

// axios(settings.url, settings);
