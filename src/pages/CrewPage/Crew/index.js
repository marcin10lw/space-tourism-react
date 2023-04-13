import { useState } from "react";
import {
  CrewArticle,
  CrewButton,
  CrewDescription,
  CrewImage,
  CrewName,
  CrewNavigation,
  CrewNavigationList,
  CrewSection,
  CrewTitle,
  ImageWrapper,
} from "./styled";
import data from "../../../data.json";

const Crew = () => {
  const { crew } = data;
  const [index, setIndex] = useState(0);
  const crewMember = crew[index];

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
      <CrewArticle>
        <div>
          <CrewTitle>{crewMember.role.toLocaleUpperCase()}</CrewTitle>
          <CrewName>{crewMember.name.toLocaleUpperCase()}</CrewName>
          <CrewDescription>{crewMember.bio}</CrewDescription>
        </div>
        <CrewNavigation>
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
        </CrewNavigation>
      </CrewArticle>
      <ImageWrapper>
        <CrewImage
          src={`${process.env.PUBLIC_URL}${crewMember.images.png}`}
          alt=""
        />
      </ImageWrapper>
    </CrewSection>
  );
};

export default Crew;
