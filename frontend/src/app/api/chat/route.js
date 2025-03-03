// Sample GET response for the chat
export async function GET(req) {

  try {
    // let url = https://fake-json-api.mock.beeceptor.com/users
    let url = "https://intelliagents.ddns.net/webhook-test/chat/fetch"
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response)
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
       return Response.json(
      { data: data.message },
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
