export const GA_MEASIREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview=(url)=>{
    window.gtag('config',GA_MEASIREMENT_ID,{
        page_path:url,
    })
}