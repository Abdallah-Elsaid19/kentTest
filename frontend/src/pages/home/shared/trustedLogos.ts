import { organisationLogos } from "../employers/data";

export const trustedOrganisationLogos = organisationLogos.filter(
  (logo, index, logos) => logos.findIndex((candidate) => candidate.image === logo.image) === index,
);
