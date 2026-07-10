# Datasets

Scholar Data currently indexes millions of datasets from thousands of repositories
worldwide. This page describes what's in the database, where it comes from, and what
to do if your dataset isn't showing up.

## What's in the Database

### DataCite Datasets

[DataCite](https://datacite.org/) is a global infrastructure that enables repositories
and institutions to register DOIs for datasets and other research outputs. Because DOIs
have become the primary persistent identifier for datasets, DataCite holds metadata for
millions of datasets from thousands of repositories worldwide.

### Electron Microscopy Data Bank (EMDB) Datasets

Scholar Data also includes datasets from the
[Electron Microscopy Data Bank (EMDB)](https://www.ebi.ac.uk/emdb/), an international
repository for three-dimensional electron microscopy density maps. EMDB datasets are not assigned DOIs. Each is identified by an accession number in the format `EMD-XXXXX`.

## Coverage Summary

| Source    | Datasets       | Repositories | Last Updated    |
| --------- | -------------- | ------------ | --------------- |
| DataCite  | 70,336,850     | 1,594\*      | April 30th 2026 |
| EMDB      | 53,202         | 1            | April 30th 2026 |
| **Total** | **70,390,052** | **1,595**    |                 |

\*There are 17,000+ unique publisher names across the DataCite datasets, but we are including here the more conservative number of publisher IDs.

The database spans a large number of research fields, all repository types (generalist,
domain-specific, and institutional), publication years from 1950 to 2026, and a wide
variety of data types, licenses, and access levels.

## Can't Find Your Dataset?

If your dataset doesn't appear when you search, it may not yet be in the Scholar Data
database. This can happen if:

- It was deposited after our last update
- It is not registered with DataCite and is not in EMDB

In these cases, you can still evaluate the impact of your dataset from the [Evaluate Datasets](https://scholardata.io/evaluate)
page, but cannot add it to your profile yet (user-suggested dataset inclusion is something we are working on).

## Processing Notes

### Metadata Processing

To make the metadata manageable in subsequent pipeline steps, a reduced version was kept for each dataset, retaining only the fields relevant to S-index calculation:

- Identifier
- URL
- Title
- Publication year
- Creator details (name, affiliation, identifiers)
- Publisher
- Description
- Subjects / keywords

### Publication Year Correction

A small number of DataCite datasets contained likely erroneous publication years (for example, dates in the 1400s or future dates), most likely due to metadata entry errors at the time of deposit. For any dataset with a publication year outside the range 1950–[current year at the time of update], the DOI creation date was used as a fallback publication date.
