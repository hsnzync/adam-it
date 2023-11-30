import Image from 'next/image'

interface Props {
    src: string
    alt: string
    width?: number
    height?: number
}

export const FlexImage = (props: Props) => {
    const imageWidth = window.innerWidth / 2

    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={imageWidth ?? 700}
            height={props.height ?? 500}
            style={{
                clipPath: 'polygon(0 0, 80% 0, 150% 100%, 0 100%)',
                objectFit: 'contain',
            }}
        />
    )
}
