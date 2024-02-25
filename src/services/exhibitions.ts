import localData from '../app/data.json'

export const getLocalExhibitionSingle = async (slug: string) => {
	const data = localData.filter(obj => {
		return obj.slug == slug
	})
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}
