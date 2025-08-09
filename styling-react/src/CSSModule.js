import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles); // styles의 class 바인드

const CSSModule = () => {
  console.log(styles);
  console.log(cx);
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSSModule</span>!
    </div>
  );
};

export default CSSModule;
