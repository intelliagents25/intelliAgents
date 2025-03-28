import { addCookiesToHeader } from '../helpers';
// Sample GET response for the chat
export async function POST(req) {
  try {
    let environment = process.env.NODE_ENV === "development" ? "-test" : "";
    let url = `https://intelliagents.ddns.net/webhook${environment}/chat/fetch`

    let input_data = await req.json();

    const headers = await addCookiesToHeader();

    const response = await fetch(url, {
      method: "POST", 
      body: JSON.stringify(input_data),
      headers: headers,
    });
    if (!response.ok) {
      console.log(response)
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
    return Response.json(
      { message: data},
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
