import { useSwipeable } from "react-swipeable";
import data from "../../../data.json";
import { useUpdateData } from "../../../useUpdateData";
import {
  DestinationButton,
  DestinationDescription,
  DestinationExtraInfo,
  DestinationExtraInfoWrapepr,
  DestinationExtraValue,
  DestinationImage,
  DestinationList,
  DestinationSection,
  DestinationTitle,
  ImageWrapper,
} from "./styled";
import { useState } from "react";
import { motion } from "framer-motion";
import { imageVariants } from "../variants";

const Destination = () => {
  const { destinations } = data;
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  const initialState = [
    { id: 0, name: "moon", isActive: true },
    { id: 1, name: "mars", isActive: false },
    { id: 2, name: "europa", isActive: false },
    { id: 3, name: "titan", isActive: false },
  ];
  const { listData, updateListData } = useUpdateData(initialState, index);

  const onButtonClick = (id: number) => {
    updateListData(id);
    setIndex(id);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index > 2) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    },
    onSwipedRight: () => {
      if (index < 1) {
        setIndex(3);
      } else {
        setIndex((index) => index - 1);
      }
    },
  });

  return (
    <DestinationSection>
      <ImageWrapper {...handlers} as={motion.div} variants={imageVariants}>
        <DestinationImage
          src={`${process.env.PUBLIC_URL}/${destination.images.png}`}
          alt={destination.name}
        />
      </ImageWrapper>
      <article>
        <nav>
          <DestinationList>
            {listData.map(({ name, isActive, id }) => (
              <li key={id}>
                <DestinationButton
                  onClick={() => onButtonClick(id)}
                  isActive={isActive}
                >
                  {name && name.toLocaleUpperCase()}
                </DestinationButton>
              </li>
            ))}
          </DestinationList>
        </nav>
        <DestinationTitle>
          {destination.name.toLocaleUpperCase()}
        </DestinationTitle>
        <DestinationDescription>
          {destination.description}
        </DestinationDescription>
        <DestinationExtraInfoWrapepr>
          <div>
            <DestinationExtraInfo>AVG. DISTANCE</DestinationExtraInfo>
            <DestinationExtraValue>
              {destination.distance.toLocaleUpperCase()}
            </DestinationExtraValue>
          </div>
          <div>
            <DestinationExtraInfo>EST. TRAVEL TIME</DestinationExtraInfo>
            <DestinationExtraValue>
              {destination.travel.toLocaleUpperCase()}
            </DestinationExtraValue>
          </div>
        </DestinationExtraInfoWrapepr>
      </article>
    </DestinationSection>
  );
};

export default Destination;
