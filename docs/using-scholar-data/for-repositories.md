# For Data Repositories

There are two main ways repositories can engage with Scholar Data: requesting your datasets be tracked if we are not already indexing them, and integrating our API to showcase the impact of your datasets directly on your platform.

## Request Dataset Tracking

### Why track your datasets?

Getting your datasets into the Scholar Data ecosystem brings two major benefits:

- **Empower your researchers:** Researchers using your repository can add these datasets to their Scholar Data profiles, directly contributing to and increasing their personal S-index.
- **Showcase dataset impact:** We track various reuse signals for your datasets, including FAIR scores, citations, and mentions. Once tracked, you can pull these metrics back onto your platform to showcase their real-world impact (detailed in next section below).

### How to request tracking

#### Check if your datasets are tracked

Scholar Data automatically tracks datasets from any repository that mints DOIs using DataCite. If your repository uses DataCite, your datasets are already being ingested.

To check if your datasets are tracked, you can use the dataset search feature here: https://scholardata.io/search/datasets.

#### Submit request

We are currently expanding our harvesting pipelines to include datasets from additional repositories. If your datasets are not tracked, please submit a request via our GitHub issue intake form so we can build your integration:

[👉 Submit a Tracking Request](https://github.com/data-S-index/web-app/issues/new?template=repository-indexing-request.yml)

## Showcase Impact on Your Platform

Scholar Data provides two ways to display dataset impact metrics like D-index, FAIR score, citations, and mentions, directly in your own platform.

**→ Ready to integrate? Head straight to the [integrations page on Scholar Data](https://scholardata.io/integrations) for live previews and code snippets.**

### Who Is This For?

Integrations are aimed at:

- **Data repository maintainers** who want to surface dataset impact metrics alongside each dataset in their repository
- **Lab and research group websites** that want to showcase the impact of their shared data
- **Dashboards and reporting tools** that aggregate research output metrics

### Example

PhysioNet, a major NIH-supported repository, has already integrated using the Scholar Data API and now showcases our metrics on their dataset metrics page. See the [MIMIC-IV metrics page on PhysioNet](https://physionet.org/content/mimiciv/metrics/2.2) for an example of how they include Scholar Data metrics.

### Available Methods

#### Embed Widget

The embed widget is the fastest way to display a dataset's metrics on any webpage. It renders a self-contained card showing the D-index, FAIR score, citation count, and mention count for a dataset identified by DOI and can be dropped in via a single `<iframe>` tag.

This is a good fit for repository dataset pages, where you want a visual, at-a-glance impact display without writing any custom code.

#### API

The API returns dataset metrics as JSON, giving you full control over how the data is displayed. Three endpoints are available:

- **Dataset by DOI**: returns the dataset ID, total citations, total mentions, latest FAIR score, and latest D-index score for any DOI
- **SVG badge**: returns a pre-styled badge image showing the D-index score, ready to drop into a README or documentation page
- **Shields-style JSON**: returns badge data in the Shields.io format, for use with custom badge builders or dashboards

The API is a good fit for repositories or tools that already have their own UI and want to pull metrics into an existing design, or for README badges that show a dataset's D-index score at a glance.

#### Custom Widgets & Support

For white-label embeds, custom-styled widgets, or additional API needs, reach out via the issue on the [Scholar Data GitHub repository](https://github.com/data-S-index/web-app).

### Choosing the Right Method

|                  | Embed Widget                | API                                  |
| ---------------- | --------------------------- | ------------------------------------ |
| Setup complexity | Minimal, one `<iframe>` tag | Requires fetching and rendering JSON |
| Custom styling   | No                          | Yes                                  |
| Use in README    | No                          | Yes (SVG badge)                      |
| Best for         | Repository dataset pages    | Custom UIs, dashboards, READMEs      |

For code snippets, a live widget preview, and a DOI tester, visit the **[integrations page on Scholar Data →](https://scholardata.io/integrations)**

## Report an Issue

If your repository is already being tracked but you notice discrepancies, such as missing metrics, incorrect metadata, or harvesting errors, we want to fix it.

Please report any issues directly by opening a bug report on our GitHub repository:

[👉 Report an Issue on GitHub](https://github.com/data-S-index/web-app/issues/new)
