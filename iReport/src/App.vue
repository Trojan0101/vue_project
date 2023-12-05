<template>
	<div class="cards-container">
	  <!-- New card with "Hello" -->
	  <div class="hello-card">
		<h1>iReport</h1>
		<h6>Version: 1.3.0</h6>
	  </div>
  
	  <!-- Existing navigation card -->
	  <div class="nav-card">
		<router-link to="/modulelogs" class="nav-button">Module Logs</router-link>
		<router-link to="/overview" class="nav-button">Overview</router-link>
		<router-link to="/combinedlogs" class="nav-button">Combined Logs</router-link>
	  </div>
	</div>
  </template>
  
  <style scoped>
  /* Style for the container holding the cards */
  .cards-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-start; /* Align cards at the top of the container */
	align-items: center; /* Center horizontally within the container */
	height: 100vh; /* Set the container height to 100% of the viewport */
  }
  
  /* Style for the card container */
  /* Style for the card container */
/* Style for the card container */
.nav-card {
  display: flex;
  justify-content: flex-start; /* Align buttons to the left */
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: white; /* White background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  width: calc(100% - 20px); /* Subtract the margin from the width */
  box-sizing: border-box; /* Ensure padding doesn't increase the width */
  position: fixed;
  top: 60px;
  left: 0;
  border-radius: 10px; /* Rounded corners */
}

/* Style for navigation buttons inside the card */
.nav-button {
  text-decoration: none;
  background-color: #007BFF; /* Button background color */
  color: white; /* Button text color */
  padding: 10px 20px; /* Adjust padding for button size */
  margin-right: 10px; /* Add space between buttons horizontally */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:last-child {
  margin-right: 0; /* Remove margin from the last button to avoid extra space */
}

.nav-button:hover {
  background-color: #0056b3; /* Change the background color on hover */
}


  /* Style for the "Hello" card */
.hello-card {
  display: flex;
  justify-content: space-between; /* Distribute items evenly, pushing "iReport" to the left and "Version" to the right */
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: white; /* White background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  width: calc(100% - 20px); /* Subtract the margin from the width */
  height: 50px;
  box-sizing: border-box; /* Ensure padding doesn't increase the width */
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 10px; /* Rounded corners */
  background-color: #dde3e9; /* Card background color */
  color: rgb(10, 9, 9); /* Text color */
}

/* Style for the "iReport" text */
.hello-card h1 {
  margin: 670px; /* Remove margin to center text vertically */
}

/* Style for the "Version" text */
.hello-card h6 {
  margin: 0; /* Remove margin to center text vertically */
  margin-left: -20px;
}
  </style>
  