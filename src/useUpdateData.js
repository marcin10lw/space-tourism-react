import { useState } from "react";

export const useUpdateData = (initialState) => {
  const [listData, setListData] = useState(initialState);

  const updateListData = (id) => {
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

  return { listData, updateListData };
};
