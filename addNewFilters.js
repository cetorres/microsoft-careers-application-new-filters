/**
 * Adds new filters for applications on different status
 * to the candidate's Microsoft careers applications page
 * 
 * Script can be used with Chrome extension:
 * User JavaScript and CSS V 3.1.2 or above.
 * 
 * Author: Carlos E. Torres <cetorres@cetorres.com>
 * GitHub: https://github.com/cetorres
 * Created: 06-13-2026
 * Updated: 07-08-2026
 */

let tabListElem;
let spinnerElem;
let spinnerElemParent;

// Filters for Screen and Interview status.
// Add more to capture more different status.
const filters = [
	{
		name: 'Screen',
		total: 0,
		button: null,
		badgeLoader: null
	},
	{
		name: 'Interview',
		total: 0,
		button: null,
		badgeLoader: null
	}
];

const loadElements = () => {
	spinnerElem = document.querySelector('span[class*="spinner-module_spinner"]');
	spinnerElemParent = spinnerElem.parentNode;
	tabListElem = document.querySelector('div[role="tablist"]');
	const originalBadgeLoaderElement = document.querySelector('div[class*="loader-module_loader-container"]');
	filters.forEach((filter) => {
		filter.badgeLoader = originalBadgeLoaderElement.cloneNode(true);
		filter.badgeLoader.id = `${filter.name}AppsBadgeLoader`;
	});
	
	// Add observer for spinner
	const observer = new MutationObserver(() => {
	  if (!document.contains(spinnerElem)) {
	    observer.disconnect();
	    runAfterSpinner();
	  }
	});
	observer.observe(spinnerElemParent, { childList: true });
}

const runAfterSpinner = () => {
	filters.forEach((filter) => {
		filter.total = [...document.querySelectorAll('div[class*="status-"]')].filter(el => el.textContent.trim() === filter.name).length;
		filter.badgeLoader.remove();
		addBadge(filter);
	});
	
}

const addNewButton = (filter) => {
	const newButton = document.createElement('button');
	newButton.setAttribute('aria-selected', 'false');
	newButton.setAttribute('aria-label', `Inactive Tab, ${filter.total} applications in screen,`);
	newButton.setAttribute('class', 'tabs-module_tab__1K4R3 tab-2MAW1');
	newButton.setAttribute('role', 'tab');
	newButton.setAttribute('tabindex', '-1');
	newButton.setAttribute('data-index', '4');
	newButton.setAttribute('data-value', 'inactive');
	newButton.innerHTML = `<span class="tabs-module_label__kptmQ">${filter.name}</span>`;
	newButton.append(filter.badgeLoader);
	filter.button = newButton;
	tabListElem.append(filter.button);
}

const addBadge = (filter) => {
	filter.button.innerHTML += `<span class="badge-module_badge__P84rY badge-module_badge-medium__OkfNt tabs-module_badge__Q-14t">${filter.total}</span>`;
}

window.addEventListener('load', (event) => {
	loadElements();
	filters.forEach((filter) => {
		addNewButton(filter);
	});
});
