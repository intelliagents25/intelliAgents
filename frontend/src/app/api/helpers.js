import { cookies} from 'next/headers';

const secret = process.env.NEXTAUTH_SECRET;

async function getUserID(email) {
    try {
        // make a request to get uuid from user email
        const url = "https://intelliagents.ddns.net/webhook/get_uuid?email=" + email;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();
        data = data[0].data;

        if (!data) {
            throw new Error('No data found for the given email');
        }

        return data;

    } catch (error) {
        console.error('Error fetching user ID:', error);
        return "";
    }
        
}

export async function addCookiesToHeader(headers={}) {

    // right now it just appends the userToken to the cookie header
    // throws exception if userToken is not found

    if (!headers || typeof headers !== 'object') {
        headers = {};
    }

    const cookieStore = await cookies();
    let userToken = cookieStore.get("userToken")?.value;
    const userEmail = cookieStore.get("userEmail")?.value;

    if (userEmail) {
        let token = await getUserID(userEmail);
        if (token) {
            userToken = token;
        }
    }

    if (userToken == null) {
        throw new Error("User token not found"); //todoL do we want to change status here?
      }
    
    headers['user-cookie'] = `${userToken}`;
    

    return headers;
}