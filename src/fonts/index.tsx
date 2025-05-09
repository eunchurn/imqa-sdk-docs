import { Inconsolata, Inter, Nanum_Gothic_Coding, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['var(--font-nanum-gothic-coding)', 'monospace'],
  variable: '--font-inconsolata',
  weight: ['400', '700'],
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['var(--font-nanum-gothic-coding)', 'monospace'],
  variable: '--font-roboto-mono',
})

export const nanumGothicCoding = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nanum-gothic-coding',
  display: 'swap',
})

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const nanumsquareneo = localFont({
  src: './NanumSquareNeo-Variable.woff2',
  display: 'swap',
  variable: '--font-nanumsquareneo',
})

export const jeyBrainsMonoLight = localFont({
  src: './jetbrains-mono/JetBrainsMono-Light.woff2',
  display: 'swap',
  variable: '--font-jetbrainsmono-light',
  style: 'normal',
})

export const jetBrainsMonoRegular = localFont({
  src: './jetbrains-mono/JetBrainsMono-Regular.woff2',
  display: 'swap',
  variable: '--font-jetbrainsmono-regular',
  style: 'normal',
})

export const jetBrainsMonoSemiBold = localFont({
  src: './jetbrains-mono/JetBrainsMono-SemiBold.woff2',
  display: 'swap',
  variable: '--font-jetbrainsmono-semi-bold',
  style: 'normal',
})
