import { Figure, Image, FigCaption } from './styles'

type Props = {
    src: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
}

export const ImageZoom = ({src, alt, caption, width, height}: Props) => {
    return (
        <Figure width={width} height={height}>
            <Image src={src} alt={alt} />
            <FigCaption>{caption}</FigCaption>
        </Figure>
    )
}