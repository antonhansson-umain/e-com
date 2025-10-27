import Image from 'next/image'

type LogoProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string
  width?: number
  height?: number
}

export default function Logo({src, width = 72, height = 22, ...props}: LogoProps) {
  return <Image src={src} alt="Logo" width={width} height={height} {...props} />
}
