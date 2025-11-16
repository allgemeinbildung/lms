### Executive Summary

This page employs a **"Scaffolded Activity Gating"** model. Instead of forcing the user to wait, it requires them to complete a series of two prerequisite, low-stakes activities before unlocking the final assessment (the quiz). This is a pedagogically stronger approach than the time-based gate of the previous example, as it demands active engagement.

The flow is as follows:
1.  **Information Acquisition:** The user must click through a series of 5 interactive "info cards."
2.  **Knowledge Check:** This unlocks a "True/False" activity that the user must complete.
3.  **Summative Assessment:** Completing the True/False activity unlocks the final quiz.

The entire process is managed by client-side JavaScript, tracking user actions in state variables and using `localStorage` to ensure progress is saved.

---

### 1. The Gating Mechanism: A Multi-Step Process

The core of the page's logic is a chain of unlock conditions. The final quiz remains locked until two preceding activities are completed in order.

#### Step 1: Unlocking the True/False Activity (Card Carousel)

*   **Initial State:** The page loads with only the "Info Card" carousel active. The True/False section (`#true-false-section`) and the Quiz section (`#quiz-section`) are hidden or locked.
*   **Tracking Mechanism:** The script uses a JavaScript `Set` called `viewedCards`. A `Set` is used because it only stores unique values, preventing a card from being counted multiple times.
    *   When the page loads, `viewedCards` is initialized with the first card (`new Set([1])`).
    *   Each time the user navigates to a new card using the "Weiter" or "Zurück" buttons, the `updateCardDisplay()` function is called.
    *   This function adds the index of the currently displayed card to the `viewedCards` set: `viewedCards.add(currentCardIndex)`.
*   **Unlock Condition:** Inside `updateCardDisplay()`, there is a check: `if (viewedCards.size === totalCards)`.
    *   `totalCards` is a constant set to `5`.
    *   Once the user has visited all 5 unique cards, the size of the `viewedCards` set will equal `5`, and the condition becomes true.
*   **The "Unlock" Event:** When the condition is met, the `unlockTrueFalseSection()` function is called. This function simply adds the `.unlocked` class to the `#true-false-section`, making it visible and interactive.

#### Step 2: Unlocking the Final Quiz (True/False Activity)

*   **Initial State:** The True/False section is now visible, but the final quiz remains locked by the `.locked` CSS class.
*   **Tracking Mechanism:** A similar pattern is used with another `Set` called `answeredStatements`.
    *   When the user clicks a "Richtig" or "Falsch" button, an event listener fires.
    *   It first checks if the statement has already been answered by looking in the `answeredStatements` set. If so, it does nothing.
    *   After the user answers, the statement's number is added to the set: `answeredStatements.add(statementNum)`.
*   **Unlock Condition:** After the answer is processed, the script checks if all statements have been answered: `if (answeredStatements.size === totalStatements)`.
    *   `totalStatements` is a constant set to `4`.
    *   Once the user has answered all 4 questions, the condition is met.
*   **The "Unlock" Event:** The `unlockQuiz()` function is called.
    *   It removes the `.locked` class from the `#quiz-section`.
    *   It smoothly scrolls the user down to the now-unlocked quiz.
    *   It adds a visual confirmation badge ("🔓 Quiz freigeschaltet!") to the page.

---

### 2. Interactive Elements and Assessment Logic

Beyond the gating, the page uses two distinct interactive elements to prepare the user for the quiz.

#### A. The Info Card Carousel

*   **Functionality:** A simple, custom-built carousel.
*   **State Management:** The `currentCardIndex` variable tracks the visible card.
*   **UI Feedback:** The `updateCardDisplay()` function is a central controller that:
    *   Shows/hides cards by toggling the `.active` class.
    *   Updates the progress text ("Karte 3 von 5").
    *   Disables/enables the "Zurück" and "Weiter" buttons.
    *   Updates the navigation dots below the cards, using `.active` for the current card and `.completed` for already viewed cards.

#### B. The True/False Activity

*   **Functionality:** A series of statements where the user provides a binary choice.
*   **Immediate Feedback:** This is a key pedagogical feature.
    *   The correct answer is stored in a `data-correct` attribute on the `.statement-card` element.
    *   When a user clicks a button, the script compares their choice to the stored value.
    *   It immediately applies `.correct` or `.incorrect` classes to the buttons, providing visual feedback.
    *   A detailed text feedback message is shown in the `.statement-feedback` element.
    *   Once answered, the buttons are disabled to prevent changing the answer.

---

### 3. State Persistence and Analytics

This page uses the exact same robust `localStorage` and Firebase tracking system as the previous example, but it is adapted to track the new activities.

*   **`localStorage`:** The `saveProgress()` function now stores the state of the new activities, including `currentCardIndex`, `viewedCards`, and `answeredStatements`. The `restoreUIState()` function is more complex, as it has to reconstruct the state of the cards and the true/false answers if the user reloads the page.
*   **Firebase Analytics:** The tracking functions (`trackPageVisit`, `trackTimeSpent`, `trackQuizCompletion`, `markArticleComplete`) are identical and serve the same purpose of sending learning data to a central dashboard.

### Pedagogical Evaluation

| Feature | Mechanism | Implementation Details | Pedagogical Purpose |
| :--- | :--- | :--- | :--- |
| **Content Gating** | Sequential Task Completion | Unlocking is tied to the `.size` of JavaScript `Set`s that track completed interactions. | **Scaffolding.** Ensures learners build foundational knowledge before moving to higher-order tasks. Promotes active engagement over passive waiting. |
| **Info Cards** | Custom Carousel | A state variable (`currentCardIndex`) and CSS classes (`.active`, `.completed`) control the UI. | **Information Chunking.** Breaks down the article's key points into digestible segments. |
| **True/False Check** | Interactive Statements | Event listeners check `data-correct` attributes and provide immediate visual and text feedback. | **Formative Assessment.** Allows learners to check their understanding in a low-stakes environment before the final quiz. Reinforces correct information. |
| **Final Quiz** | Multiple Choice Questions | Identical to the previous example, with immediate feedback and progression. | **Summative Assessment.** Measures the learner's final comprehension of the material. |
| **Persistence** | `localStorage` | Saves the state of all interactive elements, including which cards were viewed and which statements were answered. | Creates a resilient and user-friendly experience that accommodates interruptions. |