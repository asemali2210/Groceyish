import {getBaseUrl } from "@/util/util";
import { unstable_noStore } from "next/cache";
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
    unstable_noStore();
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
                                populate: {
                                    icon: {
                                        fields: ["url"]
                                    }
                                }
                            }
                        },
                   },
                   'layout.feature-main': {
                        populate: true
                   },
                   'custom.categries': {
                        populate: {
                            categories: {
                                populate: {
                                    products: {
                                        populate:{
                                            images: {
                                                populate: {
                                                    fields: ["url"]
                                                }
                                            }
                                        }
                                    },
                                    image: {
                                        populate: {
                                            fields: 'url'
                                        }
                                    }
                                }
                            },
                        }
                   },
                   'custom.download-app': {
                        populate: {
                            googleplay: {
                                fields: ["url"]
                            },
                            appStore: {
                                fields: ["url"]
                            },
                            perview: {
                                fields: ["url"]
                            }
                        }
                   },
                   'custom.special-products-section': {
                        populate: {
                            productList: {
                                populate: {
                                    products: {
                                        populate: {
                                            images: {
                                                populate: true
                                            },
                                        }
                                    }
                                }
                            }
                        }
                   },
                   'components.products': {
                    populate: {
                        products: {
                            populate: {
                                images: {
                                    populate: true
                                },
                                categories: true
                            }
                        }
                    }
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
        populate: 
        [
            'footer.logoText',
            'footer.footerColumn',
            'footer.footerColumn.boxItem',
            'footer.footerLinkWithIcon',
            'footer.developer',
            'navbar.navbarLink',
            'navbar.categories', 
            'navbar.categories.image', 
            'navbar.navbarBottomLink',
        ],
    })
    return await fetchData(url.href)
}

export async function getCategorySlug(){
    const url = new URL("/api/categories", baseUrl );
    url.search = qs.stringify({
        populate: {
            image: {
                populate: {
                    fields: 'url'
                }
            }
        }
    })
    return await fetchData(url.href)
} 


