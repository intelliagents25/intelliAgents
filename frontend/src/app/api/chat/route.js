import { addCookiesToHeader } from '../helpers';
// Sample GET response for the chat
export async function POST(req) {
  try {
    let url = `https://intelliagents.ddns.net/webhook/chat`

    let input_data = await req.json();

    const headers = await addCookiesToHeader();

    const response = await fetch(url, {
      method: "POST", 
      body: JSON.stringify(input_data),
      headers: headers,
    });
    if (!response.ok) {
      throw new Error('Chat response error');
    }
    
    let data = await response.text();
    data = JSON.parse(data)[0].output;

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
