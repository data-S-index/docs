# FAIR Scores

This page describes how FAIR scores were computed for the 49M+ datasets in the Scholar Data corpus.

## Approach

FAIR scores are evaluated at the **metadata level**, based on what a repository or dataset landing page exposes about the dataset, rather than at the data level. Assessing FAIRness from the actual data files would require downloading the full content of every dataset, which is not feasible at this scale. Metadata-level evaluation is also more practical for automation and periodic updates.

## Tool: F-UJI

FAIR scores are calculated using [F-UJI](https://www.f-uji.net/), an open-source (MIT license) REST-based programmatic assessment service developed under the [FAIRsFAIR project](https://www.fairsfair.eu/). F-UJI evaluates datasets against the 17 FAIRsFAIR Data Object Assessment metrics by scrutinizing machine-readable metadata (e.g., schema.org, Dublin Core) on dataset landing pages and verifying persistent identifier (PID) resolution. The resulting FAIR score is expressed as a percentage reflecting how many of the 17 metrics a dataset satisfies.

## Modifications for Large-Scale Use

F-UJI was not originally designed for use at the scale required here. A forked version was created [here](https://github.com/data-S-index/fuji) with the following modifications:

- **Removed the Docker container requirement**: F-UJI was converted into an importable Python library, allowing multiple instances to run on a single machine simultaneously.
- **Cached static calls and external service requests**: static file lookups and calls to external services were made cacheable or rerouted through a CDN, reducing load on the services F-UJI depends on during evaluation.

The modified F-UJI was run across **thirteen machines** (10 DigitalOcean VMs, 1 Hetzner VM, and 2 local machines) for approximately 3 months between November 2025 and January 2026.

## Extrapolation Strategy

Despite the modifications, running F-UJI at full scale still risked placing excessive load on repository servers. To address this, an extrapolation strategy was adopted for repositories where FAIR scores are uniform across datasets, such as EMDB, where all datasets expose the same metadata fields (title, authors, etc.).

After evaluating a representative subset of datasets from such repositories and confirming score uniformity, the FAIR scores of remaining datasets from that repository were extrapolated from the computed subset rather than evaluated individually.

Overall, **88% of datasets** received a directly computed F-UJI score and **12% received an extrapolated score**.

## Results

| Source    | F-UJI FAIR Score     | Extrapolated FAIR Score | Total                 |
| --------- | -------------------- | ----------------------- | --------------------- |
| DataCite  | 43,111,082           | 5,898,440               | 49,009,522            |
| EMDB      | 18,132               | 33,513                  | 51,645                |
| **Total** | **43,129,214 (88%)** | **5,931,953 (12%)**     | **49,061,167 (100%)** |

All FAIR scores were saved in NDJSON format for use in subsequent D-index calculation (see [D-index Calculation](./d-index)).
