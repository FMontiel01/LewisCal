---
layout: default
title: Sprint Backlog - Sprint 5
permalink: sprint-backlog
---

# Sprint Backlog – Sprint 5

**Sprint 5 Planning Participants:** Fernando (Scrum Master), Nana (Product Owner), Teju (Developer), Leland (Developer)

**Sprint Goal:** Enable ICS import, display today’s schedule in order, and set up the basics for future calendar updates.

**Team Capacity:** 24 story points (4 members × 6 hours)


---

## Sprint Commitment 

| **ID** | **User Story / Task** | **Priority (1-10)** | **Estimate (SP)** | **Spike (Y/N)** | **Status** | **Assigned** |
|--------|------------------------|--------------|--------------|------------|--------------|--------------|
| RC-004 | As a developer, I want to create a GitHub organization and repos for clients and servers so that I can collaborate using centralized version control. | 9 | 2 | Y | In Progress | Teju |
| LEWIS-001 | As a user, I want to see today's schedule with time, course code, course name, and location so that I know where I need to be. | 10 | 5 | N | To Do | Nana |
| LEWIS-002 | As a user, I want the schedule to automatically show today's date so that I don't have to manually select it. | 10 | 3 | N | To Do | Fernando |
| LEWIS-003 | As a user, I want courses sorted by start time so that I can see my day in chronological order. | 9 | 2 | N | To Do | Teju |
| LEWIS-007 | As a developer, I want to understand ICS files and create one so that users can import calendars. | 9 | 3 | Y | To Do | Leland |
| LEWIS-008 | As a user, I want to import my schedule from an ICS file so that I don't have to manually enter courses. | 10 | 5 | N | To Do | Teju |
| LEWIS-011 | As a developer, I want to create a Firebase Cloud Function that generates a live ICS feed from stored schedule data. | 10 | 8 | Y | To Do | Teju |
| LEWIS-013 | As a user, when Mr. Pogue updates his schedule, my calendar should auto-update within minutes so that I never miss changes. | 10 | 5 | N | To Do | Leland |
| LEWIS-006 | As a user, I want to see an about page so I can contact developers to resolve any issues. | 8 | 2 | N | Backlog | Nana |
| RC-005 | As a developer, I want to set up GitHub client along with connected Firebase Web App and Node.js servers so that I can deploy and test code collaboratively in the cloud. | 7 | 5 | Y | Backlog | Fernando |
| LEWIS-022 | As a user, I want to export my schedule as an ICS file so that I can import it into another calendar app. | 5 | 3 | N | Backlog | Nana |

**Total: 33 SP** 

---


---

## Definition of Done

- [ ] Code reviewed and merged
- [ ] ICS import works (file upload)
- [ ] Today's schedule displays correctly
- [ ] Courses sorted by start time
- [ ] Cloud Function generates ICS feed
- [ ] Auto-update works when schedule changes
- [ ] Product Owner accepts story
