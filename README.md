## Implemented in the project:

1. Full basic functionality of the To-do list.
2. List data is stored on the server.
3. Dark theme implemented.
4. Responsive design.

## Challenges encountered during development:

1. The found API does not have an endpoint for bulk deletion of items, so the item deletion request had to be executed in a loop.
2. The list is not saved on the server after dragging and dropping an item, as there is no endpoint available to do this.

## Description

This project is built on **Vue 3** using the **Composition API**. The following libraries are used in the project:

- **Axios** —  for making HTTP requests.
- **Pinia** — for state management.
- **vue3-spinner** — for displaying loading indicators.
- **vue-draggable-plus** — for implementing drag-and-drop functionality.
- **Tailwind CSS** — for styling using a utility-first approach.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Samotaa/vue-todo-test.git
    ```

2. Navigate to the project directory:

    ```bash
    cd vue-todo-test
    ```

3. Install dependencies:

    If using npm:
    ```bash
    npm install
    ```

    If using yarn:
    ```bash
    yarn install
    ```

4. Run the project:

    If using npm:
    ```bash
    npm run dev
    ```

    If using yarn:
    ```bash
    yarn dev
    ```
