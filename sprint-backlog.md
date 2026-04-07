---
layout: default
title: Sprint Backlog
permalink: /backlogs/sprint-backlog/
---

# Sprint Backlog – *LewisCal (Schedule Today View)*

## Sprint Details

| **Role** | **Assigned** |
|----------|--------------|
| Product Owner | Nana |
| Scrum Master | Fernando |
| Developer | Teju |
| Developer | Leland |


**Team Capacity:** 25 story points (6+6+6+7)

**Sprint Goal:** "Deliver a complete, production-ready LewisCal application that shows schedule with time, course code, name, location, and allows operations on courses."

---

## Complete Sprint Commitment (25 Points)

| **ID** | **User Story / Task** | **Priority (1-10)** | **Estimate (SP)** | **Spike (Y/N)** | **Status** | **Assigned** |
|--------|------------------------|--------------|--------------|------------|--------------|--------------|
| RC-001 | As a Scrum Team, we want to identify the Sprint 4 Scrum Master and Product Owner so that team responsibilities are clearly defined. | 10 | 0 | N | Done | Fernando, Nana |
| RC-004 | As a developer, I want to create a GitHub organization and repos for clients and servers so that I can collaborate using centralized version control. | 9 | 2 | Y | In Progress | Teju |
| RC-003 | As a Scrum Master, I want to facilitate Sprint Planning and story commitment so that the team works with focus and alignment. | 8 | 2 | N | In Progress | Fernando |
| RC-002 | As a Product Owner, I want to manage backlogs and focus on MVP prioritization so that we deliver value by sprint end. | 8 | 2 | N | In Progress | Nana |
| LEWIS-001 | As a user, I want to see today's schedule with time, course code, course name, and location so that I know where I need to be. | 10 | 5 | N | To Do | Nana |
| LEWIS-002 | As Mr. Pogue, I want the schedule to automatically show today's date so that I don't have to manually select it. | 10 | 3 | N | To Do | Fernando |
| LEWIS-003 | As Mr. Pogue, I want courses sorted by start time so that I can see my day in chronological order. | 9 | 2 | N | To Do | Teju |
| LEWIS-004 | As a user, I want to see an empty state message when I have no classes today so that I know the web app is working. | 8 | 2 | N | To Do | Leland |
| LEWIS-005 | As Mr. Pogue, I want my schedule data to persist so that I don't have to re-enter courses every time. | 8 | 5 | N | To Do | Nana |
| **Future Enhancements (If Time Permits)** |
| LEWIS-006 | As a user, I want to add a new course to my schedule (time, code, name, location) so that I can customize my calendar. | 6 | 5 | N | To Do | Fernando |
| LEWIS-007 | As a user, I want to edit a course's details so that I can correct mistakes. | 5 | 3 | N | To Do | Teju |
Total Committed: 25 story points


##  Sample for Mr Pogue

| Time | Course Code | Course Name | Location |
|------|-------------|-------------|----------|
| 09:30 – 10:45 AM | SE-301 | Software Engineering | Academic Science Center AS-104A |
| 11:00 AM – 12:15 PM | CS-101 | Introduction to Computer Science | Academic Science Center AS-104A |
| 02:00 PM – 03:15 PM | CAP-450 | System Capstone Pitch | Academic Science Center AS-104A |



## Definition of Done

For a story to be considered Done in this sprint:

- [ ] Code is committed to GitHub repository (LewisCal organization)
- [ ] Code follows team coding standards
- [ ] Feature works in local development environment
- [ ] No console errors
- [ ] Peer reviewed by at least one other team member
- [ ] Acceptance criteria met
- [ ] Mr. Pogue can manually test all features
- Has to be able to be shown in the product environment



## Sprint Checklist

- [ ] Create GitHub organization: `LewisCal`
- [ ] Create repos: `lewiscal-client` and `lewiscal-api`
- [ ] Team clones repos locally
- [ ] LEWIS-001: Display hardcoded schedule (Nana)
- [ ] LEWIS-002: Auto-show today's date (Fernando)
- [ ] LEWIS-003: Sort courses by time (Teju)
- [ ] LEWIS-004: Empty state message (Leland)
- [ ] LEWIS-005: localStorage persistence (Nana)
- [ ] LEWIS-006: Add course form (Fernando)
- [ ] LEWIS-007: Edit & delete course (Teju)
- [ ] Final testing with Mr. Pogue
- [ ] Sprint Review with Mr. Pogue
- [ ] Sprint Retrospective


# Sprint Completion

- [ ] Mr. Pogue can see his 3 courses displayed correctly
- [ ] Courses are sorted by time (9:30 AM → 11:00 AM → 2:00 PM)
- [ ] Today's date is shown automatically
- [ ] Mr. Pogue can add a new course
- [ ] Mr. Pogue can edit any course
- [ ] Mr. Pogue can delete any course
- [ ] Data persists after page refresh
- [ ] Empty state shows when no courses exist
- [ ] No errors in browser console