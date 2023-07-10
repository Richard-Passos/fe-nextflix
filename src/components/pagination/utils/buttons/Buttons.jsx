/* Components */
import { Container } from "./Buttons.style";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* Logic */
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function Buttons({ baseLink, totalPages }) {
  const { currPage } = useRouter().query;

  const MAX_BTNS = Math.min(5, totalPages);

  return (
    <Container>
      <button disabled={currPage <= 1} className="arrow-left">
        <Link href={`${baseLink}/${currPage - 1}`}>
          <FiChevronLeft size="2.5rem" />
        </Link>
      </button>

      <div>
        {createPaginationBtns(currPage, MAX_BTNS, totalPages, baseLink)}
      </div>

      <button disabled={currPage >= totalPages} className="arrow-right">
        <Link href={`${baseLink}/${+currPage + 1}`}>
          <FiChevronRight size="2.5rem" />
        </Link>
      </button>
    </Container>
  );
}

const createPaginationBtns = (currPage, MAX_BTNS, totalPages, baseLink) => {
  const btnsOnLeft =
    currPage <= Math.ceil(MAX_BTNS / 2)
      ? currPage - 1
      : Math.floor(MAX_BTNS / 2);

  const btnsValue = [];
  for (let i = 0; i <= MAX_BTNS; i++) {
    if (currPage - btnsOnLeft + i <= totalPages)
      btnsValue.push(currPage - btnsOnLeft + i);
  }

  return btnsValue.map((n) => (
    <button key={uuidv4()} disabled={n == currPage} className="number">
      <Link href={`${baseLink}/${n}`}>{n}</Link>
    </button>
  ));
};
