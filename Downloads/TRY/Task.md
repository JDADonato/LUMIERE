Act as a Senior Full-Stack Web Developer, UI/UX Expert, and Systems Integration Architect.

I need a complete, production-ready frontend simulation for a restaurant management system ("Señorita Rica") based on the Systems Integration Architecture (SIA).

Core Architecture & Constraints:

Tech Stack: Strictly HTML5, CSS3, and Vanilla JavaScript. Output exactly three separate files: index.html, styles.css, and app.js.

SPA Routing: Build this as a Single Page Application. Use a <nav> bar and <section> tags with .hidden and .active CSS classes to toggle views.

Security/Separation: The Customer View and Staff View must be strictly separated. Include a "Staff Login" button that prompts for a simple passcode (e.g., "admin123") before revealing the POS, KDS, and Analytics pages.

State Management (The Librarian & Executive Modules): You MUST use localStorage to persist data. Define clear JSON objects for:

menuInventory (Array of items with price, category, and inStock boolean).

activeTables (Array of objects storing tableNumber, zone, orderedItems, subtotal, serviceCharge, extensionFee, total, and timeSeated).

UI/UX "Pinterest Aesthetic" Guidelines:

Colors: Background (#F9F6F0), Primary Text (#2C3522), Accents (Olive Green #4A5D23, Soft Orange #E68A5C).

Typography: Use a classy Serif font (like Georgia or Playfair Display) for Headers, and a clean Sans-Serif (like Inter or Roboto) for body text and UI elements.

Styling: Use border-radius: 16px for cards. Apply soft glassmorphism (translucency + background blur) to sticky headers and modals. Use subtle box-shadow: 0 10px 30px rgba(0,0,0,0.05) for depth.

Interactivity: All buttons must have :hover and :active scaling effects. Use "Toast" notifications (sliding in from the bottom right) for system feedback (e.g., "Item added to cart", "Table 4 Extended").

Detailed Page Functionalities:

--- CUSTOMER FUNCTION MODULES ---

1. Landing Page (The Hook):

Hero section with elegant typography. State operating hours (7:00 AM - 3:00 AM). Include a prominent "Book a Table" CTA that navigates to the Reservation Page.

2. Smart Reservation & Spatial Zoning Page:

Form inputs: Name, Phone Number, Date, Time, Party Size.

State-Based UI: Two large cards: "Quiet & Non-Smoking" vs. "Videoke & Smoking". The user must click one to proceed (highlight the selected one with the Olive Green accent).

Policy Grid: Two mandatory checkboxes (10% Service Charge & Strict 2-Hour Limit).

Action: On submit, generate a tableNumber, save the reservation to activeTables in localStorage, and navigate to the Menu.

3. Interactive Menu & Ordering Page:

Parse the extensive menu data provided below into the menuInventory JSON array. Render these as clean, image-free CSS cards categorized by type (Starters, Solo Meals, etc.).

Cards must show the Title, Price, and an "Add to Cart" button.

Logic: If the inStock boolean for an item is false (controlled by the KDS), gray out the card and change the button to "Out of Stock".

4. Live Cart & Checkout Modal:

A slide-out sidebar or modal showing the current order.

Executive Logic Calculation: Calculate Subtotal -> Add mandatory 10% Service Charge -> Display Final Total.

Action: "Confirm Order". Updates the activeTables record in localStorage with the ordered items and calculations, then navigates to the In-Service Dashboard.

5. Live In-Service Dashboard (Customer view at table):

Display the customer's name, zone, and a live Javascript setInterval countdown timer starting from 2 Hours (02:00:00).

Display the live bill.

Action: Include an "Extend Table Time (+100 PHP)" button. Clicking this triggers a confirmation modal, adds 100 PHP to the extensionFee variable in localStorage, recalculates the total, and resets the timer.

Action: "Checkout & Leave Feedback" button navigates to the QA Survey.

6. Granular QA Survey:

Read the orderedItems array for this specific table.

Loop through the items and generate a 5-star rating scale and text area for each specific item (e.g., "Rate your Crispy Pata").

Action: "Submit". Saves data to an analyticsData array in localStorage and clears the table from activeTables.

--- STAFF/ADMIN FUNCTION MODULES (Password Protected) ---

7. Staff POS & Floor Management Dashboard:

Read activeTables from localStorage. Render a grid of cards representing tables.

Color Logic: Green (Timer > 30 mins left), Yellow (Timer < 30 mins left), Red (Timer = 0 or extended).

Staff can click a table to open a modal showing the exact dishes ordered and the live bill breakdown.

Action: A button to "Simulate SMS Alert". Triggers a toast notification: "SMS Warning sent to [Customer Name]".

8. Kitchen Display System (KDS):

Dark mode UI for high contrast.

Read activeTables and render tickets for ordered items.

Crucial Action: Render the entire menuInventory in a sidebar with toggle switches. If staff toggles an item off, update localStorage inStock to false. This must instantly disable the item on the Customer Menu (Page 3).

9. Management Analytics Hub:

Read analyticsData from localStorage.

Use basic HTML/CSS (flexbox bars) to create a visual chart showing the average star rating for specific items (e.g., Crispy Pata: 4.5 stars).

Display a metric for "Total Extension Fees Collected" (Sum of all 100 PHP fees).

Menu Data to Parse into JSON:
Starter: French Fries (140), Cheese Sticks (180), Tokwa't Baboy (250), Mangga't Alamang (240), Nachos (280), Chicharong Bulaklak (280), Sizzling Tofu (280), Dynamite (280), Sizzling Corn (280), Sizzling Hotdog (280), Chicken Skin (250), Chicken Feet (280).
Solo Meal: Tapsilog (200), Tocilog (200), Hotsilog (200), Bangsilog (200), Wings with Rice (200), Sisig with Rice (200), 2 Stick BBQ with Rice (210), Inasal with Rice (210).
Rice: Plain Rice (40), Plain Rice Bowl (140), Garlic Rice Bowl (150), Fried Rice Bowl (180).
Vegetables: Hototay (270), Chopsuey (270), Pakbet (270), Ampalaya Con Carne (270), Gising-Gising (270).
Beef: Bulalo (540), Sinigang na Baka (540), Beef Kare-Kare (540), Steak Bulalo (540), Kalderetang Baka (460), Pigar-Pigar (400), Beef with Youngcorn (400).
Pork: Crispy Pata (740), Pork Kare-Kare (490), Sinigang na Baboy (490), Pork Sisig (290), Lechon Kawali (390), Binagoongan (390), Pork Adobo (390).
Seafoods: Sinigang na Salmon Ulo (440), Sinigang na Hipon (440), Sinigang na Bangus (440), Spicy Pusit (390), Calamares (390), Garlic Shrimp (390), Kilawing Tanigue (390), Daing na Bangus (390), Fried Hito (390), Steam Pla-Pla (460), Sweet & Sour Tilapia (460), Fried Tilapia (450).
Noodles: Canton (250), Bihon (250), Miki Bihon (280), Canton Bihon (280), Lomi (280).
Chicken: Buttered Chicken (590), Fried Chicken (550), Chicken Sisig (280), Buffalo Wings (370).
Kambing: Kalderetang Kambing (490), Adobong Kambing (490), Kilawing Kambing (490), Papaitang Kambing (490).
Inihaw: Pork BBQ (6 sticks: 390), Chicken Inasal (290), Beef Kebab (290), Liempo (350), Pinaputok na Pla-Pla (460), Bangus (420), Tilapia (350), Hito (350), Pusit (350).
Bilao Boodle: SB 1 (1799), SB 2 (1799), SB 3 (3299), SB 4 (3499).
Breads: Clubhouse (200), Tuna Melt (180), Ham & Cheese Panini (180).
Coffee: Americano (125), Cappuccino (160), Cafe Latte (160), Spanish Latte (165).
Beers: Pale Pilsen (100), San Mig Light (100), Red Horse (110).

Please provide the complete index.html, styles.css, and app.js code. Do not skip the JavaScript logic for the cart math, timer intervals, or localStorage parsing. If you hit a length limit, stop cleanly and wait for me to say 'continue'.