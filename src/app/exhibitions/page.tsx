import Image from "next/image";
import { getExhibitionArchive } from '@/services/exhibitions'

export default async function ExhibitionArchive() {
	const data = await getExhibitionArchive()

    const postHtml = data.map((post:any,i:number) => {
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
            <a href={`exhibitions/` + post.slug}>
                <Image className="size-60 rounded-xl mx-auto" src={featuredImage} alt={post.title.rendered} width="200" height="200" />
                <p className="text-center">{post.title.rendered}</p>
            </a>
        </div>
      )
    })
  
	return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {postHtml}
        </div>
      </div>
    </div>
	)
}