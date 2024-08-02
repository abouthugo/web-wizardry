type PocketbaseResponseWrapper<T> = {
  items: T[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}

type BaseCollection = {
  collectionId: string
  collectionName: string
  created: string
  id: string
  updated: string
}

type AlbumType = BaseCollection & {
  expand: {
    photos: PhotoType[]
  }
  /** array of photo ids */
  photos: string[]
  short_name: string
  subtitle: string
  title: string
}

type PhotoType = BaseCollection & {
  /** link to where the photo is stored */
  src: string
}
