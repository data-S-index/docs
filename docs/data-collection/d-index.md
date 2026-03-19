# Dataset Index Calculation

This page describes how the Dataset Index (D-index) was calculated for each dataset in the Scholar Data corpus.

## Formula

The D-index for each dataset was calculated by applying the [Dataset Index formula](../concepts) using three inputs:

- **FAIR score**: as computed by F-UJI or extrapolated, see [FAIR Scores](./fair-scores)
- **Total weighted citation count**: see [Citations](./citations))
- **Total weighted mention count**: see [Mentions](./mentions))

Each of these values was normalized using the applicable normalization factors for the dataset's publication year and assigned research field (see [Research Fields](./research-fields) and [Normalization Factors](./normalization-factors)).

## Handling Missing Normalization Factors

In some cases, a normalization factor of 0 was encountered for a given publication year and research field combination, typically for older datasets in fields with little historical data. The following fallback logic was applied in order:

1. Use the first non-zero normalization factor from a previous year in the same research field
2. If no previous non-zero value exists, use a predefined floor value

## Results

A D-index was calculated for all 49,061,167 datasets in the corpus. Scores are accessible on each dataset's impact page on Scholar Data and are used as inputs for S-index calculation (see [S-index Calculation](./s-index)).
