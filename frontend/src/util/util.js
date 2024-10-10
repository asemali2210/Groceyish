export function getBaseUrl(){
    return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}


export function getStrapiUrl(path=""){
    const baseUrl = getBaseUrl()
    return `${baseUrl}${path}`
} 



export async function getStrapiData(url) {
    const respone = await fetch(url);
    const req = await respone.json();
    return req.data
}

