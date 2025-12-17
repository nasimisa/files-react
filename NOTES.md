small note: Used npm instead of pnpm as my current version is older so did not want to mess my company project.

1. **DefaultLayout**

- Removed logic for Navigation via window.location.href and applied SPA behaviour. Because it was causing full pag reload and was losing router state

- Removed hardcoded buttons and repeating logic. Made it more dynamic and scalable so we can add more routes in future

- used NavLink instead of Button. Because its better match with routing and more accessible. It is not good practice to use Buttons for navigation.


2. **HomePage**

- First thing that i saw from UI was that it was lagging and freezing for a moment. I noticed the effect dependency was an object literal, which caused the fetch to run on every render.

- I removed inline options object. Because it was causing rerender as it were recreating object each time. So i moved it outside component so it sees this array as unchanged array as its outside React component and memory reference is not changing

- I deducted fetch logic to separate hook with Types added and applied error handling and different API states (isloading etc.)  The better approach for bigger project is to use React-query so we get caching behaviour for API fetching.

3. **Folder**

- adjusted types and removed unnecessary useffect and state as we were getting data from props

- no need to accept gridView and tableView from parent, i just imported inside Folder component.