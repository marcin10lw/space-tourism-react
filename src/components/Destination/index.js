import data from "../../data.json";
import { Description } from "../Description";
import {
  DestinationArticle,
  DestinationButton,
  DestinationImage,
  DestinationList,
  DestinationSection,
  DestinationTitle,
} from "./styled";
import { useState } from "react";

const Destination = () => {
  const { destinations } = data;
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  const [listData, setListData] = useState([
    { id: 0, name: "moon", isActive: true },
    { id: 1, name: "mars", isActive: false },
    { id: 2, name: "europa", isActive: false },
    { id: 3, name: "titan", isActive: false },
  ]);

  const updateListData = (name) => {
    setListData((listData) =>
      listData.map((listElement) => {
        if (listElement.name === name) {
          return {
            ...listElement,
            isActive: true,
          };
        }

        return {
          ...listElement,
          isActive: false,
        };
      })
    );
  };

  const onButtonClick = (name, id) => {
    updateListData(name);
    setIndex(id);
  };

  return (
    <DestinationSection>
      <DestinationImage
        src={`${process.env.PUBLIC_URL}/${destination.images.png}`}
        alt={destination.name}
      />
      <DestinationArticle>
        <nav>
          <DestinationList>
            {listData.map(({ name, isActive, id }) => (
              <li key={name}>
                <DestinationButton
                  onClick={() => onButtonClick(name, id)}
                  isActive={isActive}
                >
                  {name.toLocaleUpperCase()}
                </DestinationButton>
              </li>
            ))}
          </DestinationList>
        </nav>
        <DestinationTitle>
          {destination.name.toLocaleUpperCase()}
        </DestinationTitle>
        <Description>{destination.description}</Description>
      </DestinationArticle>
    </DestinationSection>
  );
};

export default Destination;
