import { addCookiesToHeader } from '../helpers';

export async function POST(req) {

    try {
      let input_data = await req.data;
      const headers = await addCookiesToHeader();

      let environment = process.env.NODE_ENV === "development" ? "-test" : "";
      let url = `https://intelliagents.ddns.net/webhook${environment}/upload`
      url = "https://intelliagents.ddns.net/webhook/b90cb657-4b32-4ca7-9293-74733c4c79d7"

      
      const response = await fetch(url, {
        method: "POST", 
        body: input_data,
        headers: headers
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.text();
         return Response.json(
        { data: data},
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
