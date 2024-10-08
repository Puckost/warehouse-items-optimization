# Warehouse Items Optimization

## Overview

The goal of this project is to optimize the selection of warehouse items. Optimization gives items with lower priority number advantage while respecting other properties like item dependencies and higher value.

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Puckost/warehouse-items-optimization.git
   ```

2. **Navigate to the root project directory:**

   ```bash
   cd warehouse-items-optimization
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Run in dev mode with nodeamon:**

   ```bash
   npm run dev
   ```
## API Endpoint

- **Endpoint:** `/api/optimize`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "inventory": [
        {
            "name": "Large Sofa",
            "size": 40,
            "value": 500,
            "priority": 3,
            "dependencies": ["Coffee Table"]
        },
        {
            "name": "Coffee Table",
            "size": 10,
            "value": 150,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Flat-screen TV",
            "size": 15,
            "value": 800,
            "priority": 1,
            "dependencies": []
        },
        {
            "name": "Antique Vase",
            "size": 5,
            "value": 3000,
            "priority": 4,
            "dependencies": []
        },
        {
            "name": "Bookshelf",
            "size": 25,
            "value": 200,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Laptop",
            "size": 5,
            "value": 1000,
            "priority": 1,
            "dependencies": []
        },
        {
            "name": "Kitchen Table",
            "size": 30,
            "value": 300,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Chairs (set of 4)",
            "size": 10,
            "value": 250,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Oil Painting",
            "size": 8,
            "value": 1200,
            "priority": 3,
            "dependencies": []
        },
        {
            "name": "Crystal Chandelier",
            "size": 12,
            "value": 2500,
            "priority": 4,
            "dependencies": ["Kitchen Table", "Antique Vase"]
        },
        {
            "name": "King-sized Bed",
            "size": 50,
            "value": 800,
            "priority": 3,
            "dependencies": []
        },
        {
            "name": "Dining Chairs (set of 6)",
            "size": 15,
            "value": 350,
            "priority": 2,
            "dependencies": ["Kitchen Table"]
        },
        {
            "name": "Grandfather Clock",
            "size": 10,
            "value": 1500,
            "priority": 3,
            "dependencies": []
        },
        {
            "name": "Porcelain Figurines",
            "size": 2,
            "value": 500,
            "priority": 1,
            "dependencies": []
        },
        {
            "name": "Piano",
            "size": 60,
            "value": 3500,
            "priority": 4,
            "dependencies": ["Large Sofa"]
        },
        {
            "name": "Vintage Wine Collection",
            "size": 6,
            "value": 2000,
            "priority": 3,
            "dependencies": []
        },
        {
            "name": "Designer Wardrobe",
            "size": 30,
            "value": 700,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Home Theater System",
            "size": 18,
            "value": 1200,
            "priority": 3,
            "dependencies": ["Flat-screen TV"]
        },
        {
            "name": "Artificial Fireplace",
            "size": 5,
            "value": 800,
            "priority": 2,
            "dependencies": []
        },
        {
            "name": "Gaming Console",
            "size": 5,
            "value": 400,
            "priority": 2,
            "dependencies": []
        }
    ],
    "total_space": 187
  }
  ```

- **Response:**

  ```json
  {
    "message": "Calculation successful",
    "data": {
        "totalValue": 16650,
        "totalSize": 186,
        "selectedItems": [
            {
                "name": "Flat-screen TV",
                "size": 15,
                "value": 800,
                "priority": 1,
                "dependencies": []
            },
            {
                "name": "Laptop",
                "size": 5,
                "value": 1000,
                "priority": 1,
                "dependencies": []
            },
            {
                "name": "Porcelain Figurines",
                "size": 2,
                "value": 500,
                "priority": 1,
                "dependencies": []
            },
            {
                "name": "Coffee Table",
                "size": 10,
                "value": 150,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Kitchen Table",
                "size": 30,
                "value": 300,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Chairs (set of 4)",
                "size": 10,
                "value": 250,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Dining Chairs (set of 6)",
                "size": 15,
                "value": 350,
                "priority": 2,
                "dependencies": [
                    "Kitchen Table"
                ]
            },
            {
                "name": "Designer Wardrobe",
                "size": 30,
                "value": 700,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Artificial Fireplace",
                "size": 5,
                "value": 800,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Gaming Console",
                "size": 5,
                "value": 400,
                "priority": 2,
                "dependencies": []
            },
            {
                "name": "Oil Painting",
                "size": 8,
                "value": 1200,
                "priority": 3,
                "dependencies": []
            },
            {
                "name": "Grandfather Clock",
                "size": 10,
                "value": 1500,
                "priority": 3,
                "dependencies": []
            },
            {
                "name": "Vintage Wine Collection",
                "size": 6,
                "value": 2000,
                "priority": 3,
                "dependencies": []
            },
            {
                "name": "Home Theater System",
                "size": 18,
                "value": 1200,
                "priority": 3,
                "dependencies": [
                    "Flat-screen TV"
                ]
            },
            {
                "name": "Antique Vase",
                "size": 5,
                "value": 3000,
                "priority": 4,
                "dependencies": []
            },
            {
                "name": "Crystal Chandelier",
                "size": 12,
                "value": 2500,
                "priority": 4,
                "dependencies": [
                    "Kitchen Table",
                    "Antique Vase"
                ]
            }
        ]
    }
  }
  ```