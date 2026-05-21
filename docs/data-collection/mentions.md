# Mentions

This page describes how alternative mentions of datasets were identified across the Scholar Data corpus. Unlike formal citations, alternative mentions capture dataset reuse in contexts where standard citation practices are less common or not established, such as code repositories, machine learning models, and patents.

## Sources

### Software Heritage

The [Software Heritage archive](https://www.softwareheritage.org/) is the world's
largest public collection of source code, preserving over 250 million projects from
platforms like GitHub and GitLab. Scholar Data scans README files from GitHub
repositories for dataset identifier mentions, capturing reuse in computational
pipelines, models, and similar software outputs.

### Hugging Face

The [Hugging Face Hub](https://huggingface.co/) is the central platform for sharing
pre-trained machine learning models. Scholar Data scans model cards for dataset
identifier mentions, capturing reuse in open-source ML workflows.

### USPTO Patents

Scholar Data scans granted patents from the
[United States Patent and Trademark Office (USPTO)](https://www.uspto.gov/) for
dataset identifier mentions, covering patents from January 2002 onward.

## Coverage

Scholar Data currently tracks over 90,000 mentions to datasets indexed in the Scholar Data databases.

| Source            | Last Updated/Version used | Mentions   |
| ----------------- | ------------------------- | ---------- |
| Software Heritage | January 2026              | 85,129     |
| Hugging Face      | January 2026              | 5,243      |
| USPTO Patents     | January 2026              | 1,519      |
| **Total**         |                           | **91,891** |

## A Note on Mention Counting

Mentions are identified by scanning source content for dataset identifiers. All
mentions are counted broadly. Scholar Data does not apply additional filtering to
verify whether a dataset was actively used in the associated work, as opposed to
simply referenced. Given the overall scarcity of dataset mentions, counting all
signals is considered the right approach at the moment to incentivize and reward data sharing.

## Why Might a Mention Be Missing?

- The code repository, model card, or patent was published after the last database
  update
- The mention appears in a platform not yet covered by the three sources above
