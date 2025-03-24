import { addCookiesToHeader } from '../helpers';

export async function POST(req) {
  console.log("POST request received");
    try {
      const formData = await req.formData();
      const file = formData.get("file");
      const headers = await addCookiesToHeader();

      console.log(file);
      let environment = process.env.NODE_ENV === "development" ? "-test" : "";
      let url = `https://intelliagents.ddns.net/webhook${environment}/upload`
      url = "https://intelliagents.ddns.net/webhook/cc22bde7-3214-438d-b617-69efc2400de5"
      
      // this is a test url
      
      const response = await fetch(url, {
        method: "POST", 
        body: file,
        headers: headers
      });
      if (!response.ok) {
        console.log(response)
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.text();
      console.log(data);
         return Response.json(
        { raw_ics: data},
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
