import Image from 'next/image'

interface Props {
    src: string
    alt: string
    height?: number
}

export const SectionImage = (props: Props) => {
    const imageWidth = window.innerWidth / 2

    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={imageWidth}
            height={props.height ?? 500}
            style={{
                clipPath: 'polygon(0 0, 80% 0, 150% 100%, 0 100%)',
                objectFit: 'contain',
            }}
        />
    )
}

export const HeaderImage = (props: Props) => {
    const imageWidth = window.innerWidth / 2

    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={imageWidth}
            height={props.height ?? 500}
            style={{
                clipPath:
                    'polygon(50% 0%, 100% 0%, 100% 100%, 40% 110%, 0% 63%)',
                objectFit: 'cover',
            }}
        />
    )
}
