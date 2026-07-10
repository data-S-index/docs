# FAIR Scores

This page explains how FAIR scores are calculated for the datasets in the Scholar Data database.

## How FAIR Scores Are Calculated

FAIR scores are calculated using [F-UJI](https://www.f-uji.net/), an open-source
automated assessment tool developed under the [FAIRsFAIR project](https://www.fairsfair.eu/).
F-UJI evaluates datasets against 17 FAIRsFAIR metrics by analyzing machine-readable
metadata on dataset landing pages and verifying persistent identifier resolution. The
resulting score is expressed as a percentage reflecting how many of the 17 metrics a
dataset satisfies.

Scores are computed at the metadata level with F-UJI. We opted for this approach since assessing FAIRness from the actual data
files would be more granular but would require downloading the full content of every dataset, which is not
realistically feasible at scale with millions of datasets. Moreover, what constitutes being FAIR at a data file level is currently not well defined and changes from field to field.

## Coverage

FAIR scores are available for all datasets in the Scholar Data database. They are computed close to the time when datasets are indexed in the Scholar Data database. The majority were computed directly using F-UJI, with a smaller portion extrapolated for repositories where FAIR scores are uniform across datasets (such as EMDB, where all datasets expose the same metadata fields).

For more details on how F-UJI was adapted and run at scale, see the
[Scholar Data F-UJI fork GitHub repository](https://github.com/data-S-index/fuji).
