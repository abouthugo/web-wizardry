import { getExperience, getVariantByCompany } from '@/api/experience'

import { Title } from '@components/Typography'

import CustomCard from './CustomCard'

import styles from './CustomCard.module.css'

const workHistory = getExperience()
const PastExperienceSection = () => (
  <section className="md:container my-10 lg:my-16 static mx-auto">
    <div className="p-2 box-border rounded-lg pb-3">
      <Title className="text-white">Past Lives</Title>
      <div className="overflow-x-scroll py-4">
        <div className="flex-row space-y-8 md:space-y-0 md:inline-flex gap-14 overflow-x-scroll">
          {workHistory &&
            workHistory.map(data => (
              <CustomCard
                className={styles[`${getVariantByCompany(data.company)}`]}
                data={data}
                key={`${data.company}-${data.role}`}
              />
            ))}
        </div>
      </div>
    </div>
  </section>
)

export default PastExperienceSection
