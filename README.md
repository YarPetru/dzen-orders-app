## This app deployed on [Netlify](https://dzen-orders.netlify.app). Follow the link to use

## To start dev mode immediately

### clone the repository

Then, in the project directory, you should run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser.

## IMPORTANT

This is the Front-end part of application. To get all the features of the app please make sure that
you run the backend part. You can find it by
[the link](https://github.com/YarPetru/dzen-orders-back) and set the constant BASE_URL to
"http://localhost:9999". Or work with deployed backend without any changes.

---

## Main project stack

### [React](https://react.dev/) with [Typescript](https://www.typescriptlang.org/)

using create-react-app

### [React-Redux](https://react-redux.js.org/)

as a state manager using [Redux Toolkit](https://redux-toolkit.js.org/)

### [React-router-dom](https://reactrouter.com/en/main) latest version

for simple navigation

### [Tailwind](https://tailwindcss.com/)

for styling w/o using off-the-shelf components

## Additional libraries

#### [Formik](https://formik.org/) with [yup](https://www.npmjs.com/package/yup) validation

#### [Axios](https://axios-http.com/docs/intro) for queries

#### [React Toastify](https://www.npmjs.com/package/react-toastify) both for better UX

#### [React icons](https://www.npmjs.com/package/react-icons)

#### [Classnames](https://www.npmjs.com/package/classnames)

#### and others (see the package.json file)

## Briefly about the App

The application allows you to work with orders and products using CRUD operations and obtain
dynamically processed information about orders and products. The navigation panel is fixed for
convenient access. The header displays the current date and time, and clicking on "Inventory" always
takes you to the main page.

While the data is being loaded from the server into the lists, you can see Skeleton component with
animations, and during del or add operations, spinners are displayed for a better UX.

### HomePage

This page may contain basic information about the application and links to the OrdersPage and
ProductsPage.

### OrdersPage

This page displays information about orders. It shows a list of orders. For each order, you can view
additional information (clicking on the "List" button) or delete the order (clicking on the "Trash
bin" button). Click on the "List" button opens the order information with a list of products related
to that order. You can close the additional information by clicking on the button in the top right
corner.

On the OrdersPage, you can also add orders. Above the list of orders, we see the "Add order"(+)
button and a title with the total number of orders, which dynamically changes.

Clicking on the "Add order"(+) button opens a popup with a form where you need to enter the
information. After successfully adding the order, the modal window closes, and you will receive a
toast notification about the successful addition of the order to the database. You can close the
modal window without making any changes by clicking the Cancel button, clicking on the backdrop, or
pressing the Esc key.

### ProductsPage

Here, a list of all available products is displayed with the ability to delete a product (works
similarly to deleting an order). There is also a header above the list with the dynamic number of
products and a filter by product type. When a specific type is selected, the list is re-rendered,
and the total number of products in the title is updated.
