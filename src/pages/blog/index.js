import Layout from "@/components/template/layout";
import PostsList from "@/components/blog/postsList";
import { GET_ALL_POSTS } from "@/graphql/posts";
import client from "@/lib/apollo-client";

export default function Blog ({posts}){
    return(
        <Layout>
            <PostsList posts={posts}/>
        </Layout>
    );
}

export async function getStaticProps() {
    try {
      const { data } = await client.query({
        query: GET_ALL_POSTS,
      });
      return {
        props: {
          posts: data.posts.nodes || [],
        },
        revalidate: 10, // ISR: Regenerar cada 10 segundos
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return {
        props: {
          posts: [],
        },
      };
    }
  }