'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CuboidIcon, DivideIcon as LucideIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SDKCardProps {
  title: string
  description: string
  icon?: typeof LucideIcon
  color: string
  link: string
}

export function SDKCard({
  title,
  description,
  icon: Icon = CuboidIcon,
  color,
  link,
}: SDKCardProps) {
  const router = useRouter()
  return (
    <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary">
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className={`rounded-lg p-3 ${color} bg-opacity-10`}>
            <Icon
              className={`h-8 w-8 ${color === 'bg-[#000000]' ? 'text-black' : 'text-foreground'}`}
            />
          </div>
          <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        </div>

        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

        <Button
          variant="outline"
          className="group-hover:text-primary-foreground w-full transition-colors duration-300 group-hover:bg-primary"
          onClick={() => router.push(link)}
        >
          View Documentation
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-0 border-2 border-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
    </Card>
  )
}
