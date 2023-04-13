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
          <TechnologyTitle>{vehicle.name.toLocaleUpperCase()}</TechnologyTitle>
          <TechnologyDescription>{vehicle.description}</TechnologyDescription>
        </div>
      </TechnologyArticle>

      {matches ? (
        <TechnologyImage
          src={`${process.env.PUBLIC_URL}${vehicle.images.landscape}`}
        />
      ) : (
        <TechnologyImage
          src={`${process.env.PUBLIC_URL}${vehicle.images.portrait}`}
        />
      )}
    </TechnologySection>
  );
};

export default Technology;
