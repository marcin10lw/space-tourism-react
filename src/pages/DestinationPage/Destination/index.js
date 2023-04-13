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
} from "./styled";
import { useState } from "react";

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
  const { listData, updateListData } = useUpdateData(initialState);

  const onButtonClick = (id) => {
    updateListData(id);
    setIndex(id);
  };

  return (
    <DestinationSection>
      <DestinationImage
        src={`${process.env.PUBLIC_URL}/${destination.images.png}`}
        alt={destination.name}
      />
      <article>
        <nav>
          <DestinationList>
            {listData.map(({ name, isActive, id }) => (
              <li key={id}>
                <DestinationButton
                  onClick={() => onButtonClick(id)}
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
