# Portfolio Website

A modern, creative portfolio website showcasing my professional experience, education, skills, projects, and achievements.

## Features

- 🎨 Creative and colorful design with gradient themes
- 📱 Fully responsive layout (mobile-friendly)
- ⚡ Built with React and Vite for optimal performance
- 🎯 Smooth scroll navigation
- ✨ Interactive animations and hover effects
- 🌐 Optimized for GitHub Pages deployment

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shahrukh-Saiyad441/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Deployment to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. Install gh-pages as a dev dependency (already included):
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at `https://Shahrukh-Saiyad441.github.io/portfolio`

### Method 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder contents to the `gh-pages` branch or configure GitHub Pages to serve from the `dist` folder.

### GitHub Pages Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

Your site will be live at: `https://Shahrukh-Saiyad441.github.io/portfolio`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To customize the portfolio with your own information:

1. Update personal information in `src/components/Hero.jsx` and `src/components/Contact.jsx`
2. Modify education details in `src/components/Education.jsx`
3. Update skills in `src/components/Skills.jsx`
4. Add/edit projects in `src/components/Projects.jsx`
5. Update achievements in `src/components/Achievements.jsx`
6. Modify colors and styling in CSS files or `src/index.css`

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: saiyadshahrukh4441@gmail.com
- **Phone**: +1 9296187422
- **LinkedIn**: [saiyad-shahrukh-9169a820b](https://www.linkedin.com/in/saiyad-shahrukh-9169a820b)
- **GitHub**: [Shahrukh-Saiyad441](https://github.com/Shahrukh-Saiyad441)

---

Built with ❤️ by Shahrukh Saiyad
