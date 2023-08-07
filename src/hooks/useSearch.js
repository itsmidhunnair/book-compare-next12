import { useRouter } from "next/router";

/**
 * Custom hook to handle all the search box related operations
 *
 * @description will take the value of the search field and adds that term in query param
 */
const useSearch = () => {
  const router = useRouter();
  const submitSearch = async (e) => {
    router.push({ query: { search: e.target.search.value, page: 1 } });
    e.preventDefault();
  };

  return { submitSearch };
};

export default useSearch;