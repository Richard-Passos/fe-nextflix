/* Components */
import { Container, MyImage } from "./Image.style";

/* Logic */
import { useEffect, useState } from "react";

export default function Image(props) {
  const {
    width,
    height,
    className,
    src,
    alt,
    priority = false,
    quality = 25,
  } = props;

  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    setIsImageLoad(false);
  }, [src]);

  return (
    <Container
      width={width}
      height={height}
      isImageLoad={isImageLoad}
      className={className}
    >
      <MyImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        onLoad={() => setIsImageLoad(true)}
      />
    </Container>
  );
}
