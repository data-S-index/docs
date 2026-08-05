# Browsing & Exploring

You don't need an account to explore Scholar Data. You can search user profiles, dig into dataset impact pages, evaluate any dataset by DOI or URL, and view aggregate platform statistics without signing in.

## Browsing Profiles

The [Browse Profiles](https://scholardata.io/search/au) page lets you search across actual user profiles as well as researcher profiles that were auto-generated from the datasets indexed in the Scholar Data database. More details about these auto-generated profiles (indicated by an "Automated Author Profile" badge in the top left corner of the profile pages) are provided in the [Data Collection](/data-collection/auto-profiles) section.

When you search for a researcher, Scholar Data looks across both registered user profiles and auto-generated profiles. You can search by name, ORCID, or affiliation. See [this page](search-feature) for more details about the search feature. If you uncheck **Include auto-generated profiles**, you will only see registered users.

Each profile shows the researcher's S-index, other impact metrics, and a list of their datasets.

Browsing profiles is useful for discovering active data sharers in your field, benchmarking your own S-index against peers, or giving institutions and funders a way to assess a researcher's data sharing track record.

## Browsing Datasets

The [Browse Datasets](https://scholardata.io/search/datasets) page lets you search across the datasets currently included in the Scholar Data database (see the [Data Collection](/data-collection/datasets) section). See [this page](search-feature) for more details about the search feature.

Each dataset has its own impact page showing its D-index, FAIR score, citation count, and alternative mentions.

This is useful for exploring how datasets in a particular field are performing, checking the impact of one of your datasets without logging in, or simply getting a feel for how D-index scores vary across different types of datasets.

If you are logged in, you will also see a **Claim dataset** button to add a dataset you are browsing to your profile.

## Evaluating a Dataset by DOI or URL

Can't find a dataset in the browse results? The [Evaluate](https://scholardata.io/evaluate) page lets you submit any dataset DOI or URL and Scholar Data will generate its impact page on the spot.

This is the fastest way to check the metrics for a specific dataset that hasn't been pre-processed yet in the Scholar Data database, or to get a fresh read on one that may have accumulated new citations since it was last updated in the Scholar Data database.

The steps for computing the D-index live differ slightly from our auto-processed datasets. When you provide a DOI or URL here is what Scholar Data does in the backend:

1. Get metadata (DataCite API if DOI, web scraping if URL)
2. Calculate FAIR score (using a self-deployed instance of F-UJI)
3. Assign domain (using OpenAlex or a custom AI model) and identify related weighting factors
4. Find citations (using the Make Data Count citation corpus only if URL, and additionally using DataCite and OpenAlex APIs if DOI)
5. Find mentions in code using the GitHub API and a preprocessed list of DOI mentions in Hugging Face model cards
6. Find mentions in patents if DOI from a preprocessed list of DOI mentions in patents
7. Compute D-index
8. Generate dataset impact page

## Platform Metrics

The [Platform Metrics](https://scholardata.io/metrics) page shows a live snapshot of Scholar Data's overall coverage: how many datasets have been tracked, how many citations and mentions have been found, and how many FAIR scores have been computed.

It's a useful reference for understanding the scale of the platform and how comprehensively your field may be represented.
