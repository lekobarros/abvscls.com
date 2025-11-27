## Project Overview
- This project is a web application for a personal portfolio, with a focus on SEO and publishing posts to improve online visibility.
- The application is built with Nuxt 4 (using Vue.js, Composition API, and <script setup>) and TypeScript, following a Modular, Feature-Based architecture.
- State management is handled with Pinia. Animations are built with the GSAP framework, including ScrollTrigger and ScrollSmoother.

## 📂 Folder Structure
- The project structure follows Nuxt 4 conventions, adapted for a Modular, Feature-Based architecture.
- **assets/:** Contains uncompiled assets such as fonts, icons, and global stylesheets.
- **components/:** Contains global and reusable UI components (e.g., BaseButton.vue, TheHeader.vue). They are auto-imported by Nuxt.
- **composables/:** Contains global Vue composables (e.g., useMetadata.ts). They are auto-imported.
- **features/:** The main container for feature modules. Each subdirectory represents a business feature.
  - **Posts/:** The feature for listing and displaying posts.
    - **components/:** Components specific to the Posts feature. Thanks to Nuxt, a component like Card.vue here can be used as `<PostsCard />` anywhere in the application.
    - **store/:** The feature's Pinia store (postsStore.ts).
    - **types/:** TypeScript interfaces and types specific to this feature.
- **layouts/:** Contains the application layouts (e.g., default.vue).
- **pages/:** Contains the views and defines the application's routing (e.g., index.vue, posts/[id].vue).
- **plugins/:** Contains plugins that are executed when the application is created (e.g., gsap.client.ts).
- **server/:** Contains the application's backend logic (API routes, middleware).
- **store/:** Contains global Pinia stores. Feature-specific stores should be in their respective features folder.
- **tests/:** Unit and component tests.
- **nuxt.config.ts:** The main Nuxt configuration file.

## 🛠️ Libraries and Frameworks
- **Nuxt 3+:** The full-stack framework for Vue.js, handling the build process, routing, server-side rendering, and more.
- **Vue.js 3+:** The core of Nuxt, for declarative UI development (with Composition API and `<script setup>`).
- **Pinia:** For state management, natively integrated with Nuxt.
- **TypeScript:** For static typing and type safety.
- **GSAP (GreenSock Animation Platform):** For complex and interactive animations, including the ScrollTrigger and ScrollSmoother plugins.
- **Vitest:** For testing.

## 🏛️ Architecture Guidelines
- Strictly follow the Modular, Feature-Based pattern within Nuxt 3 conventions:
- **Model/Type (features/FeatureName/types):** Represents the application's data using TypeScript interfaces. Types specific to a feature reside within their own types folder. Global types can be placed in a `types/` directory at the project root.
- **Page (pages/):** A page component, activated by a route based on its location in the `pages` directory. It should orchestrate the display of components and interact with stores to fetch data.
- **Component (components/ or features/FeatureName/components):** Declarative UI built in Vue. Global components are located in the root `components/` directory. Components for a specific feature are located inside the `features/FeatureName/components/` folder and are automatically prefixed (e.g., `<PostsCard />`).
- **Store (Pinia - store/ or features/FeatureName/store):** Manages the state. Global stores are in the root `store/` directory. Feature-specific stores reside in their `features/FeatureName/store/` folder. Contains business logic and interacts with composables or the `server/` directory to fetch data.
- **Composable (composables/ or features/FeatureName/composables):** Contains reusable logic. Global composables are in the root `composables/` directory and are auto-imported. Feature-specific composables can be in their own folder and need to be imported manually.

## 🎨 Animation Guidelines
- **Fundamental Principles**
  - **Performance First:** Prioritize animating properties that do not cause layout reflow/repaint. Use `transform` (translate, scale, rotate) and `opacity` whenever possible, as they are GPU-optimized.
  - **Fast and Responsive Animations:** Animations should be quick and feel snappy.
    - The default duration should be between 0.2s and 0.3s.
    - Avoid animations longer than 1s, unless they are purely illustrative and do not block user interaction.
  - **When to use CSS vs. GSAP:**
    - **CSS Transitions/Animations:** Ideal for simple states and direct interactions, such as hover effects on buttons, color transitions, or a single element's fade-in/out.
    - **GSAP:** Essential for complex, sequenced animations (timelines), scroll-based animations (ScrollTrigger), or those requiring precise control over timing and animation physics.
- **CSS Guidelines**
  - **Easing Rules**
    - Do not use the default CSS easing curves, except for `ease` (for simple hovers) and `linear`. For consistency, use the following cubic-bezier curves:
    - **ease-out (Starts fast, slows down)**
      - Primary use case. Ideal for elements entering the screen or responding to a user action.
      - `ease-out-cubic: cubic-bezier(.215, .61, .355, 1)`
      - `ease-out-quart: cubic-bezier(.165, .84, .44, 1)`
      - `ease-out-expo: cubic-bezier(.19, 1, .22, 1)`
    - **ease-in-out (Smooth acceleration and deceleration)**
      - Perfect for elements moving from one point to another within the screen.
      - `ease-in-out-cubic: cubic-bezier(.645, .045, .355, 1)`
      - `ease-in-out-quart: cubic-bezier(.77, 0, .175, 1)`
    - **ease-in (Starts slow, speeds up)**
      - Avoid whenever possible, as it can make the UI feel sluggish.
      - `ease-in-cubic: cubic-bezier(.550, .055, .675, .19)`
  - **Hover Transitions**
    - For simple transitions (color, background-color, opacity), use `ease` with a duration of `200ms`.
    - For more complex transitions (like `transform`), use the ease-out rules above.
    - Disable hover transitions on devices without a fine pointer to avoid "stuck" states on mobile:
    ```css
    @media (hover: hover) and (pointer: fine) {
      /* your hover code here */
    }
    ```
- **GSAP Guidelines**
  - **Encapsulate in Composables:** Complex or reusable animation logic should be extracted into a Composable (e.g., `useFadeInAnimation.ts`). This keeps components clean and the animation logic testable and isolated.
  - **Lifecycle Management:** Always clean up your animations to prevent memory leaks. Use Vue's `onBeforeUnmount` hook to kill GSAP timelines and ScrollTrigger instances.
  - **ScrollTrigger:** Use it to create animations triggered by the scroll position. Keep markers (`markers: true`) on during development for easy debugging, but remove them in production.
  - **Selectors:** Prefer using Vue refs over string selectors (classes or IDs) to link GSAP to DOM elements. This ensures the animation targets the correct element, especially as components are created and destroyed.

## 📝 Mindset Shift: Standardization and Best Practices
- This section provides tips for aligning common Vue development instincts with this architecture's paradigm.
- **State is Centralized by Feature:** Instead of a single monolithic global store or state scattered across components, the philosophy here is to keep state as close as possible to the feature that uses it. Each feature has its own state "mini-supermarket" with Pinia. This makes the data flow explicit and modular.
- **The Component is Just the "Presentation":** A `.vue` component should not contain complex business logic or API calls. It is a lightweight "blueprint" that describes what the UI should look like for a given state. The business logic and state persistence come from the Pinia Store that feeds it. Keep your `.vue` files focused on the template and minimal interactions.
- **Business Logic Lives in the Store:** Abandon the idea of placing fetch calls or complex calculations inside component lifecycle hooks (`onMounted`). All of this logic belongs in Pinia actions and getters. This makes the logic more explicit, reusable, and much easier to test.
- **Embrace Type Safety (TypeScript):** TypeScript is not optional. Instead of passing magic strings or generic objects, you will be passing instances of well-defined types. This may feel more verbose at first, but it eliminates an entire class of runtime errors. Define your Types and Interfaces carefully from the start.
- **Performance and SEO are Priorities, Not Afterthoughts:** Unlike prototypes, a real-world web application is judged by Google and users based on its speed and accessibility. This means that optimizing data loading (route-based code-splitting), using semantic HTML, and managing state efficiently isn't a luxury—it's an essential part of the project's engineering.

- Always generate Vue.js code using Composition API, `<script setup>`, and TypeScript.
- Suggest code following Vue 3 community standards and idioms, applying senior-level code review philosophy with focus on Core Web Vitals (Web Vitals/Core Web Vitals), including web performance metrics such as LCP, CLS, INP, and Lighthouse SEO recommendations.
- Strictly follow the modular, feature-based architecture within Nuxt conventions.
- All business logic and state management should reside in a Pinia Store.
- Reusable, but stateless, UI logic should be extracted into a Composable.
- For animations, use GSAP and its plugins. Encapsulate complex or reusable animation logic in composables (e.g., `useScrollAnimation.ts`).
- All fetching of content sources (e.g., Markdown files) should be placed in a Composable (`use...`) or in the Nuxt `server/` directory.
- Focus on generating semantic HTML and provide feedback on performance (Core Web Vitals) and SEO, leveraging Nuxt's native features for this purpose.

- Code suggestions and reviews must reflect senior Vue.js and web performance expectations, emphasizing semantic correctness, maintainability, and Core Web Vitals (Vue 3 + Web Vitals, e.g., LCP, CLS, INP).