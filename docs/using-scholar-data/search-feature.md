# Search Feature

Many pages on Scholar Data provide a search feature like the **Browse Profiles** page and the **Add Datasets** modal on your profile. They all use [Meilisearch](https://www.meilisearch.com/) as the search engine.

## How Search Works

Search tries to match **all** words in your query first. If too few results are found, it broadens by relaxing the last word. For instance a search for `climate ocean data` may also return results matching `climate ocean` only.

Search is typo-tolerant, so small spelling differences in names or titles can still return relevant results.

## Search Tips

- Search by **title, researcher name, or keywords** for general search and exploratory queries
- Search with a **dataset identifier** like DOI in quotes for an exact match with a dataset: `"10.60775/fairhub.2"`
- Search with a **researcher identifier** like ORCID to find all datasets from a specific researcher or find their profile: `"0000-0002-0307-262X"`
- To search for **exact phrases**, wrap your search in quotes to match it exactly: `"climate change"`
