import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRadius } from "./borderPreviewSlice";
import "./style.css";

const StylePreview = ({ styles }) => {
  let renderCSSFormat = "style {\n";
  for (let style in styles) {
    renderCSSFormat += `\t${styles[style].str}: ${styles[style].value}%;\n`;
  }
  renderCSSFormat += "}";

  return (
    <div>
      <pre>{renderCSSFormat}</pre>
    </div>
  );
};

export const BorderPreview = () => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.borderPreview);

  const handleInputChange = ({ name, value }) => {
    if (value.length > 1 && value.charAt(0) === "0") {
      value = value.substring(1);
    }

    if (value === "") {
      value = "0";
    }

    dispatch(updateRadius({ name, value }));
  };

  const renderBorderBox = () => {
    const formattedStyles = {};

    for (let style in styles) {
      formattedStyles[style] = styles[style].value + "%";
    }

    return (
      <div style={formattedStyles} className="border-box">
        <div className="style-preview">
          <StylePreview styles={styles} />
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <section className="form">
        <form>
          <div>
            <div>
              <label>top-left</label>
            </div>
            <div>
              <input
                type="text"
                name={"borderTopLeftRadius"}
                value={styles.borderTopLeftRadius.value}
                onChange={(e) => handleInputChange(e.target)}
              />
              <span>%</span>
            </div>
          </div>
          <div>
            <div>
              <label>top-right</label>
            </div>
            <div>
              <input
                type="text"
                name={"borderTopRightRadius"}
                value={styles.borderTopRightRadius.value}
                onChange={(e) => handleInputChange(e.target)}
              />
              <span>%</span>
            </div>
          </div>
          <div>
            <div>
              <label>bottom-left</label>
            </div>
            <div>
              <input
                type="text"
                name={"borderBottomLeftRadius"}
                value={styles.borderBottomLeftRadius.value}
                onChange={(e) => handleInputChange(e.target)}
              />
              <span>%</span>
            </div>
          </div>
          <div>
            <div>
              <label>bottom-right</label>
            </div>
            <div>
              <input
                type="text"
                name={"borderBottomRightRadius"}
                value={styles.borderBottomRightRadius.value}
                onChange={(e) => handleInputChange(e.target)}
              />
              <span>%</span>
            </div>
          </div>
        </form>
      </section>
    );
  };

  return (
    <div>
      {renderBorderBox()}
      {renderForm()}
    </div>
  );
};
