# Design Rationale

This page explains why the S-index is built the way it's described in [Concepts](/concepts), and which alternatives we considered and rejected along the way.

## Why Citation

Citation is the most obvious signal of reuse for any scholarly output. As efforts to improve dataset-citation practices mature across the field, we expect citation to become an increasingly important driver of the S-index over time.

## Why Mention

Reuse of a dataset doesn't always show up as a citation in a manuscript. Datasets are frequently reused in code, AI models, patents, and policy documents — forms of impact that are just as real but fall outside traditional citation. In our large-scale validation across 49M+ datasets, fewer than 5% had even one citation, while thousands of datasets with zero citations had at least one mention in code, AI models, or patents. Restricting the index to citations alone would make it blind to most real-world reuse today; this is why the S-index tracks alternative mentions alongside citations.

## Why FAIR

Citations and mentions can take time to accumulate. In our large-scale validation across 49M+ datasets, fewer than 5% had one citation or mention, so relying on them alone would leave most researchers with an S-index of 0. The FAIR component provides an incentive right away for good data stewardship, rewarding researchers as soon as they share well-prepared data. We hope this will encourage good data stewardship and rapid data sharing.

## Why FAIR, Citations, and Mentions Are Weighted Equally

In controlled simulations, we found that the FAIR component dominates the index at the moment of publication, providing immediate credit for sharing well-prepared data, while citations and mentions increasingly take over as reuse accrues over time. Equal weighting (one-third each) keeps this balance intact: stewardship is rewarded upfront, and long-term impact is captured as it happens.

## Why Citations and Mentions Are Time-Weighted

Citations and mentions are weighted using a logarithmic function of the time between the dataset's publication and the citation or mention event, so a citation on the day of publication counts as 1 and one 20 years later counts as 2. This is designed to reward sustained reuse but the rate is kept reasonable enough to not over-penalize new datasets.

## Why Normalization

Data-sharing practices vary widely from field to field, and evolve over time within each field. Without accounting for this, the S-index would systematically favor researchers in fields with high baseline citation rates or long-established data-sharing norms, regardless of how impactful their work actually is. Normalization factors are introduces to correct for this, so that datasets from different fields and different eras can be compared on equal footing.

## Why Normalization Uses Medians, Not Means, Over a 3-Year Window

In our large-scale validation, we found that FAIR scores, citations, and mentions are all heavy-tailed: a small number of datasets have very high values, and the rest cluster much lower. Medians resist being skewed by these outliers in a way that means don't. We recalculate normalization factors as a moving median over the past three years, separately for each research field, so the index stays fair across disciplines with very different data-reuse cultures and keeps pace as field-level practices evolve, without reacting to short-term noise.

## What We Deliberately Left Out

We chose not to include several features common in other citation-based metrics, because they're either hard to scale or can unfairly disadvantage smaller fields:

- **No counting citations of citations.** The S-index only counts direct citations and mentions of a dataset itself. Counting citations of citations would add complexity both to understanding the index and to computing it at scale, for a benefit that doesn't clearly outweigh that cost.
- **No citations to related manuscripts.** Only citations that point to the dataset directly are counted — not citations to papers that happen to describe it. This is meant to encourage proper data-citation practices rather than reward indirect association.
- **No exclusion of self-citations or self-mentions.** Excluding them outright would risk disadvantaging researchers in smaller fields, where a higher share of legitimate reuse naturally comes from the same small group of collaborators. They're also currently rare: in our large-scale validation, only about 5% of datasets had any citation or mention at all, self or otherwise.
- **No verification of actual usage in citations and mentions.** We don't check whether a citation or mention actually reuses the dataset's data, rather than referencing it in passing. Doing this reliably at scale is a hard accuracy problem on its own, and given how rare citations and mentions already are, the added complexity isn't currently justified.
**No downloads or view counts.** We felt these don't necessarily reflect real reuse properly: a download or view doesn't confirm the data was actually used. Moreover, they lack transparency, since we typically don't know who downloaded or viewed a dataset. That opacity would also make gaming much harder to detect than it is for citations and mentions, which are traceable back to their source.

## Guarding Against Gaming

As with the h-index, some gaming is theoretically possible, for example, splitting one dataset into many small ones, or building up self-citations and mentions artificially. We don't try to prevent every possible edge case in the formula itself. Instead, Scholar Data is built to function as a transparency and integrity tool: the S-index is fully reproducible from open data stored in the database of Scholar Data, so every citation, mention, and score behind a researcher's index can be seen and traced back to its source. Simple derived indicators, like a researcher's Average Dataset Index (S-index devided by number of datasets, shown on Scholar Data profiles), also make volume-based gaming easy to spot.