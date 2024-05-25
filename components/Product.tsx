import Image from 'next/image'

export type ProductT = {
  id: number
  claimed: boolean
  created_at: string | null
  title: string
  size: string
}

type ProductProps = {
  product: ProductT
}

export default function Product({ product }: ProductProps) {
  /**
   * TODO: remove this logic and have the product model get a src
   */
  const imagePath = `/images/${product.id}.png`
  return (
    <div className="relative bg-neutral-800 w-72 h-72 mx-auto overflow-hidden rounded-md hover:bg-neutral-700 cursor-pointer">
      <Image src={imagePath} alt={product.title} width={400} height={400} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-60 w-72">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm">{product.size}</p>
      </div>
    </div>
  )
}
