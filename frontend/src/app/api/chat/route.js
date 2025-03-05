// Sample GET response for the chat
export async function POST(req) {

  try {
    let url = "https://intelliagents.ddns.net/webhook/chat/fetch";
    let input_data = await req.json();

    const response = await fetch(url, {method: "POST", body: JSON.stringify(input_data)});
    if (!response.ok) {
      console.log(response)
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
       return Response.json(
      { message: data[0].output},
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
