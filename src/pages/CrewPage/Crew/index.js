import { useState } from "react";
import {
  CrewArticle,
  CrewButton,
  CrewDescription,
  CrewImage,
  CrewName,
  CrewNavigationList,
  CrewSection,
  CrewTitle,
  ImageWrapper,
} from "./styled";
import data from "../../../data.json";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Crew = () => {
  const { crew } = data;
  const [index, setIndex] = useState(0);
  const crewMember = crew[index];
  const { pathname } = useLocation();

  const [listData, setListData] = useState([
    { id: 0, isActive: true },
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ]);

  const updateListData = (id) => {
    setListData((listData) =>
      listData.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            isActive: true,
          };
        }

        return {
          ...element,
          isActive: false,
        };
      })
    );
  };

  const onButtonClick = (id) => {
    updateListData(id);
    setIndex(id);
  };

  return (
    <CrewSection>
      <AnimatePresence>
        <CrewArticle
          key={pathname}
          as={motion.article}
          initial={{ opacity: 0, x: -window.innerWidth }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, delay: 0.2 },
          }}
        >
          <div>
            <CrewTitle>{crewMember.role.toLocaleUpperCase()}</CrewTitle>
            <CrewName>{crewMember.name.toLocaleUpperCase()}</CrewName>
            <CrewDescription>{crewMember.bio}</CrewDescription>
          </div>
          <nav>
            <CrewNavigationList>
              {listData.map(({ id, isActive }) => (
                <li key={id}>
                  <CrewButton
                    onClick={() => onButtonClick(id)}
                    isActive={isActive}
                  />
                </li>
              ))}
            </CrewNavigationList>
          </nav>
        </CrewArticle>
      </AnimatePresence>
      <AnimatePresence>
        <ImageWrapper>
          <CrewImage
            key={pathname}
            as={motion.img}
            initial={{ opacity: 0, y: window.innerHeight }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.3 },
            }}
            src={`${process.env.PUBLIC_URL}${crewMember.images.png}`}
            alt={crewMember.name}
          />
        </ImageWrapper>
      </AnimatePresence>
    </CrewSection>
  );
};

export default Crew;
