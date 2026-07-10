# Citations

This page describes how citations to datasets are identified for datasets in the Scholar Data database. Three complementary sources are used to ensure the most thorough coverage possible.

## Sources

### Make Data Count (MDC) Data Citation Corpus

The [Make Data Count](https://makedatacount.org/) initiative is an international collaboration, including DataCite, the California Digital Library, and the Wellcome Trust, and focused on developing standardized metrics for research data. Its core output is the **Data Citation Corpus**: a centralized, publicly accessible (CC0 license) resource that aggregates dataset references from multiple sources, including DataCite events, the Chan Zuckerberg Initiative (CZI) Science Knowledge Graph, Aligning Science Across Parkinson's (ASAP), and Europe PubMed Central.

Unlike general bibliographic databases, the MDC corpus is specifically engineered to track citations to any dataset, including those identified by accession numbers rather than DOIs, making it essential for capturing citations to datasets from repositories like EMDB.

### OpenAlex

[OpenAlex](https://openalex.org/) is a fully open (CC0 license) global catalog of scholarly works, authors, and institutions maintained by the nonprofit OurResearch. Launched in 2022 as a successor to the Microsoft Academic Graph, it indexes over 450 million scholarly works and tracks citations between them.

### DataCite

For datasets registered in DataCite, citation information is included directly in the dataset metadata under a `citations` key. These are used as an additional citation source.

## Coverage

Citations are deduplicated across all three sources so the same reference is never
counted twice. Scholar Data currently tracks over 7.6 million unique citations to datasets indexed in the Scholar Data database.

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
