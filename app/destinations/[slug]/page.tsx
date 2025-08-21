import React from "react";
import DynamicPage from "@/components/dest_dynamic";

export default function SingleDestination({
  params,
}: {
  params: { slug: string };
}) {
  return <DynamicPage params={params} />;
}
