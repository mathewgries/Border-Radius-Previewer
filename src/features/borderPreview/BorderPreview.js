import React, { useState } from "react";
import "./style.css";

const StylePreview = ({ styles }) => {
  let renderCSSFormat = 'style {\n'
	for(let style in styles){
		renderCSSFormat += `\t${styles[style].str}: ${styles[style].value}%;\n`
	}
	renderCSSFormat+= '}'

  return (
    <div>
      <pre>{renderCSSFormat}</pre>
    </div>
  );
};

export const BorderPreview = () => {
  const [styles, setStyles] = useState({
    borderTopLeftRadius: {
      value: "0",
      str: "border-top-left-radius",
    },
    borderTopRightRadius: {
      value: "0",
      str: "border-top-right-radius",
    },
    borderBottomLeftRadius: {
      value: "0",
      str: "border-bottom-left-radius",
    },
    borderBottomRightRadius: {
      value: "0",
      str: "border-bottom-right-radius",
    },
  });

  const handleInputChange = ({ name, value }) => {
    setStyles({
			...styles,
			[name]: {
				...styles[name],
				value: value
			}
		});
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

  // top-left, top-right, bottom-left, bottom-right

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
