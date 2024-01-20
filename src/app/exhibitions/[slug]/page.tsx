export async function generateStaticParams() {
  const posts = await fetch('http://hiraya.test/wp-json/wp/v2/rb_gallery?per_page=100&page=1').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}