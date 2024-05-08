import fetch from "node-fetch";
import puppeteer from "puppeteer"; // Import puppeteer

(async () => {
  const preparePageForTests = async (page) => {
    const userAgent =
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36";
    await page.setUserAgent(userAgent);
  };

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: false,
    devtools: true, // Enable DevTools
  });
  const page = await browser.newPage();
  await preparePageForTests(page);

  page.once("load", () => console.log("Page loaded!"));
  await page.goto("https://academia.srmist.edu.in/");

  console.log("Hit wait for login button");

  console.log("Page loaded completely, making API call...");

  // Make the API call here
  const requestBody =
    "mode=primary&cli_time=1714879195539&servicename=ZohoCreator&service_language=en&serviceurl=https://academia.srmist.edu.in/portal/academia-academic-services/redirectFromLogin";

  const response = await fetch(
    "https://academia.srmist.edu.in/accounts/p/10002227248/signin/v2/lookup/dn9299@srmist.edu.in",
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        Connection: "keep-alive",
        "Content-Length": Buffer.byteLength(requestBody), // Calculate the length of the request body
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Cookie:
          "74c3a1eecc=86320f99d3a5ec2b36381b7353a57d1a; zccpn=685736da-54a9-46dd-9bae-e138f51d331b; ZCNEWUIPUBLICPORTAL=true; cli_rgn=IN; f0e8db9d3d=983d6a65b2f29022f18db52385bfc639; iamcsr=ffce2ff9-0fa3-4583-92a5-651c5724f33b; _zcsr_tmp=ffce2ff9-0fa3-4583-92a5-651c5724f33b; JSESSIONID=EFE3E9A80B14A039EFA5EA5070FD8F3F",
        Dnt: "1",
        Host: "academia.srmist.edu.in",
        Origin: "https://academia.srmist.edu.in",
        Referer:
          "https://academia.srmist.edu.in/accounts/p/10002227248/signin?hide_fp=true&servicename=ZohoCreator&service_language=en&css_url=/49910842/academia-academic-services/downloadPortalCustomCss/login&dcc=true&serviceurl=https%3A%2F%2Facademia.srmist.edu.in%2Fportal%2Facademia-academic-services%2FredirectFromLogin",
        "Sec-Ch-Ua": '"Not-A.Brand";v="99", "Chromium";v="124"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "X-Zcsrf-Token": "iamcsrcoo=ffce2ff9-0fa3-4583-92a5-651c5724f33b",
      },
      body: requestBody,
    }
  );

  const data = await response.json();
  console.log(data);

  const password = "DinesH@po12"; // This is the password to be submitted
  const passwordUrl =
    "https://academia.srmist.edu.in/accounts/p/10002227248/signin/v2/primary/10063514052/password";
  const passwordBody = {
    passwordauth: {
      password: password,
    },
  };

  const passwordResponse = await fetch(passwordUrl, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Connection: "keep-alive",
      "Content-Length": Buffer.byteLength(JSON.stringify(passwordBody)),
      "Content-Type": "application/json;charset=UTF-8",
      Cookie:
        "74c3a1eecc=86320f99d3a5ec2b36381b7353a57d1a; zccpn=685736da-54a9-46dd-9bae-e138f51d331b; ZCNEWUIPUBLICPORTAL=true; cli_rgn=IN; f0e8db9d3d=983d6a65b2f29022f18db52385bfc639; iamcsr=ffce2ff9-0fa3-4583-92a5-651c5724f33b; _zcsr_tmp=ffce2ff9-0fa3-4583-92a5-651c5724f33b; JSESSIONID=EFE3E9A80B14A039EFA5EA5070FD8F3F",
      Dnt: "1",
      Host: "academia.srmist.edu.in",
      Origin: "https://academia.srmist.edu.in",
      Referer:
        "https://academia.srmist.edu.in/accounts/p/10002227248/signin?hide_fp=true&servicename=ZohoCreator&service_language=en&css_url=/49910842/academia-academic-services/downloadPortalCustomCss/login&dcc=true&serviceurl=https%3A%2F%2Facademia.srmist.edu.in%2Fportal%2Facademia-academic-services%2FredirectFromLogin",
      "Sec-Ch-Ua": '"Not-A.Brand";v="99", "Chromium";v="124"',
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Platform": '"Windows"',
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      "X-Zcsrf-Token": "iamcsrcoo=ffce2ff9-0fa3-4583-92a5-651c5724f33b",
    },
    body: JSON.stringify(passwordBody),
  });

  const passwordData = await passwordResponse.json();
  console.log(passwordData);
})();
