# SheGlow
Beauty Product Shop Website


Home:-
1. Banner Section
•	.banner-container: A container that holds the banners. It ensures no content overflows the container.
o	width: 100%: Takes up the full width of the screen.
o	overflow: hidden: Hides any content that overflows the container.
•	.banner-wrapper: A flexbox container that holds individual banners and controls their transition.
o	display: flex: Aligns the banners in a row (horizontal direction).
o	transition: transform 1s ease: Smooth transition when moving banners.
•	.banner: Represents an individual banner.
o	display: flex: Aligns content horizontally within the banner.
o	height: 610px: Fixed height for the banner.
o	background-color: #FADCD9: Light pink background color.
•	.banner-image: Container for the image within each banner.
o	flex: 0 0 60%: Image takes up 60% of the banner width.
o	background: no-repeat center center; background-size: cover;: Ensures the image covers the container.
•	.banner-text: Contains text content on the banner.
o	flex: 0 0 40%: Text takes up 40% of the banner width.
o	padding: 20px: Adds space inside the text container.
•	.shop-now-banner: A button styled for shop now actions.
o	background-color: #D91656: Pink background color.
o	color: #fff: White text color.
o	font-weight: bold: Makes text bold.
•	.nav-dots: Small navigation dots for banner slider.
o	position: absolute; bottom: 10px;: Positions the dots at the bottom of the banner.
2. Shop by Category Section
•	.shop-by-category: Container for the "Shop by Category" section.
o	background-color: #FAF0E6: Light beige background color.
o	padding-top: 50px; padding-bottom: 100px;: Adds padding above and below the section.
•	.categories: Flexbox container for category tiles.
o	display: flex: Aligns items in a row.
o	gap: 20px: Adds space between the tiles.
•	.category-tile: Represents each category card.
o	width: 100%: Takes up full width.
o	max-width: 320px: Limits maximum width.
o	background-color: #fff: White background color.
o	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1): Adds shadow effect.
•	.category-image-container: Holds images within category tiles.
o	position: relative: Allows positioning of elements inside it.
o	img { object-fit: cover; }: Ensures images cover the container.
•	.category-overlay: Overlay shown on hover.
o	opacity: 0; visibility: hidden;: Initially hidden.
o	opacity: 1; visibility: visible;: Becomes visible when the category tile is hovered.
3. Image with Text Section
•	.image-with-text: Contains images with text overlays.
o	position: relative: Used for absolute positioning of text within the image.
o	height: 350px: Fixed height for the container.
•	.text-overlay: Overlay text on the image.
o	position: absolute; top: 50%; left: 50%;: Centers text within the image.
4. Best Sellers Section
•	.best-sellers: Container for showcasing best-selling products.
o	background-color: lavenderblush: Light lavender background color.
o	padding: 30px; border-radius: 15px;: Adds padding and rounded corners.
•	.card-container: Flex container for product cards.
o	gap: 35px: Adds space between product cards.
•	.card: Represents individual product cards.
o	width: 300px; height: 500px;: Fixed width and height for each card.
o	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1): Adds a soft shadow effect.
•	.card img: Image inside the product card.
o	object-fit: contain;: Ensures the image fits the container without distortion.
•	.add-to-cart-btn: Button to add items to the cart.
o	background: linear-gradient(45deg, #333333, #D91656): Gradient background for the button.
o	color: white: White text on the button.
5. More Promotion Section
•	.more-promo-wrapper: Full-screen container for promotional content.
o	background-color: black: Black background color.
•	.more-promo-left, .more-promo-right: Left and right sections for promotional images.
o	flex: 1;: Each section takes up equal width.
•	.more-promo-center: Centered text section.
o	max-width: 600px;: Limits the width of the text container.
o	padding: 20px: Adds padding for spacing.
•	.more-promo-btn: Button within the promotional section.
o	background-color: #D91656: Pink background color.
o	font-weight: bold: Bold text for emphasis.
6. Contact Section
•	.contact: Container for the contact form section.
o	background-color: #f7e0ea: Light pink background color.
o	padding: 50px 0: Adds vertical padding to the section.
•	.container: Main content container for the contact section.
o	max-width: 1200px: Limits the width to 1200px.
o	margin: 0 auto: Centers the container horizontally.
•	.main-title: Title for the contact section.
o	text-align: center: Centers the title.

Responsive Design
Media queries are used throughout the code to adjust the layout and styling for different screen sizes:
•	@media (max-width: 1024px): Adjusts the layout for medium-sized screens (tablets).
o	Changes the layout of category tiles and product cards.
•	@media (max-width: 768px): Targets smaller screens (small tablets and phones).
o	Changes the layout of product cards to a single column.
•	@media (max-width: 480px): Targets extra-small screens (phones).
o	Adjusts card widths to 100% and text sizes.
Top Bar Section
The Top Bar section displays promotional offers and directs users to specific pages on the website.
•	Class Name: .top-bar
•	Contents:
o	Promo Texts: Displayed in a scrolling format, each includes a promo code or shipping offer, with a link to shop now.
 Navigation Bar
The Navigation Bar provides links to various sections of the site such as Home, Product Listings, and User Profile.
•	Class Name: .middle-bar
•	Contents:
o	Logo: Displays the website logo.
o	Icons: Includes links to the search bar, user profile, wishlist, and cart.
 Search Bar
The Search Bar allows users to search for products across the site.
•	Class Name: .search-bar-container
•	Functionality:
o	Contains an input field for search queries.
o	Displays suggestions dynamically.
o	Can be closed with a close button.
 Bottom Navigation Bar
The Bottom Navigation Bar provides quick links for navigating to the main sections like Home, Products, Info, and About Us.
•	Class Name: .bottom-nav
•	Contents:
o	Quick Links: Home, Products, and Info sections.
o	Dropdown for Info: Contains links to the Privacy, Refund, and Shipping Policies.
 Banner Section
The Banner Section showcases banners with images, headings, and call-to-action buttons.
•	Class Name: .banner-container
•	Contents:
o	Dynamic Banners: Each banner includes an image, heading, subheading, and a button with a link.
 Shop by Category Section
The Shop by Category section highlights product categories with image links to the relevant category page.
•	Class Name: .shop-by-category
•	Contents:
o	Category Tiles: Each category includes an image and a link to the respective category's product listing.
 Image with Text Overlay
This section displays a large image with a text overlay, usually for promotions or announcements.
•	Class Name: .image-with-text
•	Contents:
o	Image: A large image used as a background.
o	Overlay Text: Headline and a brief description.
Best Sellers Section
This section displays the best-selling products with product images, names, prices, and an "Add to Cart" button.
•	Class Name: .best-sellers
•	Contents:
o	Product Cards: Each product card contains an image, title, price, and a form to add the product to the cart.
More Promo Section
The More Promo Section highlights promotional content related to skincare and makeup.
•	Class Name: .more-promo-wrapper
•	Contents:
o	Left and Right Sections: Display images related to skincare and makeup.
o	Centered Text Section: Contains a promotional text with a link to learn more about the brand.
 Contact Us Section
The Contact Us Section allows users to get in touch via address, phone, email, and viewing the location on a map.
•	Class Name: .contact
•	Contents:
o	Contact Details: Includes address, working hours, phone number, and email.
o	Map Section: Embedded Google Map for location viewing.
 Footer Section
The Footer Section contains key information about the website, quick links, customer service details, and social media links.
•	Class Names: .footer, .footer-about, .footer-links, .footer-service, .footer-contact, .footer-social
•	Contents:
o	About Section: Includes the logo and a brief description.
o	Quick Links: Links to the Home, Products, and About Us pages.
o	Customer Service Links: Privacy Policy, Refund Policy, Shipping Policy, and Order Tracking.
o	Contact Information: Displays phone, email, and physical address.
o	Social Media Links: Links to Facebook, Twitter, Instagram, and YouTube.
 Responsive Design
This code includes media queries for responsive design, ensuring the layout adapts based on the screen size.
•	For Small Devices (less than 576px):
o	The layout switches to a single column.
o	The map container height reduces, and padding adjusts.
•	For Medium Devices (576px to 768px):
o	The layout remains two columns.
o	Additional padding adjustments for mobile devices.
•	For Larger Devices (768px and above):
o	The layout uses a grid with three to four columns, depending on the screen size.

General Styling Notes
•	Flexbox Layout: Flexbox is used in .contact-wrapper to arrange contact details and the map side by side.
•	Card Design: .contact-item uses a card layout with hover effects for a subtle lift.
•	Typography: The text elements are styled for clarity and emphasis, especially for headers and links.
•	Media Queries: Media queries are used for ensuring that the website adapts well across various screen sizes.

Search Bar and Dropdown Functionality
This JavaScript handles the functionality for showing and hiding the search bar, displaying search suggestions via AJAX, and managing the dropdown menu.
1. Show and Hide Search Bar
•	Description:
o	The search bar can be shown by clicking the search icon (search-icon), and it can be hidden by clicking the close button (close-search).
o	This functionality is achieved using the click event listeners.
•	Variables:
o	searchIcon: The search icon element (#search-icon).
o	searchBar: The search bar container (#search-bar).
o	closeSearch: The close button inside the search bar (#close-search).
•	Event Listeners:
o	searchIcon.addEventListener('click', ...): When the search icon is clicked, the search bar is displayed by setting searchBar.style.display = 'block'.
o	closeSearch.addEventListener('click', ...): When the close button is clicked, the search bar is hidden by setting searchBar.style.display = 'none'.
2. Dropdown Toggle
•	Description:
o	The dropdown menu will toggle its visibility when clicking the dropdown button (.dropbtn).
•	Variables:
o	dropdown: The dropdown container (.dropdown).
o	dropbtn: The dropdown button (.dropbtn).
•	Functionality:
o	toggleDropdown(): This function is triggered when the dropdown button is clicked. It toggles the "active" class on the dropdown to show or hide the menu.
•	Close Dropdown When Clicking Outside:
o	A window.addEventListener('click', ...) listens for clicks outside the dropdown, and if the click is not inside the dropdown or the dropdown button, it removes the "active" class to hide the dropdown.
3. Search Suggestions via AJAX
•	Description:
o	As the user types in the search input field, the system provides search suggestions using an AJAX request to fetch data from the server.
o	If the query is empty, it hides the suggestions.
o	If there are results, it populates the suggestions list, and clicking on a suggestion fills the input field with the selected product name and hides the suggestions.
•	Variables:
o	searchInput: The input field for search (#search-input).
o	suggestionsContainer: The container where suggestions will be displayed (#suggestions-container).
•	Event Listener:
o	searchInput.addEventListener('input', ...): This event listener triggers every time the user types in the search input field. It reads the input (searchInput.value), checks if the input is not empty, and fetches the search suggestions using an AJAX request to the server.
•	AJAX Request:
o	URL: /search_suggestions?q=${query}: A GET request is made to the server to fetch search suggestions based on the query.
o	Response Handling:
	If the server returns data (products), the suggestionsContainer is populated with suggestion items.
	Each suggestion item is clickable. When clicked, the input field (searchInput) is filled with the selected product name, and the suggestions container is hidden.
	If no products match the query, the suggestions container is hidden.

•	Empty Query Handling:
o	If the search query is empty (!query), the suggestions container is cleared and hidden.



Product_Details_ Page: -
Overview
This documentation provides an overview of the code implementation for the product page, including the dynamic features, layout, and functionality.

Table of Contents
1.	HTML Structure
2.	CSS Styling
3.	JavaScript Functionality
4.	Dynamic Content
5.	Features
6.	Future Enhancements

1. HTML Structure
The HTML uses the Jinja2 template engine for dynamic rendering and includes the following sections:
•	Header Section: Contains the logo, navigation menu, and product page title.
•	Main Content:
o	Product image and description.
o	Dynamic fields such as ProductName, ProductDescription, Price, etc.
o	A review section for user comments.
•	Modal: A modal popup is implemented for displaying product images in larger views.
•	Recently Viewed Products: Dynamically rendered using loops from the template engine.

2. CSS Styling
The style.css file provides responsive and aesthetic styling for the page. Key features include:
•	Grid Layout: CSS Grid is used for arranging the product image and details side by side.
•	Responsive Design: The design adapts to various screen sizes using media queries:
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
•	Hover Effects: Interactive effects on buttons and images enhance user experience.

3. JavaScript Functionality
The script.js file adds interactivity to the page, including:
•	Modal Handling: Clicking on the product image opens a modal.
•	Form Validation: Ensures the Name and Email fields are filled before submitting a review.
•	Event Listeners:
document.querySelector("form").addEventListener("submit", function (event) {
    var name = document.querySelector("input[name='name']").value;
    if (!name) {
        alert("Name is required.");
        event.preventDefault();
    }
});

4. Dynamic Content
The Jinja2 templating system dynamically injects data from the server into the HTML. For example:
•	Product Details:
<h1>{{ product.ProductName }}</h1>
<p>{{ product.ProductDescription }}</p>
<span>Price: {{ product.Price }}</span>
•	Reviews: Displays existing reviews using a loop:
{% for review in reviews %}
    <div class="review">
        <p>{{ review.comment }}</p>
        <span>{{ review.author }}</span>
    </div>
{% endfor %}

5. Features
•	Dynamic Product Display: Product details and reviews are loaded dynamically from server-side data.
•	Modal for Images: Provides an enlarged view of product images.
•	Recently Viewed Products: Displays a carousel of products the user has recently viewed.
•	Responsive Design: Works seamlessly across desktop and mobile devices.

6. Future Enhancements
1.	Improved Validation: Enhance email validation using regular expressions.
2.	Accessibility: Add aria-label attributes for screen readers.
3.	Search and Filter: Implement search and filter options for products.
4.	Performance Optimization: Use lazy loading for images to improve performance.
5.	Advanced Reviews: Allow users to rate products and upload images.


Add _To_ Cart_Page: -
Shopping Cart Template : -
This documentation provides a comprehensive overview of the shopping cart HTML template, describing its structure, functionality, and styling. It is designed to serve as a reference for developers working on enhancing or maintaining the shopping cart feature.

Template Overview : -
The shopping cart template is built with Flask and Jinja2. It integrates HTML, CSS, and JavaScript for a dynamic and user-friendly experience. It supports the following features:
•	Displaying cart items with details (product image, name, price, quantity).
•	Updating quantities using "+" and "-" buttons.
•	Removing items from the cart.
•	Clearing the cart.
•	Proceeding to checkout.
•	Responsive design for various screen sizes.
•	Toast notifications using SweetAlert2.

Template Blocks : -
Extending Base Template
{% extends "base.html" %}
The template extends a base layout (base.html), ensuring consistent structure and styling across the application.
Title Block
{% block title %}Shopping Cart{% endblock %}
Sets the title of the page.
Head Block
{% block head %}
Includes custom CSS and the SweetAlert2 library. The style section defines the appearance of the shopping cart and its components.
Key CSS Features:
•	Background: A fixed background image with a semi-transparent overlay.
•	Cart Item Styling: Each cart item has a card-like design with shadows, rounded corners, and hover effects.
•	Responsive Design: Media queries optimize the layout for devices with widths up to 768px and 480px.
Content Block
{% block content %}
This block dynamically renders cart items and actions based on the cart_items context variable.
Cart Items
•	Each item is displayed in a li element with: 
o	Image: Rendered using the PhotoPath.
o	Details: Product name, price, and quantity.
o	Actions: Buttons to increase or decrease quantity, and remove the item.
Total Price
<h1 class="total">Subtotal: ${{ total }}</h1>
Displays the subtotal price of the cart items.
Empty Cart Message
If no items are in the cart, the following message is displayed:
<p class="empty-cart">Your cart is empty.</p>
Cart Actions
•	Proceed to Checkout: Redirects to the checkout page.
•	Clear Cart: Clears all items from the cart.
•	Continue Shopping: Redirects to the product listing page.
Scripts Block
{% block scripts %}
Includes JavaScript logic for:
SweetAlert2 Notifications
Displays success, error, or info messages using get_flashed_messages.
Event Listeners
•	Checkout Button: Prevents checkout if the cart is empty.
•	Clear Cart Button: Alerts the user if the cart is already empty.

Key Elements
HTML Structure
•	Header: 
•	<h1>Shopping Cart</h1>
•	Cart Item: 
•	<li class="cart-item">
•	    <img src="{{ url_for('static', filename=item.PhotoPath) }}" alt="{{ item.ProductName }}">
•	    <div class="cart-item-details">
•	        <h3>{{ item.ProductName }}</h3>
•	        <p class="price"><strong>Price:</strong> ${{ item.Price }}</p>
•	        <p class="quantity"><strong>Quantity:</strong> {{ item.quantity }}</p>
•	    </div>
•	</li>
•	Buttons: Buttons use forms to handle POST requests for updating the cart.
CSS Highlights
•	Animations:
•	@keyframes walkInRight {
•	    0% { transform: translateX(2cm); }
•	    100% { transform: translateX(0); }
•	}
Provides smooth entry animations for buttons.
•	Hover Effects:
•	.cart-item:hover {
•	    transform: scale(1.03);
•	    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.2);
•	}
JavaScript Integration
•	SweetAlert2: Used for alert notifications with a consistent and modern UI.
•	Dynamic Event Handling: Adds interactivity for cart management actions.

Optimized Notes
Performance Enhancements
•	Reduce Image Sizes: Optimize images for faster loading.
•	Minify CSS and JavaScript: Minimize file sizes to improve page load speed.
•	Lazy Loading: Implement lazy loading for images to reduce initial page load time.
Accessibility Improvements
•	ARIA Labels: Add ARIA roles and labels to buttons and forms.
•	Keyboard Navigation: Ensure all interactive elements are accessible via keyboard.
Testing and Debugging
•	Cross-Browser Testing: Verify functionality on major browsers (Chrome, Firefox, Safari, Edge).
•	Responsive Testing: Test on various device sizes to ensure the design adapts properly.
•	Error Handling: Implement fallback mechanisms for failed network requests.

Conclusion :-
This shopping cart template combines aesthetics, functionality, and user-friendliness. It leverages Flask and Jinja2 for dynamic rendering, responsive design principles for adaptability, and modern libraries like SweetAlert2 for enhanced interactivity. With the outlined optimizations and future implementations, this template can provide a robust foundation for e-commerce applications.
 
 
CheckOut_And_ OrderCompletion _Page: -
Overview : -
The checkout.html page offers an intuitive and visually appealing interface for customers to review their cart and finalize their orders. It includes a dynamic cart summary, a customer information form, and validation to ensure data accuracy. The page also includes festive snowflake animations and is fully responsive, making it accessible across devices.

Purpose : - 
 The checkout.html page is designed to provide a streamlined and engaging user experience for customers reviewing their shopping cart and completing their orders. It displays the cart summary, including product details, prices, and subtotals, and provides a form for customers to enter their personal information for order completion.

Template Structure Overview : -
1.	{% extends "base.html" %}:
 This line extends the base.html template, meaning this page will inherit the base structure, including headers, footers, and any other global elements defined in base.html.
2.	{% block title %}Checkout{% endblock %}:
 Sets the title of the page to "Checkout", which will be inserted into the <title> element in the <head> section of the page.
3.	{% block head %}:
 This block contains custom styles for the checkout page.

Custom Styles in head Block
•	Body Styling:
o	Background: The background image is set to b6.webp, with a fixed position and cover size.
o	Font: The font is set to Verdana with dark gray text (#323131), providing a clean and modern look.
o	Layout: The page has no margins or padding, ensuring a tight layout.
•	Heading Styling:
o	Headings (h1, h2, h3) are centered with a pink color (#c6295e) to draw attention.
•	Cart Summary and Form Styling:
o	The .cart-summary and form elements are given a maximum width of 800px and centered.
o	A gradient background from white to pink with opacity gives the page a soft, welcoming look.
o	Tables and form fields have pink borders, padding, and rounded corners for a clean, professional appearance.
•	Table Styling:
o	The table is styled with alternating row colors, borders, and padding to improve readability and design.
o	Product images are given a max-width of 60px with rounded corners and a pink border to enhance their appearance.
•	Form and Button Styling:
o	Input fields and buttons are styled with light pink borders and backgrounds, rounded corners, and dynamic hover effects.
•	Snowflake Animation:
o	Snowflakes are added to the page as a festive animation effect, falling from the top of the screen. They are randomly positioned and animated using CSS keyframes.
•	Responsive Design:
o	The layout adjusts for smaller screens (e.g., tablets, phones), reducing padding, font sizes, and button sizes. For screens smaller than 480px, certain table columns are hidden to simplify the design.

Main Content ({% block content %})
•	Cart Summary:
o	A table displays each product in the cart with its image, name, price, quantity, and subtotal. The total price, shipping costs, and final price with shipping are also displayed.
•	Customer Information Form:
o	A form is provided for the customer to enter their name, phone number, and address.
o	The form is validated to ensure that the name, phone number (11 digits), and address are entered correctly.
•	Action Buttons:
o	A "Place Order" button submits the form to complete the order.
o	A secondary "Back to Cart" button links to the cart page.

JavaScript ({% block scripts %})
1.	Snowflake Animation:
a.	The script generates random snowflakes that fall from the top of the page using CSS animations.
2.	Form Validation (validateForm() function):
a.	Ensures the customer’s name, phone number, and address are valid: 
i.	Name: Must be at least 3 characters and contain only letters and spaces.
ii.	Phone number: Must be exactly 11 digits.
iii.	Address: Must be at least 7 characters long.

Accessibility and User Experience Considerations
•	Keyboard Navigation:
o	The form and interactive elements are designed for easy keyboard navigation.
•	Error Feedback:
o	Form validation provides immediate feedback, alerting the user of any errors (e.g., invalid name, phone number, or address).
•	Responsive Layout:
o	The page layout adjusts to different screen sizes, ensuring a good user experience across devices from large desktops to small smartphones.

Additional Notes
•	Dynamic Data:
o	Variables such as cart_items, total, shipping_cost, and total_with_shipping are dynamically populated from the backend, ensuring real-time cart updates.
•	CSS Animations:
o	The snowflake effect is purely decorative, adding a seasonal touch, ideal for winter or festive promotions.
Conclusion : -
This page effectively combines functional elements with aesthetic appeal to provide a smooth and engaging checkout experience. The responsive design ensures the page is usable on devices of all sizes, while form validation prevents errors and guides users through the checkout process. Overall, the checkout.html page enhances the user's shopping experience, making the order completion process clear and enjoyable.











Order Tracking:-
1. HTML Structure:
The HTML document consists of a simple user interface for tracking orders. It includes:
1.1. Structure of the Page:
•	<head> section:
o	Includes meta tags for character set (UTF-8) and viewport settings.
o	Title of the page: "Order Tracking - SheGlow".
o	Internal CSS styles to define the look and feel of the page.
•	<body> section:
o	Contains a main container <div> for order tracking.
o	Header (<h1>): Displays the title "Order Tracking" and a logo that animates with a moving effect.
o	Order Tracking Input Section: A text input (<input>) for entering the order ID and a button to trigger tracking.
o	Order Information Section: Hidden initially, this section will display order details once the order is tracked.

2. CSS Styles:
The CSS provides a visually appealing design, with background image, animations, and responsive layouts.
2.1. General Styling:
•	html, body:
o	Background is set as a fixed image, covering the entire screen.
o	The page is centered vertically and horizontally using Flexbox.
o	The body has no margin or padding, ensuring a full-screen layout.
•	.container:
o	A semi-transparent white background (rgba(255, 255, 255, 0.9)) to ensure readability over the background image.
o	Padding, box shadow, and rounded corners for a modern card-like appearance.
•	h1:
o	Custom font styles with the logo animation (moving from right to left) to add dynamic movement.
2.2. Order Tracking Section:
•	Input Field (input[type="text"]):
o	Large, padded input field to enter the Order ID.
o	On focus, the border color changes to highlight the field.
•	Button (button):
o	Styled with a bold background color and rounded corners.
o	A hover effect changes the background color and slightly scales the button.
2.3. Order Information Section (.order-info):
•	Initially hidden with display: none.
•	Displays order status, order date, and days since the order once the order is tracked successfully.
2.4. Media Query for Responsiveness:
•	The layout is responsive for devices with screen widths of 768px or less.
•	Adjusts padding, font sizes, and width to ensure the UI is mobile-friendly.

3. JavaScript:
The JavaScript handles the functionality of the order tracking system, including validation, fetching data, and storing preferences.
3.1. Functions:
1.	validateInput(event):
a.	Purpose: Ensures that only numeric values are entered into the "Order ID" input field.
b.	Behavior: If non-numeric characters are typed, they are automatically removed.

2.	saveTrackingPreferences(preferenceKey, preferenceValue):
a.	Purpose: Saves the user's tracking preferences in the local storage (e.g., the last used order ID).
b.	Behavior: Stores the preference in a JSON object within the browser's localStorage.
3.	getTrackingPreferences(preferenceKey):
a.	Purpose: Retrieves a saved tracking preference (e.g., the last used order ID).
b.	Behavior: Returns the saved preference or null if no such preference exists.
4.	fetchOrderDetails():
a.	Purpose: Fetches the order details based on the provided Order ID and updates the page with the details.
b.	Behavior:
i.	First validates the entered Order ID.
ii.	Saves the Order ID as a preference.
iii.	Makes a fetch request to the server to retrieve order details.
iv.	If successful, displays the order status, order date, and the number of days since the order was placed.
v.	If the order is not found or there's an error, an alert is shown.

Login: -
1. Template Inheritance:
The page extends a base template (base.html) and modifies specific sections like the title, head, and content.
1.1. {% extends "base.html" %}:
•	This line tells Flask to use base.html as the base template for this page. The base template likely contains the overall structure of the page, such as the header, footer, and other common elements.
1.2. {% block title %}Products - SHEGLOW{% endblock %}:
•	This sets the title of the page to "Products - SHEGLOW". This block is inserted in the <title> tag in base.html.
1.3. {% block head %} ... {% endblock %}:
•	This block is used to add custom styles to the page, which will be inserted in the <head> section of base.html.

2. CSS Styling:
This section is used to style the login page and give it a modern, clean look with a background image, centered content, and user-friendly forms.
2.1. Global Styling for body:
•	Font: The font used is 'Nunito', which is a sans-serif font.
•	Background Image:
o	background-image: url("static/images/logincreate.avif"); sets the background image of the page.
o	background-size: cover; ensures that the image covers the entire screen without distortion.
o	background-position: center; centers the image within the viewport.
•	Overlay: background-color: rgba(0, 0, 0, 0.5); adds a semi-transparent black overlay to darken the background and make the content more readable.
•	Full Height Layout: The height is set to 100% of the viewport with height: 100vh;.
2.2. Login Form Container (.login-container):
•	Flexbox Layout:
o	display: flex; justify-content: center; align-items: center; centers the login form both vertically and horizontally.
o	height: 100vh; ensures the container spans the full height of the viewport.
•	Overlay: The background of the container has a semi-transparent black color to make the form more readable against the image.
2.3. Login Box (.login-box):
•	Box Style:
o	background-color: white; gives the form a white background.
o	padding: 30px; adds padding inside the box.
o	border-radius: 10px; rounds the corners of the box for a modern look.
o	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); adds a subtle shadow around the box for depth.
o	The form has a max-width: 400px; to limit its width on larger screens.
2.4. Form Elements (.login-box input, .login-box button):
•	Input Fields:
o	Styled to take full width (width: 100%;), have padding (padding: 12px;), and have a smooth border radius.
o	The border changes color slightly when focused (border: 1px solid #ddd; for the default state and border-color: #D91656; when focused).
•	Button:
o	The submit button is styled with a background color matching the theme of the site (#D91656).
o	It changes color on hover (background-color: #c0134d;), making the button more interactive.
o	It has a rounded border (border-radius: 5px;).
2.5. Additional Text Styling (.login-box p):
•	Account Creation Link:
o	The paragraph (<p>) provides a link to create an account if the user doesn't have one.
o	The link is styled with the theme color (#D91656), and a hover effect adds an underline to make it more interactive.

3. Jinja2 Template Logic:
3.1. {% block content %} ... {% endblock %}:
•	This block defines the body content of the page.
•	Inside this block, a login form is created with fields for email and password.
3.2. Form Elements:
•	The form has action="/login" which indicates that the form will be submitted to the /login URL using the POST method.
•	The form contains:
o	An email input (type="email") for the user to enter their email address.
o	A password input (type="password") for the user to enter their password.
o	A submit button to submit the form.
3.3. Link to Create Account:
•	A link is provided under the form for users who don’t have an account. It points to the URL defined by {{ url_for('create') }}, which generates a dynamic URL for the "Create Account" page.

4. Final Structure:
•	Login Form: The login form is placed inside a centered container (.login-container), and the form fields are inside a styled box (.login-box).
•	Responsive Design: The layout adjusts to the screen size and centers the content properly. For smaller screens, the form fields will resize accordingly, ensuring a good user experience on mobile devices.

Dashboard:-
1. Template Inheritance:
The page extends the base.html template and uses blocks to define the page title, head, content, and additional scripts.
1.1. {% extends "base.html" %}:
•	The page extends a base template, which likely contains the overall structure (such as the header, footer, etc.) for the site.
1.2. {% block title %}Dashboard - SHEGLOW{% endblock %}:
•	Sets the page title to "Dashboard - SHEGLOW", which will be inserted into the <title> tag in base.html.
1.3. {% block head %} ... {% endblock %}:
•	Custom CSS styles for the dashboard page, which are inserted into the <head> section of base.html.

2. CSS Styling:
This section defines the styling for the dashboard layout, including header, container, sections, and buttons.
2.1. Dashboard Header Styling (header):
•	Background: The header has a background color of #D91656 (brand color), with white text.
•	Text Alignment: The text is centered with text-align: center;, and padding is applied for spacing.
•	Button: A "Back to Home" button is included below the header, styled with white text on a red background, with a hover effect.
2.2. Container Styling (.container):
•	The content is wrapped inside a container with a white background, padding, rounded corners, and a subtle box shadow. It also has a maximum width of 800px to ensure readability on larger screens.
2.3. Section Headings:
•	Each section (Personal Info, Order History, etc.) has headings styled with the brand color #D91656, and a bottom border is applied to give them emphasis.
2.4. Order History Section:
•	Order List: Orders are displayed in a list, with each order shown as a separate li item containing order details and product information.
•	Product Image and Details: Each product in an order is displayed with a small image, name, quantity, and price.
2.5. Wishlist Section:
•	A "Go to Wishlist" button is provided that links to the wishlist page.
2.6. Address Preference Section:
•	A text input is provided for updating the user's preferred address, along with a button to save the address.
2.7. Logout Button:
•	A "Logout" button is centered at the bottom of the page, with a hover effect.
2.8. Mobile Responsiveness:
•	The layout is made responsive using media queries. For screens smaller than 768px:
o	The container has reduced padding.
o	The header text size is adjusted.
o	The order history product image size is reduced.
o	The address input and save button take up the full width for better mobile compatibility.

3. Jinja2 Template Logic:
3.1. Personal Information:
•	Displays the user's personal information (name, email, phone number, and address). The values are dynamically filled in using Jinja2 variables like {{ client.first_name }}, {{ client.email }}, etc.
3.2. Order History:
•	Iterates through the order_history object to display each order. Each order displays its ID, date, status, and the products included in the order.
•	The for loop generates a list of products within each order, displaying an image, name, quantity, and price.
3.3. Wishlist:
•	Provides a link to the user's wishlist page, dynamically generated by the url_for('wishlist') function.
3.4. Address Preference:
•	Allows the user to update their address. The address is shown in an input field, and users can modify it. The save-address button sends a request to update the address.
3.5. Logout:
•	A logout button is provided, linking to the logout route. When clicked, the user is logged out of their session.

4. JavaScript for Address Update:
The JavaScript code adds functionality for updating the user's address.
4.1. Event Listener:
•	An event listener is added to the "Save Address" button, which sends a POST request to the /update_address route when clicked.
4.2. Fetch API Call:
•	The address entered by the user is sent as a JSON object to the backend using the fetch API.
•	If the update is successful, the UI is updated to display the new address, and the user is alerted with a success message.
•	If the update fails, the user is notified with an error message.
4.3. Error Handling:
•	Errors during the fetch operation are logged to the console, and the user is alerted with an error message.

5. Final Structure:
•	Header: Displays the welcome message, dynamically including the user's first name ({{ client.first_name }}) and a "Back to Home" button.
•	Content Sections:
o	Personal Info: Displays user information.
o	Order History: Displays past orders and product details.
o	Wishlist: Links to the wishlist page.
o	Address Preference: Allows the user to update their address.
o	Logout: Provides a logout button for session termination.
•	Responsive Design: The page is fully responsive, ensuring it looks good on both desktop and mobile devices.
Create:-
1. Template Inheritance:
The page extends the base.html template and defines content for the title, head, and main body.
1.1. {% extends "base.html" %}:
•	The page extends a base template, which likely contains the main layout structure (e.g., header, footer, and other common elements).
1.2. {% block title %}Products - SHEGLOW{% endblock %}:
•	Sets the page title to "Products - SHEGLOW", which will be inserted into the <title> tag in base.html.
1.3. {% block head %} ... {% endblock %}:
•	Custom CSS styles are included within the head block to define the appearance of the page (e.g., background image, layout, and form styles).

2. CSS Styling:
This section defines the styling for the page layout and form, as well as the background image.
2.1. Body Background Styling (body):
•	Background Image: The body of the page has a background image set to "static/images/logincreate.avif". The image is displayed as a full-screen background and is centered, covering the entire viewport using background-size: cover and background-position: center.
2.2. Signup Container Styling (.signup-container):
•	Flexbox Layout: The container uses flexbox to center the signup box both vertically and horizontally. The height: 100vh ensures the container takes up the full viewport height.
•	Overlay: The background of the signup container has a semi-transparent black overlay (rgba(0, 0, 0, 0.5)) to ensure the form is readable against the background image.
2.3. Signup Box Styling (.signup-box):
•	Box Design: The signup box is styled with a white background, rounded corners, padding, and a subtle shadow to give it a card-like appearance.
•	Width and Centering: The box has a maximum width of 400px and is centered using flexbox.
2.4. Header Styling (.signup-box h2):
•	Font and Margin: The header has a font size of 24px and a margin below it to provide space between the header and the form fields. The color #D91656 is used to match the brand's primary color.
2.5. Input Field Styling:
•	Form Controls: Each input field (input) is styled with full-width, padding, a border radius, and a border color of #ddd. The inputs have a font size of 16px for readability.
•	Error Display: If there are validation errors for any field, they are displayed in a div with the class .field-error.
2.6. Button Styling (.signup-box button):
•	Button Design: The submit button has a red background color (#D91656), white text, and rounded corners. It changes to a slightly darker shade (#C8154C) on hover.
2.7. Link Styling (.signup-box p a):
•	Links: Links inside the signup box are styled with the brand color (#D91656) and bold text. The links will be underlined on hover for emphasis.
2.8. Input Group Layout (.input-group):
•	Flexbox Layout: The first name and second name input fields are grouped together using flexbox to arrange them side by side with a gap of 10px. Each input takes up 48% of the available width, making the form more compact.

3. Jinja2 Template Logic:
3.1. Form Rendering:
•	Form Fields: The form is rendered using Jinja2 templating, with each form field (first_name, second_name, email, etc.) displayed dynamically. The fields are wrapped in labels and are rendered using the {{ form.field_name() }} syntax, which uses Flask-WTF to generate the form elements.
3.2. Error Handling:
•	Error Display: For each form field, any validation errors are displayed directly beneath the corresponding input field. This is done by checking {{ form.field_name.errors }} and displaying the first error message if available.
3.3. CSRF Protection:
•	The {{ form.hidden_tag() }} renders a hidden CSRF token input to protect the form from cross-site request forgery attacks.
3.4. Form Submission:
•	Submit Button: The submit button is rendered using {{ form.submit.label }}, and when clicked, the form is submitted via the POST method.

4. Form Fields and Their Purpose:
4.1. Name Fields:
•	First Name (first_name): The user’s first name is required to personalize the registration process.
•	Second Name (second_name): The user’s last name, also required for the full name.
4.2. Email and Password:
•	Email (email): The user’s email address is required for communication and login purposes.
•	Password (password): A password is required to secure the user’s account.
•	Confirm Password (confirm_password): Ensures that the user’s entered password matches the confirmation.
4.3. Address and Phone Number:
•	Address (address): The user’s address is required for shipping or contact purposes.
•	Phone Number (phone_number): The user’s phone number is required for additional communication or notifications.

5. Final Structure:
•	Background Image: A full-screen background image is displayed to set the tone of the page.
•	Signup Form: The form includes fields for the user’s name, email, password, confirm password, address, and phone number.
•	Form Submission: The form can be submitted by clicking the "Register" button.
•	Error Handling: Any validation errors are displayed next to the relevant input fields.

Wishlist Page :-
Overview
The Wishlist page allows users to view the products they've saved and manage their selections. The page displays a grid of product cards, each showing a product's name, image, price, and a button to remove the product from the wishlist.

Page Structure
1.	Base Template Inheritance
a.	The page inherits from a common base template (base.html), ensuring consistent layout and design across all pages of the website. This approach allows for code reuse and simplifies future updates.
2.	Title
a.	The title of the page is dynamically set to "My Wishlist - SHEGLOW," which is shown in the browser tab.
3.	Head Block (CSS Styling)
a.	Custom styles are added to the wishlist page. These styles include:
i.	Body: Sets the font to 'Nunito' and applies a background image that covers the entire page.
ii.	Container: A flex container is used to align content vertically and horizontally.
iii.	Product Grid: A responsive grid layout is used to display products in columns, adjusting to the screen size.
iv.	Product Cards: Each product is displayed inside a card with a subtle shadow and rounded corners. The cards are designed to scale slightly on hover.
v.	Remove Button: Styled with a red background, the "Remove" button changes color on hover to provide visual feedback.
vi.	Empty Wishlist Message: A message is displayed when the wishlist is empty, prompting the user to add products.
4.	Content Block (Displaying Wishlist Items)
a.	The content block contains the logic for displaying the wishlist items:
i.	If the wishlist has items, each item is displayed in a grid as a clickable card, showing the product's image, name, price, and a "Remove" button.
ii.	If the wishlist is empty, a message prompts the user to start adding products to the wishlist.
b.	Each product is displayed with a link to its detailed page, and the "Remove" button is tied to a JavaScript function that will remove the item from the wishlist.
5.	JavaScript for Removing Products
a.	A JavaScript function is included to handle the removal of products from the wishlist:
i.	When the "Remove" button is clicked, the product ID is sent to the server via a POST request using the Fetch API.
ii.	If the removal is successful, the product card is removed from the page, and the user is notified with a success message. If there's an error, the user is alerted with an error message.

Key Features
•	Responsive Design: The wishlist layout adjusts automatically based on the screen size, ensuring a smooth user experience across devices.
•	Interactivity: Users can remove products from the wishlist with a simple click. The page dynamically updates to reflect these changes without needing a page reload.
•	Product Details: Each product card links to the product's detailed page, enabling users to quickly access more information about the product.

Functionality
1.	Displaying Products:
a.	The wishlist items are fetched from the backend and displayed dynamically using a loop. Each item in the wishlist is displayed as a card, showing its image, name, and price.
2.	Removing Products:
a.	Each product card includes a "Remove" button. When clicked, the product is removed from the wishlist using an asynchronous POST request.
b.	The page updates immediately by removing the product card from the grid.
3.	Empty Wishlist:
a.	If no items are in the wishlist, a message is displayed informing the user that their wishlist is empty, encouraging them to add items.

Potential Enhancements
•	Sorting and Filtering: The wishlist could include options to sort or filter products based on price, name, or other attributes.
•	Pagination: If the wishlist grows large, pagination could be implemented to split the items into multiple pages for easier navigation.
•	User Authentication: Ensure that only logged-in users can access and modify their wishlist.
This design offers a clean, user-friendly interface while maintaining a focus on simplicity and ease of use.
Products Page Documentation

Overview
The Products page displays a list of available products for sale. Users can view product details, add products to their shopping cart, and manage their wishlist. The page allows sorting products by various criteria such as price, rating, and name, giving users a customizable browsing experience.

Page Structure
1.	Base Template Inheritance
a.	The page inherits from the base template (base.html), ensuring a consistent structure and design with other pages across the website. This reduces code duplication and makes it easier to maintain and update the website.
2.	Title
a.	The page title is dynamically set to "Products - SHEGLOW," displayed in the browser tab for easy identification.
3.	Head Block (CSS Styling)
a.	Custom CSS styles are applied to the page to ensure a visually appealing and functional layout:
i.	Body: The background is set to an image (using Flask's url_for to dynamically link to the static folder), creating an attractive visual effect for the page.
ii.	Container: A container with padding and a maximum width is used to center the content and ensure a neat presentation.
iii.	Product Grid: Products are arranged in a responsive grid layout using CSS Grid, ensuring the page looks good on both large and small screens.
iv.	Product Card: Each product is displayed within a card that features the product image, name, price, and buttons for adding the product to the cart or saving it to the wishlist. Hover effects and subtle animations enhance user interaction.
v.	Buttons: The "Add to Cart" button uses a gradient background to make it visually prominent. The wishlist button changes its state when clicked (empty or filled heart).
vi.	Sort Dropdown: A dropdown menu allows users to sort products by price (ascending/descending), rating, or name.
4.	Content Block (Displaying Products)
a.	This block dynamically populates the page with products:
i.	A grid is used to display products in cards. Each card includes a product image, name, price, and options to add the product to the cart or save it to the wishlist.
ii.	The product images are fetched from the server, and their paths are dynamically inserted into the image tag.
iii.	The products are linked to detailed pages, which users can visit for more information about each product.
5.	Sorting Functionality
a.	A dropdown menu allows users to sort the displayed products:
i.	Price: Sorts products by their price in ascending or descending order.
ii.	Rating: Sorts products by their rating (low to high or high to low).
iii.	Name: Sorts products alphabetically (A to Z or Z to A).
b.	The selected sorting criteria are passed to the backend via the query string, and the page reloads to reflect the new sorting order.
6.	JavaScript for Sorting
a.	A JavaScript function (sortProducts()) handles the sorting process:
i.	When a user selects an option from the dropdown, the page reloads with the appropriate sorting parameters in the URL.
ii.	This function determines the selected sort option and updates the page's URL to reflect the changes, which triggers the backend to display the products in the chosen order.
7.	Wishlist Interaction
a.	Each product has a heart-shaped button that users can click to add or remove the product from their wishlist.
b.	The button's appearance changes depending on whether the product is already in the wishlist (filled or empty heart).
c.	JavaScript fetches the action (add or remove) from the button's class and makes a POST request to the server to update the wishlist.
8.	Add to Cart Button
a.	A form inside each product card allows users to add the product to their shopping cart. The form submits a POST request containing the product ID to the backend, where the cart is updated accordingly.
b.	The button is styled to stand out, making it easy for users to take action and purchase the product.

Key Features
•	Product Grid: The products are displayed in a responsive grid, ensuring the layout looks good on devices of all sizes.
•	Sorting: Users can sort products by price, rating, or name, allowing for a more customized browsing experience.
•	Wishlist: Users can add products to their wishlist, providing a way to save items for future reference.
•	Add to Cart: A straightforward "Add to Cart" button is provided for each product, allowing users to quickly add products to their shopping cart.
•	Interactive UI: Hover effects and button animations enhance the user experience and make the page feel more interactive.

Functionality
1.	Displaying Products:
a.	The page is dynamically populated with products fetched from the backend. Each product's details (image, name, price) are shown in a product card.
b.	Clicking on a product links to the detailed product page, where users can view more information about it.
2.	Sorting Products:
a.	The sorting functionality is controlled through a dropdown menu. Depending on the user's selection, the page reloads with the sorted products.
b.	The sorting options are passed as parameters in the URL, which the backend uses to fetch and display products in the correct order.
3.	Managing Wishlist:
a.	Each product has a "wishlist" button that allows users to add or remove the product from their wishlist. The button dynamically changes its state depending on whether the product is already in the wishlist.
4.	Adding to Cart:
a.	Users can add products to their shopping cart directly from the products page using a form. The form submits the product ID, and the cart is updated.

Potential Enhancements
•	Infinite Scrolling: Instead of paginating or refreshing the page for new products, the page could load more products as the user scrolls.
•	Filters: Additional filters (e.g., by brand, category, or price range) could be added to refine product selection.
•	Product Rating and Reviews: Allow users to rate products and write reviews, which would be displayed on the product detail page.
•	Pagination: For large product catalogs, pagination can improve performance and make the browsing experience more manageable.
•	User Authentication: Ensure that only authenticated users can add products to the cart or wishlist.
This page provides a flexible and user-friendly way for users to browse, sort, and interact with products, improving their shopping experience on the SHEGLOW website.


