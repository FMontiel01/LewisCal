let generatedICSText = "";

const scheduleForm = document.getElementById("scheduleForm");
const previewSection = document.getElementById("previewSection");
const customSchedulePreview = document.getElementById("customSchedulePreview");
const downloadCustomICS = document.getElementById("downloadCustomICS");

scheduleForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const scheduleName = document.getElementById("scheduleName").value;
  const courseName = document.getElementById("courseName").value;
  const location = document.getElementById("location").value;
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

  const scheduleData = {
    scheduleName,
    courseName,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
    selectedDays
  };

  showPreview(scheduleData);
  generatedICSText = generateICS(scheduleData);

  previewSection.classList.remove("hidden");
});

function showPreview(scheduleData) {
  customSchedulePreview.innerHTML = `
    <div class="course-card">
      <h3>${scheduleData.courseName}</h3>
      <p><strong>Schedule:</strong> ${scheduleData.scheduleName}</p>
      <p><strong>Location:</strong> ${scheduleData.location}</p>
      <p><strong>Dates:</strong> ${scheduleData.startDate} to ${scheduleData.endDate}</p>
      <p><strong>Time:</strong> ${formatTime(scheduleData.startTime)} - ${formatTime(scheduleData.endTime)}</p>
      <p><strong>Days:</strong> ${scheduleData.selectedDays.join(", ")}</p>
    </div>
  `;
}

function generateICS(scheduleData) {
  const startDateTime = formatICSDateTime(
    scheduleData.startDate,
    scheduleData.startTime
  );

  const endDateTime = formatICSDateTime(
    scheduleData.startDate,
    scheduleData.endTime
  );

  const untilDate = formatICSUntilDate(scheduleData.endDate);

  const byDay = scheduleData.selectedDays.join(",");

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//LewisCal//Custom Schedule//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@lewiscal
DTSTAMP:${getCurrentTimestamp()}
SUMMARY:${escapeICS(scheduleData.courseName)}
LOCATION:${escapeICS(scheduleData.location)}
DTSTART;TZID=America/Chicago:${startDateTime}
DTEND;TZID=America/Chicago:${endDateTime}
RRULE:FREQ=WEEKLY;BYDAY=${byDay};UNTIL=${untilDate}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;
}

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

downloadCustomICS.addEventListener("click", function () {
  if (!generatedICSText) {
    alert("Please generate a schedule first.");
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