/* Components */
import Image from "next/image";
import { MediaContainer } from "./LatestMedia.style";

export default function LatestMedia({ phoneUrl, desktopUrl }) {
  return (
    <MediaContainer
      phoneUrl={phoneUrl}
      desktopUrl={desktopUrl}
    ></MediaContainer>
  );
}
