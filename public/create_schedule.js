let courses = [];
let generatedICSText = "";

const scheduleForm = document.getElementById("scheduleForm");
const previewSection = document.getElementById("previewSection");
const customSchedulePreview = document.getElementById("customSchedulePreview");
const downloadCustomICS = document.getElementById("downloadCustomICS");

const clearScheduleButton = document.createElement("button");
clearScheduleButton.textContent = "Clear Schedule";
clearScheduleButton.className = "calendar-link secondary";
clearScheduleButton.type = "button";

downloadCustomICS.parentElement.appendChild(clearScheduleButton);

scheduleForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const scheduleName = document.getElementById("scheduleName").value.trim();
  const courseName = document.getElementById("courseName").value.trim();
  const location = document.getElementById("location").value.trim();
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  const selectedDays = Array.from(
    document.querySelectorAll(".checkbox-grid input:checked")
  ).map(checkbox => checkbox.value);

  if (selectedDays.length === 0) {
    alert("Please select at least one meeting day.");
    return;
  }

  if (endDate < startDate) {
    alert("End date cannot be before start date.");
    return;
  }

  if (endTime <= startTime) {
    alert("End time must be after start time.");
    return;
  }  

  const courseData = {
    scheduleName,
    courseName,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
    selectedDays
  };

  courses.push(courseData);

  showPreview();
  generatedICSText = generateICS(courses);

  previewSection.classList.remove("hidden");

  clearCourseFields();
});

function showPreview() {
  customSchedulePreview.innerHTML = `
    <p class="calendar-instructions">
      You currently have ${courses.length} course(s) in this schedule.
    </p>
  `;

  courses.forEach(function (course, index) {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";

    courseCard.innerHTML = `
      <h3>${course.courseName}</h3>
      <p><strong>Schedule:</strong> ${course.scheduleName}</p>
      <p><strong>Location:</strong> ${course.location}</p>
      <p><strong>Dates:</strong> ${formatDate(course.startDate)} to ${formatDate(course.endDate)}</p>
      <p><strong>Time:</strong> ${formatTime(course.startTime)} - ${formatTime(course.endTime)}</p>
      <p><strong>Days:</strong> ${course.selectedDays.join(", ")}</p>
      <button class="calendar-link secondary" type="button" onclick="removeCourse(${index})">
        Remove Course
      </button>
    `;

    customSchedulePreview.appendChild(courseCard);
  });
}

function removeCourse(index) {
  courses.splice(index, 1);

  if (courses.length === 0) {
    generatedICSText = "";
    customSchedulePreview.innerHTML = "";
    previewSection.classList.add("hidden");
    return;
  }

  showPreview();
  generatedICSText = generateICS(courses);
}

function generateICS(courses) {
  let icsText = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//LewisCal//Custom Schedule//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:America/Chicago
BEGIN:DAYLIGHT
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
TZNAME:CDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
TZNAME:CST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
`;

  courses.forEach(function (course, index) {
    const startDateTime = formatICSDateTime(course.startDate, course.startTime);
    const endDateTime = formatICSDateTime(course.startDate, course.endTime);
    const untilDate = formatICSUntilDate(course.endDate);
    const byDay = course.selectedDays.join(",");

    icsText += `
BEGIN:VEVENT
UID:${Date.now()}-${index}@lewiscal
DTSTAMP:${getCurrentTimestamp()}
SUMMARY:${escapeICS(course.courseName)}
LOCATION:${escapeICS(course.location)}
DTSTART;TZID=America/Chicago:${startDateTime}
DTEND;TZID=America/Chicago:${endDateTime}
RRULE:FREQ=WEEKLY;BYDAY=${byDay};UNTIL=${untilDate}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`;
  });

  icsText += "END:VCALENDAR";

  return icsText;
}

function clearCourseFields() {
  document.getElementById("courseName").value = "";
  document.getElementById("location").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";

  document.querySelectorAll(".checkbox-grid input").forEach(function (checkbox) {
    checkbox.checked = false;
  });

  document.getElementById("courseName").focus();
}

clearScheduleButton.addEventListener("click", function () {
  courses = [];
  generatedICSText = "";

  scheduleForm.reset();
  customSchedulePreview.innerHTML = "";
  previewSection.classList.add("hidden");
});

function formatICSDateTime(date, time) {
  const cleanDate = date.replaceAll("-", "");
  const cleanTime = time.replace(":", "");

  return `${cleanDate}T${cleanTime}00`;
}

function formatICSUntilDate(date) {
  const cleanDate = date.replaceAll("-", "");

  return `${cleanDate}T235959Z`;
}

function getCurrentTimestamp() {
  const now = new Date();

  return now
    .toISOString()
    .replaceAll("-", "")
    .replaceAll(":", "")
    .split(".")[0] + "Z";
}

function escapeICS(text) {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;")
    .replaceAll("\n", "\\n");
}

function formatTime(time) {
  const [hour, minute] = time.split(":");
  const date = new Date();

  date.setHours(hour);
  date.setMinutes(minute);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatDate(date) {
  const [year, month, day] = date.split("-");

  return `${month}/${day}/${year}`;
}

downloadCustomICS.addEventListener("click", function () {
  if (!generatedICSText) {
    alert("Please add at least one course first.");
    return;
  }

  const blob = new Blob([generatedICSText], {
    type: "text/calendar"
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "custom-schedule.ics";
  link.click();

  URL.revokeObjectURL(url);
});