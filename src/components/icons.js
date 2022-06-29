const iconsPath = "/icons/";

const icon = (className, name) => (
  <img className={className} src={iconsPath + name + ".svg"} alt=" " />
);
const iconPng = (className, name) => (
  <img className={className} src={iconsPath + name + ".png"} alt=" " />
);

const Search = ({ className }) => icon(className, "search");
const ChevronRight = ({ className }) => icon(className, "chevronRight");
const LinkedIn = ({ className }) => icon(className, "linkedin");
const YouTube = ({ className }) => icon(className, "youtube");
const Facebook = ({ className }) => icon(className, "facebook");
const Twitter = ({ className }) => icon(className, "twitter");
const ChevronRightBlue = ({ className }) => iconPng(className, "chevron");

export {
  Search,
  ChevronRight,
  ChevronRightBlue,
  LinkedIn,
  Facebook,
  Twitter,
  YouTube,
};
