import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
}

export function Accordion(props: AccordionPropsType) {

  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

// export function Accordion2(props: AccordionPropsType) {
//   if (props.collapsed !== true) {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <AccordionTitle title={props.titleValue}/>
//       <span>menu collapsed </span>
//     </div>
//   )
// }

function AccordionTitle(props: any) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  )
}