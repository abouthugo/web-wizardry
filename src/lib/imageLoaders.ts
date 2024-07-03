import { ImageLoader } from 'next/image'

export const googleImageLoader: ImageLoader = ({ src }) => {
  return `https://storage.googleapis.com/wizard-cdn-core${src}`
}

export const devIconsImageLoader: ImageLoader = ({ src }) => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons${src}`
}

export const pureImageLoader: ImageLoader = ({ src }) => src
