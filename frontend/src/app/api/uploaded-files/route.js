import { addCookiesToHeader } from '../helpers';
// Get list of uploaded files for this user

export async function GET(req) {
  try {
    let environment = process.env.NODE_ENV === "development" ? "-test" : "";
    let url = `https://intelliagents.ddns.net/webhook${environment}/uploaded-files`;
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
    data = data.file_info;
    return Response.json(
      { file_info: data},
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
