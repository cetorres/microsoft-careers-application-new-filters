# Microsoft careers page - Application new filters

[![Microsoft Careers](https://custom-icon-badges.demolab.com/badge/Microsoft%20Careers-2771D8?logo=microsoft&logoColor=white)](https://apply.careers.microsoft.com/careers)
&nbsp; [![User JavaScript and CSS](https://img.shields.io/badge/Chrome%20Extension-User%20JavaScript%20and%20CSS-F7DF1E?logo=chromewebstore&logoColor=000)](https://chromewebstore.google.com/detail/nbhcbdghjpllgmfilhnhkllmkecfmpld?utm_source=item-share-cb)

Adds a new filters for applications on different status (Screen, Interview) to the candidate's [Microsoft careers applications page](https://apply.careers.microsoft.com/careers/applications?domain=microsoft.com).

## Installation

The script can be used with the Chrome extension:

- [User JavaScript and CSS](https://chromewebstore.google.com/detail/nbhcbdghjpllgmfilhnhkllmkecfmpld?utm_source=item-share-cb) (version 3.1.2 or above).

### How to set up

- Install the Chrome extension.
- Create a new rule.
- Give it a name, e.g. Microsoft careers application new filters.
- Add the URL patterns: `https://apply.careers.microsoft.com/careers/applications*,https://microsoft.eightfold.ai/careers/applications*`
- Copy the script from the [addNewFilters.js](addNewFilters.js) file and paste into the rule's code.
- Save it.
- Reload the applications page to see the result.

## Preview

![Preview](Careers-at-Microsoft-New-Filters.png)

## Limitations

The script only counts applications with status the status in the `filters` array in the current page. If there are multiple pages of applications, it won't count from the other pages. The script runs on the local HTML page loaded in the browser, not on the server.

## Author

Carlos E. Torres <<cetorres@cetorres.com>>
