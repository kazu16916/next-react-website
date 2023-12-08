import { client } from 'lib/api'
export default function Schedule(){
    return <h1>記事タイトル</h1>
}

export async function getStaticProps(){
    console.log('処理1')
    setTimeout(()=>console.log('処理2'),1000)
    console.log('処理3')
    const resPromise=client.get({
        endpoint:'blogs',
    })
    try {
        const res=await resPromise
        console.log(res)
    }catch(err) {
        console.log(err)
    }
    
    resPromise.then((res) => console.log(res)).catch((err)=>console.log(err))
    
    return {
        props:{},
    }
}

