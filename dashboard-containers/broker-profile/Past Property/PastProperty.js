import SearchFilterBox from "../../search-filter/SearchFilter";
import PastPropertyList from "./PastPropertyList";

const PastProperty = () => {
  return (
    <>
      <h2>Past Properties</h2>
      <SearchFilterBox />
      <PastPropertyList data={[1, 2, 3, 4, 5, 6]} />
    </>
  );
};
export default PastProperty;
