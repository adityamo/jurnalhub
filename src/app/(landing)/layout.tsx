import React, { ReactNode } from "react";
import PublicLayout from "@/components/layout";

type Props = {
  children: ReactNode;
};

export default async function LandingLayout({ children }: Props) {
  return <PublicLayout>{children}</PublicLayout>;
}
