import { cookies} from 'next/headers';

export async function addCookiesToHeader(headers) {
    // right now it just appends the userToken to the cookie header
    // throws exception if userToken is not found

    if (!headers || typeof headers !== 'object') {
        headers = {};
    }

    const cookieStore = await cookies();
    const userToken = cookieStore.get("userToken")?.value;


    console.log("🔍 All Cookies:", Array.from(cookieStore.getAll())); // Debugging log
    
    if (userToken == null) {
        throw new Error("User token not found"); //todoL do we want to change status here?
      }
    
    headers['Cookie'] = `userToken=${userToken}`;


    return headers;
}