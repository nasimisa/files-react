small note: Used npm instead of pnpm as my current version is older so did not want to mess my company project.

1. **DefaultLayout**

- Removed logic for Navigation via window.location.href and applied SPA behaviour. Because it was causing full pag reload and was losing router state

- Removed hardcoded buttons and repeating logic. Made it more dynamic and scalable so we can add more routes in future

- used NavLink instead of Button. Because its better match with routing and more accessible. It is not good practice to use Buttons for navigation.

