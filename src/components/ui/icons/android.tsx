'use server'

import { SVGProps } from 'react'

export const AndroidIcon = async (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      fill="#3ddc84"
      d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.5 47.9-83a10 10 0 1 0-17.3-10l-48.5 84.1a301.3 301.3 0 0 0-246.6 0l-48.5-84a10 10 0 1 0-17.3 10l47.9 83C64.5 202.2 8.2 285.6 0 384h576c-8.2-98.5-64.5-181.8-146.9-226.6"
    />
  </svg>
)
