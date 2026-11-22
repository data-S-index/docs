# Citations

This page describes how citations are identified for datasets in the Scholar Data database. Three complementary sources are used to ensure the most thorough coverage possible.

## Sources

### Make Data Count (MDC) Data Citation Corpus

The [Make Data Count](https://makedatacount.org/) initiative is an international collaboration, including DataCite, the California Digital Library, and the Wellcome Trust, and focused on developing standardized metrics for research data. Its core output is the **Data Citation Corpus**: a centralized, publicly accessible (CC0 license) resource that aggregates dataset references from multiple sources.

**How citation are collected**

The corpus pulls together citations that were found in different ways:

- **DataCite Event Data**: citations recorded in DOI metadata.
- **Chan Zuckerberg Initiative (CZI) Science Knowledge Graph**: dataset mentions found by machine-learning models run over the full text of articles.
- **Europe PMC**: accession numbers and data DOIs text-mined from biomedical literature.
- **Aligning Science Across Parkinson's (ASAP)**: curated links between ASAP-funded publications and their datasets.

More details are available in the [Corpus documentation](https://makedatacount.org/data-citation). Unlike general bibliographic databases, the MDC corpus is specifically engineered to track citations to any dataset, including those identified by identifiers than DOIs, making it essential for capturing citations to datasets from repositories like EMDB.

### OpenAlex

[OpenAlex](https://openalex.org/) is a fully open (CC0 license) global catalog of scholarly works, authors, and institutions maintained by the nonprofit OurResearch. Launched in 2022 as a successor to the Microsoft Academic Graph, it indexes over 450 million scholarly works and tracks citations between them.

**How citation are collected**

OpenAlex takes the reference list of each article, either from source metadata (Crossref, PubMed, and similar) or, for open-access works, from the PDF. It then matches each reference to a work already in OpenAlex. A dataset is counted as cited only when it appears in an article's formal reference list and OpenAlex can match it to an indexed record. Mentions in the body text are not captured. More details are available in the [citation documentation of OpenAlex](https://help.openalex.org/data/works/citations).

### DataCite

For datasets registered in DataCite, citation information is included directly in the dataset metadata under a `citations` key. These are used as an additional citation source.

**How citations are collected**

These citations come from two places:

- **Relationships in DataCite metadata**: repositories record related works using `relatedIdentifiers`, for example with `IsCitedBy` or `IsReferencedBy`.
- **Crossref data citations**: references and relationships that publishers deposit with Crossref when an article cites a dataset with a DataCite DOI.

More details are available in the [DataCite citation documentation](https://support.datacite.org/docs/what-are-the-sources-of-citation-information-in-datacite-services).

### Why multiple sources are necessary

During our initial validation work for the S-index Challenge we identified close to 7.7M unique citations across the MDC Citation Corpus, OpenAlex, and Datacite. Out of them, 6.5M (84.9%) came from only one source (not overlapped between sources). Of these, 3.5M (45.8% of the total) came exclusively from DataCite, 2.6M (33.3%) from OpenAlex, and 450K (5.9%) from MDC. A total of 1.1M (14.4%) citations overlapped between two sources, while 51K (0.7%) overlapped across all three sources. This demonstrates that all three sources are essential to capture broad citation coverage.

## Coverage

Citations are deduplicated across all three sources so the same reference is never
counted twice.

| Source                               | Last Updated/Version used | Unique Citations to Scholar Data indexed datasets |
| ------------------------------------ | ------------------------- | ------------------------------------------------- |
| Make Data Count Data Citation Corpus | v4.1 (August 2025)        | 1,480,548                                         |
| OpenAlex                             | April 2026 snapshot       | 2,787,149                                         |
| DataCite                             | April 30, 2026            | 5,576,297                                         |
| **Total (deduplicated)**             |                           | **8,610,545**                                     |

<!--
```sql
SELECT
    'Make Data Count Data Citation Corpus' AS "Source",
    COUNT(CASE WHEN "mdc" = TRUE THEN 1 END) AS "Unique Citations"
FROM "Citation"

UNION ALL

SELECT
    'OpenAlex' AS "Source",
    COUNT(CASE WHEN "openAlex" = TRUE THEN 1 END) AS "Unique Citations"
FROM "Citation"

UNION ALL

SELECT
    'DataCite' AS "Source",
    COUNT(CASE WHEN "datacite" = TRUE THEN 1 END) AS "Unique Citations"
FROM "Citation"

UNION ALL

SELECT
    'Total (deduplicated)' AS "Source",
    COUNT(*) AS "Unique Citations"
FROM "Citation";
```
-->

## Why Might a Citation Be Missing?

- The citing paper was published after the last database update
- The citation appears in a source not yet covered by any of the sources listed above
