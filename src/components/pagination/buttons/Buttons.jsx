/* Components */
import { ButtonsContainer } from "./Buttons.style";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";

/* Logic */
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const MAX_BTNS = 9;
export default function Buttons({ baseLink, totalPages }) {
  const { currPage } = useRouter().query;

  if (currPage)
    return (
      <ButtonsContainer maxBtns={MAX_BTNS} currPage={currPage}>
        <button disabled={currPage <= 1}>
          <Link href={`${baseLink}/${+currPage - 1}`}>
            <ChevronLeft size="2rem" />
          </Link>
        </button>

        <div className="Wrapper">
          <div>{createPaginationBtns(currPage, totalPages, baseLink)}</div>
        </div>

        <button disabled={currPage >= totalPages}>
          <Link href={`${baseLink}/${+currPage + 1}`}>
            <ChevronRight size="2rem" />
          </Link>
        </button>
      </ButtonsContainer>
    );
}

const createPaginationBtns = (currPage, totalPages, baseLink) => {
  const btnsOnLeft =
    currPage < Math.ceil(MAX_BTNS / 2)
      ? currPage - 1
      : Math.floor(MAX_BTNS / 2);

  const btnsValue = [];
  for (let i = 0; i < Math.min(MAX_BTNS, totalPages); i++) {
    if (currPage - btnsOnLeft + i <= totalPages)
      btnsValue.push(currPage - btnsOnLeft + i);
  }

  return btnsValue.map((n) => (
    <button key={uuidv4()} disabled={n === +currPage}>
      <Link href={`${baseLink}/${n}`}>{n}</Link>
    </button>
  ));
};
