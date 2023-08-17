import React from 'react'

interface lables{
    labels_before: { name: string; value: string }[];
    labels_after: { name: string; value: string }[];
    line_after: string;
    line_before: string;
}

function ExplainStages(props: lables ) {
    const {labels_before, labels_after, line_after, line_before,  } = props

    const modifiedLabels  = labels_after.filter(labelAfter => {
      const lablesBefore = labels_before.find(lable => lable.name === labelAfter.name);
      return !lablesBefore || lablesBefore.value !== labelAfter.value
    })

  return (
    <div className='explain-section__row'>
      <div className='explain-section__row-title'>Available labels on this stage:</div>
      <div className='explain-section__row-body'> {labels_before.map((el) => (
        <p>{el.name} = {el.value}</p>
       ))}</div>
      <div className='explain-section__row-title'>Line after this stage:</div>
      <div className='explain-section__row-body'> <p>{line_after}</p> </div>
     {modifiedLabels.length > 0 && (
      <>
        <div className='explain-section__row-title'>Added/Modified labels:</div>
        <div className='explain-section__row-body'>
          {modifiedLabels.map((el) => (
            <p>{el.name} = {el.value}</p>
          ))}
        </div>
      </>
     
       )}
    </div>
  )
}

export default ExplainStages