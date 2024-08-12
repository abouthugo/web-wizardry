import { getExperience, getVariantByCompany } from '@/api/experience'

import { Title } from '@components/Typography'

import CustomCard from './CustomCard'

import styles from './CustomCard.module.css'

const workHistory = getExperience()
const PastExperienceSection = () => (
  <section className="md:container my-10 lg:my-16 static mx-auto">
    <div className="p-2 box-border rounded-lg pb-3">
      <Title className="text-center md:text-left text-white">Past Lives</Title>
      <div className="overflow-x-scroll rounded-lg">
        <div className="flex flex-col items-center md:items-stretch md:flex-row md:inline-flex gap-4 overflow-x-scroll">
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
