import { addCookiesToHeader } from '../helpers';

export async function POST(req) {
    try {
      const formData = await req.formData();
      const file = formData.get("file");
      const headers = await addCookiesToHeader();

      let url = "https://intelliagents.ddns.net/webhook/b90cb657-4b32-4ca7-9293-74733c4c79d7"
      // url = "https://intelliagents.ddns.net/webhook/upload"

      const formDataToSend = new FormData();
      formDataToSend.append("file", file, formData.get("file_name"));

      const response = await fetch(url, {
        method: "POST", 
        body: formDataToSend,
        headers: headers
      });
      if (!response.ok) {
        return Response.json(
          { error: response.statusText},
          { status: response.status }
        );
      }
      
      const data = await response.text();
         return Response.json(
        { data: data},
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
