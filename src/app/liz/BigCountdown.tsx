'use client'

import classNames from 'classnames'
import { DateTime, type DurationUnit } from 'luxon'

import styles from './BigCountdown.module.css'

type DateObject = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function BigCountdown() {
  const units: DurationUnit[] = ['days', 'hours', 'minutes', 'seconds']
  const wd = DateTime.fromISO('2024-11-09')
  const { days } = wd.diffNow(units).toObject() as DateObject
  return (
    <div
      className={classNames('flex justify-center items-center my-12 h-[100vmax] w-full rounded-xl', styles.container)}
    >
      <div className="text-xl text-neutral-300 text-center">
        {days >= 1 ? <div className="text-3xl font-bold text-white">{days} days</div> : null} till wedding day
      </div>
    </div>
  )
}
