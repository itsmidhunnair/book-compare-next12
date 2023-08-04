import { toastConfig } from "@constants/toast/toastConfig";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCompare } from "src/store/slice/bookSlice";

const useCompare = () => {
  const compareList = useSelector((state) => state.book.compare);
  const dispatch = useDispatch();
  /**
   *To add an item to compare list
   * @param {String} id
   */
  const addCompareItem = (id) => {
    dispatch(addToCompare(id));
    toast.success("Compare list updated successfully!!", toastConfig);
  };
  return { compareList, addCompareItem };
};

export default useCompare;
