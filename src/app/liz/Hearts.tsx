import Image from 'next/image'

import styles from './page.module.css'

const Hearts = () => {
  const heartWidth = 90
  const heartHeight = 100
  return (
    <div className="flex justify-center items-center mx-auto mt-12 mb-20">
      <div className="relative outline-none group">
        <Image
          className="relative z-10"
          src="/images/blended-heart-alt.png"
          width={heartWidth}
          height={heartHeight}
          alt="blue heart"
        />
        <div className="absolute left-0 top-0 h-full w-full duration-1500 ">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Image
                className={styles['phantom-card']}
                key={`${i}-phantom-image`}
                src="/images/blended-heart.png"
                width={heartWidth}
                height={heartHeight}
                alt="blue heart"
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Hearts
