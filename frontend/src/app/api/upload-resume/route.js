export async function POST(req) {

    try {
      const formData = await req.formData();
      const file = formData.get("file");

      console.log(file);
      let environment = process.env.NODE_ENV === "development" ? "-test" : "";
      let url = `https://intelliagents.ddns.net/webhook${environment}/upload`
  
      const response = await fetch(url, {
        method: "GET", 
        body: file
      });
      if (!response.ok) {
        console.log(response)
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.text();
      console.log(data);
         return Response.json(
        { raw_ics: data},
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
