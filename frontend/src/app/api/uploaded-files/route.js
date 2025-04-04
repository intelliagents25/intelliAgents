import { addCookiesToHeader } from '../helpers';
// Get list of uploaded files for this user

export async function GET(req) {
  try {
    url = "https://intelliagents.ddns.net/webhook/uploaded-files";

    const headers = await addCookiesToHeader();

    const response = await fetch(url, {
      method: "GET", 
      headers: headers,
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data', response.message);
    }
    
    let data = await response.json();
    data = data[0].data;

    return Response.json(
      { file_info: data},
      { status: 200 }
    );
  } catch (error) { // just return an empty array if there is an error
    console.log(error);
    return Response.json(
      { file_info: [] },
      { status: 200 }
    );
  }

}
