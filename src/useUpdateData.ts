import { useEffect, useState } from "react";

type InitialState = { id: number; active: boolean }[];

export const useUpdateData = (initialState: InitialState, index: number) => {
  const [listData, setListData] = useState(initialState);

  const updateListData = (id: number) => {
    setListData((listData) =>
      listData.map((listElement) => {
        if (listElement.id === id) {
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

  useEffect(() => {
    updateListData(index);
  }, [index]);

  return { listData, updateListData };
};
