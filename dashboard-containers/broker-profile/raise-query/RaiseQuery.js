import AccordionCard from "../accordion/AccordionCard";
import ShadowCard from "../shadow-card/ShadowCard";
import "./RaiseQuery.css";

const RaiseQuery = () => {
  return (
    <>
      <ShadowCard
        itemLength={5}
        title="Loreum ipsum dolor sit amet, consectetur elit"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut."
      />
      <div className="mt-5 mb-3 chat-text">Chat With Us</div>
      <AccordionCard itemLength={1} accordionTitle="Contact 24×7 Help" />
      <AccordionCard itemLength={1} accordionTitle="Email Us" />
    </>
  );
};

export default RaiseQuery;
