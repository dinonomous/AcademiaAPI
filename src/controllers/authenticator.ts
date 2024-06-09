import { Request, Response } from "express";
import fetch from 'node-fetch';

export const login = async (req: Request, res: Response) => {
  const username = req.body.username;
  const cli_time = Date.now();
  const servicename = "ZohoCreator";
  const service_language = "en";
  const serviceurl = encodeURIComponent(
    "https://academia.srmist.edu.in/portal/academia-academic-services/redirectFromLogin"
  );
  const requestHeaders: HeadersInit = new Headers();
  const requestBody = `mode=primary&cli_time=${cli_time}&servicename=${servicename}&service_language=${service_language}&serviceurl=${serviceurl}`;
  requestHeaders.set("Accept", "*/*");
  requestHeaders.set("Accept-Encoding", "gzip, deflate, br, zstd");
  requestHeaders.set("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8");
  requestHeaders.set("Connection", "keep-alive");
  requestHeaders.set(
    "Content-Length",
    Buffer.byteLength(requestBody).toString()
  );
  requestHeaders.set(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  requestHeaders.set(
    "Cookie",
    "74c3a1eecc=86320f99d3a5ec2b36381b7353a57d1a; zccpn=685736da-54a9-46dd-9bae-e138f51d331b; ZCNEWUIPUBLICPORTAL=true; cli_rgn=IN; f0e8db9d3d=983d6a65b2f29022f18db52385bfc639; iamcsr=ffce2ff9-0fa3-4583-92a5-651c5724f33b; _zcsr_tmp=ffce2ff9-0fa3-4583-92a5-651c5724f33b; JSESSIONID=EFE3E9A80B14A039EFA5EA5070FD8F3F"
  );
  requestHeaders.set("Dnt", "1");
  requestHeaders.set("Host", "academia.srmist.edu.in");
  requestHeaders.set("Origin", "https://academia.srmist.edu.in");
  requestHeaders.set(
    "Referer",
    "https://academia.srmist.edu.in/accounts/p/10002227248/signin?hide_fp=true&servicename=ZohoCreator&service_language=en&css_url=/49910842/academia-academic-services/downloadPortalCustomCss/login&dcc=true&serviceurl=https%3A%2F%2Facademia.srmist.edu.in%2Fportal%2Facademia-academic-services%2FredirectFromLogin"
  );
  requestHeaders.set("Sec-Ch-Ua", '"Not-A.Brand";v="99", "Chromium";v="124"');
  requestHeaders.set("Sec-Ch-Ua-Mobile", "?0");
  requestHeaders.set("Sec-Ch-Ua-Platform", '"Windows"');
  requestHeaders.set("Sec-Fetch-Dest", "empty");
  requestHeaders.set("Sec-Fetch-Mode", "cors");
  requestHeaders.set("Sec-Fetch-Site", "same-origin");
  requestHeaders.set(
    "User-Agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  );
  requestHeaders.set(
    "X-Zcsrf-Token",
    "iamcsrcoo=ffce2ff9-0fa3-4583-92a5-651c5724f33b"
  );

  const response = await fetch(
    `https://academia.srmist.edu.in/accounts/p/10002227248/signin/v2/lookup/${username}`,
    {
      method: "POST",
      headers: requestHeaders,
      body: requestBody,
    }
  );
  console.log(response);
};
