export default async function ProductDetails({params,}: {params: Promise<{productId : string}>}) 
{
    const productID = (await params).productId;
    return <h1>Details about product{productID}</h1>
}