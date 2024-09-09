"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/reusable-components/RichText";
import Banner from "@/components/nestable/Banner";
import Btn from "@/components/nestable/reusable-components/Btn";
import Hero from "@/components/nestable/Hero";
import Input from "@/components/nestable/reusable-components/Input";
import Link from "@/components/nestable/reusable-components/Link";
import LinkGrid from "@/components/nestable/LinkGrid";
import LinkGroup from "@/components/nestable/LinkGroup";
import Logo from "@/components/nestable/Logo";
import Navigation from "@/components/nestable/Navigation";
import ProductColor from "@/components/nestable/product-components/ProductColor";
import ProductDesc from "@/components/nestable/product-components/ProductDesc";
import ProductFilter from "@/components/nestable/product-components/ProductFilter";
import ProductGrid from "@/components/nestable/ProductGrid";
import ProductListDesc from "@/components/nestable/ProductListDesc";
import ProductPage from "@/components/nestable/ProductPage";
import ProductSizing from "@/components/nestable/product-components/ProductSizing";
import ProductThumb from "@/components/nestable/product-components/ProductThumb";
import SearchField from "@/components/nestable/reusable-components/SearchField";
import TextField from "@/components/nestable/reusable-components/TextField";
import Title from "@/components/nestable/reusable-components/Title";
import Header from "@/components/nestable/Header";

const components = {
  "page": Page,
  "teaser": Teaser,
  "richtext": RichTextDefault,
  "banner": Banner,
  "btn": Btn,
  "hero": Hero,
  "Input": Input,
  "link": Link,
  "Link_grid": LinkGrid,
  "Link_group": LinkGroup,
  "Logo": Logo,
  "Navigation": Navigation,
  "product_color": ProductColor,
  "product_description": ProductDesc,
  "product_filter": ProductFilter,
  "product_grid": ProductGrid,
  "product_list_description": ProductListDesc,
  "product_page": ProductPage,
  "product_sizing": ProductSizing,
  "product_thumbnail": ProductThumb,
  "Search_field": SearchField,
  "text_field": TextField,
  "title": Title,
  "teaser": Teaser,
  "richtext": RichTextDefault,
  "header": Header,
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}