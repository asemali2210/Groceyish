import { getStrapiUrl } from '@/util/util'
import Image from 'next/image'
import React from 'react'

export default function StrapiImage({src,alt,width,height,className,quality}) {
  return (
    <Image 
        src={getStrapiUrl(src) ?? null}
        height={height}
        alt={alt}
        width={width}
        className={className}
        quality={quality}
    />
  )
};