# Research Fields

Each dataset in Scholar Data is assigned a research field, which is used to normalize
D-index and S-index scores so they remain comparable across disciplines. The idea is that a dataset in a field with low data sharing rates and inconsistent citation practices should not be penalized relative to one in a field where sharing and citation is common practice. This page describes how research fields are assigned.

## Classification System

Research fields in Scholar Data follow the
[OpenAlex topics and domains taxonomy](https://help.openalex.org/hc/en-us/articles/24736129405719-Topics),
a four-level hierarchy of 4,516 topics grouped into 252 subfields, 26 fields, and 4
top-level domains. Scholar Data uses the **subfield level** for normalization, as our analysis shows that it
best captures the variation in data sharing practices across research communities.

## How Fields Are Assigned

Field assignments come from two sources:

- **OpenAlex**: where a dataset is indexed in OpenAlex, its subfield
  classification are used directly if it's confidence score is above 0.5.
- **Custom classifier**: for datasets not indexed in OpenAlex, a custom
  classifier maps dataset metadata (title, description, and keywords) to the OpenAlex
  taxonomy. More details are available in the
  [GitHub repository of the classifier code](https://github.com/data-S-index/dataset-to-field).
- For datasets in OpenAlex with a confience score below 0.5, we use the subfields assigned with the greater confidence score between OpenAlex and the custom classifier.

Note: A small number of datasets with non-Latin script metadata that are not in OpenAlex are not classified because our custom model is currently not trained handle such datasets. This is something we will look to improve in the future.

## Incorrect Field Assignment?

Field assignments are automated and may occasionally be inaccurate, particularly for
interdisciplinary datasets. In the future, we will implement a process for users to suggest a correction.
