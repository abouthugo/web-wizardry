/**
 * Returns the color variant by company
 */
export const getVariantByCompany = (company: string) => {
  switch (true) {
    case company === 'Comcast':
      return '__purple'
    case company === 'Serrala':
      return '__magenta'
    case company === 'Stetson':
      return '__brown'
    case company === 'Montclair State University':
      return '__red'
    default:
      return '__blue'
  }
}
export const getExperience = (): WorkExperience[] => [
  {
    company: 'Comcast',
    role: 'Software Engineer',
    from: 'July 2023',
    to: 'Present',
    imgSrc: '/images/comcast-icon.png',
    description:
      "I'm currently working on maintaining the Xfinity Stream Web App and building the next generation of apps that will serve Xfinity's customers accross their different devices at home or on the go.",
    tags: ['Frontend', 'Typescript', 'React']
  },
  {
    company: 'Serrala',
    role: 'Software Engineer',
    from: 'Feb 2022',
    to: 'Apr 2023',
    imgSrc: '/images/serrala-icon.png',
    description:
      'Worked on a cloud-based, tenant-oriented system. My primary focus was on developing innovative features, addressing client requests and incidents, enhancing observability of distribured logs, and continually improving every aspect of the development cycle.',
    tags: ['Fullstack', 'Typescript', 'NodeJS', 'React']
  },
  {
    company: 'Stetson',
    role: 'Backend Developer',
    from: 'Jul 2019',
    to: 'Feb 2022',
    imgSrc: '/images/stetson-icon.png',
    description:
      'Developed internal web apps, CLIs, and collaborated with an external agency to establish our CI/CD workflow. Also deployed containerized applications on GKE, built a server to call various APIs to craft custom financial reports, and engineered a data warehousing solution for all our data needs.',
    tags: ['Fullstack', 'Typescipt', 'React']
  },
  {
    company: 'Montclair State University',
    role: 'Research Assistant',
    from: 'Sep 2018',
    to: 'May 2019',
    imgSrc: '/images/montclair-icon.png',
    description:
      'I had the opportunity to work on a fascinating project involving a dashboard that displayed data collected from packets circulating through highly censored servers. I was responsible for creating a real-time data visualization dashboard on React.',
    tags: ['Fullstack', 'React', 'Django']
  },
  {
    company: 'Montclair State University',
    role: 'Web Support Intern',
    from: 'Sep 2018',
    to: 'May 2019',
    imgSrc: '/images/montclair-icon.png',
    description:
      'Created informative WordPress posts, audited and replaced outdated plugins to enhance site performance and reliability, and helped debug and optimize our page layouts.',
    tags: ['Frontend', 'PHP', 'Javascript']
  }
]
