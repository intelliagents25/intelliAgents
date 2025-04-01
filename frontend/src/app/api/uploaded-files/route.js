import { addCookiesToHeader } from '../helpers';
// Get list of uploaded files for this user

export async function GET(req) {
  try {
    let environment = process.env.NODE_ENV === "development" ? "-test" : "";
    let url = `https://intelliagents.ddns.net/webhook${environment}/chat/fetch`

    const headers = await addCookiesToHeader();

    // return Response.json(
    //   { file_info: [{ name: "syllabus-1.pdf" },
    //     { name: "sylla-2.pdf" },
    //     { name: "syllabus-final-3.pdf" },
    //     { name: "math-101.pdf" }]},
    //   { status: 200 }
    // );

    const response = await fetch(url, {
      method: "GET", 
      headers: headers,
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
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
