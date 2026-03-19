# Citations

This page describes how formal citations to datasets were identified across the Scholar Data corpus. Three complementary sources were used to ensure the most thorough coverage possible.

## Sources

### Make Data Count (MDC) Data Citation Corpus

The [Make Data Count](https://makedatacount.org/) initiative is an international collaboration, including DataCite, the California Digital Library, and the Wellcome Trust, and focused on developing standardized metrics for research data. Its core output is the **Data Citation Corpus**: a centralized, publicly accessible (CC0 license) resource that aggregates dataset references from multiple sources, including DataCite events, the Chan Zuckerberg Initiative (CZI) Science Knowledge Graph, Aligning Science Across Parkinson's (ASAP), and Europe PubMed Central.

Unlike general bibliographic databases, the MDC corpus is specifically engineered to track citations to any dataset, including those identified by accession numbers rather than DOIs, making it essential for capturing citations to datasets from repositories like EMDB.

The latest available corpus at the time of processing, [v4.1 (August 2025)](https://doi.org/10.5281/zenodo.16901115), was used. It contains approximately 9.7M unique citations. The corpus was downloaded in JSON format, loaded into a [DuckDB](https://duckdb.org/) table, and matched against the Scholar Data dataset identifiers after normalization. The publication date of the citing source, included in the corpus, was used as the citation year for weighted count calculation.

### OpenAlex

[OpenAlex](https://openalex.org/) is a fully open (CC0 license) global catalog of scholarly works, authors, and institutions maintained by the nonprofit OurResearch. Launched in 2022 as a successor to the Microsoft Academic Graph, it indexes over 450 million scholarly works and tracks citations between them.

Given the scale of the dataset corpus, querying the OpenAlex API directly was not practical. Instead, the full **OpenAlex snapshot (November 2025 update)** was downloaded and the citation network reconstructed locally. High-performance joins in DuckDB were used to match dataset identifiers against reference strings across 450M+ indexed works. The publication date of the citing source from the snapshot was used as the citation year.

### DataCite

For datasets registered in DataCite, citation information is included directly in the dataset metadata under a `citations` key. These were used as an additional citation source.

Since only DOIs are provided in the DataCite metadata, the publication year of each citing source was looked up using three sources in the following order of preference:

1. OpenAlex snapshot
2. DataCite API
3. Crossref API

## Deduplication and Results

Citations from each source were saved in separate NDJSON files and then merged with deduplication applied (some citations appeared in both the MDC corpus and OpenAlex, for example). After deduplication, a total of **7,669,263 unique citations** were identified.

| Source    | MDC Corpus    | OpenAlex      | DataCite      | Total (raw)   | Total (unique) |
| --------- | ------------- | ------------- | ------------- | ------------- | -------------- |
| DataCite  | 1,465,357     | 2,754,157     | 4,641,366     | 8,860,880     | 7,654,129      |
| EMDB      | 15,134        | 0             | 0             | 15,134        | 15,134         |
| **Total** | **1,480,491** | **2,754,157** | **4,641,366** | **8,876,014** | **7,669,263**  |

## Edge Cases

**Missing citation year**: where no publication date could be found for a citing source, a weighted citation count of 1.0 was used (the most conservative value). The timestamp of citation identification in the pipeline was used as the citation date for temporal display of D-index and S-index on Scholar Data.

**Citation year prior to dataset publication**: where a citation year was found to predate the cited dataset's publication year (likely a metadata error or simply a difference in publication sync between paper and dataset), a weighted count of 1.0 was also applied, and the citation was attributed to the dataset's publication year for temporal display purposes.
