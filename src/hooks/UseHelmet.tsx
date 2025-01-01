import { Helmet } from "react-helmet-async";
import { HelmetTypes } from "../types/HelmetTypes";

export default function UseHelmet({title,description,keywords}:HelmetTypes) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://localhost:5173" />
      <link rel="description" content={description} />
      <link rel="keywords" content={keywords} />
    </Helmet>
  );
}
