# Data Collection: Overview

This section describes how we get the data shown on Scholar Data, including the datasets, citations, FAIR scores, alternative mentions, Dataset Index, and auto calculate S-index.

## Where the Data Comes From

Every metric on Scholar Data is derived from publicly available research infrastructure: dataset registries, citation indexes, code repositories, patent databases, and policy archives. No data is self-reported by researchers. Scores are computed automatically from these external sources using documented, reproducible methods.

The pages in this section walk through exactly how each type of data is collected and processed.

## Long-Term Vision

The goal is a fully automated pipeline that runs periodically (**Fig. 1**), continuously discovering new datasets, recomputing FAIR scores, identifying new citations and mentions, and updating D-index and S-index values over time. This will ensure that Scholar Data reflects the current state of data sharing impact, not a static snapshot.

![Example calculation S-index](./images/pipelines.png)
_Figure 1. Overview of the targeted automated pipelines for collecting dataset-level data to compute the S-index of researchers_

## Current Data: NIH S-index Challenge Phase 2

The data currently shown on Scholar Data was collected and processed as part of the Phase 2 submission for the [NIH S-index Challenge](http://nei.nih.gov/research-and-training/research-news/nih-challenge-aimed-incentivizing-data-sharing-recognizes-phase-1-winners). It represents a large-scale validation of the S-index methodology across **49M+ datasets**. This is currently a point-in-time calculation, not a live feed. Scores reflect the citations, mentions, and FAIR assessments available at the time of processing. A overview of the resources used is provided in **Table 1**.

_Table 1. Major resources needed to calculate the proposed Dataset Index and S-index. All are free, and the majority are open source. All are existing infrastructure, except for the custom domain classification model we have fine-tuned to fill a gap for datasets without a domain assigned in OpenAlex. We have already used most of them in our large-scale testing and validation as part of our submission for Phase 2 of the NIH S-index Challenge._

| Purpose                                                                                     | Resources                                                                      | Free?  | Used in testing? |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :----: | :--------------: |
| Discover new datasets with/without DOIs and register their metadata in the Dataset Registry | DataCite API (datasets with DOIs)                                              |   ✅   |        ✅        |
|                                                                                             | re3data API (finding non-DOI repositories)                                     |   ✅   |        ❌        |
|                                                                                             | Repository-specific APIs                                                       | Likely |        ❌        |
|                                                                                             | Web scraping tool like Scrapy (when allowed)                                   |   ✅   |        ❌        |
| Compute FAIR scores                                                                         | F-UJI                                                                          |   ✅   |        ✅        |
| Find citations                                                                              | MDC Data Citation Corpus                                                       |   ✅   |        ✅        |
|                                                                                             | OpenAlex snapshot                                                              |   ✅   |        ✅        |
|                                                                                             | DataCite API                                                                   |   ✅   |        ✅        |
|                                                                                             | ScholeXplorer                                                                  |   ✅   |        ❌        |
| Find mentions in code (reuse in computational models, AI/ML, teaching course)               | Software Heritage Graph Dataset                                                |   ✅   |        ✅        |
|                                                                                             | Hugging Face API (rate-limit)                                                  |   ✅   |        ✅        |
|                                                                                             | Kaggle API (rate-limit)                                                        |   ✅   |        ❌        |
| Find mentions in patents (commercial reuse)                                                 | United States Patent and Trademark Office bulk downloads datasets              |   ✅   |        ✅        |
|                                                                                             | Lens.org for international patents (has a free tier)                           |   ✅   |        ❌        |
| Find mentions in policies (websites like WHO, UN, NIH, CDC)                                 | Web scraping tool like Scrapy (when allowed)                                   |   ✅   |        ❌        |
|                                                                                             | PDF extractors like pdfminer.six                                               |   ✅   |        ❌        |
| Assign research domain                                                                      | OpenAlex taxonomy of research domains                                          |   ✅   |        ✅        |
|                                                                                             | OpenAlex snapshot                                                              |   ✅   |        ✅        |
|                                                                                             | Custom domain classification model (self-hosted, for datasets not in OpenAlex) |   ✅   |        ✅        |

## What's Covered in This Section

The following pages detail the methods used to collect and compute each component of the data you see on Scholar Data:

- [**Datasets**](./datasets): how datasets were selected and how their metadata was collected
- [**FAIR Scores**](./fair-scores): how dataset FAIRness was assessed at scale
- [**Citations**](./citations): how formal citations to datasets were identified
- [**Alternative Mentions**](./mentions): how appearances in code, patents, and policies were found for each dataset
- [**Research fields**](./research-fields): how a research field was assigned to each dataset to allow field-specific normalization
- [**Normalization factors**](./normalization-factors): how normalization factors were computed and assigned to each dataset
- [**D-index Calculation**](./d-index): how Dataset Index was calculated for each dataset
- [**S-index Calculation**](./s-index): how author profiles were assembled and S-index scores computed automatically for demo purpose
