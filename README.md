# 🚗 AutoRepair Hub - Expert Service Platform

A modern, full-stack web application for discovering and booking professional auto repair and diagnostic services. This platform connects customers with qualified automotive technicians offering services like tire maintenance, brake repair, battery services, and diagnostics.

**Assignment Service**: Auto Repair & Diagnostic Services  
**Version**: 1.0.0  
**Last Updated**: January 22, 2026

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Frontend Design System](#-frontend-design-system)
- [Testing with Postman](#-testing-with-postman)
- [Features Implemented](#-features-implemented)
- [Database Schema](#-database-schema)
- [Credentials](#-credentials)
- [Troubleshooting](#-troubleshooting)
- [Production Deployment](#-production-deployment)
- [Contributing](#-contributing)

---

## 📌 Overview

AutoRepair Hub is a comprehensive service marketplace platform built with modern web technologies. The application features:

- **User Authentication**: Secure JWT-based authentication with token refresh mechanism
- **Service Discovery**: Browse and search professional repair services
- **Expert Directory**: View qualified technicians with their specialties
- **Responsive UI**: Mobile-first design that works seamlessly across all devices
- **Admin Management**: Django admin panel for service and expert management
- **State Management**: Centralized Redux store for predictable state management
- **Type Safety**: Proper model validation and serializer configuration
- **Permission Layers**: Role-based access control (Public, Authenticated, Admin-only)

---

## 🚀 Quick Start

### For Developers
```bash
# Backend
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py populate_services
python manage.py runserver

# Frontend (in new terminal)
cd frontend
npm install
npm start
```

**Access**: Frontend at `http://localhost:5173` | Backend at `http://localhost:8000`

**Login**: Use `admin` / `admin`

## ✨ Features

### 🎨 Frontend Features
- ✅ **Modern Responsive Design** - Mobile-first approach with desktop support
  - Desktop (1024px+), Tablet (640-1024px), Mobile (<640px)
  - Fluid layouts using CSS Grid and Flexbox
  - Touch-friendly buttons and spacing on mobile
- ✅ **Service Listing** - Browse all available services with ratings, descriptions, and images
- ✅ **Service Details Page** - Comprehensive service information including price, duration, expert details
- ✅ **Expert Directory** - Professional directory displaying all technicians with their specialties
- ✅ **User Profile** - View authenticated user information and account settings
- ✅ **Redux State Management** - Centralized state with Redux Toolkit async thunks
  - Auth slice: Login state, tokens, user info
  - Service slice: Service list, detail, loading states
  - User slice: Users list, profile, loading states
- ✅ **Loading & Error States**
  - Bootstrap spinners during async operations
  - User-friendly error messages with dismiss functionality
  - Proper state transitions
- ✅ **Protected Routes** - JWT-based authentication with token refresh
- ✅ **Reusable Components**
  - Header with responsive navigation
  - Footer with company information
  - Card component (service & user cards)
  - LoadingSpinner component
  - ErrorMessage component
- ✅ **Modern Styling System**
  - CSS variables for colors, spacing, shadows
  - Consistent typography scale
  - Smooth transitions and animations
  - Accessible color contrasts

### 🔧 Backend Features
- ✅ **JWT Authentication** - Secure token-based authentication
  - 5-minute access token lifetime
  - 24-hour refresh token lifetime
  - Automatic token refresh mechanism
- ✅ **Service Management** - Complete service CRUD operations
  - Service listing with pagination
  - Detailed service views
  - Expert association
- ✅ **Expert Profiles** - Professional technician profiles
  - Bio and experience tracking
  - Service specializations
  - User-expert relationship management
- ✅ **Permission Classes** - Role-based access control
  - Public endpoints: Login, Token refresh, Hello endpoint
  - Authenticated endpoints: Services list/detail, User profile
  - Admin-only endpoints: User list, Django admin
- ✅ **CORS Support** - Configured for cross-origin requests from frontend
- ✅ **Admin Panel** - Full Django admin interface
  - Service management
  - Expert management
  - User and permission management
- ✅ **Database Seeding** - Pre-populated with 12 services and 3 expert profiles
- ✅ **Image Handling** - Service images stored and served properly
- ✅ **Serializer Validation** - DRF serializers with proper field validation

## 🛠️ Technology Stack

### Backend Stack
- **Framework**: Django 6.0.1 - High-level Python web framework
- **REST API**: Django REST Framework 3.16.1 - Building REST APIs
- **Authentication**: djangorestframework-simplejwt 5.5.1 - JWT token authentication
- **CORS**: django-cors-headers 4.9.0 - Cross-origin resource sharing
- **Image Processing**: Pillow 12.1.0 - Image handling and storage
- **Database**: SQLite (development), PostgreSQL (production-ready)
- **Language**: Python 3.13
- **Server**: Django development server (Gunicorn for production)

### Frontend Stack
- **Library**: React 19.2.0 - UI component library
- **Build Tool**: Vite 7.2.4 - Next-generation frontend tooling
- **State Management**: Redux Toolkit 2.11.2 - Predictable state container
- **React Bindings**: React-Redux 9.2.0 - Connect React to Redux
- **HTTP Client**: Axios 1.13.2 - Promise-based HTTP client
- **CSS Framework**: Bootstrap 5.3.8 - Responsive CSS framework
- **Bootstrap Components**: React-Bootstrap 2.10.10 - Bootstrap for React
- **Routing**: React Router DOM 7.12.0 - Client-side routing
- **Language**: JavaScript (ES6+)
- **Node Version**: 16+ recommended

### Development Tools
- **Version Control**: Git
- **API Testing**: Postman
- **Admin Interface**: Django Admin
- **Package Managers**: npm (frontend), pip (backend)

## 📁 Project Structure

```
quiz3/
├── .git/                    # Git version control
├── .gitignore               # Git ignore rules
│
├── backend/                 # Django REST Backend
│   ├── venv/                # Python virtual environment
│   ├── api/                 # Main Django app
│   │   ├── models.py        # Service & Expert models (ORM)
│   │   ├── views.py         # API views (ListView, DetailView)
│   │   ├── serializers.py   # DRF serializers for validation & transformation
│   │   ├── urls.py          # API route configuration
│   │   ├── permissions.py   # Custom permission classes (IsAuthenticated, IsAdminUser)
│   │   ├── admin.py         # Django admin registration
│   │   ├── apps.py          # App configuration
│   │   ├── tests.py         # Unit tests
│   │   ├── migrations/      # Database migrations
│   │   ├── management/
│   │   │   └── commands/
│   │   │       └── populate_services.py  # Data seeding script
│   │   └── __init__.py
│   │
│   ├── config/              # Django configuration
│   │   ├── settings.py      # Django settings (DEBUG, INSTALLED_APPS, JWT config)
│   │   ├── urls.py          # Main URL routing (includes api URLs)
│   │   ├── wsgi.py          # WSGI configuration for production
│   │   └── asgi.py          # ASGI configuration
│   │
│   ├── manage.py            # Django management script
│   ├── requirements.txt     # Python dependencies (pip install)
│   ├── .env.sample          # Environment variables template
│   ├── db.sqlite3           # SQLite database (auto-created, gitignored)
│   ├── pyvenv.cfg           # Virtual environment config
│   └── README.md            # Backend-specific documentation
│
├── frontend/                # React + Vite Frontend
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Header.jsx       # Navigation bar with auth links
│   │   │   ├── Header.css       # Header styling
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   ├── Footer.css       # Footer styling
│   │   │   ├── Card.jsx         # Service & User card component
│   │   │   ├── Card.css         # Card styling (300px desktop, 200px image)
│   │   │   ├── LoadingSpinner.jsx  # Bootstrap spinner component
│   │   │   └── ErrorMessage.jsx    # Error display component
│   │   │
│   │   ├── pages/           # Page components (route pages)
│   │   │   ├── LoginPage.jsx         # Auth page with login form
│   │   │   ├── HomePage.jsx          # Service listing (ListView)
│   │   │   ├── ServiceDetailPage.jsx # Service detail view (DetailView)
│   │   │   ├── UsersPage.jsx         # Expert/User directory
│   │   │   ├── ProfilePage.jsx       # Current user profile
│   │   │   └── Pages.css             # Page-specific styles
│   │   │
│   │   ├── store/           # Redux state management
│   │   │   ├── store.js         # Redux store configuration
│   │   │   ├── authSlice.js     # Auth reducer (login, tokens, user)
│   │   │   ├── serviceSlice.js  # Service reducer (list, detail states)
│   │   │   └── userSlice.js     # User reducer (users list, profile)
│   │   │
│   │   ├── services/        # API service layer
│   │   │   └── api.js           # Axios instance & API call functions
│   │   │
│   │   ├── assets/          # Static assets
│   │   │   └── (images, icons, etc.)
│   │   │
│   │   ├── App.jsx          # Main app component with routing
│   │   ├── App.css          # Global app styles & animations (264 lines)
│   │   │
│   │   ├── index.css        # Global styles & CSS variables (280 lines)
│   │   │   └── Variables: --primary-color (#2563EB), spacing system, shadows
│   │   │
│   │   └── main.jsx         # React entry point
│   │
│   ├── public/              # Static public assets
│   ├── index.html           # HTML template
│   ├── package.json         # npm dependencies & scripts
│   ├── package-lock.json    # Dependency lock file
│   ├── vite.config.js       # Vite configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── .env.sample          # Environment variables template
│   └── .gitignore           # npm ignore rules
│
├── DESIGN_SYSTEM.md         # Complete design specifications
├── DESIGN_SPECIFICATION.md  # UI/UX detailed specification
├── DESIGN_MOCKUP.md         # Visual mockups with ASCII art
├── DESIGN_IMPLEMENTATION.md # Technical implementation guide
├── DESIGN_VISUAL_GUIDE.md   # Component gallery
├── DESIGN_QUICK_REFERENCE.md# Developer reference
├── DESIGN_INDEX.md          # Design documentation index
├── DESIGN_SUMMARY.md        # Design system summary
│
├── UI_DESIGN_GUIDE.md       # High-level UI design overview
├── README.md                # This file
└── .gitignore              # Global git ignore rules
```

### Key Directory Explanations

**Backend Structure**:
- `api/models.py`: Defines Service and Expert models with proper relationships
- `api/views.py`: ServiceListView, ServiceDetailView, UserListView endpoints
- `api/serializers.py`: Validates and transforms API request/response data
- `config/settings.py`: Django configuration, JWT settings, CORS setup, installed apps
- `requirements.txt`: All Python packages (pip install -r requirements.txt)

**Frontend Structure**:
- `store/`: Redux state management with async thunks for API calls
- `services/api.js`: Centralized API client with axios interceptor for JWT tokens
- `pages/`: Route-level components (each corresponds to a URL route)
- `components/`: Reusable components used across pages
- `index.css`: Global styles with 20+ CSS variables for theming
- `App.css`: Layout grid system, animations, responsive utilities
│   │   │   ├── LoginPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── ServiceDetailPage.jsx
│   │   │   ├── UsersPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── Pages.css       # Page styles
│   │   ├── store/              # Redux configuration
│   │   │   ├── store.js        # Store setup
│   │   │   ├── authSlice.js    # Auth reducer
│   │   │   ├── serviceSlice.js # Service reducer
│   │   │   └── userSlice.js    # User reducer
│   │   ├── services/           # API services
│   │   │   └── api.js          # Axios instance & API calls
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   └── App.css             # Global styles
│   ├── package.json
│   ├── vite.config.js          # Vite configuration
│   ├── .env.sample            # Environment variables template
│   └── index.html
│
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn
- Git

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On macOS/Linux
   # or
   venv\Scripts\activate  # On Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables** (optional)
   ```bash
   cp .env.sample .env
   # Edit .env with your configuration
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser** (for admin panel)
   ```bash
   python manage.py createsuperuser
   ```
   Or use the pre-configured admin user:
   - Username: `admin`
   - Password: `admin`

7. **Populate sample data**
   ```bash
   python manage.py populate_services
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   ```bash
   cp .env.sample .env
   ```

4. **The project is ready to run!**

## 🗄️ Database Schema

### Models Overview

```
User (Django built-in)
├── username (CharField, unique)
├── email (EmailField)
├── first_name
├── last_name
├── password (hashed)
└── is_staff, is_superuser (permissions)

Expert (Custom Model)
├── user (ForeignKey → User, one-to-one relationship)
├── bio (TextField)
├── years_of_experience (IntegerField)
└── created_at (DateTimeField)

Service (Custom Model)
├── service_name (CharField)
├── description (TextField)
├── rating (DecimalField, 0-5)
├── price (DecimalField)
├── duration_of_service (CharField)
├── sample_image (ImageField)
├── expert (ForeignKey → Expert)
├── category (CharField: maintenance, repair, diagnostic)
├── created_at (DateTimeField)
└── updated_at (DateTimeField)
```

### Pre-seeded Data

**Categories**: 3
- maintenance (tire, battery services)
- repair (brake services)
- diagnostic (inspections)

**Experts**: 3
- John Smith (Tire Services)
- Sarah Johnson (Brake Services)
- Mike Williams (Battery Services)

**Services**: 12 total
- 4 Tire services ($45-$150)
- 4 Brake services ($50-$300)
- 4 Battery services ($25-$400)

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd backend
source venv/bin/activate  # Activate virtual environment
python manage.py runserver
```

Backend runs on: `http://localhost:8000`

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on: `http://localhost:5173`

### Access the Application

1. Open browser and go to `http://localhost:5173`
2. Login with credentials:
   - **Username**: `admin`
   - **Password**: `admin`
3. Browse services, view details, and check expert profiles

### Admin Panel

Access Django admin at: `http://localhost:8000/admin`
- Username: `admin`
- Password: `admin`

## 🌈 Frontend Design System

### Design Philosophy
The design system uses a **modern, clean aesthetic** with:
- Clear hierarchy and visual organization
- Consistent spacing based on 8px grid
- Accessible color contrasts (WCAG AAA compliant)
- Smooth animations and transitions
- Mobile-first responsive approach

### Color Palette

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Primary Blue** | #2563EB | rgb(37, 99, 235) | Links, buttons, primary actions |
| **Primary Dark** | #1E40AF | rgb(30, 64, 175) | Button hover states, text emphasis |
| **Light Gray** | #F3F4F6 | rgb(243, 244, 246) | Backgrounds, card borders |
| **Dark Gray** | #6B7280 | rgb(107, 114, 128) | Secondary text, descriptions |
| **Dark Text** | #111827 | rgb(17, 24, 39) | Primary text, headings |
| **Success Green** | #10B981 | rgb(16, 185, 129) | Success messages, badges |
| **Warning Yellow** | #FBBF24 | rgb(251, 191, 36) | Ratings, warnings, stars |
| **Error Red** | #EF4444 | rgb(239, 68, 68) | Error messages, invalid states |
| **Orange** | #F97316 | rgb(249, 115, 22) | Accents, secondary actions |

### Typography System

| Element | Font Size | Weight | Line Height | Usage |
|---------|-----------|--------|-------------|-------|
| **H1** | 32px (mobile: 24px) | Bold (700) | 1.2 | Page titles, main headings |
| **H2** | 24px (mobile: 20px) | Bold (700) | 1.3 | Section headings |
| **H3** | 18px (mobile: 16px) | Semibold (600) | 1.4 | Subsection headers |
| **H4** | 16px | Semibold (600) | 1.5 | Card titles |
| **Body** | 16px | Regular (400) | 1.6 | Main content, paragraphs |
| **Small** | 14px | Regular (400) | 1.5 | Labels, secondary text |
| **Tiny** | 12px | Regular (400) | 1.5 | Meta info, timestamps |

**Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Spacing System (8px Grid)

| Scale | Value | Usage |
|-------|-------|-------|
| **xs** | 4px | Tight spacing between small elements |
| **sm** | 8px | Compact spacing, component padding |
| **md** | 16px | Standard spacing, card padding |
| **lg** | 24px | Large spacing, section margins |
| **xl** | 32px | Extra large spacing, page margins |
| **2xl** | 48px | Maximum spacing, major sections |

### Component Specifications

#### Service Card
```
Desktop (300px width)
├── Image: 200px height, 12px border-radius
├── Padding: 16px
├── Title: 18px, bold, #111827
├── Description: 14px, gray, 2-line truncate
├── Rating: 14px with yellow stars, flex display
├── Link: 14px, blue, underline on hover
└── Border: 1px solid #F3F4F6
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover Shadow: 0 4px 12px rgba(0,0,0,0.15)
Transition: all 0.2s ease
```

#### User Card
```
Desktop (250px width)
├── Avatar: 80px circular, 50% border-radius
├── Padding: 16px
├── Name: 16px, bold, #111827
├── Title: 12px, gray, expert badge
├── Email: 14px, blue link
├── Badge: Green "Expert" or "Member" label
└── Border: 1px solid #F3F4F6
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover Shadow: 0 4px 12px rgba(0,0,0,0.15)
```

#### Buttons
```
Primary Button (Blue)
├── Background: #2563EB
├── Height: 48px
├── Padding: 12px 24px
├── Border-radius: 8px
├── Font: 16px, bold, white
├── Hover: #1E40AF background, 0 4px 12px shadow
├── Transition: 0.2s ease
└── Disabled: opacity 0.5, cursor not-allowed

Secondary Button
├── Background: transparent
├── Border: 2px solid #2563EB
├── Color: #2563EB
└── Hover: Light blue background
```

#### Form Elements
```
Input Fields
├── Height: 40px
├── Padding: 12px 16px
├── Border: 1px solid #D1D5DB
├── Border-radius: 8px
├── Font: 14px
├── Focus: 2px blue outline, #2563EB border

Textarea
├── Min-height: 120px
├── Padding: 12px 16px
└── Border: 1px solid #D1D5DB
```

#### Loading Spinner
```
Bootstrap Spinner
├── Size: 40px (default)
├── Color: #2563EB
├── Animation: 3s linear rotation
└── Opacity: 0.8
```

### Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| **Mobile** | < 640px | 1 column, stacked |
| **Tablet** | 640px - 1024px | 2 columns |
| **Desktop** | > 1024px | 3-4 columns |

### Animation & Transitions

| Animation | Duration | Timing | Usage |
|-----------|----------|--------|-------|
| **Hover/Focus** | 0.2s | ease | Button states, link underlines |
| **Fade In** | 0.3s | ease-in | Page/component load |
| **Slide Down** | 0.3s | ease | Dropdown menus, modal open |
| **Spinner** | 3s | linear | Loading indicator |

### Shadow System

| Level | Box-shadow | Usage |
|-------|-----------|-------|
| **Default (Card)** | 0 1px 3px rgba(0,0,0,0.1) | Cards, containers |
| **Hover (Card)** | 0 4px 12px rgba(0,0,0,0.15) | Card hover state |
| **Elevation** | 0 10px 25px rgba(0,0,0,0.15) | Modal, dropdown, tooltip |

### Border Radius

| Element | Radius | Usage |
|---------|--------|-------|
| **Card/Container** | 12px | Service cards, user cards |
| **Button/Input** | 8px | Form elements, buttons |
| **Avatar** | 50% | Circular profile pictures |
| **Image** | 8px | Service images in cards |

---

## 📚 Design Documentation Files

The project includes comprehensive design documentation:

| File | Purpose |
|------|---------|
| `DESIGN_SPECIFICATION.md` | Complete UI/UX specifications with measurements and codes |
| `DESIGN_MOCKUP.md` | Visual ASCII mockups for all pages and responsive views |
| `DESIGN_SYSTEM.md` | Design tokens and system specifications |
| `DESIGN_IMPLEMENTATION.md` | Technical implementation details and rationale |
| `DESIGN_VISUAL_GUIDE.md` | Component gallery with examples |
| `DESIGN_QUICK_REFERENCE.md` | Quick developer reference guide |
| `UI_DESIGN_GUIDE.md` | High-level design overview |

**Access these files in the root directory to understand the complete visual design and implementation approach.**

---

## 🔌 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Authentication
All endpoints (except `/token/` and `/hello/`) require JWT authentication:

```
Authorization: Bearer {access_token}
```

### Endpoints

#### 1. **Authentication**

**Login - Get Tokens**
```
POST /token/
Content-Type: application/json

{
  "username": "admin",
  "password": "admin"
}

Response: 200 OK
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

**Refresh Token**
```
POST /token/refresh/
Content-Type: application/json

{
  "refresh": "{refresh_token}"
}

Response: 200 OK
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

#### 2. **Services** (Authenticated)

**List All Services**
```
GET /services/
Authorization: Bearer {access_token}

Response: 200 OK
[
  {
    "id": 1,
    "service_name": "Tire Rotation",
    "description": "Professional tire rotation...",
    "rating": 4.8,
    "sample_image": "http://..."
  },
  ...
]
```

**Get Service Details**
```
GET /services/{id}/
Authorization: Bearer {access_token}

Response: 200 OK
{
  "id": 1,
  "service_name": "Tire Rotation",
  "description": "Professional tire rotation...",
  "rating": 4.8,
  "price": "45.00",
  "duration_of_service": "30-45 minutes",
  "sample_image": "http://...",
  "name_of_the_expert": "John Smith",
  "expert_id": 1,
  "category": "maintenance",
  "created_at": "2024-01-22T...",
  "updated_at": "2024-01-22T..."
}
```

#### 3. **Users** (Admin Only, Authenticated)

**List All Users**
```
GET /users/
Authorization: Bearer {access_token}
(Requires admin/superuser privileges)

Response: 200 OK
[
  {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "first_name": "Admin",
    "last_name": "User"
  },
  ...
]
```

#### 4. **User Profile** (Authenticated)

**Get Current User Profile**
```
GET /users/profile/
Authorization: Bearer {access_token}

Response: 200 OK
{
  "id": 1,
  "username": "admin",
  "email": "admin@example.com",
  "first_name": "Admin",
  "last_name": "User"
}
```

#### 5. **Public Endpoints**

**Public Hello**
```
GET /hello/
(No authentication required)

Response: 200 OK
{
  "message": "Hello World from Django!"
}
```

### Error Responses

All errors follow this format:

```
{
  "detail": "Error message"
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (Missing/Invalid token)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found
- `500` - Server Error

## 📮 Testing with Postman

### 1. Create a new Postman Collection

### 2. Login Request
- **URL**: `POST http://localhost:8000/api/token/`
- **Body** (raw JSON):
  ```json
  {
    "username": "admin",
    "password": "admin"
  }
  ```
- **Save** the `access` token from response

### 3. List Services
- **URL**: `GET http://localhost:8000/api/services/`
- **Headers**:
  ```
  Authorization: Bearer {access_token_from_step_2}
  ```
- **Response**: All services with basic info

### 4. Get Service Details
- **URL**: `GET http://localhost:8000/api/services/1/`
- **Headers**:
  ```
  Authorization: Bearer {access_token_from_step_2}
  ```
- **Response**: Detailed service info including price and expert name

### 5. List Users (Admin Only)
- **URL**: `GET http://localhost:8000/api/users/`
- **Headers**:
  ```
  Authorization: Bearer {access_token_from_step_2}
  ```
- **Note**: Only works if logged in as superuser (admin)

### 6. Get User Profile
- **URL**: `GET http://localhost:8000/api/users/profile/`
- **Headers**:
  ```
  Authorization: Bearer {access_token_from_step_2}
  ```
- **Response**: Current user's profile info

## ✅ Features Implemented

### Backend Requirements ✓
- [x] **Service ListView** - Get all services (paginated)
- [x] **Service DetailView** - Get single service with full details
- [x] **UserListView** - List all users (admin-only, authenticated)
- [x] **Proper Model Configuration**:
  - [x] Service model with: service_name, description, rating, price, duration_of_service, sample_image
  - [x] Expert model with: user, bio, years_of_experience
  - [x] Proper relationships and field types
- [x] **API Routes Configuration**:
  - [x] `/services` - List services
  - [x] `/services/{id}` - Service detail
  - [x] `/users` - List users (admin-only)
  - [x] `/users/profile` - Current user profile
  - [x] `/token/` - Login
  - [x] `/token/refresh/` - Refresh token
- [x] **Permission Classes**:
  - [x] IsAuthenticated for protected endpoints
  - [x] IsAdminUser for user listing
  - [x] AllowAny for login
- [x] **JWT Implementation**:
  - [x] Token generation on login
  - [x] Token refresh mechanism
  - [x] Token-based request authentication
  - [x] 5-minute access token lifetime
  - [x] 24-hour refresh token lifetime

### Frontend Requirements ✓
- [x] **HomePage/ListView** - Display all services in card grid
- [x] **DetailPage/DetailView** - Show service details with expert info
- [x] **UserListPage** - Display all experts in card grid
- [x] **ProfilePage** - Show current user profile
- [x] **Redux State Management**:
  - [x] Auth slice with login state
  - [x] Service slice with list/detail states
  - [x] User slice with users/profile states
  - [x] Async thunks for API calls
- [x] **Responsive Design**:
  - [x] Mobile-first approach
  - [x] Bootstrap grid system
  - [x] Responsive images and containers
  - [x] Mobile menu toggle
- [x] **Loading & Error States**:
  - [x] Loading spinners during data fetch
  - [x] Error message display
  - [x] Error dismissal functionality
- [x] **Reusable Components**:
  - [x] Header with navigation
  - [x] Footer with info
  - [x] ServiceCard component (reused in list and detail)
  - [x] UserCard component (reused in users list)
  - [x] LoadingSpinner component
  - [x] ErrorMessage component

## 👥 Credentials

### Admin User
- **Username**: `admin`
- **Password**: `admin`
- **Privileges**: Superuser, can access all endpoints and admin panel

### Demo Experts Created
- **John Smith** (Tire Services)
- **Sarah Johnson** (Brake Services)
- **Mike Williams** (Battery Services)

### Sample Services (12 Total)

**Tire Services (4)**
1. Tire Rotation - $45.00
2. Tire Change - $120.00
3. Tire Balancing - $60.00
4. Wheel Alignment - $150.00

**Brake Services (4)**
5. Brake Pad Replacement - $200.00
6. Brake Rotor Replacement - $300.00
7. Brake Resurface - $100.00
8. Brake Inspection - $50.00

**Battery Services (4)**
9. Battery Testing - $25.00
10. Alternator Repair - $400.00
11. Starter Repair - $350.00
12. Battery Replacement - $150.00

## 🐛 Troubleshooting

### Backend Issues

**Issue**: "ModuleNotFoundError: No module named 'api'"
- **Solution**: Make sure you're in the `backend` directory and virtual environment is activated

**Issue**: "Port 8000 already in use"
- **Solution**: Use `python manage.py runserver 8001` for a different port

**Issue**: "No such table: api_service"
- **Solution**: Run `python manage.py migrate`

**Issue**: "Pillow is not installed" error
- **Solution**: Run `pip install Pillow` in your virtual environment

### Frontend Issues

**Issue**: "Cannot find module 'react-router-dom'"
- **Solution**: Run `npm install react-router-dom` in frontend directory

**Issue**: "CORS error when calling API"
- **Solution**: Ensure backend is running and CORS_ALLOWED_ORIGINS includes `http://localhost:5173`

**Issue**: "Module not found: '@reduxjs/toolkit'"
- **Solution**: Run `npm install @reduxjs/toolkit react-redux` in frontend directory

**Issue**: Frontend not loading images
- **Solution**: Images are stored in `backend/media/services/` - ensure backend is serving static files

## 📝 Build for Production

### Backend
```bash
# Install production server
pip install gunicorn

# Run with Gunicorn
gunicorn config.wsgi --bind 0.0.0.0:8000

# Or use whitenoise for static files
pip install whitenoise
```

### Frontend
```bash
# Build optimized bundle
npm run build

# Output in dist/ folder
# Deploy dist/ contents to web server
```

## 📄 Environment Variables

See `.env.sample` files in both `backend/` and `frontend/` directories for all configurable options.

### Important Variables to Set for Production

**Backend**:
- `DEBUG=False`
- `SECRET_KEY` - Generate a new secure key
- `ALLOWED_HOSTS` - Add your domain
- `CORS_ALLOWED_ORIGINS` - Add your frontend URL

**Frontend**:
- `VITE_API_URL` - Your production API URL
- `VITE_ENVIRONMENT=production`

## 📚 Learning Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

## 📄 License

This project is for educational purposes.

## 👤 Author

Created as part of a full-stack development assignment focused on building a professional service platform with proper authentication, authorization, and responsive user interface.

---

**Last Updated**: January 22, 2026
**Current Version**: 1.0.0
**Branch**: main

