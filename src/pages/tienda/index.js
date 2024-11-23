import Layout from "@/components/template/layout";
import { GET_PRODUCTS } from "@/graphql/products";
import client from "@/lib/apollo-client";
import ProductList from "@/components/store/productList";

export default function Store({products}){
    return(
        <Layout>
            <ProductList products={products}/>
        </Layout>
    );
}

export async function getStaticProps() {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS,
      });
      return {
        props: {
          products: data.products.nodes || [],
        },
        revalidate: 10, // ISR: Regenera cada 10 segundos
      };
    } catch (error) {
      console.error("Error fetching products:", error);
      return {
        props: {
          products: [],
        },
      };
    }
  }