# About Scholar Data

Scholar Data is a platform for measuring, improving, and showcasing the impact of research datasets. It gives researchers and organizations a dedicated space to track and display how their shared datasets are being discovered, cited, and reused across the scientific community.

## Background

Despite growing adoption of data sharing in research, there has been no standardized, transparent, or equitable way to measure and reward it. Publication metrics like the h-index are well established. However, datasets, which often drive discovery just as much as papers, have been largely invisible to impact tracking.

Scholar Data is being developed as part of an [NIH-organized Challenge](https://www.nei.nih.gov/research-and-training/research-news/nih-challenge-aimed-incentivizing-data-sharing-recognizes-phase-1-winners) to address this gap. The platform introduces the **S-index** (Sharing Index), a novel metric that evaluates a researcher's data sharing impact based on dataset-level signals of FAIRness, citations, and alternative mentions.

The S-index and Scholar Data efforts are conducted by a multidisciplinary team of researchers led by [Bhavesh Patel](https://www.linkedin.com/in/bvhpatel), with major contributions from [Sanjay Soundarajan](https://www.linkedin.com/in/sanjay-soundarajan/), and support from [Aaron Lee](https://www.linkedin.com/in/leeay/), [Cecilia Lee](https://www.linkedin.com/in/cecilia-s-lee-md-ms-3129102a0/), [James O'Neill](https://www.linkedin.com/in/jimnoneill/), and [Aydan Gasimova](https://github.com/Aydawka).

## What is the S-index?

The S-index is to data sharing what the h-index is to publications. It quantifies a researcher's overall data sharing footprint in a single, interpretable score.

Each dataset a researcher shares earns a **Dataset Index (D-index)**, a dataset-level impact score derived from three signals with field-specific normalization applied to keep comparisons meaningful across disciplines:

- **FAIRness**: how findable, accessible, interoperable, and reusable the dataset is, calculated using tools like [F-UJI](https://www.f-uji.net/)
- **Citations**: formal references to the dataset, gathered from sources like [Make Data Count](https://makedatacount.org/), [OpenAlex](https://openalex.org/), and [DataCite](https://datacite.org/)
- **Alternative mentions**: mentions to the dataset in code repositories (e.g., from [Software Heritage](https://www.softwareheritage.org/), [Hugging Face](https://huggingface.co/)), patents, and policy documents.

A researcher's S-index is then computed as the sum of the D-index of their datasets.

For more details, we refer to the [Concepts](/concepts) section.

## What's on the Platform?

Scholar Data currently provides the following features:

- **Researcher profiles**: Create a profile, claim your datasets (from the 49M+ that are currently indexes in the platform), and track your S-index and dataset metrics over time.
- **Author browsing**: Explore user created profiles as well as 1M+ auto-generated author profiles built from preliminary large-scale testing across 49M datasets.
- **Dataset browsing**: View impact pages for the 49M datasets already processed, including D-index, FAIR scores, citations, and mentions.
- **Live dataset evaluation**: Submit any dataset DOI or URL to generate its impact page in real time.
- **Repository integrations**: Embed a metrics widget or query the API to display dataset impact directly in your own platform or README.
- **Platform metrics**: A live dashboard showing aggregate statistics across all datasets, citations, and FAIR scores tracked.

## Privacy & Transparency

Scholar Data does not track individual users beyond the information they provide.

The platform's source code is open and available in the [Scholar Data GitHub repository](https://github.com/data-S-index/web-app).

## Platform Status

In response to community interest, Scholar Data has **officially launched** in May 2026 as a full platform. What began as a public beta as part of the NIH S-index Challenge has grown into a production-ready service, with researchers actively creating profiles, claiming datasets, and tracking their data sharing impact.

## Contact

For questions, integration support, or to contribute to development, visit the [GitHub repository](https://github.com/data-S-index/web-app) or open an issue there.
