import { FaMoneyCheckDollar } from "react-icons/fa6";

function Logo() {
  return (
    <div className="px-3">
      <div className="logo w-100 text-center pt-5 pb-4">
        <FaMoneyCheckDollar/>&nbsp;Finance Dashboard
      </div>
      <hr className="sidenavDivider" />
    </div>
  );
}
export default Logo;
