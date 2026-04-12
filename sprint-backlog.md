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
| LEWIS-001 | As a user, I want to import my schedule from an ICS URL so that I can subscribe to live updates. | 10 | 5 | N | To Do | Nana |
| LEWIS-002 | As a user, I want the app to host my schedule as a unique ICS URL so that I can subscribe in Google/Apple Calendar. | 10 | 5 | N | To Do | Teju |
| LEWIS-003 | As a user, I want my schedule data to persist so that I don't have to re-enter courses every time. | 10 | 5 | N | To Do | Leland |
| LEWIS-004 | As a developer, I want to set up Firebase Firestore so that we can store user schedule data. | 9 | 3 | Y | In Progrss | Fernando |
| LEWIS-008 | As a user, I want to see an empty state message when I have no classes today so that I know the web app is working. | 8 | 2 | N | To Do | Teju |
| LEWIS-009 | As a user, I want to see an about page so I can contact developers to resolve any issues. | 8 | 2 | N | In Progress | Fernando |
| LEWIS-010 | As a user, I want to see an error message when an ICS file fails to load so that I understand what went wrong. | 7 | 2 | N | To Do | Fernando |

**Total: 24 SP** 

---


---

## Definition of Done

- [ ] Code reviewed and merged
- [ ] ICS import works (URL or file parsing)
- [ ] Today's schedule displays correctly
- [ ] Courses sorted by start time
- [ ] Firebase setup is connected and working
- [ ] Empty state message displays correctly
- [ ] About page is accessible and displays information
- [ ] Error handling displays appropriate messages
- [ ] Product Owner accepts story
