import Image from "next/image";

export default async function Home() {
  const data = await getExhibitions()

  const postHtml = data.map((post,i) => {
    let featuredImage = ''
    if (post.cover_art) {
      featuredImage = post.cover_art
    } else if (post.the_post_thumbnail) {
      featuredImage = post.the_post_thumbnail
    } else if (post.slide) {
      featuredImage = post.slide[1][0]
    }
    return(
        <div key={post.id} className="flex flex-col gap-3">
          <Image className="size-60 rounded-xl mx-auto" src={featuredImage} alt={post.title.rendered} width="200" height="200" />
          <p className="text-black text-center">{post.title.rendered}</p>
        </div>
    )
  })

  return (
    <div className="bg-white py-10">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {postHtml}
        </div>
      </div>
    </div>
  )
}

async function getExhibitions() {
  const res = await fetch(`http://hiraya.test/wp-json/wp/v2/rb_gallery?per_page=100&page=1`, { cache: 'no-store' })
  const res2 = await fetch(`http://hiraya.test/wp-json/wp/v2/rb_gallery?per_page=100&page=2`, { cache: 'no-store' })
  const exhibitions = await res.json()
  const exhibitions2 = await res2.json()
 
  return exhibitions.concat(exhibitions2)
}