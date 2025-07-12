import { AndroidIcon, AppleIcon, BrowserIcon } from '@/components/ui/icons'
import { SDKCard } from './sdk-card'

const sdks = [
  {
    title: 'Android SDK',
    description:
      'Android 애플리케이션에 OpenTelemetry Native IMQA Android SDK를 쉽고 빠르게 설치하세요.',
    icon: AndroidIcon,
    // color: 'bg-secondary-dark',
    color: 'bg-secondary-light',
    link: '/android-sdk/introduction',
  },
  {
    title: 'iOS SDK',
    description: 'iOS 애플리케이션에 OpenTelemetry Native IMQA iOS SDK를 쉽고 빠르게 설치하세요.',
    icon: AppleIcon,
    color: 'bg-surface-container-dark',
    link: '/ios-sdk/introduction',
  },
  {
    title: 'Web Agent',
    description:
      '웹 애플리케이션 전반에서 사용자 행동을 추적하고 분석할 수 있도록 Opentelemetry Native IMQA Web Agent를 배포하세요.',
    icon: BrowserIcon,
    color: 'bg-surface-container-high',
    link: '/web-agent/introduction',
  },
]

export const SDKCards = async () => (
  <div>
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
          SDK 가이드를 선택하여 시작하세요.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3">
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
