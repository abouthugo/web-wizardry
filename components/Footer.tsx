import Link from 'next/link'

import BuildMetric from './BuildMetric'

export default function Footer() {
  const GitHubLogo = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )

  const TwitterLogo = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 128 128" aria-hidden="true">
      <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" />
    </svg>
  )

  const LinkedInLogo = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )

  return (
    <footer className="relative border-t border-semi-transparent">
      <div className="container mx-auto py-6 lg:py-12 sm:py-8">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
          <div className="text-sm text-center text-neutral-500">©{new Date().getFullYear()} Made with ❤️ by Hugo</div>
          <div className="flex space-x-6 justify-center items-center mt-0">
            <Link href="https://github.com/abouthugo" target="_blank" className="text-neutral-500 hover:text-white">
              <GitHubLogo />
              <span className="sr-only">GitHub account</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/hugoperdomo/"
              target="_blank"
              className="text-neutral-500 hover:text-white"
            >
              <LinkedInLogo />
            </Link>

            <Link href="https://twitter.com/_abouthugo" target="_blank" className="text-neutral-500 hover:text-white">
              <TwitterLogo />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
        <BuildMetric />
      </div>
    </footer>
  )
}
