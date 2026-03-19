# Mentions

This page describes how alternative mentions of datasets were identified across the Scholar Data corpus. Unlike formal citations, alternative mentions capture dataset reuse in contexts where standard citation practices are less common or not established, such as code repositories, machine learning models, and patents.

## Sources

### Software Heritage

Software, such as computational models, AI/ML pipelines, and similar outputs, frequently reuses datasets without producing a formal citation. To identify this kind of reuse at scale, the [Software Heritage (SWH) archive](https://www.softwareheritage.org/) was used. It is the world's largest public collection of source code, preserving the development history of over 250 million projects from platforms like GitHub and GitLab.

As a first approximation, mentions of dataset identifiers in the README files of GitHub repositories were used as an indicator of dataset reuse. The [Software Heritage Graph Dataset](https://docs.softwareheritage.org/devel/swh-dataset/graph/dataset.html), which is a fully deduplicated representation of the archive stored in Apache Parquet format and accessible via Amazon Athena, was used to isolate the unique content hashes (SWHIDs) of all README files from GitHub repositories. Queries were constructed to retain only the latest version of READMEs (matching `readme.md`, `readme`, and `readme.txt`) from `main` or `master` branches. Repository creation date was extracted as an approximation of the mention date for weighted mention count calculation.

This process yielded the SWHIDs of **220M+ GitHub READMEs**, which were processed across six parallel Amazon EC2 instances. README content was streamed and scanned with regex patterns for DOI and EMDB identifiers. Matched identifiers were then cross-referenced against the Scholar Data dataset corpus to isolate mentions to tracked datasets.

### Hugging Face

To complement the analysis of code repositories, dataset reuse was also investigated in open-source machine learning models hosted on the [Hugging Face Hub](https://huggingface.co/), the central platform for sharing pre-trained models, datasets, and demo applications in the ML community, hosting over 2 million public models.

A targeted extraction pipeline using the [Hugging Face Hub API](https://huggingface.co/docs/hub/api) was developed to scan **2.2M+ model cards** (as of January 2026) for DOI and EMDB identifier patterns. Model cards are standardized documentation files recommended by Hugging Face when sharing a model.

Because model cards often reference internal Hugging Face dataset identifiers rather than DOIs directly, a two-stage resolution strategy was implemented: first extracting Hugging Face's internal dataset identifiers from model cards, then querying the corresponding datasets for any associated DOIs or EMDB IDs. Model publication year was also captured for weighted mention count calculation. A caching mechanism was used to deduplicate redundant queries for high-frequency datasets, and automated retry logic with exponential backoff was applied to handle API rate limiting.

### USPTO Patents

To identify dataset mentions in patents, bulk data from the [United States Patent and Trademark Office (USPTO)](https://www.uspto.gov/) was used. USPTO provides weekly archives of all granted patents since January 2002 in XML format, well-suited for large-scale text mining.

All weekly bulk XML archives (dataset code `PTGRXML`) of granted patents from **January 2002 to January 2026** were downloaded via the USPTO API, covering **6.4M granted patents**. A pipeline was developed to parse the XML files, extract patent number and publication date, and scan for DOI and EMDB identifier mentions using regex patterns. Matched identifiers were then cross-referenced against the Scholar Data dataset corpus.

## Results

Mentions from each source were saved in separate NDJSON files and then combined into a single NDJSON file. A total of **91,891 mentions** to tracked datasets were identified.

| Source    | Software Heritage | Hugging Face | USPTO     | Total      |
| --------- | ----------------- | ------------ | --------- | ---------- |
| DataCite  | 85,014            | 5,243        | 171       | 90,428     |
| EMDB      | 115               | 0            | 1,348     | 1,463      |
| **Total** | **85,129**        | **5,243**    | **1,519** | **91,891** |

## Validation

Because mentions were extracted directly from source content (rather than aggregated by a dedicated citation service) a validation step was conducted to confirm extraction accuracy. For each source, 50 mentions were randomly sampled and manually verified to be present in the corresponding file or document.

Note that validation confirmed the presence of identifier strings in the source content, not actual dataset usage. The current approach counts all mentions broadly, without applying additional checks to determine whether a mentioned dataset was truly used in the associated work. Given the overall scarcity of dataset citations and mentions, counting all signals is considered the right approach to incentivize data sharing at this stage.
