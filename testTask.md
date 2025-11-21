# Test task

## Scenario & Requirements

1. Create a reusable React component that displays a list of books. Each item should have:

2. A title: Displayed prominently.

3. A description: Shown below the title.

4. An optional image: Displayed alongside the title and description (consider providing a placeholder image URL if no image is provided).

5. A toggle: Allows the user to show/hide the description.

6. A new item button: On click adds a new book and causes an automatic update of the list

7. There is no need to consider persisted storage for this scenario, use of a pre-populated mocked data model in memory is sufficient.

8. We should be able to run the solution to see the component in action.

9. Component Reusability: The component should accept the title, description, and image URL as props. It should handle cases where the description or image URL are missing.

10. State Management: The component should use React state to manage the visibility of the description.

11. JSX and Styling: The component should use JSX for rendering and basic CSS (inline or a simple stylesheet) for styling. Avoid overly complex styling.

12. Error Handling: The component should gracefully handle potential errors, such as an invalid image URL. A simple placeholder message would suffice.

13. Testing: Request a simple test (e.g., using Jest or React Testing Library) to cover at least one aspect of the component's functionality.

## Non-Functional Requirements

1. There’s only 1 explicit non-functional requirement:
2. Structure your code using modern development practices, the type you’d be proud to see in production
3. Consider accessibility standards (WCAG)
