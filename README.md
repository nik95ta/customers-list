
# Coding Challenge for Senior Frontend Engineer

A minimalist web application for displaying customers.

## Technologies and Libraries Used

- React
- TypeScript
- Jest and Testing Library
- Redux Toolkit
- uuid 

## Quick Start :rocket:

```bash
# after download, change directory
cd customers-list

# install dependencies
yarn

# start application
yarn start

Open http://localhost:3000/ to view application

# start testing
yarn test
```

## My Decisions :pencil:️

- I utilized the ***atomic design pattern*** to create a scalable architecture, enhancing both reusability and consistency.
- I employed ***Redux Toolkit*** for efficient state management and integrated ***RTK Query*** for seamless data fetching- I fetched customer json data as a source and then change it locally.
- I chose ***TypeScript*** for its ability to catch errors at compile-time through static typing, its advanced features that enhance code readability and robustness.
- For organizing CSS, I employed ***CSS modules*** to maintain a structured and manageable styling approach.
- I conducted ***unit and integration tests*** to ensure the functionality is working as intended.
- I locally generated IDs using ***uuid*** for adding projects or customers.
- To improve the user experience, I added logic for ***manually adding an industry*** when editing or adding a customer. Also, I prevented adding a start date before the end date or an end date after the start date.
- Due to time constraints, I prioritized implementing functionality over enhancing CSS.
## Areas for Improvement :hourglass:

- Enhancing the UI for a more engaging user experience
-  Form validation
- Improving Accessibility
-  Expanding table rows to display details
-  Adding Fonts
