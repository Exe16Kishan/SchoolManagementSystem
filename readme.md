# School Management System

A simple **School Management System** built to learn and practice **Low-Level Design (LLD)** concepts through a real-world project.

The goal of this project is to understand how to identify entities, define their responsibilities, and design relationships between different classes.

## Project Goal

This project is being built as part of my **LLD learning journey**.

Instead of only learning LLD concepts theoretically, I am trying to understand them by building a complete project step by step.

## Main Entities

The initial system contains the following entities:

* **School**
* **Class**
* **Student**
* **Teacher**
* **Subject**
* **Attendance**
* **Exam**
* **Result**

## Basic Structure

### School

A school can have:

* Multiple classes
* Multiple teachers
* Multiple students
* Multiple subjects

### Class

A class can have:

* Class name/number
* Students
* Teachers
* Subjects

Example:

```text
Class 10
 ├── Students
 │    ├── Student 1
 │    ├── Student 2
 │    └── Student 3
 │
 ├── Teachers
 │    ├── Teacher 1
 │    └── Teacher 2
 │
 └── Subjects
      ├── Mathematics
      ├── Science
      └── English
```

### Student

A student can have:

* Student ID
* Name
* Age
* Class
* Attendance
* Exam results

### Teacher

A teacher can have:

* Teacher ID
* Name
* Subjects
* Classes they teach

### Subject

A subject can have:

* Subject ID
* Subject name
* Teacher
* Classes

## Relationships

The basic relationships are:

```text
School
  |
  ├── Classes
  |     |
  |     ├── Students
  |     ├── Teachers
  |     └── Subjects
  |
  ├── Teachers
  |
  └── Students
```

## LLD Concepts Covered

While building this project, I will explore concepts such as:

* Classes and Objects
* Encapsulation
* Abstraction
* Inheritance
* Interfaces
* Composition
* Aggregation
* Association
* SOLID Principles
* Design Patterns
* Separation of Responsibilities

## Project Approach

The project will be developed step by step.

### Phase 1 — Identify Entities

Understand the requirements and identify the main classes.

### Phase 2 — Define Relationships

Understand how classes interact with each other.

### Phase 3 — Implement Classes

Create the classes and their responsibilities.

### Phase 4 — Add Business Logic

Add operations such as:

* Add student
* Remove student
* Add teacher
* Assign teacher to class
* Add subject
* Enroll student
* Mark attendance
* Create exam
* Generate result

### Phase 5 — Improve the Design

As the project grows, apply:

* SOLID principles
* Design patterns
* Better separation of responsibilities
* Extensible architecture

## Tech Stack

* TypeScript
* Node.js

## Purpose

This project is mainly for **learning and practicing LLD by building a real-world system from scratch**.

The design will evolve as I learn new LLD concepts and identify better ways to structure the system.
