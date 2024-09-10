"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/reusable-components/RichText";
import ImageBanner from "@/components/nestable/ImageBanner";
import Btn from "@/components/nestable/reusable-components/Btn";
import Hero from "@/components/nestable/Hero";
import Input from "@/components/nestable/reusable-components/Input";
import Links from "@/components/nestable/reusable-components/Links";
import LinkGrid from "@/components/nestable/LinkGrid";
import LinkGroup from "@/components/nestable/LinkGroup";
import Logo from "@/components/nestable/Logo";
import Navigation from "@/components/nestable/Navigation";
import ProductColor from "@/components/nestable/product-components/ProductColor";
import ProductDesc from "@/components/nestable/product-components/ProductDesc";
import ProductFilter from "@/components/nestable/product-components/ProductFilter";
import ProductList from "@/components/nestable/ProductList";
import ProductListDesc from "@/components/nestable/ProductListDesc";
import ProductPage from "@/components/nestable/ProductPage";
import ProductSizing from "@/components/nestable/product-components/ProductSizing";
import ImageWithText from "@/components/nestable/product-components/ImageWithText";
import SearchField from "@/components/nestable/reusable-components/SearchField";
import TextField from "@/components/nestable/reusable-components/TextField";
import Title from "@/components/nestable/reusable-components/Title";
import Header from "@/components/nestable/Header";
import ImageBlock from "@/components/nestable/reusable-components/ImageBlock";
import LatestUpdates from "@/components/nestable/LatestUpdates";
import SizeGuide from "@/components/nestable/product-components/SizeGuide";
import HeaderBanner from "@/components/nestable/HeaderBanner";
import ShopList from "@/components/nestable/ShopList";



const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  image_banner: ImageBanner,
  headerBanner: HeaderBanner,
  btn: Btn,
  hero: Hero,
  Input: Input,
  link: Links,
  Link_grid: LinkGrid,
  Link_group: LinkGroup,
  Logo: Logo,
  Navigation: Navigation,
  product_color: ProductColor,
  product_description: ProductDesc,
  product_filter: ProductFilter,
  product_list: ProductList,
  product_list_description: ProductListDesc,
  product_page: ProductPage,
  product_sizing: ProductSizing,
  image_with_text: ImageWithText,
  size_guide: SizeGuide,
  Search_field: SearchField,
  text_field: TextField,
  title: Title,
  header: Header,
  image_block: ImageBlock,
  latest_updates: LatestUpdates,
  Shop_list: ShopList,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
