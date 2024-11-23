import { GET_PRODUCT_SLUGS, GET_PRODUCT_DETAILS } from "@/graphql/products";
import client from "@/lib/apollo-client";
import ProductDetail from "@/components/store/productDetail";
import Layout from "@/components/template/layout";

export default function ProductPage({ product }) {
  if (!product) {
    return <Layout><p className="text-center text-gray-500">Product not found.</p></Layout>;
  }

  return(
    <Layout>
        <ProductDetail product={product} />;
    </Layout>
) 
    
}

export async function getStaticPaths() {
  try {
    // Obtener los slugs de los productos
    const { data } = await client.query({
      query: GET_PRODUCT_SLUGS,
    });

    const paths = data.products.nodes.map(({ slug }) => ({
      params: { product: slug },
    }));

    return {
      paths,
      fallback: "blocking", // Si no se encuentra una ruta, genera la página en tiempo de ejecución
    };
  } catch (error) {
    console.error("Error fetching product slugs:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_DETAILS,
      variables: { slug: params.product },
    });

    return {
      props: {
        product: data.product || null,
      },
      revalidate: 10, // ISR: Regenerar cada 10 segundos
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}
