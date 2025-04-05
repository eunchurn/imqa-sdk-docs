import { p as P } from '@/components/mdx'
import cn from '@/lib/cn'
import Image from 'next/image'
import { ReactNode } from 'react'

type Style = {
  icon: React.ComponentType
  label: string
  bg: string
}

const styles: Record<string, Style> = {
  NOTE: {
    // icon: CgInfo,
    icon: () => <Image src="/icons/memo.png" alt="Note" width={30} height={30} />,
    label: 'Note',
    bg: 'bg-note-container',
  },
  TIP: {
    // icon: HiOutlineLightBulb,
    icon: () => <Image src="/icons/round-pushpin.png" alt="Tip" width={30} height={30} />,
    label: 'Tip',
    bg: 'bg-tip-container',
  },
  IMPORTANT: {
    // icon: BiCommentError,
    icon: () => <Image src="/icons/exclamation.png" alt="Important" width={30} height={30} />,
    label: 'Important',
    bg: 'bg-important-container',
  },
  WARNING: {
    // icon: PiWarning,
    icon: () => <Image src="/icons/construction-sign.png" alt="Important" width={30} height={30} />,
    label: 'Warning',
    bg: 'bg-warning-container',
  },
  CAUTION: {
    // icon: PiSealWarning,
    icon: () => <Image src="/icons/no-entry-sign.png" alt="Important" width={30} height={30} />,
    label: 'Caution',
    bg: 'bg-caution-container',
  },
}

const emojiStyles: Record<
  string,
  {
    icon: string
    label: string
    bg: string
  }
> = {
  NOTE: {
    icon: '🗒️',
    label: 'Note',
    bg: 'bg-note-container',
  },
  TIP: {
    icon: '📍',
    label: 'Tip',
    bg: 'bg-tip-container',
  },
  IMPORTANT: {
    icon: '❗',
    label: 'Important',
    bg: 'bg-important-container',
  },
  WARNING: {
    icon: '⚠️',
    label: 'Warning',
    bg: 'bg-warning-container',
  },
  CAUTION: {
    icon: '⛔️',
    label: 'Caution',
    bg: 'bg-caution-container',
  },
}

export function Gha({
  children,
  keyword,
  title,
}: {
  children: ReactNode
  keyword?: string
  title?: string
}) {
  if (!keyword || !(keyword in styles)) keyword = 'NOTE' // default to "NOTE"

  const { icon, label, bg } = styles[keyword]
  const Icon = icon
  // const { icon, label, bg } = emojiStyles[keyword]
  // const Icon = () => <span className="text-2xl">{icon}</span>
  // test if children is a string
  if (typeof children === 'string') {
    children = <P className="my-4">{children}</P>
  }

  return (
    <div className={cn('my-6 overflow-clip rounded-lg px-6 py-2', bg)}>
      <div className="my-4 flex items-center gap-2 text-lg font-semibold">
        <Icon />
        {title ?? label}
      </div>
      {children}
    </div>
  )
}
