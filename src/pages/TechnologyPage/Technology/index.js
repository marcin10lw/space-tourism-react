import { useMediaQuery } from "@mui/material";
import {
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

const Technology = () => {
  const matches = useMediaQuery("(max-width: 1180px)");
  const { technology } = data;
  const [index, setIndex] = useState(0);
  const vehicle = technology[index];

  const [listData, setListData] = useState([
    { id: 0, isActive: true },
    { id: 1, isActive: false },
    { id: 2, isActive: false },
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
    <TechnologySection>
      <TechnologyArticle>
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
          <TechnologyTitle>LAUNCH VEHICLE</TechnologyTitle>
          <TechnologyDescription>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </TechnologyDescription>
        </div>
      </TechnologyArticle>
      {matches ? (
        <TechnologyImage
          src={`${process.env.PUBLIC_URL}/assets/technology/image-launch-vehicle-landscape.jpg`}
        />
      ) : (
        <TechnologyImage
          src={`${process.env.PUBLIC_URL}/assets/technology/image-launch-vehicle-portrait.jpg`}
        />
      )}
    </TechnologySection>
  );
};

export default Technology;
