import { useMediaQuery } from "@mui/material";
import {
  ImageWrapper,
  TechnologyArticle,
  TechnologyButton,
  TechnologyDescription,
  TechnologyImage,
  TechnologyName,
  TechnologyNavList,
  TechnologySection,
  TechnologyTitle,
} from "./styled";
import data from "../../../data.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { useUpdateData } from "../../../useUpdateData";
import { useSwipeable } from "react-swipeable";
import { articleVariants, imageVariants } from "../variants";

const Technology = () => {
  const matches = useMediaQuery("(max-width: 1180px)");
  const { technology } = data;
  const [index, setIndex] = useState(0);
  const vehicle = technology[index];

  const initialState = [
    { id: 0, isActive: true },
    { id: 1, isActive: false },
    { id: 2, isActive: false },
  ];
  const { listData, updateListData } = useUpdateData(initialState, index);

  const onButtonClick = (id: number) => {
    updateListData(id);
    setIndex(id);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index > 1) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    },
    onSwipedRight: () => {
      if (index < 1) {
        setIndex(2);
      } else {
        setIndex((index) => index - 1);
      }
    },
  });

  return (
    <TechnologySection>
      <TechnologyArticle
        as={motion.article}
        variants={articleVariants}
        initial="hidden"
        animate="visible"
      >
        <nav>
          <TechnologyNavList>
            {listData.map(({ id, isActive }) => (
              <li key={id}>
                <TechnologyButton
                  isActive={isActive}
                  onClick={() => onButtonClick(id)}
                >
                  {id + 1}
                </TechnologyButton>
              </li>
            ))}
          </TechnologyNavList>
        </nav>
        <div>
          <TechnologyName>THE TERMINOLOGY…</TechnologyName>
          <TechnologyTitle>{vehicle.name.toLocaleUpperCase()}</TechnologyTitle>
          <TechnologyDescription>{vehicle.description}</TechnologyDescription>
        </div>
      </TechnologyArticle>

      <ImageWrapper
        {...handlers}
        as={motion.div}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        {matches ? (
          <TechnologyImage
            src={`${process.env.PUBLIC_URL}${vehicle.images.landscape}`}
          />
        ) : (
          <TechnologyImage
            src={`${process.env.PUBLIC_URL}${vehicle.images.portrait}`}
          />
        )}
      </ImageWrapper>
    </TechnologySection>
  );
};

export default Technology;
