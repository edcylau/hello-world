import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/GTAmerica-ExtendedRegular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="GTAmericaRegular2"
    />,
    <link
      rel="preload"
      href="/fonts/GTAmerica-ExtendedLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="GTAmericaLight2"
    />,
    <link
      rel="preload"
      href="/fonts/GTAmerica-ExtendedRegular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="GTAmericaRegular"
    />,
    <link
      rel="preload"
      href="/fonts/GTAmerica-ExtendedLight.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="GTAmericaLight"
    />,
    <link rel="stylesheet" href="https://use.typekit.net/rma8fyt.css" key="Sofiafont"/>
  ])
}