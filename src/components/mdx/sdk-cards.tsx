'use client'

import { CuboidIcon as AndroidIcon, Apple, Globe } from 'lucide-react'
import { SDKCard } from './sdk-card'

const sdks = [
  {
    title: 'Android SDK',
    description:
      'Integrate our powerful SDK into your Android applications with ease. Built for performance and reliability.',
    icon: AndroidIcon,
    color: 'bg-[#3DDC84]',
    link: '/docs/android',
  },
  {
    title: 'iOS SDK',
    description:
      'Seamlessly add our features to your iOS apps. Designed to work flawlessly with Swift and Objective-C.',
    icon: Apple,
    color: 'bg-[#000000]',
    link: '/docs/ios',
  },
  {
    title: 'Web Agent',
    description:
      'Deploy our web agent to track and analyze user behavior across your web applications.',
    icon: Globe,
    color: 'bg-[#0070F3]',
    link: '/web-agent/installation',
  },
]

export const SDKCards = () => (
  <div>
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
          Choose your platform and get started with our integration guides
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sdks.map((sdk) => (
          <SDKCard key={sdk.title} {...sdk} />
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Need help? Check out our{' '}
          <a href="/support" className="text-primary hover:underline">
            support resources
          </a>{' '}
          or{' '}
          <a href="/contact" className="text-primary hover:underline">
            contact our team
          </a>
          .
        </p>
      </div> */}
    </div>
  </div>
)
