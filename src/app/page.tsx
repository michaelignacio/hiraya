import Image from 'next/image';

export default async function Home() {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-5">
          <div className="flex flex-column md:flex-row mx-auto gap-5">
            <Image 
              src="https://hiraya.s3.ap-southeast-2.amazonaws.com/2023/05/Tears_Of_Manila_960x430.jpg" 
              alt="Tears of Manila" 
              width="600" 
              height="430" 
              className="mb-5"
            />
            <Image 
              src="https://hiraya.s3.ap-southeast-2.amazonaws.com/2023/05/Julio_Jose_Austria_-_A_Summer_Storm_Oil_on_Canvas91.5_x_122cm_2015_960x430.jpg" 
              alt="A Summer Storm Oil on Canvas" 
              width="600" 
              height="430" 
              className="mb-5"
            />
          </div>
          <div className="flex flex-column md:flex-row mx-auto gap-5">
            <Image 
              src="https://hiraya.s3.ap-southeast-2.amazonaws.com/2023/05/Liberty_Bonding_960x430.jpg" 
              alt="Liberty Bonding" 
              width="600" 
              height="430" 
              className="mb-5"
            />
            <Image 
              src="https://hiraya.s3.ap-southeast-2.amazonaws.com/2023/05/Norberto_Carating_-_unang_ulan_960x430.jpg" 
              alt="Unang Ulan" 
              width="600" 
              height="430" 
              className="mb-5"
            />
          </div>
          <p>Hiraya Gallery, established in 1980, is committed to the promotion as well as development of serious, imaginative, and relevant Philippine art, especially by young but talented Filipino artists. In the pursuit of its objective, it has taken necessary risks welcoming unknown new artists and offering a refuge for unpopular ones. Hiraya eschews too much commercialism in art, and frowns on capitalizing, for easy success, on the attraction of names. It gravitates towards artists, regardless of their artistic background, medium or style, whose technical competence and creativity are matched only by their dedication, high-mindedness, and intellectual honesty. Hiraya supports artists not because they are commercially viable, but because it believes strongly in what they are trying to achieve. It does not impose its business will or its own aesthetic tastes on artists, but encourages them to freely evolve and pursue their individual inspiration and vision.</p>
        </div>
      </div>
    </div>
  )
}
