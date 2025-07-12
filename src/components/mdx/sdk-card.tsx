import React from 'react'
// import { CuboidIcon } from 'lucide-react'
import { BrowserIcon } from '@/components/ui/icons'
import cn from '@/lib/cn'
import Link from 'next/link'

// import { useRouter } from 'next/navigation'

interface SDKCardProps {
  title: string
  description: string
  // icon?: typeof LucideIcon
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
  color: string
  link: string
}

export function SDKCard({
  title,
  description,
  icon: Icon = BrowserIcon,
  color,
  link,
}: SDKCardProps) {
  // const router = useRouter()
  return (
    <Link
      href={link}
      className="text-card-foreground group bg-background-light relative overflow-hidden rounded-lg border-2 shadow-sm transition-all duration-300 hover:border-primary"
    >
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className={cn(['rounded-lg p-3', 'bg-opacity-10', color])}>
            <Icon className={cn('h-8 w-8', color)} />
          </div>
          <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        </div>

        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

        {/* <Button
          // variant="outline"
          className="group-hover:text-primary-foreground w-full transition-colors duration-300 group-hover:bg-primary"
          // onClick={() => router.push(link)}
          // href={link}
        >
          View Documentation
        </Button> */}
      </div>

      <div className="pointer-events-none absolute inset-0 border-2 border-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
    </Link>
  )
}
