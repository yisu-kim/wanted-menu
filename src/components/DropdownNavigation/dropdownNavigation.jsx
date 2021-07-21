import React from "react";
import styles from "./dropdownNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    id: 1,
    items: [
      { title: "영업", type: "main" },
      { title: "기업영업", type: "sub" },
      { title: "외부영업", type: "sub" },
      { title: "영업 관리자", type: "sub" },
      { title: "기술영업", type: "sub" },
      { title: "주요고객사 담당자", type: "sub" },
      { title: "솔루션 컨설턴트", type: "sub" },
      { title: "해외영업", type: "sub" },
    ],
    hasMore: true,
  },
  {
    id: 2,
    items: [
      { title: "미디어", type: "main" },
      { title: "콘텐츠 크리에이터", type: "sub" },
      { title: "PD", type: "sub" },
      { title: "영상 편집가", type: "sub" },
      { title: "에디터", type: "sub" },
      { title: "비디오 제작", type: "sub" },
      { title: "작가", type: "sub" },
      { title: "출판 기획자", type: "sub" },
    ],
    hasMore: true,
  },
  {
    id: 3,
    items: [
      { title: "인사", type: "main" },
      { title: "인사담당", type: "sub" },
      { title: "리크루터", type: "sub" },
      { title: "조직문화", type: "sub" },
      { title: "평가·보상", type: "sub" },
      { title: "헤드헌터", type: "sub" },
      { title: "HRBP", type: "sub" },
      { title: "급여담당", type: "sub" },
    ],
    hasMore: true,
  },
  {
    id: 4,
    items: [
      { title: "게임 제작", type: "main" },
      { title: "게임 기획자", type: "sub" },
      { title: "게임 그래픽 디자이너", type: "sub" },
      { title: "모바일 게임 개발자", type: "sub" },
      { title: "게임 아티스트", type: "sub" },
      { title: "게임 클라이언트 개발자", type: "sub" },
      { title: "게임 서버 개발자", type: "sub" },
      { title: "유니티 개발자", type: "sub" },
    ],
    hasMore: true,
  },
  {
    id: 5,
    items: [
      { title: "엔지니어링·설계", type: "main" },
      { title: "기계 엔지니어", type: "sub" },
      { title: "전자 엔지니어", type: "sub" },
      { title: "전기기계 공학자", type: "sub" },
      { title: "전기 엔지니어", type: "sub" },
      { title: "로봇·자동화", type: "sub" },
      { title: "제품 엔지니어", type: "sub" },
      { title: "QA 엔지니어", type: "sub" },
    ],
    hasMore: true,
  },
  {
    id: 6,
    items: [
      { title: "금융", type: "main" },
      { title: "제조·생산", type: "main" },
      { title: "물류·무역", type: "main" },
      { title: "의료·제약·바이오", type: "main" },
      { title: "교육", type: "main" },
      { title: "법률·법집행기관", type: "main" },
      { title: "식·음료", type: "main" },
      { title: "건설·시설", type: "main" },
      { title: "공공·복지", type: "main" },
    ],
    hasMore: false,
  },
];

function DropdownNavigation(props) {
  return (
    <>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
}

export default DropdownNavigation;

function CategoryItem(props) {
  const {
    category: { items, hasMore },
  } = props;

  return (
    <div className={styles.dropdownNav}>
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <a key={index} href="#">
            {item.type === "main" ? (
              <>
                <h2>{item.title}</h2>
                <i>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
              </>
            ) : (
              <h3>{item.title}</h3>
            )}
          </a>
        ))}
      {hasMore && (
        <a href="#" className={styles.moreCategory}>
          <h3>더보기</h3>
          <i>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </a>
      )}
    </div>
  );
}
