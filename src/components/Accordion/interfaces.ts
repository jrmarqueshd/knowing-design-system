type ChildrenType = React.ReactElement | string;

export interface AccordionItems {
  header: ChildrenType;
  body: ChildrenType;
}

export interface AccordionProps {
  items: AccordionItems[];
}

export interface HeaderProps {
  children: ChildrenType;
}

export interface BodyProps {
  children: ChildrenType;
}
