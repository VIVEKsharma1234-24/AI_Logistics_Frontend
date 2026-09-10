# My React Vite App

This project is a frontend application built with React and Vite, designed to interact with the NER-SAFE FastAPI backend for managing incidents, risks, roads, villages, and alerts.

## Project Structure

- **src/**: Contains the main application code.
  - **api/**: Centralized API service for handling backend requests.
  - **components/**: Reusable UI components.
  - **features/**: Specific features of the application, each with its own page and service.
  - **hooks/**: Custom hooks for reusable logic.
  - **pages/**: Main pages of the application.
  - **utils/**: Utility functions for formatting and validation.
  - **styles/**: Global styles for the application.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- FastAPI backend running on http://localhost:8000

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-react-vite-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the Vite development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to the provided local URL (usually http://localhost:3000).

### Testing

- Ensure the FastAPI backend is running and accessible.
- Verify that all components are functioning correctly:
  - Data fetching from the backend should work seamlessly.
  - Forms should submit data as expected.
  - Check the console for any errors and ensure proper loading states are displayed during API calls.

## Features

- **Dashboard**: Overview of incidents, risks, and alerts.
- **Incidents**: View and report incidents.
- **Risks**: Predict and view risk levels.
- **Roads**: Check the status of roads.
- **Villages**: View village information and risk levels.
- **Alerts**: Monitor alerts related to incidents and risks.
- **Emergency Response**: Prioritize emergency responses based on risk and incidents.

## API Integration

The application integrates with the NER-SAFE API, allowing for the following operations:

- Fetching incidents, risks, roads, villages, and alerts.
- Creating new incidents and risk predictions.
- Evaluating routes based on risk scores.
- Simulating disaster scenarios for testing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.