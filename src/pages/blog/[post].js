import { GET_POST_SLUGS, GET_POST_DETAILS } from "@/graphql/posts";
import client from "@/lib/apollo-client";
import PostDetail from "@/components/blog/postDetail";
import Layout from "@/components/template/layout";

export default function PostPage({ post }) {
  if (!post) {
    return <Layout><p className="text-center text-gray-500">Post not found.</p></Layout>;
  }

  return (
    <Layout>
        <PostDetail post={post} />;
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // Obtener los slugs de los posts
    const { data } = await client.query({
      query: GET_POST_SLUGS,
    });

    const paths = data.posts.nodes.map(({ slug }) => ({
      params: { post: slug },
    }));

    return {
      paths,
      fallback: "blocking", // Genera páginas dinámicas en tiempo de ejecución
    };
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await client.query({
      query: GET_POST_DETAILS,
      variables: { slug: params.post },
    });

    return {
      props: {
        post: data.post || null,
      },
      revalidate: 10, // ISR: Regenerar cada 10 segundos
    };
  } catch (error) {
    console.error("Error fetching post details:", error);
    return {
      props: {
        post: null,
      },
    };
  }
}
