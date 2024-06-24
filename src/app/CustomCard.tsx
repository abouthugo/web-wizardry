import Image from 'next/image'

import { cn } from '@/lib/utils'

import styles from './CustomCard.module.css'

type CustomCardProps = {
  data: Experience
  className?: string
}

const Tag = (tag: string) => (
  <span
    key={tag}
    className="px-3 py-1 inline-flex justify-center items-center rounded-full bg-semi-transparent border border-semi-transparent text-xs font-semibold text-neutral-400"
  >
    {tag}
  </span>
)

function CustomCard({ data, className }: CustomCardProps) {
  return (
    <div className={cn('cursor-pointer', styles.__base, className)}>
      <div className="grid box-border h-full content-between">
        <div className="p-4 text-white">
          <div className="flex gap-1 items-start justify-between">
            <div>
              <p className="text-xl font-semibold">{data.company}</p>
              <p className="text-xl">{data.role}</p>
              <p className="mb-1 text-sm text-neutral-400">
                <time>{data.from}</time> - <time>{data.to}</time>
              </p>
            </div>
            <div className="w-14 h-14">
              <Image
                className={styles.__image}
                src={data.imgSrc}
                width={256}
                height={256}
                objectFit="contain"
                alt="Stetson"
              />
            </div>
          </div>
          <p className="mt-1 text-neutral-300">{data.description}</p>
        </div>
        <div className="p-4 flex gap-x-2 gap-y-3 flex-wrap items-center">{data.tags.map(Tag)}</div>
      </div>
    </div>
  )
}

export default CustomCard
