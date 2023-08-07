import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { toastConfig } from "@constants/toast/toastConfig";
import {
  addToCompare,
  removeAllFromCompare,
  removeBookFromCompare,
} from "src/store/slice/bookSlice";
import { useCallback } from "react";

/**
 * Custom hook to handle all operations of product comparison page
 * @function addCompareItem - adds an id of item to comparison list state variable
 * @function removeCompareItem - removes an id from comparison list state variable
 * @function clearCompareList - clears comparison list state variable to empty array ([])
 */
const useCompare = () => {
  const router = useRouter();

  const compareList = useSelector((state) => state.book.compare);
  const dispatch = useDispatch();

  /**
   * To add an item (id) to compare list array state variable
   * @param {String} id
   */
  const addCompareItem = useCallback(
    (id) => {
      try {
        dispatch(addToCompare(id));
        toast.success("Book added to compare!!", toastConfig);
      } catch (error) {
        console.log(
          "🚀 ~ file: useCompare.js:21 ~ addCompareItem ~ error:",
          error
        );
        toast.error(error, toastConfig);
      }
    },
    [dispatch]
  );

  /**
   * To empty an state variable array to []
   */
  const clearCompareList = useCallback(() => {
    dispatch(removeAllFromCompare());
    router.back();
    toast.success("Compare list cleared successfully!!", toastConfig);
  }, [dispatch]);

  /**
   * To remove an item (id) from compare list array state variable
   * @param {String} id
   */
  const removeCompareItem = useCallback(
    (id) => {
      try {
        dispatch(removeBookFromCompare(id));
        toast.success("Book removed from comparelist!!", toastConfig);
      } catch (error) {}
    },
    [dispatch]
  );

  return { compareList, addCompareItem, removeCompareItem, clearCompareList };
};

export default useCompare;
