# Datasets

This page describes how datasets were selected and how their metadata was collected for the large-scale S-index validation underlying the current Scholar Data platform.

## Objective

The goal was to harvest as much dataset metadata as possible to conduct the largest possible real-world validation within the available time and resources for Phase 2 of the NIH S-index challenge (~4 months). Coverage across research fields, repository types, publication years, licenses, and data types was a priority to make the validation meaningful.

## Sources

### DataCite

[DataCite](https://datacite.org/) is a global, community-governed infrastructure established in 2009 that enables repositories and institutions to register DOIs for datasets and other research outputs. Registering a DOI requires submitting metadata using the DataCite metadata schema, which DataCite publishes openly under a CC0 license, making it free to use, modify, and distribute without restriction.

Because DOI has become the primary persistent identifier (PID) for datasets, DataCite now holds metadata for millions of datasets from thousands of repositories. Its open API was used to harvest the metadata of all registered datasets as of **September 30, 2025**, yielding **49,009,522 datasets** from an estimated **17,306 repositories** (identified via the `publisher` field, with case-insensitive matching applied).

### Electron Microscopy Data Bank (EMDB)

To ensure the S-index pipelines are generalizable beyond DOI-based datasets, metadata from the [Electron Microscopy Data Bank (EMDB)](https://www.ebi.ac.uk/emdb/) was also included. EMDB is a long-running, openly accessible international repository for three-dimensional electron microscopy density maps, including cryo-EM, electron tomography, and related volume imaging reconstructions. Datasets in EMDB are not assigned DOIs. Each dataset is identified only by an internal accession number in the format `EMD-[4 or 5 digits]`.

EMDB was selected because of a high density of citations observed in the Make Data Count corpus (see [Citations](./citations)) and because it provides a convenient API for metadata harvesting. All datasets published on EMDB as of **September 30, 2025** were harvested, yielding **51,645 datasets**.

## Summary

| Source    | Datasets       | Repositories |
| --------- | -------------- | ------------ |
| DataCite  | 49,009,522     | 17,306       |
| EMDB      | 51,645         | 1            |
| **Total** | **49,061,167** | **17,307**   |

The combined corpus covers all large amount of research fields, all repository types (generalist, domain-specific, and institutional), publication years from 1950 to 2026, a wide range of data licenses and access types, and a broad variety of data types and formats.

## Processing Notes

### Metadata Processing

To make the metadata manageable in subsequent pipeline steps, a reduced version was produced for each dataset retaining only the fields relevant to S-index calculation:

- Identifier
- URL
- Title
- Publication year
- Creator details (name, affiliation, identifiers)
- Publisher
- Description
- Subjects / keywords

This slim metadata was saved in Newline Delimited JSON (NDJSON) format following the [DataCite metadata schema v4.6](https://doi.org/10.14454/mzv1-5b55). EMDB metadata was mapped to the same schema for consistency.

### Identifier Normalization

All DOI identifiers were normalized to lowercase canonical form (e.g., `10.60775/fairhub.2`) to ensure consistent matching when identifying citations and mentions. EMDB identifiers were kept in their standard `EMD-[4 or 5 digits]` format.

### Publication Year Correction

A small number of DataCite datasets contained likely erroneous publication years (for example, dates in the 1400s or future dates beyond January 2026), most likely due to metadata entry errors at the time of deposit. For any dataset with a publication year outside the range 1950–January 2026, the DOI creation date was used as a fallback publication date.
