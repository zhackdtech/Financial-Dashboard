"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

const style={
  Breadcrumbs:{
    fontWeight:"600",
    fontFamily:"Manrope"
  }
}
const Cbreadcrumb = (props) => {
  return (
    <Breadcrumb py="5" px="1" style={style.Breadcrumbs}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">SysGo</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">FD</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{props.CurrentPage}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
export default Cbreadcrumb;
