### 1. New Element: Kinesthetic Drag-and-Drop Activity

This represents a significant step up in interactivity, moving from simple clicks to direct manipulation of on-screen elements.

*   **Found In:** `artikel4.html` ("Schritt 1: Kantons-Ranking")

**How It Works:**

1.  **HTML Structure:** The activity uses the native HTML5 Drag and Drop API.
    *   **Draggable Items:** The cantons in the `.canton-pool` are standard `<div>` elements with the `draggable="true"` attribute. They hold `data-canton` and `data-rank` attributes to store their identity and correct answer.
    *   **Drop Zones:** The ranked slots (`.drop-zone`) are `<div>` elements that are programmed to accept dropped items. They also have a `data-rank` attribute to identify their position.
2.  **JavaScript Logic (Event-Driven):**
    *   `dragstart`: When a user begins dragging a canton chip, this event fires. The script stores a reference to the dragged element in a global variable (e.g., `draggedElement`) and adds a `.dragging` class for visual feedback.
    *   `dragover`: As the user drags over a drop zone, this event fires continuously. The script calls `event.preventDefault()` which is a crucial step to signal that this element is a valid drop target. It also adds a `.drag-over` class to highlight the zone.
    *   `drop`: When the user releases the mouse over a drop zone, this is the key event. The script:
        1.  Prevents the browser's default drop behavior.
        2.  Appends the `draggedElement` (or a clone) into the drop zone.
        3.  Updates a state-tracking object (`placedCantons`) that maps which canton is in which ranked slot.
        4.  Updates the UI to show the canton as "placed."
3.  **Validation and Feedback:**
    *   A "Überprüfen" button triggers a `checkRanking()` function.
    *   This function iterates through the `placedCantons` object and compares the user's placement (`placedCantons[canton]`) with the correct rank stored in the element's `data-rank` attribute.
    *   It applies `.correct` or `.incorrect` classes to the drop zones for immediate visual feedback.
    *   If the ranking is incorrect, a `resetRanking()` function is called after a short delay, clearing the board and allowing the user to try again. This is excellent for formative learning.

| Feature | Mechanism | Implementation Details | Pedagogical Purpose |
| :--- | :--- | :--- | :--- |
| **Drag-and-Drop Ranking** | HTML5 Drag & Drop API | Event listeners for `dragstart`, `dragover`, and `drop`. State is managed in a JS object. | **Kinesthetic Learning & Higher-Order Thinking.** Engages the user physically. Requires evaluation and ordering of information, which is a more complex cognitive task than simple recognition. |

---

### 2. New Element: Accordion-Based Content Structure

This is a new UI/UX pattern for organizing content on the page, giving the learner more control over what they see.

*   **Found In:** `artikel3.html` (Used for all four interactive sections)

**How It Works:**

1.  **HTML Structure:** Each section is wrapped in a container (`.accordion-section`) which contains a clickable header (`.accordion-header`) and the content (`.accordion-content`).
2.  **CSS-Driven Animation:** The core mechanism is CSS, not JavaScript.
    *   The `.accordion-content` is styled with `max-height: 0` and `overflow: hidden`, making it invisible and taking up no space.
    *   When the parent `.accordion-section` receives an `.open` class, a new CSS rule applies: `max-height: 3500px` (or some other large value).
    *   A `transition: max-height 0.5s ease-out;` property on the content element creates the smooth slide-down/slide-up animation.
3.  **JavaScript Logic:** The JavaScript is minimal. An `onclick` event on the header simply calls a `toggleAccordion()` function that toggles the `.open` class on the parent container.

| Feature | Mechanism | Implementation Details | Pedagogical Purpose |
| :--- | :--- | :--- | :--- |
| **Accordion UI** | CSS `max-height` Transition | A JavaScript `onclick` event toggles a CSS class (`.open`) which changes `max-height` from `0` to a large value. | **Reduces Cognitive Load.** Presents a complex page in manageable, user-controlled chunks. Prevents overwhelming the learner with too much information at once. |

---

### 3. New Element: Advanced Matching & Association Games

These activities build on simple multiple-choice by requiring users to form connections between pairs of items.

*   **Found In:**
    *   `artikel2.html` ("Schritt 2: Glossar-Memory")
    *   `artikel3.html` ("Interaktiv 2: Länder-Eigenschaften zuordnen")

**How It Works:**

1.  **State Management:** The script uses variables to track the user's selections, for example, `selectedTerm` and `selectedProperty`.
2.  **Data Attributes:** Each clickable card has a `data-id` or `data-match` attribute. Paired items (e.g., a term and its definition) share the same `data-id`.
3.  **Event Logic:**
    1.  User clicks the first card (e.g., a term). The script adds a `.selected` class and stores its `data-id` in the `selectedTerm` variable.
    2.  User clicks the second card (e.g., a definition).
    3.  The script compares the `data-id` of the second card with the stored `selectedTerm`.
    4.  **If they match:** Both cards get a `.correct` or `.matched` class, are disabled, and a counter for completed pairs is incremented.
    5.  **If they don't match:** Both cards get a temporary `.incorrect` class (often with a "shake" animation) and are reset after a `setTimeout`, clearing the selection.
4.  **Completion:** Once the counter for matched pairs equals the total number of pairs, the activity is marked as complete, which in turn unlocks the next section.

| Feature | Mechanism | Implementation Details | Pedagogical Purpose |
| :--- | :--- | :--- | :--- |
| **Matching/Memory Games** | State Variables & `data-*` Attributes | JS tracks selected items. A click on a second item triggers a comparison of their `data-id`s. Feedback is given via CSS classes. | **Reinforces Connections.** Excellent for learning vocabulary (Glossary) or associating concepts (Country -> Property). Promotes active recall and pattern recognition in a gamified format. |

---

### 4. New Element: Auto-Completion via Intersection Observer

This is a more passive but clever way to track engagement without requiring a click. It assumes that if a user has scrolled an element into view for a certain time, they have engaged with it.

*   **Found In:** `artikel3.html` (Used on the Timeline visualization)

**How It Works:**

1.  **Intersection Observer API:** This is a modern browser API that is highly efficient for detecting when an element enters or leaves the viewport.
2.  **Implementation:**
    *   A new `IntersectionObserver` is created and told to watch the `.timeline-visual` element.
    *   The observer is configured with a `threshold: 0.5`, meaning its callback function will fire when 50% of the timeline is visible.
    *   When the callback fires, it checks if the element `isIntersecting`.
    *   If it is, a `setTimeout` is initiated for 3 seconds. After this delay, the `markActivityComplete('timeline')` function is called. This ensures the user has at least paused on the element.
    *   The check is wrapped in a condition (`!completedActivities.timeline`) to ensure it only fires once.

| Feature | Mechanism | Implementation Details | Pedagogical Purpose |
| :--- | :--- | :--- | :--- |
| **Scroll-Based Tracking** | `IntersectionObserver` API | The API watches for the timeline element to enter the viewport. A `setTimeout` then marks the activity as complete. | **Implicit Engagement Tracking.** Acknowledges that learning can happen through observation, not just clicking. Reduces click fatigue for purely informational graphics while still allowing it to be a step in the gating process. |

### Overall Conclusion

The tech stack across all pages remains consistent (HTML, CSS, vanilla JavaScript, Firebase, `localStorage`). However, the application of these technologies becomes progressively more sophisticated. The instructional design evolves from a simple "watch-then-do" model to a complex, multi-stage learning journey that uses a variety of interactive formats to build and test knowledge incrementally before the final assessment. This is a hallmark of high-quality educational technology design.