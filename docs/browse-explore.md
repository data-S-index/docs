# Browsing & Exploring

You don't need an account to explore Scholar Data. You can search auto-generated author profiles, dig into dataset impact pages, evaluate any dataset by DOI or URL, and view aggregate platform statistics without signing in.

## Searching Auto-generated Author Profiles

The [Browse Profiles](https://beta.scholardata.io/search/au) page lets you search across 1M+ researcher profiles. These were auto-generated from large-scale preliminary testing across 49M datasets, by regrouping datasets based on author identifier first, then by name and affiliation. More details are provided in the [Data Collection](/data-collection) section.

Each auto-generated author profile shows the researcher's S-index, a list of their datasets, and the impact metrics associated with each one.

## Browsing Datasets

The [Browse Datasets](https://beta.scholardata.io/search/datasets) page lets you search and filter across the 49M datasets Scholar Data has already processed (see the [Data Collection](/data-collection) section). Each dataset has its own impact page showing its D-index, FAIR score, citation count, and alternative mentions.

This is useful for exploring how datasets in a particular field are performing, checking the impact of one of your datasets without loging in, or simply getting a feel for how the D-index scores vary across different types of datasets.

## Evaluating a Dataset by DOI or URL

Can't find a dataset in the browse results? The [Evaluate](https://beta.scholardata.io/evaluate) page lets you submit any dataset DOI or URL and Scholar Data will generate its impact page on the spot.

This is the fastest way to check the metrics for a specific dataset that hasn't been pre-processed yet in the Scholar Data database, or to get a fresh read on one that may have accumulated new citations since it was last updated in the Scholar Data database.

The steps for computing the D-index live differ slightly from our auto-processed datasets. When you provide a DOI or URL here is what Scholar Data does in the back-end:

1. Get metadata (DataCite API if DOI, webscrapping if URL)
2. Caculate FAIR score (using self deployed instance of F-UJI)
3. Assign domain (using Open Alex or custom AI-model) and identify related weighing factors
4. Find citations (using the Make Data Count citation corpus only if URL, additionally using DataCite and OpenAlex APIs if DOI)
5. Find mentions in code using the GitHub API and a preprocessed list DOI mentions in HuggingFace model cards
6. Find mentions in patent if DOI from a preprocessed list of DOI mentions in patents
7. Compute D-index
8. Generate dataset impact page

We refer to the [Data Collection](/data-collection) section for more details about some of these steps.

## Platform Metrics

The [Platform Metrics](https://beta.scholardata.io/metrics) page shows a live snapshot of Scholar Data's overall coverage: how many datasets have been tracked, how many citations and mentions have been found, and how many FAIR scores have been computed.

It's a useful reference for understanding the scale of the index and how comprehensively your field may be represented.
