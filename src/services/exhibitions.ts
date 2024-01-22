import { EXHIBITIONS_ENDPOINT, EXHIBITIONS_ENDPOINT_PAGE2 } from './endpoints'

export const getExhibitionArchive = async () => {
	const response = await fetch(EXHIBITIONS_ENDPOINT, {
		next: { revalidate: 60 },
	})
	const responsePage2 = await fetch(EXHIBITIONS_ENDPOINT_PAGE2, {
		next: { revalidate: 60 },
	})
	const data = await response.json()
	const data2 = await responsePage2.json()
	return data.concat(data2)
}

export const getExhibitionSingle = async (slug: string) => {
	const response = await fetch(EXHIBITIONS_ENDPOINT + '&slug=' + slug, {
		next: { revalidate: 60 },
	})
	const data = await response.json()
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}