import { EXHIBITIONS_ENDPOINT } from './endpoints'

export const getExhibitionArchive = async () => {
	const response = await fetch(EXHIBITIONS_ENDPOINT, {
		next: { revalidate: 60 },
	})
	const data = await response.json()
	return data
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