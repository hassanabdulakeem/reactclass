import { useEffect, useState } from "react"

const Products = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        }
         catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
      fetchProducts()
    }, [])

    return (
        <section>
            <h1>Products</h1>

            <section>
                {
                    isLoading ? (
                        <p>Loading....</p>
                    ) : (
                        <section>
                            {
                                products.length === 0 ? (
                                    <div>
                                        <p>No products!</p>
                                    </div>
                                ) : (
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                                        {
                                            products.map((ele, index) => (
                                                <div key={index} style={{ border: '1px solid', padding: "1rem" }}>
                                                    <img src={ele.image} alt="" width={200} />
                                                    <h2>{ele.title}</h2>
                                                    <span>{ele.price}</span>
                                                    <p>{ele.description}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </section>
                    )
                }
            </section>
        </section>
    )
}

export default Products