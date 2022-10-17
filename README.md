## Description

Application for heroes management.
Technologies:
- Vite;
- TypeScript;
- Vue3;
- SCSS;
- Axios;
- Pinia;
- VueRouter;

If you  want to add hero, you need to click Add new hero button. Then you need to fill in all fields adn add images. 
You can add max 4 images, also min 1 image. All list hero will be on home page.
If you have 6 or more heroes on home page will be added  number of page under list hero.
Every hero have two buttons, delete btn and edit btn. Delete button delete hero from db. When you click edit,
you will redirect to edit page. Hero you can edit all fields without Hero_nickname. Also you can delete image if you want.

## Installation

```bash
$ yarn
```
## Running the app

First step you need to open index.ts in directory ./src/services/api/index.ts and change baseURL

```bash
# development
$ yarn dev

# build app
$ yarn build

```