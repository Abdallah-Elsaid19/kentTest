import { organisationLogos } from "@/pages/home/components/data";

export const trustedOrganisationLogos = organisationLogos.filter(
  (logo, index, logos) => logos.findIndex((candidate) => candidate.image === logo.image) === index,
);
