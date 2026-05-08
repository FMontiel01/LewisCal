import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDALbrgKb2xcyrCuP91Wh-28luF4De61TY",
  authDomain: "lewiscal-2909a.firebaseapp.com",
  projectId: "lewiscal-2909a",
  storageBucket: "lewiscal-2909a.firebasestorage.app",
  messagingSenderId: "381676115165",
  appId: "1:381676115165:web:3859a7a5e06805defd7734",
  measurementId: "G-N3GJGB715K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

console.log("Firebase connected");

// Save User Schedule
async function saveSchedule(courses) {
  const docRef = doc(db, "schedules", "currentSemester");

  await setDoc(docRef, { courses });

  console.log("Schedule saved");
}

// Load Schedule
async function loadSchedule() {
  const docRef = doc(db, "schedules", "currentSemester");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    displaySchedule(data.courses);
  } else {
    console.log("No data found");
  }
}

// Display Schedule
function displaySchedule(courses) {
  const container = document.getElementById("schedule");
  container.innerHTML = "";

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

// Filter only today's courses
  const todaysCourses = courses.filter(course =>
    course.days.includes(today)
  );

// Empty state message for when there are no classes
  if (todaysCourses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "You have no classes today.";
    emptyMessage.classList.add("empty-state");
    container.appendChild(emptyMessage);
    return;
  }

// Loop over todaysCourses
  todaysCourses.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course-card");

    div.innerHTML = `
      <h3>${course.course}</h3>
      <p><strong>Time:</strong> ${course.startTime} - ${course.endTime}</p>
      <p><strong>Room:</strong> ${course.room}</p>
      <p><strong>Days:</strong> ${course.days.join(", ")}</p>
    `;

    container.appendChild(div);
  });
}

const googleCalendarLink =
  "https://lewiscal-2909a.web.app/Mr_Pogue_Current_Schedule.ics";

const googleButton = document.getElementById("copyGoogleLink");

if (googleButton) {
  googleButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(googleCalendarLink);

      alert(
        "Google Calendar link copied! Go to Google Calendar → Other calendars → + → From URL, then paste the link."
      );
    } catch (error) {
      console.error("Could not copy Google Calendar link:", error);
      alert("Could not copy the link. Please copy it manually: " + googleCalendarLink);
    }
  });
}

const outlookLink =
  "webcal://lewiscal-2909a.web.app/Mr_Pogue_Current_Schedule.ics";

const outlookButton = document.getElementById("copyOutlookLink");

if (outlookButton) {
  outlookButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(outlookLink);

      alert(
        "Outlook link copied! Paste it into Outlook → Add Calendar → Subscribe from web."
      );
    } catch (error) {
      console.error("Could not copy Outlook link:", error);
      alert("Could not copy the link. Please copy it manually: " + outlookLink);
    }
  });
}

loadSchedule();