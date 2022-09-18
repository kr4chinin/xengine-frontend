# 🛞 XEngine Store Project – Frontend

This is my **full-stack** e-commerce shop project. Backend is located in [this](https://github.com/kr4chinin/xengine-backend) repository. I've used **PERN**
(PostgreSQL + Express + ReactJS + NodeJS) stack with some additional technologies (TypeScript, Tanstack Query, MobX, JWT Authorization etc.) which will be mentioned later in this document.

## Introduction 

This is a full-fledged shop project, here I've implemented **JWT** authentification (token stored in the browser's local storage) and two user
**roles** - ```ADMIN``` and ```USER```. As an **unauthorized** user you can:

* Navigate to main page and take a look at the popular vehicles or check the whole vehicles list.
* Navigate to **vehicle page** by pressing on it on the main page and checking its characteristics.
* Sort vehicles by type, brand, name or price.
<img width="800" alt="Anauthorized user shop view" src="https://user-images.githubusercontent.com/103210607/190904748-3aa67865-742c-4630-af57-15be74a9d2fe.png">

As an authorized ```USER``` you can:

* **Add** and **remove** items from cart, navigate to **cart page** where all added vehicles are presented (+ total amount of $ is calculated).
<img width="800" alt="Item added to cart" src="https://user-images.githubusercontent.com/103210607/190904833-9da570e7-01f4-42b1-8f82-2110fad863b0.png">
<img width="800" alt="Cart page" src="https://user-images.githubusercontent.com/103210607/190904894-a9b075d1-242f-4e08-b08b-9f798999fea5.png">

* Rate vehicles (by the way, vehicle rating is calculated as an *average value* of different users rates).
<img width="800" alt="Vehicle page, setting rating" src="https://user-images.githubusercontent.com/103210607/190905044-113f29bd-521c-401b-b406-7446c922de6e.png">

* **Logout** to end the session (also worth noticing, that JWT token is stored in the local storage and it's valid for 1H, so even if user refreshes the page
he will not have to log in again, whereas when ```logout``` button pressed -> token gets deleted and seesion is ended).

Small video which shows how user can basically **interact** with this app:

https://user-images.githubusercontent.com/103210607/190911625-f4e0fd0e-9d3a-4bc5-8b85-f79f66599677.mp4

As an ```ADMIN``` you can:

* Navigate to **AdminPanel** and add new brands, types and vehicles.
<img width="800" alt="Navigate to Admin Panel controls" src="https://user-images.githubusercontent.com/103210607/190908472-b1e32476-5e61-47cf-a6a4-bb226305d9f4.png">
<img width="800" alt="Admin Panel" src="https://user-images.githubusercontent.com/103210607/190908829-66b7c7ee-b9ef-4a2e-9fef-5ca3b573f6cc.png">
<img width="800" alt="Create vehicle pop-up" src="https://user-images.githubusercontent.com/103210607/190909184-7456751a-6945-4f0a-bb48-c859b92c753c.png">

This is how this process looks like:

https://user-images.githubusercontent.com/103210607/190911567-d346dee1-5497-4454-bfa4-8acbbb393afc.mp4

Moreover, there are lots of smooth animations and dialog / info pop-ups to make better UX. To read **more information** about technical side of this app check
*README.md* in the [backend repository](https://github.com/kr4chinin/xengine-backend).

![Animations](https://user-images.githubusercontent.com/103210607/190911855-45a43127-aa70-4eea-80f0-c42badb756eb.gif)

### Tech stack

* Vite
* MobX as a state manager
* React
* TypeScript
* React Query ([Tanstack query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)) + axios
* SCSS
* Iconify






