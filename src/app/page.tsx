import Image from "next/image";

export default async function Home() {
  const data = await getExhibitions()

  const postHtml = data.map((post,i) => {
    return(
      <>
      <p key={post.id}>{post.title.rendered}</p>
      <img className="size-20" src={post.slide && post.slide[1][0]} alt={post.title.rendered} />
      </>
    )
  })

  return (
    <div>
      {postHtml}
    </div>
  )
}

async function getExhibitions() {
  const res = await fetch(`http://hiraya.test/wp-json/wp/v2/rb_gallery?per_page=100&page=1`, { cache: 'no-store' })
  // const res = await fetch(`http://hiraya.test/wp-json/wp/v2/rb_gallery?per_page=100`, { cache: 'no-store' })
  // const res = await fetch(`http://hiraya.test/wp-json/wp/v2/rb_gallery`, { cache: 'no-store' })
  const exhibitions = await res.json()
 
  return exhibitions
}