import Image from "next/image";
import data from '../data.json'

export default async function ExhibitionArchive() {
  const postHtml = data.map((post:any,i:number) => {
    let featuredImage = ''
    let noImage = false
    if (post.cover_art) {
      featuredImage = post.cover_art
    } else if (post.slide) {
      featuredImage = post.slide[1][0]
    } else {
      featuredImage = "/favicon.ico"
      noImage = true
    }
    return(
      <div key={post.id} className="flex flex-col gap-3">
          <a href={`exhibitions/` + post.slug}>
              <Image className={!noImage ? "size-40 md:size-60 rounded-xl mx-auto object-cover" : "size-40 md:size-60 rounded-xl mx-auto p-16 object-contain"}  src={featuredImage} alt={post.title.rendered} width="200" height="200" />
              <p className="text-center mt-4">{post.title.rendered}</p>
          </a>
      </div>
    )
  })
  
	return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-5 px-md-0">
          {postHtml}
        </div>
      </div>
    </div>
	)
}