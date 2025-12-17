small note: Used npm instead of pnpm as my current version is older so did not want to mess my company project.

1. **DefaultLayout**

- Removed logic for Navigation via window.location.href and applied SPA behaviour. Because it was causing full pag reload and was losing router state

- Removed hardcoded buttons and repeating logic. Made it more dynamic and scalable so we can add more routes in future

- used NavLink instead of Button. Because its better match with routing and more accessible. It is not good practice to use Buttons for navigation.

2. **HomePage**

- First thing that i saw from UI was that it was lagging and freezing for a moment. I noticed the effect dependency was an object literal, which caused the fetch to run on every render.

- I removed inline options object. Because it was causing rerender as it were recreating object each time. So i moved it outside component so it sees this array as unchanged array as its outside React component and memory reference is not changing

- I deducted fetch logic to separate hook with Types added and applied error handling and different API states (isloading etc.) The better approach for bigger project is to use React-query so we get caching behaviour for API fetching.

3. **Folder**

- adjusted types and removed unnecessary useffect and state as we were getting data from props

- no need to accept gridView and tableView from parent, i just imported inside Folder component.

- then i noticed that there is no need to use options and pass it as props from HomePage to Folder then to Views. so instead i just used in gridview and tableview (later when I implemented favorites,i moved it to context)

- removed unnecessary scss files from Folder folder.

4. **Grid and Table views**

- applied types and removed options from props

- for Grid removed verticalSpacing prop as it was same like spacing: "lg". if we dont provide verticalSpacing it will take it from spacing as default

- for Table we had error for nesting td inside td, fixed that.

- There was no ui formatting for updated at column, fixed that

- added helper function for formatting date and time with Day js

- added optional chainings for data

5. **FolderActions**

- for FolderActions I fixed a memory leak caused by an effect without dependencies and ensured the event listener is properly cleaned up.

6. **Favorites page**

- did the same things as for HomePage

- applied favorites logic in context as both pages depend on same data changes



**What can be improved**

- I think instead of sidebar we can put navigation on top
- we can make cards clickable and show folder details
- for folder navigation we can implement breadcrumb e.g. Homepage/folder1
- add success and error modals
- add pagination (but backend needs to support it)
- add filter
- in home page we can make items which are favourites as different color or with star icon.
- add empty states
