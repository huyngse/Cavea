import React from "react";

const CageItem = (props) => {
  const productEle = props.itemProps;
  // const data = todo.active;
  console.log(productEle);
  // {data.map(item => {
  //     return (
  //         <p>{item.money}</p>
  //     );
  // })}
  return (
    <div>
      content
      {/* {productEle.map(ele => {
                return (
                    <div>
                        <p>{ele.title}</p>
                        <p>{ele.content}</p>
                    </div>
                );
            })} */}
    </div>
  );
};

export default CageItem;
