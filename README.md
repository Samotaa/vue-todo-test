# Тестовое задание на Vue

## Развернутый проект: 

[Открыть](https://samotaa.github.io/vue-todo-test/)

## Реализовано в проекте:

1. Весь основной функционал To do листа.
2. Данные листа хранятся на сервере.
3. Реализована тёмная тема.
4. Адаптивный дизайн.

## Нюансы, возникшие при разработке

1. В найденной API нет эндпоинта для массового удаления элементов, поэтому пришлось выполнять запрос удаления элемента в цикле.
2. Список не сохраняется на сервере после перетаскивания элемента, поскольку нет эндпоинта, позволяющего это сделать.

## Затраченное время на реализацию: 2 дня

## Описание

Этот проект построен на **Vue 3** с использованием **Composition API**. В проекте используются следующие библиотеки:

- **Axios** — для выполнения HTTP-запросов.
- **Pinia** — для управления состоянием.
- **vue3-spinner** — для отображения индикаторов загрузки.
- **vue-draggable-plus** — для реализации функциональности перетаскивания (drag-and-drop).
- **Tailwind CSS** — для стилизации с использованием utility-first подхода.

## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/Samotaa/vue-todo-test.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd vue-todo-test
    ```

3. Установите зависимости:

    Если используете npm:
    ```bash
    npm install
    ```

    Если используете yarn:
    ```bash
    yarn install
    ```

4. Запуск проекта:

    Если используете npm:
    ```bash
    npm run dev
    ```

    Если используете yarn:
    ```bash
    yarn dev
    ```
