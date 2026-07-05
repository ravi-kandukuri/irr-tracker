# WealthPath IRR Dashboard

WealthPath is a self-contained browser-based personal finance dashboard for tracking investments, calculating IRR, and planning long-term wealth goals.

## What this app does

- Track investments across property, shares, ETFs, crypto, gold, bonds, term deposits, and cash
- Enter purchase price, current value, fees, distributions, and holding period to estimate IRR
- Review income, expenses, and retirement planning in one workspace
- Compare performance against industry-style benchmarks
- Import and export your data as JSON for backup and reuse

## Files

- `index.html` — main application file

## Run locally

1. Open `index.html` in your browser.
2. Choose **New User** to start a fresh profile or **Existing User** to import saved JSON data.
3. Add your investments, income, expenses, and superannuation data.
4. Navigate through the dashboard sections to review summary, projections, and retirement pathway.

## GitHub Pages deployment

To deploy this app on GitHub Pages:

1. Push the repository to GitHub.
2. In the repository settings, open **Pages**.
3. Select the branch where `index.html` is stored (usually `main`).
4. Choose the root folder (`/`) as the publish directory.
5. Save the settings and wait for GitHub Pages to publish the site.

Then visit the provided Pages URL to open the app.

> If the page does not load correctly, confirm that `index.html` is at the repository root and that GitHub Pages is set to publish from the root directory.

## Notes

- The app is self-contained and does not require a server.
- Data is stored locally in the browser (`localStorage`) and is not sent to a server.
- If you export data, the file is saved to your own device.
