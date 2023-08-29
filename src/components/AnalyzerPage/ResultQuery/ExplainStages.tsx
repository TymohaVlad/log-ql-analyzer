import React from 'react';
interface lables {
  labels_before: { name: string; value: string }[];
  labels_after: { name: string; value: string }[];
  line_after: string;
  line_before: string;
  filtred_out: boolean;
}

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 360));
  return `hsl(${color}, 90%, 80%)`;
};

function ExplainStages(props: lables) {
  const { labels_before, labels_after, line_after, filtred_out } = props;

  const modifiedLabels = labels_after.filter((labelAfter) => {
    const lablesBefore = labels_before.find(
      (lable) => lable.name === labelAfter.name
    );
    return !lablesBefore || lablesBefore.value !== labelAfter.value;
  });

  const lablesBeforeString = labels_before.map((el, index) => {
    const labelColor = stringToColor(`${el.name}-${el.value}`);
    const labelStyle = {
      backgroundColor: labelColor,
    };
    return (
      <article style={labelStyle} className=" label">
        {el.name} = {el.value}
      </article>
    );
  });
  const lablesModifiedString = labels_after.map((el, index) => {
    const labelColor = stringToColor(`${el.name}-${el.value}`);
    const labelStyle = {
      backgroundColor: labelColor,
    };
    return (
      <article style={labelStyle} className=" label">
        {el.name} = {el.value}
      </article>
    );
  });

  return (
    <div className="explain-section__row">
      <div className="explain-section__row-title">
        Available labels on this stage:
      </div>
      <div className="explain-section__row-body">{lablesBeforeString}</div>
      <div className="explain-section__row-title">Line after this stage:</div>
      <div className="explain-section__row-body">
        <p className={`line__after ${filtred_out ? 'filtered' : ''}`}>
          {line_after}
        </p>
        {filtred_out && (
          <p className="filtred__title">
            the line has been filtered out on this stage
          </p>
        )}
      </div>
      {modifiedLabels.length > 0 && (
        <>
          <div className="explain-section__row-title">
            Added/Modified labels:
          </div>
          <div className="explain-section__row-body">
            {lablesModifiedString}
          </div>
        </>
      )}
    </div>
  );
}

export default ExplainStages;
