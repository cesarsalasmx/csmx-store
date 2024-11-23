import Image from "next/image";
  
  export default function PostsList({ posts }) {
    if (!posts || posts.length === 0) {
      return <p className="text-center text-gray-500">No posts found.</p>;
    }
    return (
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">Blog</h2>
            <p className="mt-2 text-gray-600 text-lg/8">Posts from Wordpress</p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between max-w-xl">
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 font-semibold text-gray-900 text-lg/6 group-hover:text-gray-600">
                    <a href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  {/* Imagen destacada */}
                  {post.featuredImage?.node?.sourceUrl && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="object-cover w-full h-48"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <div className="relative flex items-center mt-8 gap-x-4">
                  <Image 
                    alt={post.author.node.name} 
                    src={post.author.node.avatar.url} 
                    width={200}
                    height={200}
                    className="rounded-full size-10 bg-gray-50" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author.node.name}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  