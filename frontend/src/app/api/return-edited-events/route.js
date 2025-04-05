import { addCookiesToHeader } from '../helpers';

export async function POST(req) {

    try {
      let input_data = await req.json();
      const headers = await addCookiesToHeader();

      let url = "https://intelliagents.ddns.net/webhook/a19c5e63-b632-4db2-9802-a500efd142df";
      const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(input_data),
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
