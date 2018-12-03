import React from 'react';

const AboutPage = () => (
  <div>
    <div>
      <p id="aboutPageText">
        <h1>Overview</h1>

        <h2> 
        <em>Navigation</em>
        </h2>
          <h3>Registration </h3>
            <li> Create your own, unique User Name and Password (note: you are only able to access profiles you have created).</li>
            <li>Each time you return to the site, you may log in using your User Name and Password.</li>
          
          <h3>Creating a Profile</h3>
            <li>To create a new student profile, simply Click on the "Create New Profile" link on the top navigation bar.</li>
            <li>Fill in the required information and Click "Submit".</li>

          <h3>"View All Profiles" Page</h3>
            <li>Upon creating a new profile, you will be redirected the the "View All Profiles" Page.</li>
            <li>On this page, the user may Edit, Select, or Remove the given profile(s).</li>

          <h3>Individual Profile</h3>
            <li>Upon "Select"ing a profile from the "View All Profiles" page, the user can view the details for the Profile selected.</li>
            <li>On this page, the user is able to add/delete tasks in their "Task Library", view their recent history, or Click on Images they would like to add to their current task list.</li>
            <li>Note: Every Task Library is unique and customized to the individual profile</li>
          
          <h3>Current Task List</h3>
            <li>Once the user has selected the task they want to add to their "Task List", they can Click "Preview Schedule" to see what has been selected.</li>
            <li>If there are tasks the user wishes to remove from the "Task List", they can easily do this by Clicking the "Remove" button under each task.</li>
            <li>When the User is ready to start, Click "Start Schedule"</li>
          
          <h3>User Interface</h3>
            <li>The User Interface is designed to be very simple and easy to use.</li>
            <li>Once the "First" task is completed, simply click the "First" image, add any notes you desire, and click "ok"</li>
            <li>Your completed tasks will be displayed in the profile "History" Page; complete with Task Name, Date and Time of completion, and any special Notes.</li>
      <br/>
          <h3>Contact Information</h3>
          <li>If at any time you have questions, please contact the Application Creator at:</li>
          <li> Micah Johnson </li>
          <li>micahj2005@hotmail.com</li>
      </p>
    </div>
  </div>
);

export default AboutPage;
