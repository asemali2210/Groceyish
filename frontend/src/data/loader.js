import {getBaseUrl } from "@/util/util";
import qs from "qs";
async function fetchData(url){
    const authToken = null;
    const headers = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        },
    };
    try{
        const response = await fetch(url,authToken ? headers : {});
        const data = response.json();
        return data
    } catch (error){
        console.log(error.message)
        throw error
    }
}



const baseUrl= getBaseUrl();

export async function getHomePageData() {
    const url = new URL("/api/home-page", baseUrl);
    url.search = qs.stringify({
        populate: {
            blocks: {
                on: {
                   'layout.hero-section': {
                        populate: {
                            image: {
                                populate: {
                                    fields: ["url"]
                                }
                            }
                        }
                   },
                   'layout.featrues-sections': {
                        populate: {
                            feature: {
                                populate: true
                            }
                        },
                   },
                }
            }
        },
    });
    return await fetchData(url.href)
}

export async function getGlobalData(){
    const url = new URL("/api/global", baseUrl )
    url.search = qs.stringify({
        populate: ['header.logoText','footer','footer.logoText', 'footer.footerColumn','footer.footerColumn.boxItem', 'footer.footerLinkWithIcon','footer.developer']
    })
    return await fetchData(url.href)
}


