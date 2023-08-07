import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { toastConfig } from "@constants/toast/toastConfig";
import {
  addToCompare,
  removeAllFromCompare,
  removeBookFromCompare,
} from "src/store/slice/bookSlice";

const useCompare = () => {
  const router = useRouter();

  const compareList = useSelector((state) => state.book.compare);
  const dispatch = useDispatch();
  /**
   *To add an item to compare list
   * @param {String} id
   */
  const addCompareItem = (id) => {
    try {
      dispatch(addToCompare(id));
      toast.success("Booked added to compare!!", toastConfig);
    } catch (error) {
      console.log(
        "🚀 ~ file: useCompare.js:21 ~ addCompareItem ~ error:",
        error
      );
      toast.error(error, toastConfig);
    }
  };

  const clearCompareList = () => {
    dispatch(removeAllFromCompare());
    router.back();
    toast.success("Compare list cleared successfully!!", toastConfig);
  };

  const removeCompareItem = (id) => {
    try {
      dispatch(removeBookFromCompare(id));
      toast.success("Book removed from comparelist!!", toastConfig);
    } catch (error) {}
  };

  return { compareList, addCompareItem, removeCompareItem, clearCompareList };
};

export default useCompare;
