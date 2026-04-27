// ics-import.js - Separate from main app.js

async function importICSFromURL() {
    const url = prompt(" ");
    if (!url) return;
    
    try {
        const response = await fetch(url);
        const icsText = await response.text();
        
        // Parse ICS and convert to course format
        const courses = parseICSToCourses(icsText);
        
        // Save to localStorage or show preview
        console.log("Parsed courses:", courses);
        alert(`Imported ${courses.length} courses! Check console.`);
        
    } catch (error) {
        alert("Import failed: " + error.message);
    }
}

function parseICSToCourses(icsText) {
    // Basic parsing
    const courses = [];
    const lines = icsText.split('\n');
    
    let currentCourse = {};
    
    for (let line of lines) {
        if (line.startsWith("SUMMARY:")) {
            currentCourse.course = line.substring(8);
        }
        else if (line.startsWith("LOCATION:")) {
            currentCourse.room = line.substring(9);
        }
        else if (line === "END:VEVENT") {
            if (currentCourse.course) {
                courses.push({
                    course: currentCourse.course,
                    room: currentCourse.room || "TBD",
                    days: ["Monday", "Wednesday"], // 
                    startTime: "10:00 AM",
                    endTime: "11:30 AM"
                });
                currentCourse = {};
            }
        }
    }
    
    return courses;
}

// Add button to page
const btn = document.createElement("button");
btn.textContent = "📅 Test ICS Import";
btn.onclick = importICSFromURL;
btn.style.cssText = "position: fixed; bottom: 20px; right: 20px; padding: 10px; background: green; color: white; border: none; border-radius: 5px;";
document.body.appendChild(btn);