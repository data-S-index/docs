# Integrations

Scholar Data provides two ways to display dataset impact metrics like D-index, FAIR score, citations, and mentions, directly in your own platform, without sending users to Scholar Data to look them up.

**→ Ready to integrate? Head straight to the [integrations page on Scholar Data](https://beta.scholardata.io/integrations) for live previews, code snippets, and a DOI tester.**

## Who Is This For?

Integrations are aimed at:

- **Data repository maintainers** who want to surface dataset impact metrics alongside each dataset in their repository
- **Lab and research group websites** that want to showcase the impact of their shared data
- **Dashboards and reporting tools** that aggregate research output metrics

## Available Methods

### Embed Widget

The embed widget is the fastest way to display a dataset's metrics on any webpage. It renders a self-contained card showing the D-index, FAIR score, citation count, and mention count for a dataset identified by DOI and can be dropped in via a single `<iframe>` tag.

This is a good fit for repository dataset pages, where you want a visual, at-a-glance impact display without writing any custom code.

### API

The API returns dataset metrics as JSON, giving you full control over how the data is displayed. Three endpoints are available:

- **Dataset by DOI**: returns the dataset ID, total citations, total mentions, latest FAIR score, and latest D-index score for any DOI
- **SVG badge**: returns a pre-styled badge image showing the D-index score, ready to drop into a README or documentation page
- **Shields-style JSON**: returns badge data in the Shields.io format, for use with custom badge builders or dashboards

The API is a good fit for repositories or tools that already have their own UI and want to pull metrics into an existing design, or for README badges that show a dataset's D-index score at a glance.

### Custom Widgets & Support

For white-label embeds, custom-styled widgets, or additional API needs, reach out via the issue on the [Scholar Data GitHub repository](https://github.com/data-S-index/web-app).

## Choosing the Right Method

|                  | Embed Widget                | API                                  |
| ---------------- | --------------------------- | ------------------------------------ |
| Setup complexity | Minimal, one `<iframe>` tag | Requires fetching and rendering JSON |
| Custom styling   | No                          | Yes                                  |
| Use in README    | No                          | Yes (SVG badge)                      |
| Best for         | Repository dataset pages    | Custom UIs, dashboards, READMEs      |

For code snippets, a live widget preview, and a DOI tester, visit the **[integrations page on Scholar Data →](https://beta.scholardata.io/integrations)**
