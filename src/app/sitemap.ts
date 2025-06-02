import { MetadataRoute } from "next";
import { servicesData } from "./layout";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["about", "knowledge-center", "contact-us"];

  const servicesDataArray = [
    "brubish-marketing",
    "ftwz-services",
    "brubish-finance",
    "brubish-freight",
    "brubish-insurance",
    "brubish-trucking",
    "brubish-vas",
    "brubish-customs",
  ];
  const ftwzDataArray = [
    "ftwz-for-indian-importers",
    "ftwz-for-foreign-exporters",
    "ftwz-for-indian-exporters",
    "ftwz-for-ecommerce-companies",
    "ftwz-for-consolidation",
    "ftwz-for-re-exports-purpose",
  ];
  const productsDataArray = [
    "vessel-spares",
    "steel",
    "paper-pulp",
    "metal",
    "consumer-goods",
    "household-appliances",
    "agri-products",
    "fashion",
  ];
  const servicePageEntries = servicesDataArray?.map(
    (service: any, index: number) => {
      return {
        url: `${process.env.FRONTEND_URL}/services/${service}`,
        priority: 0.7,
      };
    }
  );
  const ftwzDataArrayEntries = ftwzDataArray?.map(
    (ftwz: any, index: number) => {
      return {
        url: `${process.env.FRONTEND_URL}/ftwz-services/${ftwz}`,
        priority: 0.7,
      };
    }
  );
  const productsDataArrayEntries = productsDataArray?.map(
    (product: any, index: number) => {
      return {
        url: `${process.env.FRONTEND_URL}/products/${product}`,
        priority: 0.8,
      };
    }
  );

  const pagesEntries = pages.map((item) => {
    return {
      url: `${process.env.FRONTEND_URL}/${item}`,
      priority: 0.5,
    };
  });

  return [
    {
      url: `${process.env.FRONTEND_URL}`,
      priority: 1,
    },
    ...pagesEntries,
    ...servicePageEntries,
    ...ftwzDataArrayEntries,
    ...productsDataArrayEntries,
  ];
}
